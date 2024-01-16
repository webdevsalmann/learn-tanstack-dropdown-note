import { useGetSubTasksTwoByTaskId } from "@/hooks/useTodosQueriesAndMutations";
import SubTasksTwo from "./SubTasksTwo";

export default function SubTasksTwoContainer({ subTaskId }: { subTaskId: any }) {
  const { data: subTasksTwo, isError, isSuccess, isPending } = useGetSubTasksTwoByTaskId(subTaskId);

  return subTasksTwo?.data && subTasksTwo.data[0] && subTasksTwo?.data?.map((subTaskTwo: any) => <SubTasksTwo key={subTaskTwo.id} subTaskTwo={subTaskTwo} />)
}
