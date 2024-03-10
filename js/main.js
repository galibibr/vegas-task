const data = [
   {
      name: "Кетчуп",
      price: 0,
      cnt: 1,
   },
   {
      name: "Сырный",
      price: 60,
      cnt: 0,
   },
   {
      name: "Блю-чиз",
      price: 60,
      cnt: 0,
   },
   {
      name: "Барбекю",
      price: 60,
      cnt: 0,
   },
];

const list = document.querySelector(".sauces-list");
const free_sauce = document.querySelector('.free-sauce')

function get() {
   if (data[0].cnt == 1) {
      free_sauce.textContent = 1;
   } else {
      free_sauce.textContent = 0;
   }
   data.forEach((item) => {
      const li = document.createElement("li");
      const left = document.createElement("div");
      left.className = 'left';
      const name = document.createElement("p");
      name.textContent = item.name;
      const price = document.createElement("p");
      price.textContent = `+ ${item.price} ₽`;

      const right = document.createElement("div");
      right.className = 'right';
      const inc = document.createElement("button");
      inc.textContent = "-";
      const cnt = document.createElement("p");
      cnt.textContent = item.cnt;
      const dec = document.createElement("button");
      dec.textContent = "+";

      list.appendChild(li);
      li.appendChild(left);
      li.appendChild(right);
      left.appendChild(name);
      left.appendChild(price);
      right.appendChild(inc);
      right.appendChild(cnt);
      right.appendChild(dec);
   });
}
get();

