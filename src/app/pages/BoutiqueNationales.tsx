import { useState } from 'react';

export default function BoutiqueNationales({ onNavigate, onAddToCart, onBuyNow }) {
  const [searchQuery, setSearchQuery] = useState("");

  const nationalProducts = [
    {
      id: 1,
      name: "Maillot Maroc",
      price: "800 DH",
      image: "https://sporhousepro.ma/wp-content/uploads/2024/11/frmf-away-jersey-replica.webp",
    },
    {
      id: 2,
      name: "Maillot Argentina",
      price: "900 DH",
      image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/a98e2173ceb5427980bdd77bea1b4f27_9366/KA8125_01_laydown.jpg",
    },
    {
      id: 3,
      name: "Maillot Portugal",
      price: "900 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjMYpC5oNAg9RC2miQY-tfX-7AnwNQgYZ3Zg&s",
    },
    {
      id: 4,
      name: "Maillot France",
      price: "800 DH",
      image: "https://assets-fr.imgfoot.com/media/cache/800x800/maillot-equipe-de-france-domicile-authentique-2024.jpg",
    },
    {
      id: 5,
      name: "Maillot Brésil",
      price: "1000 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpKTe-_E4A_6mxI5ZhH-PTl9Xcmgy_zpuSRQ&s",
    },
    {
      id: 6,
      name: "Maillot Espagne",
      price: "900 DH",
      image: "https://img.sport2000.fr/K5YYZo9h3mC4korXy5zEGDPk98vGVvxa2VHakEgpe2U/resize:fit:550:550/aHR0cDovL3BsYWlu/ZS1kYXRhLm1lemNh/bGl0by5uZXQvaXA5/MzMxLXNwb3J0MjAw/MC93ZWItaXA5MzMx/LTA0LmpwZw.webp",
    },
    {
      id: 7,
      name: "Maillot Allemagne",
      price: "800 DH",
      image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/65ab78edf90a46489bcd70a8ffb4e76a_9366/JF2605_01_laydown.jpg",
    },
    {
      id: 8,
      name: "Maillot Italie",
      price: "800 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDF1ELvC89t5IwVFaM0fHFuZ86Z8LwlHTUyg&s",
    },
    {
      id: 9,
      name: "Maillot Angleterre",
      price: "800 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5_56euHgAsrztWkrQ5ca_efsKY0wdQdwexA&s",
    },
    {
      id: 10,
      name: "Maillot Belgique",
      price: "850 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiZShsGP7xvxLlZTK4MNz-j-1_2lxODgmLxw&s",
    },
    {
      id: 11,
      name: "Maillot Uruguay",
      price: "800 DH",
      image: "https://www.foot-sport.com/cdn/shop/files/MAILLOT-DOMICILE-URUGUAY-BLEU-2023-2024.jpg?v=1744234849&width=1500",
    },
    {
      id: 12,
      name: "Maillot Croatie",
      price: "900 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT2OihkCRbDgjHSPaOlhHzx-I7rRXLr8VIFw&s",
    },
  ];

  const filteredProducts = nationalProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (product) => onAddToCart?.(product);
  const handleBuyNow = (product) => onBuyNow?.(product);

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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#235A3D]"
            />
          </div>
        </div>
      </div>

      <section className="px-4 py-6 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredProducts.map((product) => (
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
                    onClick={() => handleAddToCart(product)}
                    className="w-full py-2 bg-white border-2 border-[#235A3D] text-[#235A3D] rounded-lg hover:bg-[#235A3D] hover:text-white transition-all text-xs md:text-sm font-medium"
                  >
                    Ajouter au panier
                  </button>
                  <button
                    onClick={() => handleBuyNow(product)}
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
