const data = [
   {
      id: 1,
      name: "Кетчуп",
      price: 0,
      cnt: 0,
   },
   {
      id: 2,
      name: "Сырный",
      price: 60,
      cnt: 0,
   },
   {
      id: 3,
      name: "Блю-чиз",
      price: 60,
      cnt: 0,
   },
   {
      id: 4,
      name: "Барбекю",
      price: 60,
      cnt: 0,
   },
];

const list = document.querySelector(".sauces-list");
const free_sauce = document.querySelector(".free-sauce");
const total_price = document.querySelector(".price");

function get() {
   if (data[0].cnt > 0) {
      free_sauce.textContent = 1;
      data[0].price = 60;
   } else {
      free_sauce.textContent = 0;
      data[0].price = 0;
   }
   list.innerHTML = "";

   data.forEach((item) => {
      const li = document.createElement("li");
      const left = document.createElement("div");
      left.className = "left";
      const name = document.createElement("p");
      name.textContent = item.name;
      const price = document.createElement("p");
      price.textContent = `+ ${item.price} ₽`;

      const right = document.createElement("div");
      right.className = "right";
      const inc = document.createElement("button");
      inc.textContent = "-";
      inc.style.opacity = '30%'
      if (item.cnt > 0) {
         inc.style.opacity = '100%'
         inc.onclick = () => {
            data.forEach((e) => {
               if (e.id === item.id) {
                  data[e.id - 1].cnt--;
               }
            });
            total();
            get();
         };
      }
      const cnt = document.createElement("p");
      cnt.textContent = item.cnt;
      const dec = document.createElement("button");
      dec.textContent = "+";
      dec.onclick = () => {
         data.forEach((e) => {
            if (e.id === item.id) {
               data[e.id - 1].cnt++;
            }
         });
         total();
         get();
      };

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

function total() {
   const total = data
      .map((e) =>
         e.id === 1 && e.cnt > 0 ? e.price * (e.cnt - 1) : e.price * e.cnt
      )
      .reduce((a, b) => a + b);
   total_price.textContent = `${220 + total} ₽`;
}
total();
