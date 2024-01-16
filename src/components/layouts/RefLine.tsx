
export default function RefLine({ bottom, vl = 3, hl = 0 }: { bottom?: any, vl?: any, hl?: any }) {
    return (
        <>
            <div className={`absolute bottom-${bottom} left-${vl} h-full w-[2px] bg-muted rounded z-0`}></div>
            <div className={`absolute bottom-${bottom} left-${hl} h-[2px] w-1/2 bg-muted rounded z-0`}></div>
        </>
    )
}
