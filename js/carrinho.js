const el=document.getElementById("carrinho");
function render(){
 const c=getCart();
 if(!c.length){el.innerHTML='<div class="empty"><h2>Seu carrinho está vazio</h2><p>Adicione alguns produtos para continuar.</p><a class="btn" href="produtos.html">Ver produtos</a></div>';return}
 const total=c.reduce((s,i)=>s+i.quantidade*i.preco_unitario,0);
 el.innerHTML=`<div class="cart-layout"><div class="table-wrap"><table class="table"><thead><tr><th>Produto</th><th>Quantidade</th><th>Preço</th><th>Subtotal</th><th></th></tr></thead><tbody>${c.map((i,n)=>`<tr><td><b>${i.emoji||"📦"} ${i.nome_produto}</b></td><td><div class="qty"><button onclick="change(${n},-1)">−</button><b>${i.quantidade}</b><button onclick="change(${n},1)">+</button></div></td><td>${money(i.preco_unitario)}</td><td><b>${money(i.quantidade*i.preco_unitario)}</b></td><td><button class="btn danger small" onclick="removeItem(${n})">Remover</button></td></tr>`).join("")}</tbody></table></div><aside class="summary"><h2>Resumo do pedido</h2><div class="summary-row"><span>Itens</span><b>${c.reduce((s,i)=>s+i.quantidade,0)}</b></div><div class="summary-row"><span>Entrega</span><b>Grátis</b></div><div class="summary-total"><span>Total</span><span>${money(total)}</span></div><a class="btn" style="width:100%;margin-top:20px" href="checkout.html">Continuar compra</a><a class="btn secondary" style="width:100%;margin-top:10px" href="produtos.html">Adicionar produtos</a></aside></div>`;
}
function change(n,d){const c=getCart();c[n].quantidade+=d;if(c[n].quantidade<=0)c.splice(n,1);setCart(c);updateCartCount();render()}
function removeItem(n){const c=getCart();c.splice(n,1);setCart(c);updateCartCount();render()}
render();