"use client"
import { useEffect, useState } from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => { setSidebarOpen(!sidebarOpen) };
  return (
    <section className="max-h-screen h-screen flex">
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <Content sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </section>
  )
}
