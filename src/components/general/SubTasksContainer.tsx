import { useGetSubTasksByTaskId } from "@/hooks/useTodosQueriesAndMutations";
import SubTasks from "./SubTasks";

export default function SubTasksContainer({ taskId }: { taskId: any }) {
    const { data: subTasks, isError, isSuccess, isPending } = useGetSubTasksByTaskId(taskId);

    return subTasks?.data && subTasks.data[0] && subTasks?.data?.map((subTask: any) => <SubTasks key={subTask.id} subTask={subTask} />)
}
