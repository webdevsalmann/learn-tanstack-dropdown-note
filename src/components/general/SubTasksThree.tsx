import { Checkbox } from "../ui/checkbox";

export default function SubTasksThree({ subTaskThree }: { subTaskThree: any }) {
  return (
    <div className="relative mt-1 w-full flex flex-row-reverse flex-wrap transition-all group">

      {/* TIME LINE DROP  */}
      <div className={`absolute top-0 left-5 h-6 w-[2px] bg-muted z-0`}></div>
      <div className={`absolute top-6 left-5 h-[2px] w-1/2 bg-muted z-0`}></div>

      {/* SUB TASK TWO  */}
      <div className="relative right-0 py-2 px-3 w-[95%] flex gap-2 items-center rounded bg-muted cursor-pointer">
        <Checkbox id={subTaskThree.id} />
        <label className="w-full cursor-pointer" htmlFor={subTaskThree.id}>
          <p className="text-base">{subTaskThree.subTaskThree}</p>
        </label>
      </div>

      {/* SUB TASK-2 CONTAINER  */}
      {/* <div className="w-[95%] flex flex-col gap-1">
        <SubTasksThreeContainer subTaskTwoId={subTaskTwo.id} />
        <AddSubTaskThree subTaskTwoId={subTaskTwo.id} />
      </div> */}
    </div>
  )
}
