import "./App.css";

import { useState, useEffect } from "react";

import Header from "./components/header";
import Footer from "./components/footer";
import Credentials from "./pages/credentials";
import About from "./pages/about";
import Projects from "./pages/projects";
import Certificates from "./pages/certificates";
import Contact from "./pages/contacts";

import bg from "/bg1.jpg";

function App() {
  const [active, setActive] = useState<string | null>(null);

  const isPreview = active === null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [active]);

  const open = (section: string) => setActive(section);
  const close = () => setActive(null);

  return (
    <div
      className="min-h-screen flex flex-col bg-contain bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Header showBack={!isPreview} onBack={close} />

      <main className="flex-grow m-3 border border-white/20 rounded-lg bg-white/10 backdrop-blur-xl shadow-xl md:max-w-xl md:mx-auto lg:max-w-4xl lg:mx-auto">
        {isPreview && (
          <>
            <div className="grid grid-cols-1 m-5">
              <div className="hidden md:block " onClick={() => open("about")}>
                <About expanded={false} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 md:my-5">
                <div
                  className="md:ml-auto md:w-[90%] bg-gray-900 border md:mx-3 rounded-4xl"
                  onClick={() => open("credentials")}
                >
                  <Credentials expanded={false} />
                </div>

                <div
                  className="border my-5 md:hidden rounded-4xl"
                  onClick={() => open("about")}
                >
                  <About expanded={false} />
                </div>

                <div
                  className="md:mr-auto md:w-[90%] border bg-gray-900  md:mx-3 rounded-4xl"
                  onClick={() => open("projects")}
                >
                  <Projects expanded={false} />
                </div>
              </div>
              <div className="mt-5 md:m-0" onClick={() => open("certificates")}>
                <Certificates expanded={false} />
              </div>
            </div>
            <Contact />
          </>
        )}

        {!isPreview && (
          <>
            {active === "credentials" && <Credentials expanded />}
            {active === "about" && <About expanded />}
            {active === "projects" && <Projects expanded />}
            {active === "certificates" && <Certificates expanded />}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
