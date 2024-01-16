import { Plus, X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useCreateSubTaskThree, useCreateSubTaskTwo } from "@/hooks/useTodosQueriesAndMutations";

export default function AddSubTaskThree({ subTaskTwoId }: { subTaskTwoId: any }) {
    const [displayAddSubTaskThree, setDisplayAddSubTaskThree] = useState(false)

    // QUERY AND MUTATION
    const queryClient = useQueryClient();
    const [subTaskThree, setSubTaskThree] = useState('');
    const { mutateAsync: createNewSubTask, isPending } = useCreateSubTaskThree();

    // CREATE NEW LIST
    const handleAddNewSubTaskTwo = async () => {
        try {
            await createNewSubTask({
                id: Date.now(),
                subTaskThree,
                completed: false,
                subTaskTwoId,
            });
            queryClient.invalidateQueries({ queryKey: ['sub-tasks-three', subTaskTwoId] });
            toast.success("New sub task added successfully");
        } catch (error) {
            toast.error('Something went wrong while creating new sub task');
            console.log("Error: While Creating new sub Task~ ", error);
        }
    }

    return displayAddSubTaskThree
        ? <div className="relative my-2 bg-background flex items-center space-x-2 rounded z-0">
            <div className="absolute -top-2 left-5 h-8 w-[2px] bg-muted rounded z-0"></div>

            <div className="h-5 transition-all" onClick={() => setDisplayAddSubTaskThree(false)}>
                <X className="ml-1 relative p-[2px] h-5 w-5 bg-primary hover:bg-ring text-neutral-900 rounded-full cursor-pointer z-10 transition-all" />
            </div>
            <Input className="h-8 z-10" type="text" placeholder="New Tasks" value={subTaskThree} onChange={(e) => setSubTaskThree(e.target.value)} />
            <Button className="h-8" type="submit" onClick={handleAddNewSubTaskTwo} disabled={isPending}>
                Add
            </Button>
        </div>

        : <div className={`relative block w-full h-0 group-hover:h-5 group-hover:my-2 transition-all overflow-hidden`} onClick={() => setDisplayAddSubTaskThree(true)}>

            <div className={`absolute bottom-2 left-5 h-full w-[2px] bg-muted rounded z-0`}></div>
            <div className={`absolute bottom-2 left-5 h-[2px] w-[calc(50%_-_20px)] bg-muted rounded z-0`}></div>

            <Plus className="relative p-[2px] mx-auto h-5 w-5 bg-primary hover:bg-ring text-neutral-900 rounded-full cursor-pointer z-10 transition-all" />
        </div>
}
