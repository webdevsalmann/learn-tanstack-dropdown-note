import { Checkbox } from "../ui/checkbox";
import AddSubTaskTwo from "./AddSubTaskTwo";
import SubTasksTwoContainer from "./SubTasksTwoContainer";

export default function SubTasks({ subTask }: { subTask: any }) {
    return (
        <div className="relative mt-1 w-full flex flex-row-reverse flex-wrap transition-all group">

            {/* TIME LINE DROP  */}
            <div className={`absolute top-0 left-5 h-6 w-[2px] bg-muted z-0`}></div>
            <div className={`absolute top-6 left-5 h-[2px] w-1/2 bg-muted z-0`}></div>

            {/* SUB TASK */}
            <div className="relative right-0 py-2 px-3 w-[95%] flex gap-2 items-center rounded bg-background cursor-pointer">
                <Checkbox id={subTask.id} />
                <label className="w-full cursor-pointer" htmlFor={subTask.id}>
                    <p className="text-base">{subTask.subTask}</p>
                </label>
            </div>

            {/* SUB TASK-2 CONTAINER  */}
            <div className="w-[95%]">
                <SubTasksTwoContainer subTaskId={subTask.id} />
                <AddSubTaskTwo subTaskId={subTask.id} />
            </div>
        </div>
    )
}
