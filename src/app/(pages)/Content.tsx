"use client"
import TasksContainer from "@/components/general/TasksContainer";
import Header from "@/components/layouts/Header";
import { Button } from "@/components/ui/button";
import { PanelRightClose} from "lucide-react";

export default function Content({ sidebarOpen, toggleSidebar }: { sidebarOpen: boolean, toggleSidebar: any }) {
    return (
        <div className="relative w-full h-full rounded flex flex-col overflow-scroll z-0">
            {!sidebarOpen && <Button variant={"outline"} className="absolute top-3 left-3 p-2 w-fit aspect-square self-end" onClick={toggleSidebar}><PanelRightClose /></Button>}
            <Header />
            <TasksContainer />
        </div>
    )
}
