"use client";

import { useEffect } from "react";

export default function ScrollReveal() {

  useEffect(() => {

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("active");

          }

        });

      },

      {
        threshold: 0.15,
      }

    );

    const hidden = document.querySelectorAll(
      ".reveal,.reveal-left,.reveal-right,.reveal-zoom,.reveal-rotate"
    );

    hidden.forEach((el) => observer.observe(el));

    return () => observer.disconnect();

  }, []);

  return null;
}