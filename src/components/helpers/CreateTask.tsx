import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateTask } from "@/hooks/useTodosQueriesAndMutations";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";


export default function CreateTask({ listId }: { listId: any }) {
    const queryClient = useQueryClient();
    const [title, setTitle] = useState('');
    const { mutateAsync: createNewTask, isPending } = useCreateTask();


    // CREATE NEW LIST
    const handleAddNewTask = async () => {
        try {
            await createNewTask({
                id: Date.now(),
                title,
                completed: false,
                listId,
            });
            queryClient.invalidateQueries({ queryKey: ['tasks', listId] });
            toast.success("New task added successfully")
        } catch (error) {
            toast.error('Something went wrong while creating the task')
            console.log("Error: While Creating new Task~ ", error);
        }
    }

    return (
        <>
            <Input type="text" placeholder="New Tasks" value={title} onChange={(e) => setTitle(e.target.value)} />
            <Button type="submit" onClick={handleAddNewTask} disabled={isPending}>Add</Button>
        </>
    )
}
