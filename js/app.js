const DEMO_PRODUCTS = [
  {
    id: 1,
    categoria_id: 1,
    nome: "Headset Gamer V9 Pro",
    descricao: "Headset gamer com áudio 7.1, microfone e drivers de 53mm.",
    preco: 149.90,
    emoji: "🎧",
    imagem: "imagem/v9 pro.jpg"
  },

  {
    id: 2,
    categoria_id: 4,
    nome: "Webcam Full HD",
    descricao: "Webcam Full HD para aulas, reuniões, streaming e chamadas de vídeo.",
    preco: 179.90,
    emoji: "📷",
    imagem: "imagem/webcan.jpg"
  },

  {
    id: 3,
    categoria_id: 2,
    nome: "Teclado A75 Hall Effect",
    descricao: "Teclado gamer com tecnologia Hall Effect e iluminação RGB.",
    preco: 349.90,
    emoji: "⌨️",
    imagem: "imagem/A75-Hall-Effect-Keyboard.jpg"
  },

  {
    id: 4,
    categoria_id: 3,
    nome: "Cabo HDMI 2.1 8K 144Hz",
    descricao: "Cabo HDMI de alta velocidade para resolução 8K e altas taxas de atualização.",
    preco: 79.90,
    emoji: "🔗",
    imagem: "imagem/cabo hdmi pichau. jpg.jpg"
  },

  {
    id: 5,
    categoria_id: 1,
    nome: "Microfone Fifine RGB",
    descricao: "Microfone para jogos, streaming, gravações e chamadas com iluminação RGB.",
    preco: 299.90,
    emoji: "🎙️",
    imagem: "imagem/microfone fifine.jpg"
  },

  {
    id: 6,
    categoria_id: 4,
    nome: "Monitor AOC G4 QHD 180Hz",
    descricao: "Monitor gamer QHD com taxa de atualização de 180Hz e tempo de resposta de 0,5ms.",
    preco: 1499.90,
    emoji: "🖥️",
    imagem: "imagem/monitor aoc.jpg"
  },

  {
    id: 7,
    categoria_id: 3,
    nome: "Power Bank 10.000mAh",
    descricao: "Bateria portátil para carregar seus dispositivos.",
    preco: 129.90,
    emoji: "🔋",
    imagem: "imagem/power bank.jpg"
  },

  {
    id: 8,
    categoria_id: 4,
    nome: "Suporte para Notebook",
    descricao: "Suporte ajustável para melhorar a posição da tela.",
    preco: 99.90,
    emoji: "💻",
    imagem: "imagem/Suporte notbook.jpg"
  },

  {
    id: 9,
    categoria_id: 2,
    nome: "Mousepad Speed XL",
    descricao: "Superfície ampla para teclado e mouse.",
    preco: 79.90,
    emoji: "🖥️",
    imagem: "imagem/Titorion Mouse Pad Gamer. jpg.jpg"
  },

  {
    id: 10,
    categoria_id: 4,
    nome: "Notebook Gamer ROG Strix G16",
    descricao: "Notebook gamer de alto desempenho da linha ROG.",
    preco: 10.956.36,
    emoji: "💻",
    imagem: "imagem/Notebook Gamer ROG Strix G16.jpg"
  }
];

const DEMO_CATEGORIES = [
  { id: 1, nome: "Áudio" },
  { id: 2, nome: "Periféricos" },
  { id: 3, nome: "Acessórios" },
  { id: 4, nome: "Informática" }
];

const money = v =>
  Number(v).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

const getCart = () =>
  JSON.parse(localStorage.getItem("conecta_cart") || "[]");

const setCart = c =>
  localStorage.setItem("conecta_cart", JSON.stringify(c));

const getOrders = () =>
  JSON.parse(localStorage.getItem("conecta_orders") || "[]");

function updateCartCount() {
  const el = document.getElementById("cartCount");

  if (el) {
    el.textContent = getCart().reduce(
      (s, i) => s + i.quantidade,
      0
    );
  }
}

function toast(msg) {
  const x = document.createElement("div");

  x.className = "toast";
  x.textContent = msg;

  document.body.appendChild(x);

  setTimeout(() => x.remove(), 2200);
}

function toggleMenu() {
  document.querySelector(".navlinks")?.classList.toggle("open");
}

function productById(id) {
  return DEMO_PRODUCTS.find(p => p.id === Number(id));
}


/* =========================================================
   PRODUTOS COM IMAGENS
   ========================================================= */

function renderProducts(products = DEMO_PRODUCTS) {

  const container =
    document.getElementById("products") ||
    document.getElementById("productGrid") ||
    document.getElementById("productsGrid") ||
    document.getElementById("product-list");

  if (!container) {
    console.warn("Container dos produtos não encontrado.");
    return;
  }

  container.innerHTML = products.map(p => {

    const imagem = p.imagem
      ? `
        <img
          src="${p.imagem}"
          alt="${p.nome}"
          class="product-img"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        >

        <span
          class="product-image-fallback"
          style="display:none;"
        >
          ${p.emoji || "📦"}
        </span>
      `
      : `
        <span class="product-image-fallback">
          ${p.emoji || "📦"}
        </span>
      `;

    return `
      <article class="product-card">

        <div class="product-image">
          ${imagem}
        </div>

        <div class="product-info">

          <h3>${p.nome}</h3>

          <p>
            ${p.descricao}
          </p>

          <div class="product-price">
            ${money(p.preco)}
          </div>

          <button
            type="button"
            onclick="addToCart(${p.id})"
          >
            Adicionar ao carrinho
          </button>

        </div>

      </article>
    `;

  }).join("");
}


/* =========================================================
   CSS DAS IMAGENS
   ========================================================= */

function addProductImageStyles() {

  if (document.getElementById("product-image-styles")) {
    return;
  }

  const style = document.createElement("style");

  style.id = "product-image-styles";

  style.textContent = `

    .product-image {
      width: 100%;
      height: 240px;

      display: flex;
      align-items: center;
      justify-content: center;

      overflow: hidden;

      background: #f5f5f5;

      border-radius: 12px;

      margin-bottom: 15px;
    }

    .product-img {
      width: 100%;
      height: 100%;

      object-fit: contain;

      display: block;
    }

    .product-image-fallback {
      width: 100%;
      height: 100%;

      display: flex;

      align-items: center;
      justify-content: center;

      font-size: 64px;
    }

    .product-card {
      overflow: hidden;
    }

    .product-info {
      padding: 10px;
    }

    .product-info h3 {
      margin: 0 0 8px;
    }

    .product-info p {
      margin: 0 0 12px;
    }

    .product-price {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 12px;
    }

  `;

  document.head.appendChild(style);
}


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  addProductImageStyles();

  renderProducts();

  updateCartCount();

});
