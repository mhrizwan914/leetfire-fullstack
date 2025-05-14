// Utils
import { api_error } from "../utils/index.js";

// IP records
const request_counts = {};
const request_logs = {};

// Settings
const WINDOW_SIZE_IN_MINUTES = 1;
const WINDOW_SIZE_IN_SECONDS = 60;
const MAX_REQUESTS = 5;

// Fixed Window
// export default function rate_limit(req, res, next) {
//   const ip = req.ip;
//   const current_time = Date.now();
//   if (!request_counts[ip]) {
//     request_counts[ip] = {
//       count: 1,
//       start_time: current_time,
//     };
//     next();
//   } else {
//     const time_passed = current_time - request_counts[ip].start_time;
//     if (time_passed < WINDOW_SIZE_IN_MINUTES * 60 * 1000) {
//       if (request_counts[ip].count < MAX_REQUESTS) {
//         request_counts[ip].count += 1;
//         next();
//       } else {
//         throw new api_error(429, "Too many requests. Please try again later.");
//       }
//     } else {
//       request_counts[ip].count = 1;
//       request_counts[ip].start_time = current_time;
//       next();
//     }
//   }
// }

// Sliding window
export default function rate_limit(req, res, next) {
  const ip = req.ip;
  const current_time = Date.now();

  if (!request_logs[ip]) {
    request_logs[ip] = [];
  }

  request_logs[ip] = request_logs[ip].filter(
    (e) => current_time - e <= WINDOW_SIZE_IN_SECONDS * 1000,
  );

  if (request_logs[ip].length >= MAX_REQUESTS) {
    throw new api_error(429, "Too many requests. Please try again later.");
  }

  request_logs[ip].push(current_time);

  next();
}

// Test algorithm
// function simulate_request(ip) {
//   const current_time = Date.now();

//   if (!request_logs[ip]) {
//     request_logs[ip] = [];
//   }

//   request_logs[ip] = request_logs[ip].filter(
//     (e) => current_time - e <= WINDOW_SIZE_IN_SECONDS * 1000,
//   );

//   if (request_logs[ip].length >= MAX_REQUESTS) {
//     console.log(`❌ REJECTED [${ip}] at ${new Date(current_time).toLocaleTimeString()}`);
//   } else {
//     request_logs[ip].push(current_time);
//     console.log(`✅ ALLOWED  [${ip}] at ${new Date(current_time).toLocaleTimeString()}`);
//   }
// }

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     simulate_request("192.168.1.1");
//   }, i * 1000);
// }

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     simulate_request("10.0.0.1");
//   }, i * 1000);
// }
