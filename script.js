// Get Started button (safe check)
const getStartedBtn = document.getElementById('get-started');

if (getStartedBtn) {
  getStartedBtn.addEventListener('click', () => {
    window.location.href = 'home.html';
  });
}

// Event delegation for + and − buttons
document.addEventListener("click", function (e) {

  // ➕ Add new row
  if (e.target.classList.contains("plus")) {
    const row = e.target.closest(".input-row");
    if (!row) return;

    const clone = row.cloneNode(true);

    // Reset values
    clone.querySelector(".editable-label").textContent = "--";
    clone.querySelector("input").value = "";

    row.after(clone);
  }

  // ➖ Remove row (keep at least one)
  if (e.target.classList.contains("minus")) {
    const row = e.target.closest(".input-row");
    if (!row) return;

    const section = row.closest(".services-section");
    const rows = section.querySelectorAll(".input-row");

    if (rows.length > 1) {
      row.remove();
    }
  }
});

// Select all label text on focus
document.addEventListener("focusin", function (e) {
  if (e.target.classList.contains("editable-label")) {
    const range = document.createRange();
    range.selectNodeContents(e.target);

    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }
});

// Prevent Enter key from creating new lines
document.addEventListener("keydown", function (e) {
  if (
    e.target.classList.contains("editable-label") &&
    e.key === "Enter"
  ) {
    e.preventDefault();
    e.target.blur();
  }
});
