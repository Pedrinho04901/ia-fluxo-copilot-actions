// Gerado com o prompt: “Crie uma função em JavaScript chamada calculateOrderTotal.
// Ela deve receber uma lista de itens (price e quantity) e um cupom opcional.
// Regras: subtotal = soma(price*quantity). Se cupom 'PROMO10', aplica 10%.
// Se subtotal >= 200, frete é 0, senão frete é 20. Retorne um objeto com subtotal,
// discount, shipping e total com 2 casas decimais.”
function round2(n) {
  return Math.round(n * 100) / 100;
}

function calculateOrderTotal(items, coupon) {
  if (!Array.isArray(items) || items.length === 0) {
    return { subtotal: 0, discount: 0, shipping: 20, total: 20 };
  }

  const subtotal = round2(items.reduce((acc, it) => acc + it.price * it.quantity, 0));
  const discountRate = coupon === "PROMO10" ? 0.1 : 0;
  const discount = round2(subtotal * discountRate);
  const shipping = subtotal >= 200 ? 0 : 20;
  const total = round2(subtotal - discount + shipping);

  return { subtotal, discount, shipping, total };
}

module.exports = { calculateOrderTotal };