// App
import app from "./app.js";
// Middleware
import error_middleware from "./middlewares/error.middleware.js";
// Utils
import { api_error } from "./utils/index.js";
// All routes
import user_routes from "./routes/user.route.js";
import auth_routes from "./routes/auth.route.js";
import problem_routes from "./routes/problem.route.js";
import problem_execution from "./routes/problem_execution.route.js";

// Assign port
const port = process.env.PORT || 8000;

// All routes
app.use("/api/v1/user", user_routes);
app.use("/api/v1/auth", auth_routes);
app.use("/api/v1/problem", problem_routes);
app.use("/api/v1/problem-execution", problem_execution);

// Not found route
app.use((req, res, next) => {
  next(new api_error(404, `Route not found: ${req.originalUrl}`));
});

// Error middleware
app.use(error_middleware);

// Start server
app.listen(port, function () {
  console.log(`Server is running port: ${port} 😊`);
});
