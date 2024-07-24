const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");


const ApiError = require("./server/utils/apiError");
const globalError = require("./server/middlewares/errorMiddleware");
const dbConnection = require("./server/database/dbConnection");
// Routes
const mountRoutes = require("./server/routes");
const { webhookCheckout } = require("./server/controllers/orderController");

dotenv.config({ path: "config.env" });

// database connection
dbConnection();

// express app
const app = express();

// Enable other domains to access your application
app.use(cors());
app.options("*", cors());

// compress all responses
app.use(compression());

// Checkout webhook
app.post(
  "/webhook-checkout",
  express.raw({ type: "application/json" }),
  webhookCheckout
);

// Middlewares
app.use(express.json({ limit: "20kb" }));
app.use(express.static(path.join(__dirname, "uploads")));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`mode: ${process.env.NODE_ENV}`);
}

// Limit each IP to 50 requests per `window` (per 5 minutes)
const NUM_OF_MINUTES = 5, FROM_MICRO_TO_SECOND = 1000, FROM_SECOND_TO_MINUTES = 60;
const NUM_OF_REQS = 50;
const MESSAGE = "Too many accounts created, please try again after an hour";

const limiter = rateLimit({
  windowMs: NUM_OF_MINUTES * FROM_MICRO_TO_SECOND * FROM_SECOND_TO_MINUTES, // 5 minutes
  max: NUM_OF_REQS, 
  message: MESSAGE,
});


// Apply the rate limiting middleware to all requests
app.use("/api", limiter);

// Middleware to protect against HTTP Parameter Pollution attacks
app.use(
  hpp({
    whitelist: [
      "price",
      "sold",
      "quantity",
      "ratingsAverage",
      "ratingsQuantity",
    ],
  })
);

// Mount Routes
mountRoutes(app);

app.all("*", (req, res, next) => {
  next(new ApiError(`Can't find this URL: ${req.originalUrl}`, 400));
});

// Global error handling middleware for express
app.use(globalError);

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

// Handle rejection outside express like databse connection ...etc
process.on("unhandledRejection", (err) => {
  console.error(`UnhandledRejection Errors: ${err.name} | ${err.message}`);
  // handle bending requests Then shut down
  server.close(() => {
    console.error(`Shutting down....`);
    process.exit(1);
  });
});
