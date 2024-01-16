"use client"
import TasksContainer from "@/components/general/TasksContainer";
import Header from "@/components/layouts/Header";

export default function Content() {
    return (
        <div className="relative w-full h-full rounded flex flex-col overflow-scroll z-0">
            <Header />
            <TasksContainer />
        </div>
    )
}
