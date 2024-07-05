import { config } from "dotenv";
import mongoose from "mongoose";

config();

const dbUrl = process.env.DATABASE_URL;

mongoose.connect(dbUrl);

const projectSchema = new mongoose.Schema({
    projectId: Number,
    specialization: String,
    topicArea: String,
    title: String,
    pages: Number,
    cost: Number,
    deliveryTime: String,
});

export const Projects = mongoose.model("Projects", projectSchema);