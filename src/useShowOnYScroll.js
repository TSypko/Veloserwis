import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useShowOnXScroll = (ref, amount, startRef, startPos) => {
useEffect(() => {
    gsap.fromTo(ref, { y: amount, autoAlpha: 0 }, {
        y: 0, autoAlpha: 1, duration: 1, ease: 'easeInOut', scrollTrigger: {
            trigger: startRef,
            start: startPos,
            markers: true,
        }
    });
}, [ref, amount, startRef, startPos]);

};