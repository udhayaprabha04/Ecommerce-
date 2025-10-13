let cartCount = 0;
let cartItems = [];

function changeQty(button, delta) {
  const input = button.parentElement.querySelector('input');
  let value = parseInt(input.value);
  value += delta;
  if (value < 1) value = 1;
  input.value = value;
}

function addToCart(name, price, btn) {
  const quantity = parseInt(btn.parentElement.querySelector('input').value);
  cartCount += quantity;
  document.getElementById('cart-count').innerText = cartCount;

  // Add items to cart preview
  const existing = cartItems.find(item => item.name === name);
  if (existing) {
    existing.qty += quantity;
  } else {
    cartItems.push({ name, price, qty: quantity });
  }
  updateCartPreview();
}

function updateCartPreview() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  if (cartItems.length === 0) {
    cartList.innerHTML = '<li>No items yet</li>';
    return;
  }
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.innerText = `${item.name} x${item.qty} - $${(item.price*item.qty).toFixed(2)}`;
    cartList.appendChild(li);
  });
}

function toggleCart() {
  const cartPreview = document.getElementById('cart-preview');
  cartPreview.style.display = cartPreview.style.display === 'block' ? 'none' : 'block';
}
