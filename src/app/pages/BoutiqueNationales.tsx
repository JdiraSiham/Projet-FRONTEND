export default function BoutiqueNationales({ onNavigate }) {
  const addToCart = (product) => {
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 md:top-24 right-4 bg-[#235A3D] text-white px-4 py-3 rounded-lg shadow-xl z-50';
    notification.textContent = '✓ Ajouté au panier';
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
  };

  const buyNow = (product) => {
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 md:top-24 right-4 bg-[#235A3D] text-white px-4 py-3 rounded-lg shadow-xl z-50';
    notification.textContent = '✓ Redirection vers le paiement...';
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.remove();
      onNavigate('mes-commandes');
    }, 1500);
  };

  const nationalProducts = [
    {
      id: 1,
      name: "Maillot Maroc",
      price: "79.99 DH",
      image: "https://sporhousepro.ma/wp-content/uploads/2024/11/frmf-away-jersey-replica.webp",
    },
    {
      id: 2,
      name: "Maillot Argentina",
      price: "79.99 DH",
      image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/a98e2173ceb5427980bdd77bea1b4f27_9366/KA8125_01_laydown.jpg",
    },
    {
      id: 3,
      name: "Maillot Portugal",
      price: "79.99 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjMYpC5oNAg9RC2miQY-tfX-7AnwNQgYZ3Zg&s",
    },
    {
      id: 4,
      name: "Maillot France",
      price: "79.99 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6F_r4xU7AHxMWqWLvnQpIgGR0BnLqgKNh5g&s",
    },
    {
      id: 5,
      name: "Maillot Brésil",
      price: "79.99 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR5h9V3wqf7YJ8Zl_YQNYkd8TwYpZCRhOxZQ&s",
    },
    {
      id: 6,
      name: "Maillot Espagne",
      price: "79.99 DH",
      image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/cbb48df5f8af470094aac4e2e26b78cd_9366/JJ8942_01_laydown.jpg",
    },
    {
      id: 7,
      name: "Maillot Allemagne",
      price: "79.99 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb7xwI5tIExsAKjMh-GI3pQy-vXYqRSXdAWw&s",
    },
    {
      id: 8,
      name: "Maillot Italie",
      price: "79.99 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCk37Lw3i9qYvyPLtU5fqd1nt88ksXHdCHVA&s",
    },
    {
      id: 9,
      name: "Maillot Angleterre",
      price: "79.99 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxjfBkXJKL6vDJ09mSqLdY4t8Tgh09zXFHJw&s",
    },
    {
      id: 10,
      name: "Maillot Belgique",
      price: "79.99 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs5b8JbYoR3hEGdGHU9xHcU2h4c7lQ7vyvCw&s",
    },
    {
      id: 11,
      name: "Maillot Uruguay",
      price: "79.99 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB5c35wfY3bDfqP_GnGqLRXh0ZzfJf3XqpVQ&s",
    },
    {
      id: 12,
      name: "Maillot Croatie",
      price: "79.99 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnzV5xjR3HpXB0eo_2jFmRSJxqUiY0XYV7oA&s",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white px-4 py-4 sticky top-0 md:top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-3">
            <button 
              onClick={() => onNavigate('boutique')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <h1 className="text-xl font-semibold">Équipes Nationales</h1>
          </div>
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#235A3D]"
            />
          </div>
        </div>
      </div>

      <section className="px-4 py-6 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {nationalProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 md:h-56 object-cover"
              />
              <div className="p-3">
                <h3 className="text-sm md:text-base font-semibold mb-1 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-base md:text-lg font-bold text-[#235A3D] mb-3">
                  {product.price}
                </p>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full py-2 bg-white border-2 border-[#235A3D] text-[#235A3D] rounded-lg hover:bg-[#235A3D] hover:text-white transition-all text-xs md:text-sm font-medium"
                  >
                    Ajouter au panier
                  </button>
                  <button
                    onClick={() => buyNow(product)}
                    className="w-full py-2 bg-[#235A3D] text-white rounded-lg hover:bg-[#1d4a32] transition-all text-xs md:text-sm font-medium"
                  >
                    Acheter maintenant
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
