import Navbar from "@/Components/Navbar";


export default function Home() {
  return (
    <main className="container-custom">
      <Navbar/>
      <section>
        <h1 className="text-5xl font-bold">
          Hi, I'm <span className="gradient-text">Shipan Ahmed</span>
        </h1>

        <p className="text-muted mt-6 max-w-xl">
          Aspiring Software Engineer focused on Full Stack
          Development and Problem Solving.
        </p>

        <button className="primary-btn mt-8">
          View Projects
        </button>
      </section>
    </main>
  );
}
