import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Database routes for courses are no longer used since courses are static
  app.get(api.courses.list.path, async (req, res) => {
    res.json([]);
  });

  return httpServer;
}
