"use client"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useCreateList } from "@/hooks/useTodosQueriesAndMutations";
import { toast } from "sonner";

export default function CreateList() {
    const queryClient = useQueryClient();
    const [name, setName] = useState('')
    const { mutateAsync: createNewList, isPending } = useCreateList();

    // CREATE NEW LIST
    const handleAddNewList = async () => {
        try {
            await createNewList({
                id: Date.now(),
                name,
            }).then(() => queryClient.invalidateQueries({ queryKey: ['lists'] }))
            setName('');
        } catch (error) {
            toast.error("Something went wrong while creating new list.")
            console.error("Error: While Creating List~ ", error)
        }
    }

    return (
        <div className="p-2 bg-background flex w-full items-center space-x-2 rounded">
            <Input type="email" placeholder="New Tasks" value={name} onChange={(e) => setName(e.target.value)} />
            <Button type="submit" onClick={handleAddNewList} disabled={isPending}>Add</Button>
        </div>
    )
}
