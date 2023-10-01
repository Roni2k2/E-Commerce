const products = [
    { id: 1, name: 'Product 1', price: 10.00 },
    { id: 2, name: 'Product 2', price: 15.00 },
    { id: 3, name: 'Product 3', price: 20.00 },
    { id: 4, name: 'Product 4', price: 25.00 },
];
const cart = [];
let totalPrice = 0;

function Products() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);

    if (product) {
        cart.push(product);
        totalPrice += product.price;
    }

    updateCart();
}

function removeFromCart(productId) {
    const index = cart.findIndex(p => p.id === productId);

    if (index !== -1) {
        const removedProduct = cart.splice(index, 1)[0];
        totalPrice -= removedProduct.price;
    }

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = '';
    cart.forEach(product => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            ${product.name} - $${product.price.toFixed(2)}
            <button onclick="removeFromCart(${product.id})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = totalPrice.toFixed(2);
}

Products();
