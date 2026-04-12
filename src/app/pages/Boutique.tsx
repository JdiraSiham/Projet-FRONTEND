import { useState } from 'react';

export default function Boutique({ onNavigate }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
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
      price: "1100 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDJMjr8qCmlepxgCAZeaxiHj9Po9Daq3IPfA&s",
    },
    {
      id: 2,
      name: "FC Barcelone",
      price: "1100 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_cgHJm10LpBHfBZA8h3R14QZBClbzpJPyPw&s",
    },
    {
      id: 3,
      name: "Man United",
      price: "900 DH",
      image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/e1a2021d272842b0b7e9cdc61055e9ed_9366/JI7423_01_laydown.jpg",
    },
  ];

  const nationalProducts = [
    {
      id: 4,
      name: "Maillot Maroc",
      price: "800 DH",
      image: "https://sporhousepro.ma/wp-content/uploads/2024/11/frmf-away-jersey-replica.webp",
    },
    {
      id: 5,
      name: "Maillot Argentina",
      price: "900 DH",
      image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/a98e2173ceb5427980bdd77bea1b4f27_9366/KA8125_01_laydown.jpg",
    },
    {
      id: 6,
      name: "Maillot Portugal",
      price: "900 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjMYpC5oNAg9RC2miQY-tfX-7AnwNQgYZ3Zg&s",
    },
  ];

  const equipmentProducts = [
    {
      id: 7,
      name: "Ballon PUMA",
      price: "800 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyz-Or9jFDopKQUyCqnLQflDNCJ1ENLeByKg&s",
    },
    {
      id: 8,
      name: "Crampons Adidas",
      price: "600 DH",
      image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/aa61d9846e5b440fae882f4140608f73_9366/JS0378_HM1.jpg",
    },
    {
      id: 9,
      name: "Gants de gardien",
      price: "400 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRYTw1PJ-oKb1jwDxdbdqvFR4YEd89_UtYQ&s",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white px-4 py-4 sticky top-0 md:top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <div className="flex-1 relative">
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
          <button
            onClick={() => onNavigate('mes-commandes')}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </button>
        </div>
      </div>

      <section className="px-4 py-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl md:text-2xl font-semibold">Clubs</h2>
            <button onClick={() => onNavigate('boutique-clubs')} className="text-[#235A3D] hover:text-[#1d4a32] flex items-center gap-1 text-sm font-medium">
              Voir tout
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {clubsProducts.map((product) => (
              <div key={product.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all border border-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 md:h-48 object-cover"
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
        </div>
      </section>

      <section className="px-4 py-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl md:text-2xl font-semibold">Équipes Nationales</h2>
            <button onClick={() => onNavigate('boutique-nationales')} className="text-[#235A3D] hover:text-[#1d4a32] flex items-center gap-1 text-sm font-medium">
              Voir tout
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {nationalProducts.map((product) => (
              <div key={product.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all border border-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 md:h-48 object-cover"
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
        </div>
      </section>

      <section className="px-4 py-6 max-w-7xl mx-auto pb-24">
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl md:text-2xl font-semibold">Équipements de football</h2>
            <button onClick={() => onNavigate('boutique-equipements')} className="text-[#235A3D] hover:text-[#1d4a32] flex items-center gap-1 text-sm font-medium">
              Voir tout
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {equipmentProducts.map((product) => (
              <div key={product.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all border border-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 md:h-48 object-cover"
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
        </div>
      </section>
    </div>
  );
}
