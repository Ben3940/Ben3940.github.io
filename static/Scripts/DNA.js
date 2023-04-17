const strand = document.getElementById("strand");
for (let i = 1; i <= Math.floor(window.outerHeight / 30); i++) {
  const elm = document.createElement("div");
  elm.classList.add("dna");
  if (i % 2 == 0) {
    elm.classList.add("AT");
  } else {
    elm.classList.add("CG");
  }

  elm.style.animationDelay = `${-0.15 * i}s`;
  strand.append(elm);
}
