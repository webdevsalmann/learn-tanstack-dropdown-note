"use client"
import useData from "@/context/DataContext";
import { AlignJustify } from "lucide-react";
import DeleteList from "@/components/helpers/DeleteList";


export default function Lists({ list }: { list: any }) {
    const { setListId, setListName }: any = useData();

    return (
        <div key={list.id}
            className="py-2 px-3 hover:bg-muted text-sm flex gap-2 justify-between items-center rounded-sm cursor-pointer"
            onClick={() => { setListId(list.id); setListName(list.name) }}>
            <div className="flex items-center gap-2">
                <div><AlignJustify className="h-[14px] w-[14px] aspect-square" /></div>
                <span className="break-all">{list.name}</span>
            </div>
            <DeleteList listId={list.id} />
        </div>
    )
}