"use client"

import { ProjectDetail } from "@/components/ProjectDetail";
import { BACKEND_URL } from "@/app/config/config";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Project() {
    const { id } = useParams();
    const [project, setProject] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const project = await axios.get(`${BACKEND_URL}/projectById?id=${id}`);
            setProject(project.data);
        };
        fetchData();
    }, []);

    return (
        <div className="pt-32">
            <ProjectDetail project={project} />
        </div>
    );
}