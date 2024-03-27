

  // script.js
document.addEventListener("DOMContentLoaded", function () {
    function generateProductCard(title, phone, price, imageUrl) {
      const productContainer = document.getElementById("product-cards");
  
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("bg-white", "rounded-lg", "overflow-hidden", "shadow-md", "product-card");
      cardDiv.innerHTML = `
        <div class="image-container hover:opacity-75">
          <img src="${imageUrl}" alt="${title}" class="w-full h-64 object-cover">
        </div>
        <div class="p-4">
          <h2 class="text-lg font-bold mb-2">${title}</h2>
          <p class="text-gray-700 mb-2">Brend:${phone}</a></p>
          <p class="text-gray-700 mb-2">Price: ${price}</p>
        </div>
      `;
  

      productContainer.appendChild(cardDiv);
    }
  
    const products = [
      { title: "iPhone 13 pro max", phone: "Apple", price: "$700", imageUrl: "https://cdn.arstechnica.net/wp-content/uploads/2021/09/iPhone-13-Pro-Max-back-800x438.jpeg" },
      { title: "iPhone 14 pro max", phone: "Apple", price: "$1100", imageUrl: "https://assets.gqindia.com/photos/6343bda4bac0ed8f5bc20d96/1:1/w_1080,h_1080,c_limit/iPhone-14-Pro-Max-Review_02.jpg" },
      { title: "iPhone 15 pro max", phone: "Apple", price: "$1400", imageUrl: "https://www.ixbt.com/img/n1/news/2023/8/1/iPhone-15-Pro-Colors-Mock-Feature_large.jpg" },
    ];
  
    products.forEach(product => {
      generateProductCard(product.title, product.phone, product.price, product.imageUrl);
    });
  
    const authorLinks = document.querySelectorAll(".author-link");
    authorLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        event.stopPropagation(); 
        alert("Author link clicked: " + link.textContent);
      });
    });
  });
  
