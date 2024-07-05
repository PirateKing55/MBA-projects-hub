"use client"

import { FilterProject } from "@/components/FilterProject";
import { Project } from "@/components/Project";
import { SearchBar } from "@/components/SearchBar";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { BACKEND_URL } from "@/app/config/config";
import axios from "axios";
import { Pagination } from "@/components/Pagination";

export default function Projects() {
    const params = useParams();
    const router = useRouter();
    const { category, specialization, topic, pageNumber } = params;

    const [specializations, setSpecializations] = useState([]);
    const [projects, setProjects] = useState([]);
    const [topics, setTopics] = useState([]);
    const [isFirstPage, setIsFirstPage] = useState(false);
    const [isLastPage, setIsLastPage] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const specializations = await axios.get(`${BACKEND_URL}/specializations/?category=MBA`);
            setSpecializations(specializations.data);
        };
        fetchData();
    }, []);



    useEffect(() => {
        const fetchData = async () => {
            if (category === 'all' && specialization === 'all' && topic === 'all') {
                const projects = await axios.get(`${BACKEND_URL}/allprojects/?page=${pageNumber}`);
                setProjects(projects.data.paginatedArray);
                setIsFirstPage(projects.data.isFirstPage);
                setIsLastPage(projects.data.isLastPage);
                return;
            }
            const topics = await axios.get(`${BACKEND_URL}/topics/?specialization=${specialization}`);
            setTopics(topics.data);
            if (topic === 'all') {
                const projects = await axios.get(`${BACKEND_URL}/specialization/projects/?specialization=${specialization}&page=${pageNumber}`);
                setProjects(projects.data.paginatedArray);
                setIsFirstPage(projects.data.isFirstPage);
                setIsLastPage(projects.data.isLastPage);
            } else {
                const projects = await axios.get(`${BACKEND_URL}/projects/?specialization=${specialization}&topic=${topic}&page=${pageNumber}`);
                setProjects(projects.data.paginatedArray);
                setIsFirstPage(projects.data.isFirstPage);
                setIsLastPage(projects.data.isLastPage);

            }
        };
        fetchData();
    }, [specialization, topic, pageNumber]);

    const handleSpecializationClick = async (item) => {
        router.push(`/projects/MBA/${item}/all/1`);
    }

    const handleTopicClick = async (item) => {
        router.push(`/projects/MBA/${specialization}/${item}/1`);
    }

    const handleSearch = async (value) => {
        const projects = await axios.get(`${BACKEND_URL}/filterbysearch/?search=${value}`);
        setProjects(projects.data.filteredProjects);
        setIsFirstPage(projects.data.isFirstPage);
        setIsLastPage(projects.data.isLastPage);
    };

    return (
        <main className="w-11/12 md:w-10/12 lg:w-5/6 m-auto flex flex-col pt-24">
            <FilterProject title={"specialization"} array={specializations} onclick={handleSpecializationClick} specialization={specialization.replace(/%20/g, " ")} />
            {(topics.length !== 0) && <FilterProject title={"topic area"} array={topics} onclick={handleTopicClick} topic={topic.replace(/%20/g, " ")} />}
            <SearchBar onchange={handleSearch} />
            <h2 className="font-semibold text-2xl text-slate-500 text-center mt-10">
                Projects:
            </h2>
            {(projects.length === 0) ? <h2 className="font-semibold text-xl text-slate-500 text-center my-10">No projects found</h2> :
                <div className="flex gap-5 w-full flex-wrap py-5">
                    {projects.map((project) => (
                        <Project key={project.id} project={project} />
                    ))}
                </div>}

            <Pagination pageNumber={pageNumber} category={category} specialization={specialization} topic={topic} isFirstPage={isFirstPage} isLastPage={isLastPage} />

        </main>
    );
};