const accordionTriggers = document.querySelectorAll(".accordion__trigger");

accordionTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const isOpen = trigger.getAttribute("aria-expanded") === "true";
    const panel = trigger.nextElementSibling;

    trigger.setAttribute("aria-expanded", String(!isOpen));

    if (panel) {
      panel.hidden = isOpen;
    }
  });
});

const motionFooter = document.querySelector(".motion-footer");

if (motionFooter) {
  const footerObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        motionFooter.classList.add("is-visible");
        footerObserver.disconnect();
      }
    },
    { threshold: 0.25 }
  );

  footerObserver.observe(motionFooter);
}

document.querySelectorAll(".magnetic-pill").forEach((button) => {
  button.addEventListener("pointermove", (event) => {
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    button.style.setProperty("--tx", `${x * 0.12}px`);
    button.style.setProperty("--ty", `${y * 0.18}px`);
  });

  button.addEventListener("pointerleave", () => {
    button.style.setProperty("--tx", "0px");
    button.style.setProperty("--ty", "0px");
  });
});
