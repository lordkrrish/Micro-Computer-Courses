import { courses, type Course, type InsertCourse } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// This file is kept to satisfy imports, but courses are now static in the frontend
export interface IStorage {
  getCourses(): Promise<any[]>;
  createCourse(course: any): Promise<any>;
}

export class DatabaseStorage implements IStorage {
  async getCourses(): Promise<any[]> {
    return [];
  }

  async createCourse(insertCourse: any): Promise<any> {
    return {};
  }
}

export const storage = new DatabaseStorage();
