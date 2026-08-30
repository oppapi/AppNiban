//buttons
const getStartedBtn = document.getElementById('get-started');
if (getStartedBtn) {
  getStartedBtn.addEventListener('click', () => {
    window.location.href = 'home.html';
  });
}

//add and remove input rows
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("plus")) {
    const row = e.target.closest(".input-row");
    if (!row) return;

    const clone = row.cloneNode(true);

    clone.querySelector(".editable-label").textContent = "--";
    clone.querySelector("input").value = "";

    row.after(clone);
  }

  if (e.target.classList.contains("minus")) {
    const row = e.target.closest(".input-row");
    if (!row) return;

    const section = row.closest(".services-section");
    const rows = section.querySelectorAll(".input-row");

    if (rows.length > 2) {
      row.remove();
    }
  }
});

document.addEventListener("focusin", function (e) {
  if (e.target.classList.contains("editable-label")) {
    const range = document.createRange();
    range.selectNodeContents(e.target);

    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }
});

import { getProgrammeData } from "./firebase.js";
window.addEventListener("load", async () => {
  const data = await getProgrammeData();
  console.log(data);
});