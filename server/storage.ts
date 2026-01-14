import { courses, type Course, type InsertCourse } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getCourses(): Promise<Course[]>;
  createCourse(course: InsertCourse): Promise<Course>;
}

export class DatabaseStorage implements IStorage {
  async getCourses(): Promise<Course[]> {
    return await db.select().from(courses);
  }

  async createCourse(insertCourse: InsertCourse): Promise<Course> {
    const [course] = await db.insert(courses).values(insertCourse).returning();
    return course;
  }
}

export const storage = new DatabaseStorage();
