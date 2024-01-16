import Content from "./Content";
import Sidebar from "./Sidebar";

export default function page() {

  return (
    <section className="max-h-screen h-screen flex">
      <Sidebar />
      <Content/>
    </section>
  )
}
