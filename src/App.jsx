import { useEffect } from "react";
import { gsap } from "gsap";
import Finger from "./components/Finger";
import Navbar from "./components/Navbar";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectSection from "./components/ProjectSection";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "GOOGLE | HO JENG AR",
    description: "Sharing smiles in Hong Kong",
    link: "",
  },
  {
    title: "LUMI",
    description: "A smarter way to learn and play music",
    link: "",
  },
  {
    title: "URBAN MIND",
    description: "Healthy cities, healthier minds",
    link: "",
  },
];

function App() {
  useEffect(() => {
    let tl = gsap.timeline();
    tl.to("h1 > div", {
      opacity: 1,
      translateY: 0,
      stagger: 0.2,
      duration: 0.3,
    });
    tl.to(".finger", { left: "35%", top: "68%", duration: 0.3, delay: 1 }).to(
      ".finger",
      { scale: 0.8, duration: 0.2 }
    );
    tl.to(".third-text", { rotate: "0", duration: 0.3 });
    tl.to(".finger", { left: "35%", top: "64%", duration: 0.3 }, "<").to(
      ".finger",
      { scale: 1, duration: 0.2 }
    );
    tl.to(".finger", { left: "27%", top: "55%", duration: 0.3 }).to(".finger", {
      scale: 0.8,
      duration: 0.2,
    });
    tl.to(".second-text", { left: "290px", duration: 0.3 });
    tl.to(
      ".first-text > span",
      { bottom: "0px", duration: 0.2, stagger: 0.1 },
      "<"
    );
    tl.to(".finger", { left: "42%", top: "55%", duration: 0.3 }, "<")
      .to(".finger", { scale: 1, duration: 0.2 })
      .to(".finger", { left: "60%", top: "70%", duration: 0.3 });
    gsap.to(".finger", {
      left: "120%",
      top: "120%",
      duration: 0.3,
      scrollTrigger: {
        trigger: "#start",
        start: "top bottom",
      },
    });

    gsap.to("#start > *", {
      rotate: 0,
      ease: "power1.out",
      duration: 1,
      scrollTrigger: {
        trigger: "#start",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <div className="h-screen flex flex-col relative overflow-hidden back-color">
        <div className="container mx-auto px-6 h-[100px]">
          <Navbar />
        </div>
        <section className="hero flex-grow">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="text-left text-7xl text-dark">
              <h1>
                <div className="opacity-0 translate-y-full">
                  <span>Minimalist</span>
                </div>
                <div className="relative h-[85px] opacity-0 translate-y-full">
                  <div className="first-text absolute bottom-0 h-full overflow-hidden w-[290px]">
                    <span className="absolute -bottom-full">C</span>
                    <span className="absolute -bottom-full left-[45px]">r</span>
                    <span className="absolute -bottom-full left-[75px]">e</span>
                    <span className="absolute -bottom-full left-[110px]">
                      a
                    </span>
                    <span className="absolute -bottom-full left-[150px]">
                      t
                    </span>
                    <span className="absolute -bottom-full left-[180px]">
                      i
                    </span>
                    <span className="absolute -bottom-full left-[208px]">
                      v
                    </span>
                    <span className="absolute -bottom-full left-[242px]">
                      e
                    </span>
                  </div>
                  <div className="second-text absolute left-0 bottom-0 whitespace-pre">
                    <span>Developer</span>
                  </div>
                </div>
                <div className="third-text mt-2 rotate-[5deg] origin-top-left opacity-0 translate-y-full">
                  <span>with Business Mindset</span>
                </div>
              </h1>
            </div>
          </div>
        </section>
        <div
          className="finger absolute left-[50%] top-[120%] z-10 -rotate-[40deg] inline-block"
          style={{ transformOrigin: "20% 0px" }}
        >
          <Finger />
        </div>
      </div>
      <div className="container mx-auto px-6 h-screen flex flex-col overflow-hidden">
        <div id="start" className="w-[80%] space-y-10">
          <p className="font-serif font-bold text-xl rotate-[7deg] origin-bottom-left">
            What We Do
          </p>
          <p className="text-5xl rotate-[7deg] origin-bottom-left">
            We design interfaces and user experiences that evoke trust, joy and
            brand loyalty.
          </p>
          <p className="text-5xl rotate-[7deg] origin-bottom-left">
            We supercharge your in-house product team with award-winning design
            skills, solid processes and fresh perspectives from outside your
            industry.
          </p>
        </div>
      </div>
      {projects.map((project, index) => (
        <div key={index}>
          <ProjectSection index={index + 1} project={project} />
        </div>
      ))}
    </>
  );
}

export default App;
