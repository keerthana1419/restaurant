// ── MENU DATA ─────────────────────────────────────────
const menuData = [
  // STARTERS
  { id:1, name:'Bruschetta al Pomodoro', category:'starters', img:'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&auto=format&fit=crop', price:9.99, desc:'Toasted sourdough topped with ripe Roma tomatoes, fresh basil, garlic, and a drizzle of extra virgin olive oil.', tags:['veg','popular'], rating:4.8, reviews:212, time:'10 min', cal:'180 kcal' },
  { id:2, name:'Arancini di Riso', category:'starters', img:'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&auto=format&fit=crop', price:11.99, desc:'Crispy Sicilian rice balls stuffed with mozzarella and sun-dried tomatoes, served with marinara dipping sauce.', tags:['veg'], rating:4.7, reviews:178, time:'12 min', cal:'320 kcal' },
  { id:3, name:'Calamari Fritti', category:'starters', img:'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&auto=format&fit=crop', price:13.99, desc:'Tender rings of calamari lightly dusted in seasoned flour and flash-fried to golden perfection. Served with lemon aioli.', tags:['spicy','popular'], rating:4.9, reviews:301, time:'10 min', cal:'290 kcal' },
  { id:4, name:'Burrata e Prosciutto', category:'starters', img:'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&auto=format&fit=crop', price:15.99, desc:'Creamy burrata cheese served alongside paper-thin slices of Parma prosciutto, rocket leaves, and aged balsamic.', tags:['popular'], rating:4.9, reviews:254, time:'5 min', cal:'340 kcal' },
  { id:5, name:'Zuppa di Verdure', category:'starters', img:'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format&fit=crop', price:8.99, desc:'Hearty Tuscan vegetable soup with cannellini beans, seasonal vegetables, rosemary, and crusty bread.', tags:['veg','vegan'], rating:4.6, reviews:132, time:'8 min', cal:'210 kcal' },

  // PASTA
  { id:6, name:'Spaghetti Carbonara', category:'pasta', img:'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&auto=format&fit=crop', price:16.99, desc:'Classic Roman pasta with silky egg sauce, crispy guanciale, Pecorino Romano, and cracked black pepper.', tags:['popular'], rating:4.9, reviews:520, time:'18 min', cal:'650 kcal' },
  { id:7, name:"Penne all'Arrabbiata", category:'pasta', img:'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=600&auto=format&fit=crop', price:14.99, desc:'Penne pasta tossed in a fiery tomato sauce with garlic, red chilli flakes, and fresh parsley.', tags:['veg','vegan','spicy'], rating:4.7, reviews:310, time:'18 min', cal:'520 kcal' },
  { id:8, name:'Tagliatelle al Ragù', category:'pasta', img:'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&auto=format&fit=crop', price:18.99, desc:'Slow-braised Bolognese meat sauce with hand-rolled egg tagliatelle, finished with Parmigiano Reggiano.', tags:['popular'], rating:4.8, reviews:445, time:'22 min', cal:'720 kcal' },
  { id:9, name:'Rigatoni alla Norma', category:'pasta', img:'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&auto=format&fit=crop', price:15.99, desc:'Sicilian classic — rigatoni with roasted aubergine, San Marzano tomatoes, basil, and ricotta salata.', tags:['veg'], rating:4.6, reviews:190, time:'20 min', cal:'580 kcal' },
  { id:10, name:'Truffle Mushroom Risotto', category:'pasta', img:'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&auto=format&fit=crop', price:22.99, desc:'Creamy Arborio rice slowly cooked with wild porcini, fresh black truffle shavings, and Parmigiano Reggiano.', tags:['veg','popular'], rating:4.9, reviews:387, time:'25 min', cal:'680 kcal' },
  { id:11, name:'Lobster Linguine', category:'pasta', img:'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&auto=format&fit=crop', price:32.99, desc:'Delicate linguine tossed with fresh Atlantic lobster, cherry tomatoes, white wine, garlic, and chilli.', tags:['spicy'], rating:5.0, reviews:211, time:'25 min', cal:'760 kcal' },

  // PIZZA
  { id:12, name:'Margherita Classica', category:'pizza', img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&auto=format&fit=crop', price:14.99, desc:'The timeless Neapolitan pizza — San Marzano tomato sauce, fresh fior di latte mozzarella, and fragrant basil.', tags:['veg','popular'], rating:4.8, reviews:605, time:'15 min', cal:'720 kcal' },
  { id:13, name:'Diavola Piccante', category:'pizza', img:'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&auto=format&fit=crop', price:17.99, desc:'Fiery Calabrian salami, nduja spread, roasted red peppers, mozzarella, and a honey drizzle on a crispy base.', tags:['spicy','popular'], rating:4.9, reviews:498, time:'15 min', cal:'860 kcal' },
  { id:14, name:'Quattro Formaggi', category:'pizza', img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop', price:18.99, desc:"A cheese lover's dream — mozzarella, gorgonzola, fontina, and Parmigiano Reggiano on a white cream base.", tags:['veg'], rating:4.7, reviews:312, time:'15 min', cal:'920 kcal' },
  { id:15, name:'Prosciutto e Funghi', category:'pizza', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop', price:19.99, desc:'Wood-fired pizza topped with Parma ham, sautéed wild mushrooms, fior di latte, and fresh thyme.', tags:['popular'], rating:4.8, reviews:276, time:'15 min', cal:'800 kcal' },
  { id:16, name:'Vegan Garden Pizza', category:'pizza', img:'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=600&auto=format&fit=crop', price:16.99, desc:'Tomato base with roasted courgette, peppers, sun-dried tomatoes, olives, and a cashew-cream drizzle.', tags:['veg','vegan'], rating:4.5, reviews:145, time:'15 min', cal:'640 kcal' },

  // MAINS
  { id:17, name:'Osso Buco alla Milanese', category:'mains', img:'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop', price:34.99, desc:'Braised veal shanks slow-cooked with white wine, gremolata, and served alongside saffron risotto Milanese.', tags:['popular'], rating:5.0, reviews:189, time:'35 min', cal:'920 kcal' },
  { id:18, name:'Branzino al Forno', category:'mains', img:'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop', price:29.99, desc:'Whole sea bass roasted with lemon, capers, olives, cherry tomatoes, and fresh herbs. Served with roasted potatoes.', tags:[], rating:4.8, reviews:214, time:'30 min', cal:'540 kcal' },
  { id:19, name:'Pollo alla Parmigiana', category:'mains', img:'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=600&auto=format&fit=crop', price:24.99, desc:'Golden chicken breast topped with rich tomato sauce, melted mozzarella, and fresh basil. Served with garlic bread.', tags:['popular'], rating:4.7, reviews:342, time:'28 min', cal:'780 kcal' },
  { id:20, name:'Bistecca Fiorentina', category:'mains', img:'https://images.unsplash.com/photo-1558030006-450675393462?w=600&auto=format&fit=crop', price:44.99, desc:'Thick-cut T-bone steak grilled over charcoal, seasoned simply with sea salt, rosemary, and lemon. A Florentine legend.', tags:['popular'], rating:4.9, reviews:267, time:'25 min', cal:'1100 kcal' },

  // DESSERTS
  { id:21, name:'Tiramisu della Casa', category:'desserts', img:'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&auto=format&fit=crop', price:9.99, desc:'Our house classic — espresso-soaked savoiardi biscuits layered with mascarpone cream and dusted with cocoa.', tags:['veg','popular'], rating:5.0, reviews:632, time:'0 min', cal:'480 kcal' },
  { id:22, name:'Panna Cotta al Mango', category:'desserts', img:'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&auto=format&fit=crop', price:8.99, desc:'Silky vanilla panna cotta topped with a vibrant fresh mango coulis and toasted coconut flakes.', tags:['veg'], rating:4.7, reviews:198, time:'0 min', cal:'320 kcal' },
  { id:23, name:'Cannoli Siciliani', category:'desserts', img:'https://images.unsplash.com/photo-1611293388250-580b08c4a145?w=600&auto=format&fit=crop', price:7.99, desc:'Crispy pastry shells filled with sweetened ricotta, chocolate chips, and candied orange peel.', tags:['veg','popular'], rating:4.8, reviews:286, time:'0 min', cal:'390 kcal' },
  { id:24, name:'Gelato Selection', category:'desserts', img:'https://images.unsplash.com/photo-1567206563114-c179afbde2e6?w=600&auto=format&fit=crop', price:6.99, desc:'Three scoops of artisan gelato — choose from pistachio, stracciatella, limone, and mango sorbet.', tags:['veg','vegan'], rating:4.9, reviews:421, time:'0 min', cal:'280 kcal' },

  // DRINKS
  { id:25, name:'Aperol Spritz', category:'drinks', img:'https://images.unsplash.com/photo-1560508180-03f285f67ded?w=600&auto=format&fit=crop', price:10.99, desc:'The iconic Italian aperitivo — Aperol, Prosecco, a splash of soda, and a fresh orange slice.', tags:['popular'], rating:4.9, reviews:389, time:'3 min', cal:'200 kcal' },
  { id:26, name:'Fresh Limonata', category:'drinks', img:'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&auto=format&fit=crop', price:5.99, desc:'Freshly squeezed Sicilian lemons, cold water, and a touch of honey. Refreshing and zesty.', tags:['veg','vegan'], rating:4.8, reviews:211, time:'3 min', cal:'95 kcal' },
  { id:27, name:'Italian Espresso', category:'drinks', img:'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&auto=format&fit=crop', price:3.99, desc:'A short, intense shot of our signature house-blend espresso roasted in Napoli. The perfect finisher.', tags:['veg','vegan','popular'], rating:4.9, reviews:512, time:'3 min', cal:'5 kcal' },
  { id:28, name:'Negroni Classico', category:'drinks', img:'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop', price:12.99, desc:'Gin, Campari, and sweet vermouth stirred over ice, garnished with a twist of orange peel.', tags:[], rating:4.8, reviews:178, time:'3 min', cal:'180 kcal' },
];

// ── STATE ─────────────────────────────────────────────
let activeCategory = 'all';
let activeDiet = 'all';
let cart = JSON.parse(localStorage.getItem('bcCart') || '[]');
let currentItem = null;
let modalQty = 1;

// ── RENDER MENU ───────────────────────────────────────
function renderMenu() {
  const search = document.getElementById('searchInput').value.toLowerCase();
  const grid = document.getElementById('menuGrid');

  const filtered = menuData.filter(item => {
    const catMatch = activeCategory === 'all' || item.category === activeCategory;
    const dietMatch = activeDiet === 'all' || item.tags.includes(activeDiet);
    const searchMatch = item.name.toLowerCase().includes(search) || item.desc.toLowerCase().includes(search);
    return catMatch && dietMatch && searchMatch;
  });

  document.getElementById('noResults').style.display = filtered.length === 0 ? 'block' : 'none';

  grid.innerHTML = filtered.map(item => `
    <div class="menu-card" onclick="openModal(${item.id})">
      <div class="card-img">
        <img src="${item.img}" alt="${item.name}" loading="lazy" />
        <div class="card-badges">
          ${item.tags.map(t => `<span class="badge badge-${t}">${tagLabel(t)}</span>`).join('')}
        </div>
      </div>
      <div class="card-body">
        <p class="card-category">${item.category}</p>
        <h3 class="card-name">${item.name}</h3>
        <p class="card-desc">${item.desc}</p>
        <div class="card-footer">
          <div>
            <span class="card-price">$${item.price.toFixed(2)}</span>
            <div class="card-rating"><i class="fas fa-star"></i>${item.rating} (${item.reviews})</div>
          </div>
          <button class="add-btn" onclick="event.stopPropagation(); addToCart(${item.id}, 1)" title="Add to order">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function tagLabel(t) {
  const labels = { veg:'🟢 Veg', vegan:'🌱 Vegan', spicy:'🌶️ Spicy', popular:'⭐ Popular' };
  return labels[t] || t;
}

// ── FILTERS ───────────────────────────────────────────
function filterCategory(cat, btn) {
  activeCategory = cat;
  document.querySelectorAll('.pill').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMenu();
}

function filterDiet(diet, btn) {
  activeDiet = diet;
  document.querySelectorAll('.diet-pill').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMenu();
}

function filterMenu() { renderMenu(); }

// ── MODAL ─────────────────────────────────────────────
function openModal(id) {
  currentItem = menuData.find(i => i.id === id);
  if (!currentItem) return;
  modalQty = 1;

  document.getElementById('modalEmoji').innerHTML = `<img src="${currentItem.img}" alt="${currentItem.name}" style="width:100%;height:100%;object-fit:cover;" />`;
  document.getElementById('modalName').textContent = currentItem.name;
  document.getElementById('modalDesc').textContent = currentItem.desc;
  document.getElementById('modalTime').textContent = currentItem.time;
  document.getElementById('modalCal').textContent = currentItem.cal;
  document.getElementById('modalRating').textContent = `${currentItem.rating} (${currentItem.reviews} reviews)`;
  document.getElementById('modalPrice').textContent = `$${currentItem.price.toFixed(2)}`;
  document.getElementById('modalQty').textContent = modalQty;
  document.getElementById('modalBadges').innerHTML = currentItem.tags.map(t => `<span class="badge badge-${t}">${tagLabel(t)}</span>`).join('');

  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('itemModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('itemModal').classList.remove('open');
  document.body.style.overflow = '';
}

function changeQty(delta) {
  modalQty = Math.max(1, modalQty + delta);
  document.getElementById('modalQty').textContent = modalQty;
}

function addFromModal() {
  addToCart(currentItem.id, modalQty);
  closeModal();
}

// ── CART ──────────────────────────────────────────────
function addToCart(id, qty) {
  const item = menuData.find(i => i.id === id);
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id, name: item.name, img: item.img, price: item.price, qty });
  }
  saveCart();
  updateCartUI();
  showToast(`🍽️ ${item.name} added to order!`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart(); updateCartUI();
}

function changeCartQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else { saveCart(); updateCartUI(); }
}

function clearCart() {
  cart = [];
  saveCart(); updateCartUI();
}

function saveCart() {
  localStorage.setItem('bcCart', JSON.stringify(cart));
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = count;

  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');

  if (cart.length === 0) {
    itemsEl.innerHTML = '<div class="empty-cart"><i class="fas fa-utensils"></i><p>Your basket is empty</p></div>';
    footerEl.style.display = 'none';
    return;
  }

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-emoji">
        <img src="${item.img}" alt="${item.name}" style="width:48px;height:48px;object-fit:cover;border-radius:10px;" />
      </div>
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>$${(item.price * item.qty).toFixed(2)}</p>
      </div>
      <div class="cart-item-qty">
        <button onclick="changeCartQty(${item.id}, -1)">−</button>
        <span>${item.qty}</span>
        <button onclick="changeCartQty(${item.id}, 1)">+</button>
      </div>
    </div>
  `).join('');

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('cartTax').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
  footerEl.style.display = 'block';
}

function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('open');
}

function checkout() {
  clearCart();
  toggleCart();
  showToast('🎉 Order placed! Thank you for dining with us.');
}

// ── TOAST ─────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ── RESERVATION FORM ──────────────────────────────────
function submitForm(e) {
  e.preventDefault();
  showToast('✅ Reservation confirmed! See you soon.');
  e.target.reset();
}

// ── NAVBAR SCROLL ─────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

function toggleNav() {
  document.getElementById('mobileNav').classList.toggle('open');
}

// ── KEYBOARD ──────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); }
});

// ── INIT ──────────────────────────────────────────────
renderMenu();
updateCartUI();
