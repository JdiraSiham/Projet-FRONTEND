import { useState } from 'react';

export default function BoutiqueEquipements({ onNavigate, onAddToCart, onBuyNow }) {
  const [searchQuery, setSearchQuery] = useState("");

  const equipmentProducts = [
    {
      id: 1,
      name: "Ballon PUMA",
      price: "800 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyz-Or9jFDopKQUyCqnLQflDNCJ1ENLeByKg&s",
    },
    {
      id: 2,
      name: "Crampons Adidas",
      price: "600 DH",
      image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/aa61d9846e5b440fae882f4140608f73_9366/JS0378_HM1.jpg",
    },
    {
      id: 3,
      name: "Gants de gardien",
      price: "400 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRYTw1PJ-oKb1jwDxdbdqvFR4YEd89_UtYQ&s",
    },
    {
      id: 4,
      name: "Protège-tibias Nike",
      price: "150 DH",
      image: "https://media.intersport.fr/is/image/intersportfr/SP2162_394_FA?$produit_l$&$product_grey$",
    },
    {
      id: 5,
      name: "Sac de sport",
      price: "150 DH",
      image: "https://thumblr.uniid.it/product/132185/d216602cb2e1.jpg?width=3840&format=webp&q=75",
    },
    {
      id: 6,
      name: "Chaussettes de foot",
      price: "40 DH",
      image: "https://contents.mediadecathlon.com/p1610736/1cr1/k$6eeeb95fd51e78bebd5c1bc61359f783/chaussettes-de-football-enfant-essentielle-club-noire.jpg?format=auto&f=1024x0",
    },
    {
      id: 7,
      name: "Ballon Nike Pro",
      price: "900 DH",
      image: "https://thumblr.uniid.it/product/213282/b4af17479e73.jpg?width=3840&format=webp&q=75",
    },
    {
      id: 8,
      name: "Short de foot",
      price: "100 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU6lw5LFn4KyyAVuX1y4U6tLE5iNRZv91qBA&s",
    },
    {
      id: 9,
      name: "Crampons Nike",
      price: "1200 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnv5hxrYxmhK09q_J37OFnxAxQAOpWPQ1caw&s",
    },
    {
      id: 10,
      name: "Cône d'entraînement",
      price: "140 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT9iYbfcb0vN48etDWFDmmY2u6OFbSfhoRZQ&s",
    },
    {
      id: 11,
      name: "Gourde sport",
      price: "100 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZtOk0ISJruMc8rfScWOHh7fYq-lsXyfGtLQ&s",
    },
    {
      id: 12,
      name: "Brassard capitaine",
      price: "60 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9NUl2VVjMbxIQSdUpXlwpPcmDu6t9y5PMA&s",
    },
  ];

  const filteredProducts = equipmentProducts.filter((product) =>
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
