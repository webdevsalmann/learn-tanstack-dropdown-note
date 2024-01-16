import { Checkbox } from "@/components/ui/checkbox";
import useData from "@/context/DataContext";
import { useToggleTaskCompletion } from "@/hooks/useTodosQueriesAndMutations";
import { useQueryClient } from "@tanstack/react-query";
import AddSubTask from "./AddSubTask";
import SubTasks from "./SubTasks";
import SubTasksContainer from "./SubTasksContainer";

export default function Tasks({ task }: { task: any }) {
    // QUERIES
    const queryClient = useQueryClient();
    const { listId }: any = useData();
    const { mutateAsync: toggleTaskCompletion, isPending } = useToggleTaskCompletion(task.id, !task.completed);

    // COMPLETE SELECTED TASK
    const handleCompleteTask = async () => {
        try {
            await toggleTaskCompletion();
            queryClient.invalidateQueries({ queryKey: ['tasks', listId] });
        } catch (error) {
            console.error("Error: While completing task", error);
        }
    }

    return (
        <div className="relative block transition-all group">
            {/* TASK */}
            <div className="py-2 px-3 flex gap-2 items-center rounded bg-background cursor-pointer z-20">
                <Checkbox id={task.id} checked={task.completed} disabled={isPending} onClick={handleCompleteTask} />
                <label className="w-full cursor-pointer" htmlFor={task.id}>
                    <p className="text-base">{task.title}</p>
                </label>
            </div>

            {/* SUB TASK CONTAINER  */}
            <div className="">
                <SubTasksContainer taskId={task.id} />
                <AddSubTask taskId={task.id} />
            </div>
        </div>
    )
}
