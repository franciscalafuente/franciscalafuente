(function () {
  "use strict";

  const entrance = document.querySelector(".entrance");
  if (!entrance) return;

  const works = [
    {
      mobile: "assets/images/entrance-art.webp",
      desktop: "assets/images/entrance-art-desktop.webp",
      position: "center",
      mobileTopTranslate: "0 0",
      mobileBottomTranslate: "0 -2.5%",
      desktopTopTranslate: "0 2.8%",
      desktopBottomTranslate: "0 -3.5%"
    },
    {
      mobile: "assets/images/entrance-rotation-02-mobile.webp",
      desktop: "assets/images/entrance-etching-original.jpeg",
      mobilePosition: "center",
      desktopPosition: "center",
      mobileScale: 1,
      desktopScale: 1.52
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
    top: createTrack(entrance.querySelector(".entrance__strip--top"), "right", "Top"),
    bottom: createTrack(entrance.querySelector(".entrance__strip--bottom"), "left", "Bottom")
  };

  function createTrack(element, direction, part) {
    return {
      current: element.querySelector(".entrance__slide--current"),
      next: element.querySelector(".entrance__slide--next"),
      direction: direction,
      part: part,
      index: 0,
      moving: false
    };
  }

  function sourceFor(work) {
    if (work.src) return work.src;
    return landscape.matches ? work.desktop : work.mobile;
  }

  function setImage(image, work, part) {
    const isLandscape = landscape.matches;
    const mode = isLandscape ? "desktop" : "mobile";
    image.src = sourceFor(work);
    image.style.objectPosition = (isLandscape ? work.desktopPosition : work.mobilePosition) || work.position || "center";
    image.style.setProperty("--entrance-image-scale", String((isLandscape ? work.desktopScale : work.mobileScale) || 1));
    image.style.setProperty(
      "--entrance-image-translate",
      work[mode + part + "Translate"] || (isLandscape ? work.desktopTranslate : work.mobileTranslate) || "0 0"
    );
  }

  function delay(milliseconds) {
    return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
  }

  function loadImage(image, work, part) {
    return new Promise((resolve) => {
      setImage(image, work, part);

      if (image.complete && image.naturalWidth > 0) {
        resolve();
        return;
      }

      image.addEventListener("load", resolve, { once: true });
      image.addEventListener("error", resolve, { once: true });
    });
  }

  async function move(track, nextIndex) {
    await loadImage(track.next, works[nextIndex], track.part);

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
      if (!track.moving) setImage(track.current, works[track.index], track.part);
    });
  }

  setImage(tracks.top.current, works[0], tracks.top.part);
  setImage(tracks.bottom.current, works[0], tracks.bottom.part);
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
