import useData from "@/context/DataContext";
import Tasks from "./Tasks";
import { useGetTasksByListId } from "@/hooks/useTodosQueriesAndMutations";
import GenerateSkeletons from "../helpers/GenerateSkeletons";
import { Skeleton } from "../ui/skeleton";
import CreateTask from "../helpers/CreateTask";

const TaskComponent = () => (
    <div className="px-3 mt-2 flex gap-2 items-center rounded">
        <Skeleton className="h-5 w-5" />
        <Skeleton className="h-10 w-full" />
    </div>
)

export default function TasksContainer() {
    const { listId, listName }: any = useData();

    const { data: tasks, isError, isSuccess, isPending } = useGetTasksByListId(listId);
    return (
        <div className="p-4 pb-0 flex bgmuted flex-col flex-1 overflow-scroll">
            <h2 className="w-1/2 mx-auto text-center">
                {isPending
                    ? <Skeleton className="h-8 " />
                    : !listName ? "List-Name" : listName}
            </h2>

            {/* DISPLAY ALL THE RELATED TASKS  */}
            {isPending ? <GenerateSkeletons count={9} component={<TaskComponent />} />
                : <div className="flex flex-col gap-1 overflow-y-scroll flex-1">
                    {tasks && tasks.data && tasks.data.map((task: any) => (
                        <Tasks key={task.id + "tasks"} task={task} />
                    ))}
                </div>
            }

            {/* CREATE NEW TASK  */}
            <div className="p-4 mt-4 bg-background flex w-full items-center space-x-2 rounded">
                {tasks &&
                    <CreateTask listId={listId} />
                }
            </div>
        </div>
    );
}
