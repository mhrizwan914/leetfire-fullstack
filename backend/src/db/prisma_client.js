// Prisma client
import { PrismaClient } from "../generated/prisma/index.js";

const global_for_prisma = globalThis;

export default db = global_for_prisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global_for_prisma.prisma = db;
