
const dialog = document.getElementById("dialog");
const mask = document.getElementById("dialog_mask");
const entry = document.getElementById("open");

const bagel = focusBagel(dialog, ["#firstFocusBtn", "#close"], {
  loop: false,
  enter: {
    node: entry,
    on() {
      dialog.classList.add("openedDialog");
      dialog.classList.remove("closedDialog");
      dialog_mask.classList.remove("closed_mask");
      entry.ariaExpanded = true;
    },
  },
  exit: {
    node: ["#close", "#firstFocusBtn", "#confirm", "#dialog_mask"],
    on: closeDialog,
  },
  onEscape: true,
});

function closeDialog() {
  dialog.classList.remove("openedDialog");
  dialog.classList.add("closedDialog");
  dialog_mask.classList.add("closed_mask");
  entry.ariaExpanded = false;
}