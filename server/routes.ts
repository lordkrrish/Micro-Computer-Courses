import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get(api.courses.list.path, async (req, res) => {
    const courses = await storage.getCourses();
    res.json(courses);
  });

  // Seed data
  const existingCourses = await storage.getCourses();
  if (existingCourses.length === 0) {
    await storage.createCourse({ name: "ADCA", description: "Advance Diploma in Computer Application" });
    await storage.createCourse({ name: "DCA", description: "Diploma in Computer Application" });
    await storage.createCourse({ name: "HTML", description: "HyperText Markup Language" });
    await storage.createCourse({ name: "HARDWARE", description: "Computer Hardware Networking" });
  }

  return httpServer;
}
