import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
    nullTargetWarn: false,
  });

export const useShowOnScrollX = (ref, amount, startRef, startPos) => {
    useEffect(() => {
        gsap.fromTo(ref, { x: amount, autoAlpha: 0 }, {
            x: 0, autoAlpha: 1, duration: 1, ease: 'easeInOut', scrollTrigger: {
                trigger: startRef,
                start: startPos,
            }
        });
    }, [ref, amount, startRef, startPos]);

};