const { calculateOrderTotal } = require("../src/orderService");

// Gerado com o prompt: “Crie testes com Jest para a função calculateOrderTotal.
// Cubra: sem itens, com itens sem cupom, com cupom PROMO10, e frete grátis acima de 200.”
describe("calculateOrderTotal", () => {
  test("quando não há itens, retorna total com frete padrão", () => {
    expect(calculateOrderTotal([], null)).toEqual({
      subtotal: 0,
      discount: 0,
      shipping: 20,
      total: 20
    });
  });

  test("calcula subtotal e frete quando subtotal < 200", () => {
    const items = [{ price: 50, quantity: 2 }]; // 100
    expect(calculateOrderTotal(items)).toEqual({
      subtotal: 100,
      discount: 0,
      shipping: 20,
      total: 120
    });
  });

  test("aplica cupom PROMO10", () => {
    const items = [{ price: 100, quantity: 1 }]; // 100
    expect(calculateOrderTotal(items, "PROMO10")).toEqual({
      subtotal: 100,
      discount: 10,
      shipping: 20,
      total: 110
    });
  });

  test("frete grátis quando subtotal >= 200", () => {
    const items = [{ price: 100, quantity: 2 }]; // 200
    expect(calculateOrderTotal(items)).toEqual({
      subtotal: 200,
      discount: 0,
      shipping: 0,
      total: 200
    });
  });
});
