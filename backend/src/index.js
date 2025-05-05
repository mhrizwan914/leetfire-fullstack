// App
import app from "./app.js";
// Middleware
import error_middleware from "./middlewares/error.middleware.js";
// All routes
import user_routes from "./routes/user.route.js";
import auth_routes from "./routes/auth.route.js";

// Assign port
const port = process.env.PORT || 8000;

// All routes
app.use("/api/v1/user", user_routes);
app.use("/api/v1/auth", auth_routes);

// Error middleware
app.use(error_middleware);

// Start server
app.listen(port, function () {
  console.log(`Server is running port: ${port} 😊`);
});
