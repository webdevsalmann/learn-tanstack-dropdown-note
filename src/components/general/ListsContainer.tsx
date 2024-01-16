"use client"
import useData from "@/context/DataContext";
import { useGetLists } from "@/hooks/useTodosQueriesAndMutations";
import { Skeleton } from "@/components/ui/skeleton"
import GenerateSkeletons from "../helpers/GenerateSkeletons";
import Lists from "./Lists";


export default function ListsContainer() {
    const { setListDatas }: any = useData();

    // TANSTACK QUERY GET ALL LISTS 
    const { data: lists, isPending, isError, isSuccess, refetch } = useGetLists();
    if (isError) {
        return (
            <div>
                <p>Lists couldn&apos;t be loaded. Please try again.</p>
                <button onClick={() => refetch()}>Retry</button>
            </div>
        );
    }
    if (isPending) {
        return <GenerateSkeletons count={14} component={<Skeleton className="w-full min-h-8" />} />
    }
    if (isSuccess)
        setListDatas(lists.data)
    return lists.data[0] && lists?.data?.map((list: any) => (
        <Lists key={list.id} list={list} />
    ))
}