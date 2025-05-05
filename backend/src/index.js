// App
import app from "./app.js";
// Middleware
import error_middleware from "./middlewares/error.middleware.js";
// All routes

// Assign port
const port = process.env.PORT || 8000;

// All routes

// Error middleware
app.use(error_middleware);

// Start server
app.listen(port, function () {
  console.log(`Server is running port: ${port} 😊`);
});
