const DEMO_PRODUCTS=[
{id:1,categoria_id:1,nome:"Fone Bluetooth Pulse",descricao:"Fone sem fio com microfone e bateria de longa duração.",preco:149.90,emoji:"🎧"},
{id:2,categoria_id:1,nome:"Caixa de Som Mini Bass",descricao:"Caixa compacta Bluetooth para música e vídeos.",preco:119.90,emoji:"🔊"},
{id:3,categoria_id:2,nome:"Teclado Mecânico RGB",descricao:"Teclado mecânico compacto com iluminação RGB.",preco:249.90,emoji:"⌨️"},
{id:4,categoria_id:2,nome:"Mouse Gamer Speed",descricao:"Mouse ergonômico com sensor de alta precisão.",preco:129.90,emoji:"🖱️"},
{id:5,categoria_id:3,nome:"Carregador Turbo USB-C",descricao:"Carregador rápido para celulares e dispositivos.",preco:89.90,emoji:"🔌"},
{id:6,categoria_id:3,nome:"Cabo USB-C 2m",descricao:"Cabo reforçado para carregamento e transferência.",preco:39.90,emoji:"🔗"},
{id:7,categoria_id:4,nome:"Webcam Full HD",descricao:"Webcam para aulas, reuniões e chamadas de vídeo.",preco:179.90,emoji:"📷"},
{id:8,categoria_id:4,nome:"Hub USB 4 Portas",descricao:"Expanda as conexões USB do seu computador.",preco:69.90,emoji:"🧩"},
{id:9,categoria_id:4,nome:"Suporte para Notebook",descricao:"Suporte ajustável para melhorar a posição da tela.",preco:99.90,emoji:"💻"},
{id:10,categoria_id:3,nome:"Power Bank 10.000mAh",descricao:"Bateria portátil para carregar seus dispositivos.",preco:129.90,emoji:"🔋"},
{id:11,categoria_id:2,nome:"Mousepad Speed XL",descricao:"Superfície ampla para teclado e mouse.",preco:79.90,emoji:"🖥️"},
{id:12,categoria_id:4,nome:"Headset Gamer Pro",descricao:"Headset com microfone e áudio estéreo.",preco:219.90,emoji:"🎮"}
];
const DEMO_CATEGORIES=[{id:1,nome:"Áudio"},{id:2,nome:"Periféricos"},{id:3,nome:"Acessórios"},{id:4,nome:"Informática"}];
const money=v=>Number(v).toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const getCart=()=>JSON.parse(localStorage.getItem("conecta_cart")||"[]");
const setCart=c=>localStorage.setItem("conecta_cart",JSON.stringify(c));
const getOrders=()=>JSON.parse(localStorage.getItem("conecta_orders")||"[]");
function updateCartCount(){const el=document.getElementById("cartCount");if(el)el.textContent=getCart().reduce((s,i)=>s+i.quantidade,0)}
function toast(msg){const x=document.createElement("div");x.className="toast";x.textContent=msg;document.body.appendChild(x);setTimeout(()=>x.remove(),2200)}
function toggleMenu(){document.querySelector(".navlinks")?.classList.toggle("open")}
function productById(id){return DEMO_PRODUCTS.find(p=>p.id===Number(id))}
updateCartCount();