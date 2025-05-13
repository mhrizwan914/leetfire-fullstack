// App
import app from "./app.js";
// Middleware
import error_middleware from "./middlewares/error.middleware.js";
// Utils
import { api_error } from "./utils/index.js";
// All routes
import health_check_route from "./routes/health_check.route.js";
import user_routes from "./routes/user.route.js";
import auth_routes from "./routes/auth.route.js";
import problem_routes from "./routes/problem.route.js";
import problem_execution_routes from "./routes/problem_execution.route.js";
import submission_routes from "./routes/submission.route.js";
import playlist_routes from "./routes/playlist.route.js";

// Assign port
const port = process.env.PORT || 8000;

// All routes
app.use("/api/v1/health-check", health_check_route);
app.use("/api/v1/user", user_routes);
app.use("/api/v1/auth", auth_routes);
app.use("/api/v1/problem", problem_routes);
app.use("/api/v1/problem-execution", problem_execution_routes);
app.use("/api/v1/submission", submission_routes);
app.use("/api/v1/playlist", playlist_routes);

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
