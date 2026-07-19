const ICONS = {
  flame: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
  utensils: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"/><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"/><path d="m2.1 21.8 6.4-6.3"/><path d="m19 5-7 7"/></svg>`,
  coffee: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/></svg>`,
  drumstick: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.4 15.63a2.1 2.1 0 1 1 2.97 2.97L12.75 24l-2.97-2.97a2.1 2.1 0 1 1 2.97-2.97z"/><path d="m8.5 8.5 7 7"/><path d="M15.5 5.5a4.95 4.95 0 0 0-7 7"/><path d="M8.5 5.5a4.95 4.95 0 0 0 0 7"/><path d="M5.5 8.5a4.95 4.95 0 0 0 7 0"/></svg>`,
  soup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/><path d="M7 21h10"/><path d="M19.5 12 22 6"/><path d="M16.25 3c.27.1.8.53.75 1.21-.19 1.79-1.5 3.4-3 4.54"/><path d="M12 3c.27.1.8.53.75 1.21C12.56 6 11.25 7.61 9.75 8.75"/><path d="M7.75 3c.27.1.8.53.75 1.21C8.06 6 6.75 7.61 5.25 8.75"/></svg>`,
  sandwich: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2.37 11.223 8.372-7.826a1 1 0 0 1 1.316 0l8.372 7.826c.418.391.418 1.041 0 1.432l-8.372 7.826a1 1 0 0 1-1.316 0l-8.372-7.826c-.418-.391-.418-1.041 0-1.432Z"/><path d="M10 10.5h4"/><path d="M10 14h4"/></svg>`,
  pizza: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 14-1.5-1.5"/><path d="M12 2v12l5 3"/><path d="m6.5 8.5 1.5 1.5"/><path d="M18 12h2"/><path d="M19.5 5.5 17 8"/><path d="M21 15.5V12a9 9 0 1 0-9 9h3.5"/><circle cx="15" cy="18" r="1"/><circle cx="18" cy="16" r="1"/></svg>`,
};

const menuData = {
  starters: [
    { name: "American Crispy Corn", price: "100", isSpecial: true },
    { name: "Baby Corn Manchurian", price: "100" },
    { name: "Baby Corn 65", price: "100" },
    { name: "Baby Corn Chilli", price: "100" },
    { name: "Baby Corn Pepper Dry Gobi", price: "100" },
    { name: "Manchurian", price: "70" },
    { name: "Gobi Chilli", price: "80" },
    { name: "Gobi 65", price: "80" },
    { name: "Masala Papad 1pc", price: "40" },
    { name: "Paneer Manchurian", price: "150", isSpecial: true },
    { name: "Paneer Chilli", price: "150" },
    { name: "Paneer 65", price: "150" },
    { name: "Paneer Pepper Dry", price: "150" },
    { name: "Paneer Kabab", price: "150" },
    {
      name: "Paneer Tikka",
      price: "160",
      image: "assets/paneer-tikka.jpg",
    },
    { name: "Veg Noodles", price: "70" },
    { name: "Paneer Noodles", price: "100" },
    { name: "Mushroom Manchurian", price: "100" },
    { name: "Mushroom Chilli", price: "110" },
    { name: "Mushroom 65", price: "110" },
    { name: "Mushroom Pepper Dry", price: "110" },
    { name: "Schezwan Noodles", price: "100" },
    { name: "Mushroom Noodles", price: "100" },
    { name: "Aloo Manchurian", price: "80" },
    { name: "Aloo Chilli", price: "80" },
    { name: "Aloo 65", price: "80" },
    { name: "Mushroom Duplex", price: "120" },
  ],
  rice: [
    {
      name: "Vegetable Fried Rice",
      price: "80",
      image: "assets/veg-fried-rice.jpg",
    },
    { name: "Paneer Fried Rice", price: "100", isSpecial: true },
    { name: "Schezwan Fried Rice", price: "100" },
    { name: "Mushroom Fried Rice", price: "100" },
    { name: "Gobi Fried Rice", price: "100" },
    { name: "Ghee Rice", price: "100" },
    { name: "Kaju Rice", price: "100" },
    { name: "Tomato Rice", price: "80" },
    { name: "Lemon Rice", price: "80" },
    { name: "Palak Rice", price: "80" },
    { name: "Jeera Rice", price: "80" },
    { name: "Curd Rice", price: "60" },
    { name: "Pudina Rice", price: "100" },
    { name: "Dal Rice", price: "100" },
    { name: "Masala Rice", price: "100" },
  ],
  roti: [
    { name: "Plain Tandoori Roti", price: "20" },
    { name: "Butter Roti", price: "30" },
    { name: "Plain Naan / Plain Kulcha", price: "30" },
    {
      name: "Butter Naan",
      price: "40",
      isSpecial: true,
      image: "assets/butter-naan.jpg",
    },
    { name: "Butter Kulcha", price: "40" },
    { name: "Aloo Paratha", price: "50" },
    { name: "Paneer Paratha", price: "60" },
    { name: "Garlic Naan", price: "60" },
  ],
  burgers: [
    { name: "Veg Classic Burger", price: "60" },
    { name: "Aloo Tikki Burger", price: "50" },
    { name: "Paneer Tikka Burger", price: "80", isSpecial: true },
    { name: "Veg Cheesy Burger", price: "70" },
  ],
  snacks: [
    { name: "Nuggets", price: "70" },
    { name: "Smilies", price: "70" },
    { name: "Cheese Corn Nuggets", price: "70", isSpecial: true },
    { name: "Veggie Fingers", price: "70" },
    { name: "Veg Masala Nuggets", price: "70" },
    { name: "Cheesy Pizza Fingers", price: "70" },
  ],
  fries: [
    {
      name: "French Fries",
      price: "50",
      image: "assets/french-fries.jpg",
    },
    { name: "Peri Peri Fries", price: "60" },
    { name: "Cheesy Fries", price: "70", isSpecial: true },
    { name: "Crispy Honey Fries", price: "100" },
  ],
  soups: [
    { name: "Tomato Soup", price: "50" },
    { name: "Veg Soup", price: "50" },
    { name: "Mushroom Soup", price: "60" },
    { name: "Ginger Soup", price: "50" },
    { name: "Pepper Soup", price: "50" },
    { name: "Corn Soup", price: "60" },
    { name: "Mancho Soup", price: "70" },
    { name: "Hot & Sour", price: "70", isSpecial: true },
  ],
  vadaPav: [
    {
      name: "Mumbai Style Vada Pav",
      price: "50",
      isSpecial: true,
      image: "assets/vada-pav.jpg",
    },
    { name: "Masala Vada Pav", price: "60" },
    { name: "Cheesy Vada Pav", price: "70" },
  ],
  pavBhaji: [
    {
      name: "Mumbai Style Pav Bhaji",
      price: "80",
      isSpecial: true,
      image: "assets/pav-bhaji.jpg",
    },
    { name: "Cheesy Pav Bhaji", price: "100" },
  ],
  sandwiches: [
    { name: "Aloo Masala", price: "50" },
    { name: "Paneer Tikka", price: "80", isSpecial: true },
    { name: "Corn & Cheesy", price: "80" },
    { name: "Paneer Sandwich", price: "80" },
    { name: "Mushroom Sandwich", price: "70" },
    { name: "Veg Cheese", price: "60" },
  ],
  pizzas: [
    {
      name: "Farm House",
      ingredients: "Capsicum, Mushroom, Tomato, Cheese",
      regularPrice: "150",
      largePrice: "190",
    },
    {
      name: "Deluxe Veggie",
      ingredients: "Onion, Capsicum, Mushroom, Paneer, Corn, Cheese",
      regularPrice: "180",
      largePrice: "240",
      isSpecial: true,
    },
    {
      name: "Veggie Supreme",
      ingredients:
        "Corn, Black Olive, Onion, Capsicum, Mushroom, Tomato, Jalapeno, Cheese",
      regularPrice: "200",
      largePrice: "250",
      isSpecial: true,
    },
    {
      name: "Cheesy Corn",
      ingredients: "Corn, Cheese",
      regularPrice: "120",
      largePrice: "150",
    },
    {
      name: "Fresh Veggie",
      ingredients: "Onion, Capsicum",
      regularPrice: "100",
      largePrice: "120",
    },
    {
      name: "Paneer Delight",
      ingredients: "Paneer, Red Paparika, Capsicum, Cheese",
      regularPrice: "150",
      largePrice: "190",
    },
  ],
  pizzaImage: "assets/pizza.jpg",
};

const FALLBACK_IMG =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";
window.FALLBACK_IMG = FALLBACK_IMG;

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderMenuItem(item) {
  const badge = item.isSpecial
    ? `<span class="popular-badge">★ Popular</span>`
    : "";
  const image = item.image
    ? `<div class="item-image"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" loading="lazy" onerror="this.onerror=null;this.src=FALLBACK_IMG" /></div>`
    : "";
  const description = item.description
    ? `<p class="item-desc">${escapeHtml(item.description)}</p>`
    : "";

  return `
    <div class="menu-item">
      ${image}
      <div class="item-body">
        <div class="item-row">
          <h3 class="item-name">${escapeHtml(item.name)}${badge}</h3>
          <span class="item-price">₹${escapeHtml(item.price)}</span>
        </div>
        ${description}
      </div>
    </div>
  `;
}

function renderPizzaItem(item) {
  const badge = item.isSpecial
    ? `<span class="popular-badge">★ Popular</span>`
    : "";

  return `
    <div class="pizza-item">
      <div>
        <h3 class="pizza-name">${escapeHtml(item.name)}${badge}</h3>
        <p class="pizza-ingredients">${escapeHtml(item.ingredients)}</p>
      </div>
      <div class="pizza-prices">
        <div class="price-chip regular">
          <span class="label">Regular:</span>
          <span class="value">₹${escapeHtml(item.regularPrice)}</span>
        </div>
        <div class="price-chip large">
          <span class="label">Large:</span>
          <span class="value">₹${escapeHtml(item.largePrice)}</span>
        </div>
      </div>
    </div>
  `;
}

const CHEVRON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`;

const CATEGORIES = [
  { id: "starters", label: "Starters" },
  { id: "rice", label: "Rice" },
  { id: "roti", label: "Roti" },
  { id: "burgers", label: "Burgers" },
  { id: "snacks", label: "Snacks" },
  { id: "fries", label: "Fries" },
  { id: "soups", label: "Soups" },
  { id: "vada", label: "Vada Pav" },
  { id: "pav", label: "Pav Bhaji" },
  { id: "sandwiches", label: "Sandwiches" },
  { id: "pizza", label: "Pizza" },
];

function renderSection(title, iconKey, items, options = {}) {
  const iconClass = options.smallIcon ? "section-icon sm" : "section-icon";
  const itemsHtml = items.map(renderMenuItem).join("");

  return `
    <div class="menu-section">
      <button type="button" class="section-toggle" aria-expanded="true">
        <div class="section-header">
          <span class="${iconClass}">${ICONS[iconKey]}</span>
          <h2 class="section-title">${escapeHtml(title)}</h2>
        </div>
        <span class="chevron" aria-hidden="true">${CHEVRON}</span>
      </button>
      <div class="section-header section-header-desktop">
        <span class="${iconClass}">${ICONS[iconKey]}</span>
        <h2 class="section-title">${escapeHtml(title)}</h2>
      </div>
      <div class="section-body">
        <div class="menu-items">${itemsHtml}</div>
      </div>
    </div>
  `;
}

function renderCategoryNav() {
  const nav = document.getElementById("category-nav");
  if (!nav) return;

  nav.innerHTML = CATEGORIES.map(
    (cat) =>
      `<a class="cat-chip" href="#${cat.id}">${escapeHtml(cat.label)}</a>`
  ).join("");
}

function isMobile() {
  return window.matchMedia("(max-width: 767px)").matches;
}

function setupAccordion() {
  const panels = document.querySelectorAll(".panel[data-accordion]");
  const mobile = isMobile();

  panels.forEach((panel, index) => {
    const toggle = panel.querySelector(".section-toggle");
    if (!toggle) return;

    if (!panel.dataset.ready) {
      if (mobile && index > 0) {
        panel.classList.add("is-collapsed");
        toggle.setAttribute("aria-expanded", "false");
      }
      panel.dataset.ready = "1";
    }

    if (!mobile) {
      panel.classList.remove("is-collapsed");
      toggle.setAttribute("aria-expanded", "true");
    }

    toggle.onclick = () => {
      if (!isMobile()) return;
      const collapsed = panel.classList.toggle("is-collapsed");
      toggle.setAttribute("aria-expanded", collapsed ? "false" : "true");
    };
  });
}

function renderMenu() {
  const root = document.getElementById("menu-root");
  if (!root) return;

  renderCategoryNav();

  root.innerHTML = `
    <div class="grid-2">
      <div class="panel starters" id="starters" data-accordion>
        ${renderSection("Starters", "flame", menuData.starters)}
      </div>

      <div>
        <div class="panel rice" id="rice" data-accordion>
          ${renderSection("Rice Items", "utensils", menuData.rice)}
        </div>
        <div class="panel roti" id="roti" data-accordion>
          ${renderSection("Tandoori Roti", "coffee", menuData.roti)}
        </div>
      </div>
    </div>

    <div class="grid-4">
      <div class="panel burgers sm" id="burgers" data-accordion>
        ${renderSection("Burgers", "drumstick", menuData.burgers, { smallIcon: true })}
      </div>
      <div class="panel snacks sm" id="snacks" data-accordion>
        ${renderSection("Snacks", "drumstick", menuData.snacks, { smallIcon: true })}
      </div>
      <div class="panel fries sm" id="fries" data-accordion>
        ${renderSection("Fries", "drumstick", menuData.fries, { smallIcon: true })}
      </div>
      <div class="panel soups sm" id="soups" data-accordion>
        ${renderSection("Soups", "soup", menuData.soups, { smallIcon: true })}
      </div>
    </div>

    <div class="grid-3">
      <div class="panel vada" id="vada" data-accordion>
        ${renderSection("Vada Pav", "coffee", menuData.vadaPav, { smallIcon: true })}
      </div>
      <div class="panel pav" id="pav" data-accordion>
        ${renderSection("Pav Bhaji", "coffee", menuData.pavBhaji, { smallIcon: true })}
      </div>
      <div class="panel sandwiches" id="sandwiches" data-accordion>
        ${renderSection("Sandwiches", "sandwich", menuData.sandwiches, { smallIcon: true })}
      </div>
    </div>

    <div class="panel pizza" id="pizza" data-accordion>
      <div class="menu-section">
        <button type="button" class="section-toggle" aria-expanded="true">
          <div class="section-header">
            <span class="section-icon">${ICONS.pizza}</span>
            <h2 class="section-title">Pizza</h2>
          </div>
          <span class="chevron" aria-hidden="true">${CHEVRON}</span>
        </button>
        <div class="section-header section-header-desktop">
          <span class="section-icon">${ICONS.pizza}</span>
          <h2 class="section-title">Pizza</h2>
        </div>
        <div class="section-body">
          <div class="pizza-hero">
            <img src="${escapeHtml(menuData.pizzaImage)}" alt="Pizza" loading="lazy" onerror="this.onerror=null;this.src=FALLBACK_IMG" />
          </div>
          <div class="pizza-grid">
            ${menuData.pizzas.map(renderPizzaItem).join("")}
          </div>
        </div>
      </div>
    </div>

    <div class="menu-footer">
      <div class="footer-box">
        <p>All prices are in Indian Rupees (₹)</p>
        <p>Please inform our staff of any dietary restrictions or allergies</p>
        <div class="footer-decor">
          <div class="line"></div>
          <div class="dot"></div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  `;

  setupAccordion();

  document.querySelectorAll(".cat-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const id = chip.getAttribute("href")?.slice(1);
      const panel = id ? document.getElementById(id) : null;
      if (!panel || !isMobile()) return;
      panel.classList.remove("is-collapsed");
      const toggle = panel.querySelector(".section-toggle");
      if (toggle) toggle.setAttribute("aria-expanded", "true");
    });
  });
}

document.addEventListener("DOMContentLoaded", renderMenu);
