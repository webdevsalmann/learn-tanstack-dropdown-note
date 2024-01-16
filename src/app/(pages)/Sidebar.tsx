import ListsContainer from "@/components/general/ListsContainer";
import CreateList from "@/components/helpers/CreateList"
import { Button } from "@/components/ui/button";
import { PanelRightOpen } from "lucide-react";

export default function Sidebar() {

    return (
        <div className="fixed sm:relative bg-background w-64 h-full z-10">
            <div className="relative p-1 w-64 h-full flex flex-col border-r rounded">
                <Button variant={"outline"} className="my-2 p-2 w-fit aspect-square self-end"><PanelRightOpen /></Button>
                <div className="flex flex-col gap-[2px] flex-1 overflow-y-scroll">
                    <ListsContainer />
                </div>
                <CreateList />
            </div>
        </div>
    )
}