import { Router } from "express";
import {
  filterByCategory,
  filterBySpecialization,
  filterByTopicArea,
} from "../utils/filter.js";
import { paginate } from "../utils/pagination.js";
import { Projects } from "../db/index.js";
import { ObjectId } from "mongodb";

export const filterRouter = Router();

filterRouter.get("/categories", async (req, res) => {
  try {
    const projects = await Projects.find({});
    let categories = [];
    for (let i = 0; i < projects.length; i++) {
      if (!categories.includes(projects[i].category)) {
        categories.push(projects[i].category);
      }
    }
    return res.json(categories);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

filterRouter.get("/specializations", async (req, res) => {
  try {
    const { category } = req.query;
    const filteredSpecializations = await filterByCategory(category);
    return res.json(filteredSpecializations);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

filterRouter.get("/topics", async (req, res) => {
  try {
    const { specialization } = req.query;
    const filteredTopics = await filterBySpecialization(specialization);
    return res.json(filteredTopics);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

// get all projects in a specific specialization
filterRouter.get("/specialization/projects", async (req, res) => {
  try {
    const { specialization, page } = req.query;
    const filteredProjects = await Projects.find({ specialization });
    const paginatedProjects = paginate(filteredProjects, page);
    return res.json(paginatedProjects);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

filterRouter.get("/projectById/:id", async (req, res) => {
  try {
    console.log(req.params);
    const stringId = req.params.id;
    console.log("stringId: " + stringId);
    const id = new ObjectId(stringId);
    const project = await Projects.findOne({ _id: id });
    const relatedProjects = await Projects.find({
      topicArea: project.topicArea,
      specialization: project.specialization,
    });
    return res.json({ project, relatedProjects: relatedProjects });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

filterRouter.get("/projects", async (req, res) => {
  try {
    const { specialization, topic, page } = req.query;
    const projectVal = Projects.find({ topicArea: topic, specialization })
      .skip((page - 1) * 6)
      .limit(6);
    const countVal = Projects.countDocuments({
      topicArea: topic,
      specialization,
    });

    const [projects, count] = await Promise.all({ projectVal, countVal });
    console.log("projects and ocunt is:", count, projects);

    const paginatedProjects = paginate(filteredProjects, page);
    return res.json({ projects: projects, page: page, totalCount: count });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});
filterRouter.get("/relatedTopics", async (req, res) => {
  try {
    const { specialization, topic, page } = req.query;
    const projectVal = Projects.find({ topicArea: topic, specialization })
      .skip((page - 1) * 6)
      .limit(6);
    const countVal = Projects.countDocuments({
      topicArea: topic,
      specialization,
    });

    const [projects, count] = await Promise.all({ projectVal, countVal });
    console.log("projects and ocunt is:", count, projects);

    const paginatedProjects = paginate(filteredProjects, page);
    return res.json({ projects: projects, page: page, totalCount: count });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

filterRouter.get("/allprojects", async (req, res) => {
  try {
    const { page, specialization, topic } = req.query;
    const query = {};
    if (!!specialization) {
      console.log("specialization exists", specialization);
    }
    if (!!topic) {
      console.log("topic exists", topic);
    }
    const projects = await Projects.find({});
    const paginatedProjects = paginate(projects, page);
    return res.json(paginatedProjects);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

filterRouter.get("/filterbysearch", async (req, res) => {
  try {
    // const { search, page } = req.query;
    const { search } = req.query;
    const projects = await Projects.find({});
    const filteredProjects = projects.filter((project) => {
      return project.title.toLowerCase().includes(search.toLowerCase());
    });
    // const paginatedProjects = paginate(filteredProjects, page);
    // return res.json(paginatedProjects);
    return res.json({ filteredProjects, isFirstPage: true, isLastPage: true });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

filterRouter.get("/distinctSpecialization", async (req, res) => {
  try {
    const distinctValues = await Projects.find().distinct("specialization");
    console.log("value of distinctValues", distinctValues);

    return res.json({ specialization: distinctValues });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

filterRouter.get("/randomProjects", async (req, res) => {
  try {
    const countDocs = await Projects.countDocuments();
    const randomValue = Math.ceil(Math.random() * (countDocs - 6 - 1) + 1);

    console.log("value of randomMathValue", randomValue);
    console.log("value of distinctValues", countDocs);
    const randomProjects = await Projects.find().skip(randomValue).limit(6);
    return res.json({
      numberOfDocs: countDocs,
      projects: randomProjects,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});
