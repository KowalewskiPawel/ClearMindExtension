/*

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

*/

setInterval(() => {
  (async function () {
    const skipBtn = await document.querySelector(".ytp-ad-skip-button");
    skipBtn.click();
  })();

  (async function () {
    const grid = await document.querySelector(
      ".ytd-two-column-browse-results-renderer"
    );
    grid.style.display = "none";
  })();

  (async function () {
    const side = await document.querySelector("#secondary-inner");
    side.style.display = "none";
  })();
}, 500);
