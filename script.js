const products = [
    { id: 1, name: "Apple", price: 2 },
    { id: 2, name: "Banana", price: 1 },
    { id: 3, name: "Orange", price: 3 }
  ];
  
  const cart = [];
  
  function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(div);
    });
  }
  
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    renderCart();
  }
  
  function renderCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    cart.forEach(item => {
      const div = document.createElement('div');
      div.textContent = `${item.name} - $${item.price}`;
      cartDiv.appendChild(div);
    });
  }
  
  renderProducts();
  