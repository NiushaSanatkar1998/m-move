document.addEventListener("mousemove", function (e) {
  const image = document.getElementById("image");
  const layer = document.querySelector(".layer");
  const rect = layer.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  image.style.clipPath = `circle(200px at ${x}px ${y}px)`;

  if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
    image.style.display = "block";
  } else {
    image.style.display = "none";
  }
});
