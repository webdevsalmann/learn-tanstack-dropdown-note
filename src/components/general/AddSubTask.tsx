import { Plus, X } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { useCreateSubTask } from "@/hooks/useTodosQueriesAndMutations";
import { toast } from "sonner";

export default function AddSubTask({ taskId }: { taskId: any }) {
    const [displayAddSubTask, setDisplayAddSubTask] = useState(false)

    // QUERY AND MUTATION
    const queryClient = useQueryClient();
    const [subTask, setSubTask] = useState('');
    const { mutateAsync: createNewSubTask, isPending } = useCreateSubTask();

    // CREATE NEW LIST
    const handleAddNewSubTask = async () => {
        try {
            await createNewSubTask({
                id: Date.now(),
                subTask,
                completed: false,
                taskId,
            });
            queryClient.invalidateQueries({ queryKey: ['sub-tasks', taskId] });
            toast.success("New sub task added successfully");
        } catch (error) {
            toast.error('Something went wrong while creating new sub task');
            console.log("Error: While Creating new sub Task~ ", error);
        }
    }

    return displayAddSubTask
        ? <div className="relative my-1 bg-background flex items-center space-x-2 rounded z-0">
            <div className="absolute -top-2 left-5 h-8 w-[2px] bg-muted rounded z-0"></div>

            <div className="h-5 transition-all" onClick={() => setDisplayAddSubTask(false)}>
                <X className="ml-1 relative p-[2px] h-5 w-5 bg-primary hover:bg-ring text-neutral-900 rounded-full cursor-pointer z-10 transition-all" />
            </div>
            <Input className="h-8 z-10" type="text" placeholder="New Tasks" value={subTask} onChange={(e) => setSubTask(e.target.value)} />
            <Button className="h-8" type="submit" onClick={handleAddNewSubTask} disabled={isPending}>Add</Button>
        </div>

        : <div className={`relative w-full h-0 group-hover:h-5 group-hover:my-2 transition-all overflow-hidden`} onClick={() => setDisplayAddSubTask(true)}>

            <div className={`absolute bottom-2 left-5 h-full w-[2px] bg-muted rounded z-0`}></div>
            <div className={`absolute bottom-2 left-5 h-[2px] w-[calc(50%_-_20px)] bg-muted rounded z-0`}></div>

            <Plus className="relative p-[2px] mx-auto h-5 w-5 bg-primary hover:bg-ring text-neutral-900 rounded-full cursor-pointer z-10 transition-all" />
        </div>
}
