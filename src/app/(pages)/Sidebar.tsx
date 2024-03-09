import ListsContainer from "@/components/general/ListsContainer";
import CreateList from "@/components/helpers/CreateList"
import { Button } from "@/components/ui/button";
import { PanelRightOpen } from "lucide-react";

export default function Sidebar({ sidebarOpen, toggleSidebar }: { sidebarOpen: boolean, toggleSidebar: any }) {
    return (
        <div className={`fixed sm:relative bg-background h-full z-10 ${sidebarOpen ? 'w-64' : 'w-0'}`}>
            <div className={`relative p-1 h-full flex flex-col rounded ${sidebarOpen ? 'w-64 border-r' : 'w-0'}`}>
                <Button variant={"outline"} className="my-2 p-2 w-fit aspect-square self-end" onClick={toggleSidebar}>
                    <PanelRightOpen />
                </Button>
                <div className="flex flex-col gap-[2px] flex-1 overflow-y-scroll">
                    <ListsContainer />
                </div>
                <CreateList />
            </div>
        </div>
    )
}