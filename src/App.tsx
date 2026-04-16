import "./App.css";

import { useState, useEffect } from "react";

import Header from "./components/header";
import Footer from "./components/footer";
import Credentials from "./pages/credentials";
import About from "./pages/about";
import Projects from "./pages/projects";
import Certificates from "./pages/certificates";
import Contact from "./pages/contacts";

function App() {
  const [active, setActive] = useState<string | null>(null);

  const isPreview = active === null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [active]);

  const open = (section: string) => setActive(section);
  const close = () => setActive(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header showBack={!isPreview} onBack={close} />

      <main className="flex-grow">
        {isPreview && (
          <>
            <div className="grid grid-cols-1 m-5">
              <div className="hidden md:block" onClick={() => open("about")}>
                <About expanded={false} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 md:my-5">
                <div
                  className="md:ml-auto md:w-[90%] border md:mx-2 md:rounded-lg"
                  onClick={() => open("credentials")}
                >
                  <Credentials expanded={false} />
                </div>

                <div
                  className="border my-5 md:hidden"
                  onClick={() => open("about")}
                >
                  <About expanded={false} />
                </div>

                <div
                  className="md:mr-auto md:w-[90%] border md:mx-2 md:rounded-lg"
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
