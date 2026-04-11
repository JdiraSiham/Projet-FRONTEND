export default function BoutiqueEquipements({ onNavigate }) {
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

  const equipmentProducts = [
    {
      id: 1,
      name: "Ballon PUMA",
      price: "34 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyz-Or9jFDopKQUyCqnLQflDNCJ1ENLeByKg&s",
    },
    {
      id: 2,
      name: "Crampons Adidas",
      price: "119 DH",
      image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/aa61d9846e5b440fae882f4140608f73_9366/JS0378_HM1.jpg",
    },
    {
      id: 3,
      name: "Gants de gardien",
      price: "39 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRYTw1PJ-oKb1jwDxdbdqvFR4YEd89_UtYQ&s",
    },
    {
      id: 4,
      name: "Protège-tibias Nike",
      price: "25 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOcVkv3kPpMqpwbvXvDhQqCR_f5z7YWuMWw&s",
    },
    {
      id: 5,
      name: "Sac de sport",
      price: "45 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbYlA4w1gL6tB8YqmZf7yK1Y0x2LHFiQqMUw&s",
    },
    {
      id: 6,
      name: "Chaussettes de foot",
      price: "15 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn0fJL7tH1YZO5vGz8YqXwZ0qWTnPmQsxJVQ&s",
    },
    {
      id: 7,
      name: "Ballon Nike Pro",
      price: "39 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mJl8yPmNQ0h5xGzN9qL4YWvX1dKfTqP8Qw&s",
    },
    {
      id: 8,
      name: "Short de foot",
      price: "29 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkOZ5xH8lMqW0vN9YfX7qL2TnP1dKfQxRyVQ&s",
    },
    {
      id: 9,
      name: "Crampons Nike",
      price: "129 DH",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a5b34d23-0586-496e-a8db-bc40fb4fd6d0/JR+PHANTOM+GX+II+CLUB+MG.png",
    },
    {
      id: 10,
      name: "Cône d'entraînement",
      price: "19 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxQpY5vH8lNqW0xM9fY7qL3TnP1dKfRxSyWQ&s",
    },
    {
      id: 11,
      name: "Gourde sport",
      price: "12 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbOqZ6xI9lRqX1yN0gZ8qM4UnQ2eKgSxTzXQ&s",
    },
    {
      id: 12,
      name: "Brassard capitaine",
      price: "8 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcPrY7yJ0mSqY2zO1hA9rN5VoR3fLhTxUzYQ&s",
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
            <h1 className="text-xl font-semibold">Équipements de football</h1>
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
          {equipmentProducts.map((product) => (
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
