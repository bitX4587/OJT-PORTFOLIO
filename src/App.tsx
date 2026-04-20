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
  const cardClass =
    "rounded-[2rem] bg-gray-900 shadow-[0_8px_30px_rgba(0,0,0,0.3)]";
  return (
    <div className="min-h-screen flex flex-col bg-contain bg-center">
      <Header showBack={!isPreview} onBack={close} />

      <main
        className="flex-grow m-3 rounded-[2rem] 
  bg-white/10 backdrop-blur-xl 
  border border-white/10 
  shadow-[0_8px_30px_rgba(0,0,0,0.3)]
  md:max-w-xl md:mx-auto 
  lg:max-w-4xl lg:mx-auto"
      >
        {isPreview && (
          <>
            <div className="grid grid-cols-1 m-5 gap-5">
              {/* About (desktop only top card) */}
              <div className="hidden md:block" onClick={() => open("about")}>
                <div>
                  <About expanded={false} />
                </div>
              </div>

              {/* Middle grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div
                  className={`${cardClass} md:ml-auto md:w-[90%]`}
                  onClick={() => open("credentials")}
                >
                  <Credentials expanded={false} />
                </div>

                <div
                  className={`md:hidden ${cardClass}`}
                  onClick={() => open("about")}
                >
                  <About expanded={false} />
                </div>

                <div
                  className={`${cardClass} md:mr-auto md:w-[90%]`}
                  onClick={() => open("projects")}
                >
                  <Projects expanded={false} />
                </div>
              </div>

              {/* Certificates */}
              <div onClick={() => open("certificates")}>
                <div>
                  <Certificates expanded={false} />
                </div>
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
