// ===== SHARED CART LOGIC (uses browser localStorage) =====

function getCart() {
    const raw = localStorage.getItem("om_cart");
    return raw ? JSON.parse(raw) : [];
  }
  
  function saveCart(cart) {
    localStorage.setItem("om_cart", JSON.stringify(cart));
  }
  
  function addToCart(item) {
    // item = { product_id, name, price, memory_id (optional), qty }
    const cart = getCart();
    cart.push(item);
    saveCart(cart);
  }
  
  function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
  }
  
  function getCartTotal(cart) {
    return cart.reduce((sum, item) => sum + (item.price * (item.qty || 1)), 0);
  }
  
  function getCartCount() {
    return getCart().length;
  }