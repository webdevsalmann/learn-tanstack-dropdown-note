import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { toast } from "sonner";
import { useDeleteList } from "@/hooks/useTodosQueriesAndMutations";
import { useQueryClient } from "@tanstack/react-query";

export default function DeleteList({ listId }: { listId: any }) {
    const queryClient = useQueryClient();

    // HANDLE DELETE LIST
    const { mutateAsync: deleteList } = useDeleteList();
    const handleDeleteList = async (id: any) => {
        try {
            await deleteList(id).then(() => queryClient.invalidateQueries({ queryKey: ['lists'] }))
            toast.success(`The list was successfully deleted`)
        } catch (error) {
            toast.error("An error occurred while deleting the list");
            console.log("Error: While deleting list~ ", error);
        }
    }
    return (
        <Dialog>
            <DialogTrigger>
                <div className="p-[1px] w-4 h-4 flex justify-center items-center bg-destructive hover:bg-red-600 text-destructive-foreground rounded-sm"><X /></div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete this list
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant={"destructive"} className="py-1 px-3 text-sm hover:bg-red-600"
                        onClick={() => handleDeleteList(listId)}>
                        Yes Delete
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
