(function () {
  "use strict";

  const entrance = document.querySelector(".entrance");
  if (!entrance) return;

  const works = [
    {
      mobile: "assets/images/entrance-art.webp",
      desktop: "assets/images/entrance-art-desktop.webp",
      position: "center"
    },
    {
      mobile: "assets/images/entrance-rotation-02-mobile.webp",
      desktop: "assets/images/entrance-rotation-02-desktop.webp",
      position: "center"
    },
    {
      mobile: "assets/images/entrance-rotation-03-mobile.webp",
      desktop: "assets/images/entrance-rotation-03-desktop.webp",
      position: "center"
    },
    {
      mobile: "assets/images/entrance-rotation-04-mobile.webp",
      desktop: "assets/images/entrance-rotation-04-desktop.webp",
      position: "center"
    }
  ];

  const landscape = window.matchMedia("(orientation: landscape)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const tracks = {
    top: createTrack(entrance.querySelector(".entrance__strip--top"), "right"),
    bottom: createTrack(entrance.querySelector(".entrance__strip--bottom"), "left")
  };

  function createTrack(element, direction) {
    return {
      current: element.querySelector(".entrance__slide--current"),
      next: element.querySelector(".entrance__slide--next"),
      direction: direction,
      index: 0,
      moving: false
    };
  }

  function sourceFor(work) {
    if (work.src) return work.src;
    return landscape.matches ? work.desktop : work.mobile;
  }

  function setImage(image, work) {
    image.src = sourceFor(work);
    image.style.objectPosition = work.position || "center";
  }

  function delay(milliseconds) {
    return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
  }

  function loadImage(image, work) {
    return new Promise((resolve) => {
      setImage(image, work);

      if (image.complete && image.naturalWidth > 0) {
        resolve();
        return;
      }

      image.addEventListener("load", resolve, { once: true });
      image.addEventListener("error", resolve, { once: true });
    });
  }

  async function move(track, nextIndex) {
    await loadImage(track.next, works[nextIndex]);

    return new Promise((resolve) => {
      const incoming = track.next;
      const outgoing = track.current;
      const incomingStart = track.direction === "right" ? "translateX(-100%)" : "translateX(100%)";
      const outgoingEnd = track.direction === "right" ? "translateX(100%)" : "translateX(-100%)";
      let completed = false;

      track.moving = true;
      incoming.style.visibility = "visible";
      incoming.style.transition = "none";
      incoming.style.transform = incomingStart;
      outgoing.style.transition = "none";
      outgoing.style.transform = "translateX(0)";
      incoming.getBoundingClientRect();

      function finish() {
        if (completed) return;
        completed = true;
        incoming.removeEventListener("transitionend", finish);
        outgoing.style.visibility = "hidden";
        outgoing.style.transition = "none";
        outgoing.style.transform = "translateX(0)";
        incoming.style.transition = "none";
        track.current = incoming;
        track.next = outgoing;
        track.index = nextIndex;
        track.moving = false;
        resolve();
      }

      incoming.addEventListener("transitionend", finish, { once: true });
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const transition = "transform 1100ms cubic-bezier(0.76, 0, 0.24, 1)";
          incoming.style.transition = transition;
          outgoing.style.transition = transition;
          incoming.style.transform = "translateX(0)";
          outgoing.style.transform = outgoingEnd;
        });
      });
      window.setTimeout(finish, 1400);
    });
  }

  function refreshResponsiveImages() {
    Object.values(tracks).forEach((track) => {
      if (!track.moving) setImage(track.current, works[track.index]);
    });
  }

  setImage(tracks.top.current, works[0]);
  setImage(tracks.bottom.current, works[0]);
  landscape.addEventListener("change", refreshResponsiveImages);

  works.forEach((work) => {
    const image = new Image();
    image.src = sourceFor(work);
  });

  if (reducedMotion.matches) return;

  async function play() {
    await delay(2200);

    while (true) {
      for (let index = 1; index < works.length; index += 1) {
        await Promise.all([
          move(tracks.top, index),
          move(tracks.bottom, index)
        ]);
        await delay(1700);
      }

      await Promise.all([
        move(tracks.top, 0),
        move(tracks.bottom, 0)
      ]);
      await delay(2600);
    }
  }

  play();
})();
