// Utils
import { api_response, async_handler, uptime_formater } from "../utils/index.js";

export const health_check = async_handler(async (req, res) => {
  return res.status(200).json(
    new api_response(
      200,
      {
        uptime: uptime_formater(process.uptime()),
        timestamp: new Date(),
        version: "1.0.0",
      },
      "Server is running",
    ),
  );
});
