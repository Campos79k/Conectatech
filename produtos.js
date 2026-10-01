const el=document.getElementById("produtos"),busca=document.getElementById("busca"),categoria=document.getElementById("categoria"),ordem=document.getElementById("ordem");
categoria.innerHTML+=DEMO_CATEGORIES.map(c=>`<option value="${c.id}">${c.nome}</option>`).join("");
const params=new URLSearchParams(location.search);if(params.get("categoria"))categoria.value=params.get("categoria");
function renderProducts(){
 let t=busca.value.toLowerCase().trim(),c=categoria.value,l=DEMO_PRODUCTS.filter(p=>(!c||String(p.categoria_id)===c)&&(`${p.nome} ${p.descricao}`.toLowerCase().includes(t)));
 if(ordem.value==="menor")l.sort((a,b)=>a.preco-b.preco);if(ordem.value==="maior")l.sort((a,b)=>b.preco-a.preco);
 el.innerHTML=l.length?l.map(card).join(""):'<div class="empty">Nenhum produto encontrado.<br><br><a class="btn" href="produtos.html">Limpar filtros</a></div>';
}
function card(p){return `<article class="product-card"><div class="product-img">${p.emoji}</div><div class="product-body"><h3>${p.nome}</h3><p>${p.descricao}</p><div class="price">${money(p.preco)}</div><button class="btn" onclick="add(${p.id})">Adicionar ao carrinho</button></div></article>`}
function add(id){const p=productById(id),c=getCart(),i=c.find(x=>x.produto_id===id);if(i)i.quantidade++;else c.push({produto_id:p.id,nome_produto:p.nome,quantidade:1,preco_unitario:p.preco,emoji:p.emoji});setCart(c);updateCartCount();toast("Produto adicionado ao carrinho!")}
busca.addEventListener("input",renderProducts);categoria.addEventListener("change",renderProducts);ordem.addEventListener("change",renderProducts);renderProducts();