// hooks/useIntersectionObserver.ts
import { useEffect, RefObject } from "react";
import animationStyles from "../styles/animations.module.scss";

export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  options = { threshold: 0.1 }
) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationStyles.visible);
        }
      });
    }, options);

    const element = elementRef.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [elementRef, options]);
}
