import Link from "next/link";
import { ThemeBtn } from "../ui/ThemeBtn";
import { Button } from "../ui/button";
import { Blinds, Waypoints } from "lucide-react";

export default function Header() {
    return (
        <header className="px-14 py-4 w-full items-center justify-between text-sm flex border-b">
            <div className="text-primary"><Waypoints /></div>
            <nav className="flex gap-2">
                <Link href="/"><Button size={"sm"} variant={"ghost"}>Home</Button></Link>
                <Link href="/about"><Button size={"sm"} variant={"ghost"}>About</Button></Link>
                <ThemeBtn />
            </nav>
        </header>
    )
}
