import { Projects } from "../db/index.js";

export const filterByCategory = async (category) => {
    const projects = await Projects.find({ category });
    let filteredSpecializations = [];
    for (let i = 0; i < projects.length; i++) {
        if (!filteredSpecializations.includes(projects[i].specialization)) {
            filteredSpecializations.push(projects[i].specialization);
        }
    }

    return filteredSpecializations;
}

export const filterBySpecialization = async (specialization) => {

    const projects = await Projects.find({ specialization });

    let filteredTopics = [];
    for (let i = 0; i < projects.length; i++) {
        if (!filteredTopics.includes(projects[i].topicArea)) filteredTopics.push(projects[i].topicArea);
    }

    return filteredTopics;
};

export const filterByTopicArea = async (specialization, topicArea) => {
    const projects = await Projects.find({ topicArea, specialization });
    return projects;
}  

export const getDistinctSpecilaziton = async (specialization, topicArea) => {
    const projects = await Projects.find({ topicArea, specialization });
    return projects;
}  