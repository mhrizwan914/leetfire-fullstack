// Utils
import { async_handler, api_response, api_error } from "../utils/index.js";
// DB
import db from "../db/prisma_client.js";

// Create
export const playlist_create = async_handler(async (req, res) => {
  // Get data
  const { title, description } = req.body;
  // Get user
  const { id: user_id } = req.user;
  // Validate data
  if (!title.trim()) {
    throw new api_error(400, "Title is required");
  }
  // Create playlist
  const playlist = await db.playlist.create({
    data: {
      title,
      description,
      created_by: user_id,
    },
  });
  // Send response
  return res
    .status(201)
    .json(new api_response(201, { playlist }, "Playlist is created successfully"));
});

// Add List
export const playlist_add_problem = async_handler(async (req, res) => {
  // Get playlist id
  const { id: playlist_id } = req.params;
  // Get problem id
  const { problem_id } = req.body;
  // check if problem id is not passed
  if (!problem_id?.trim()) {
    throw new api_error(404, "Problem is required for adding into list");
  }
  // Save probelm in db
  const playlist = await db.problem_Lists.create({
    data: {
      playlist_id,
      problem_id,
    },
  });
  // Send response
  return res.status(200).json(new api_response(200, { playlist }, "Problem is added succeddfully"));
});

// Remove List
export const playlist_remove_problem = async_handler(async (req, res) => {
  // Get playlist id
  const { id: playlist_id } = req.params;
  // Get problem id
  const { problem_id } = req.body;
  // check if problem id is not passed
  if (!problem_id?.trim()) {
    throw new api_error(404, "Problem is required for removing into list");
  }
  // Remove probelm in db
  await db.problem_Lists.delete({
    where: {
      playlist_id_problem_id: {
        playlist_id,
        problem_id,
      },
    },
  });
  // Send response
  return res.status(204).json(new api_response(204, {}, "Problem is removed succeddfully"));
});

// All
export const playlist_all = async_handler(async (req, res) => {
  // Get user
  const { id: user_id } = req.user;
  // Create playlist
  const playlists = await db.playlist.findMany({
    where: {
      created_by: user_id,
    },
    include: {
      problems: {
        include: {
          problem: true,
        },
      },
    },
  });
  // Send response
  return res
    .status(200)
    .json(new api_response(200, { playlists }, "All playlists found successfully"));
});

// Single
export const playlist_by_id = async_handler(async (req, res) => {
  // Get playlist id
  const { id: playlist_id } = req.params;
  // Get user
  const { id: user_id } = req.user;
  // Check playlist is exsist
  const playlist = await db.playlist.findUnique({
    where: {
      id: playlist_id,
      created_by: user_id,
    },
    include: {
      problems: {
        include: {
          problem: true,
        },
      },
    },
  });
  // Check if there is no playlist
  if (playlist?.length === 0 || !playlist) {
    throw new api_error(400, "No playlists found");
  }
  // Send response
  return res.status(200).json(new api_response(200, { playlist }, "Playlists found successfully"));
});

// Update
export const playlist_update = async_handler(async (req, res) => {
  // Get data
  const { title, description } = req.body;
  // Get playlist id
  const { id: playlist_id } = req.params;
  // Validate data
  if (!title.trim()) {
    throw new api_error(400, "Title is required");
  }
  // Update playlist
  const playlist = await db.playlist.update({
    where: {
      id: playlist_id,
    },
    data: {
      title,
      description,
    },
  });
  // Send response
  return res
    .status(201)
    .json(new api_response(201, { playlist }, "Playlist is updated successfully"));
});

// Delete
export const playlist_delete = async_handler(async (req, res) => {
  // Get playlist id
  const { id: playlist_id } = req.params;
  // Delete playlist
  await db.playlist.delete({
    where: {
      id: playlist_id,
    },
  });
  // Send response
  return res.status(201).json(new api_response(201, {}, "Playlist is deleted successfully"));
});
