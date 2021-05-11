setInterval(() => {
  const skipButton = document.querySelector(".ytp-ad-skip-button");
  const contents = document.querySelector("#contents");
  const secondary = document.querySelector("#secondary-inner");
  const grid = document.getElementsByTagName("ytd-rich-grid-renderer");
  if (skipButton) {
    skipButton.click();
  }
  if (contents) {
    contents.style.display = "none";
  }
  if (secondary) {
    secondary.style.display = "none";
  }
  if (grid) {
    grid.style.display = "none";
  }
}, 100);
