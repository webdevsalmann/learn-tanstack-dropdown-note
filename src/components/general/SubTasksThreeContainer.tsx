import { useGetSubTasksThreeByTaskId } from "@/hooks/useTodosQueriesAndMutations";
import SubTasksThree from "./SubTasksThree";


export default function SubTasksThreeContainer({ subTaskTwoId }: { subTaskTwoId: any }) {
    const { data: subTaskThree, isError, isSuccess, isPending } = useGetSubTasksThreeByTaskId(subTaskTwoId);

    return subTaskThree?.data && subTaskThree.data[0] && subTaskThree?.data?.map((subTaskTwo: any) => <SubTasksThree key={subTaskTwo.id} subTaskThree={subTaskTwo} />)
  }
  