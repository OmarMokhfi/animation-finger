import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const colors = [
  "rgb(242, 199, 68)",
  "rgb(219, 122, 0)",
  "rgb(66, 36, 210)",
  "#764ba2",
];

export default function ProjectSection({ index, project }) {
  const ref = useRef();
  useEffect(() => {
    gsap.to("body", {
      duration: 1,
      ease: "sine.out",
      scrollTrigger: {
        trigger: `#project${index}`,
        onEnter: () =>
          gsap.to("body", {
            backgroundColor: colors[index],
            overwrite: "auto",
          }),
        onLeaveBack: () =>
          gsap.to("body", {
            backgroundColor: colors[index - 1],
            overwrite: "auto",
          }),
      },
    });
    gsap.to(
      `#project${index}-texts > *`,
      {
        rotate: -2,
        ease: "power3.out",
        duration: 3,
        scrollTrigger: {
          trigger: `#project${index}`,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );
    gsap.to(`#project${index}-video > div`, {
      rotate: -2,
      ease: "power3.out",
      duration: 3,
      scrollTrigger: {
        trigger: `#project${index}`,
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      className="container mx-auto px-6 h-screen flex flex-col relative overflow-hidden text-white"
      id={`project${index}`}
    >
      <div className="flex items-center py-8">
        <div className="w-1/2 space-y-10" id={`project${index}-texts`}>
          <p className="font-serif rotate-[10deg] origin-bottom-left">
            {project.title}
          </p>
          <p className="text-7xl w-[550px] max-w-full rotate-[10deg] origin-bottom-left">
            {project.description}
          </p>
          <p className="rotate-[10deg] origin-bottom-left">Case Study</p>
        </div>
        <div className="relative w-1/2 h-full" id={`project${index}-video`}>
          <div className="rotate-[10deg] origin-center-left pl-[100px] h-[570px] w-[375px]">
            <video
              autoPlay
              playsInline
              loop
              src="https://d5i52xlspk7ew.cloudfront.net/videos/new_fish.mp4"
              controlsList="nodownload"
              className="absolute top-0 right-0 h-full rounded-2xl"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
}
