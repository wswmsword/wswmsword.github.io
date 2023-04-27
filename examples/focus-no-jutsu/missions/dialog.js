
const dialog = document.getElementById("dialog");

const bagel = focusBagel(dialog, ["#firstFocusA", "#lastFocusBtn"], {
  loop: false,
  enter: {
    node: "#open",
    on() {
      dialog.classList.add("openedDialog");
      dialog.classList.remove("closedDialog");
    },
  },
  exit: [{
    node: "#close",
    on() {
      dialog.classList.remove("openedDialog");
      dialog.classList.add("closedDialog");
    },
  }],
});
