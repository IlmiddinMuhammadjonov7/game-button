const gameEl = document.querySelector(".game");
let tanlanganSoz = null;

let words = [
  { uz: "kitob", en: "book" },
  { uz: "eshik", en: "door" },
  { uz: "daftar", en: "notebook" },
];

let wordYoyilgan = ["kitob", "eshik", "book", "notebook", "door", "daftar"];

function game() {
  let html = "";
  wordYoyilgan.forEach((word) => {
    html += `<button>${word}</button>`;
  });
  gameEl.innerHTML = html;
  const btns = document.querySelectorAll(".game button");
  btns.forEach((btn, i) => {
    btn.textContent = wordYoyilgan[i];
    btn.addEventListener("click", () => {
      if (tanlanganSoz) {
        const soz = words.find(
          (word) => word.en == tanlanganSoz || word.uz == tanlanganSoz
        );
        if (btn.textContent == soz.en || btn.textContent == soz.uz) {
          btn.className = "green";
          const new_arr = wordYoyilgan.filter(
            (word) => word != soz.en && word != soz.uz
          );
          wordYoyilgan = new_arr;
          game();
          tanlanganSoz = null;
        } else {
          btn.className = "red";
        }
      } else {
        tanlanganSoz = btn.textContent;
        btn.className = "orange";
      }
    });
  });
}
game()