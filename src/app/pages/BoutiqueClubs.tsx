export default function BoutiqueClubs({ onNavigate }) {
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

  const clubsProducts = [
    {
      id: 1,
      name: "Real Madrid",
      price: "89.99 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDJMjr8qCmlepxgCAZeaxiHj9Po9Daq3IPfA&s",
    },
    {
      id: 2,
      name: "FC Barcelone",
      price: "89.99 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_cgHJm10LpBHfBZA8h3R14QZBClbzpJPyPw&s",
    },
    {
      id: 3,
      name: "Man United",
      price: "89.99 DH",
      image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/e1a2021d272842b0b7e9cdc61055e9ed_9366/JI7423_01_laydown.jpg",
    },
    {
      id: 4,
      name: "Liverpool FC",
      price: "89.99 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpXZe_r_pw1Pb8XRoZIFbEpnKzABtBhtxPXw&s",
    },
    {
      id: 5,
      name: "PSG Paris",
      price: "89.99 DH",
      image: "https://images.footballfanatics.com/paris-saint-germain/special-edition-psg-nike-home-stadium-shirt-2024-25-kids-champions-of-europe-2025_ss5_p-203176389+pv-2+u-o6tihsc4adjnejmdff0j+v-srhti54bflabxtjorl08.jpg?_hv=2&w=1018",
    },
    {
      id: 6,
      name: "Bayern Munich",
      price: "89.99 DH",
      image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/04f3367fcc874b80ada183ac69f9ca05_9366/JJ2143_01_laydown.jpg",
    },
    {
      id: 7,
      name: "Chelsea FC",
      price: "89.99 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY2-zz7bEAX609tXtd_Dan1AFJpZfwYsQntg&s",
    },
    {
      id: 8,
      name: "AC Milan",
      price: "89.99 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMzB5mWU5vCIgezdU6Qq1NvfaDjGRhJ6G9gQ&s",
    },
    {
      id: 9,
      name: "Juventus",
      price: "89.99 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRuZRti_ZCxLEz9itVPJEscQ1k8vDis1lGjA&s",
    },
    {
      id: 10,
      name: "Inter Milan",
      price: "89.99 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCDcwWfEELnFLLZ8P2FW8Qqx8k6OWaVyOLQ&s",
    },
    {
      id: 11,
      name: "Arsenal FC",
      price: "89.99 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLfJ8MnEO7VQe3vJfMzvAn6E-D2zJCN0cTQw&s",
    },
    {
      id: 12,
      name: "Atletico Madrid",
      price: "89.99 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJmQNa9n51G3Py96bOXI76D66G7z2b3vcRcQ&s",
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
            <h1 className="text-xl font-semibold">Clubs</h1>
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
          {clubsProducts.map((product) => (
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
