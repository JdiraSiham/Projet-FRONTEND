import { useState } from "react";

export default function MesCommandes({ onNavigate, onBack }) {
  const [activeTab, setActiveTab] = useState("panier");

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Maillot FC Barcelone 2023/24",
      price: 899,
      quantity: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4pjljKtBV1iUAWIj7fjbIufOxE7UH65UUlw&s",
      category: "Clubs",
    },
    {
      id: 2,
      name: "Ballon de football Nike",
      price: 299,
      quantity: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJvPnTCHkQd2GMeTYolX7Vt_V8tN1PfdwL3A&s",
      category: "Équipements",
    },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 50;
  const total = subtotal + shipping;

  const orders = [
    {
      id: 1,
      orderNumber: "#CMD-2024-001",
      date: "5 Mars 2020",
      items: [
        {
          name: "Maillot FC Barcelone 2023/24",
          quantity: 1,
          price: 899,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4pjljKtBV1iUAWIj7fjbIufOxE7UH65UUlw&s",
        },
        {
          name: "Ballon de football Nike",
          quantity: 2,
          price: 299,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJvPnTCHkQd2GMeTYolX7Vt_V8tN1PfdwL3A&s",
        },
      ],
      total: 1497,
      status: "Livrée",
    },
    {
      id: 2,
      orderNumber: "#CMD-2024-002",
      date: "12 Mars 2020",
      items: [
        {
          name: "Chaussures Nike Mercurial",
          quantity: 1,
          price: 1299,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPHAWQkOf5XBtxEph2qq6P8uvIywjLF_IPGQ&s",
        },
      ],
      total: 1299,
      status: "En cours",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white sticky top-0 md:top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <h1 className="text-xl font-semibold">Mes Commandes</h1>
          </div>

          <div className="flex gap-4 border-b">
            <button
              onClick={() => setActiveTab("panier")}
              className={`pb-3 px-1 font-medium transition-colors relative ${
                activeTab === "panier"
                  ? "text-[#235A3D]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                Panier
              </div>
              {activeTab === "panier" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#235A3D]"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab("commandes")}
              className={`pb-3 px-1 font-medium transition-colors relative ${
                activeTab === "commandes"
                  ? "text-[#235A3D]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
                Commandes
              </div>
              {activeTab === "commandes" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#235A3D]"></div>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 pb-24">
        {activeTab === "panier" ? (
          <div className="space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <svg className="mx-auto mb-4 text-gray-400" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <p className="text-lg text-gray-600 mb-4">Votre panier est vide</p>
                <button
                  onClick={() => onNavigate('boutique')}
                  className="bg-[#235A3D] text-white px-6 py-3 rounded-lg hover:bg-[#1d4a32] transition-colors"
                >
                  Continuer mes achats
                </button>
              </div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-sm text-gray-500">{item.category}</p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 p-1"
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            </svg>
                          </button>
                        </div>
                        <div className="flex justify-between items-center mt-3">
                          <div className="flex items-center gap-3 border rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-2 hover:bg-gray-100 rounded-l-lg"
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                            </button>
                            <span className="font-medium w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-2 hover:bg-gray-100 rounded-r-lg"
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                            </button>
                          </div>
                          <p className="font-bold text-lg text-[#235A3D]">
                            {item.price * item.quantity} DH
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="bg-white rounded-lg p-4 shadow-sm mt-6">
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sous-total</span>
                      <span className="font-medium">{subtotal} DH</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Livraison</span>
                      <span className="font-medium">{shipping} DH</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between">
                      <span className="font-semibold text-lg">Total</span>
                      <span className="font-bold text-lg text-[#235A3D]">
                        {total} DH
                      </span>
                    </div>
                  </div>
                  <button className="w-full bg-[#235A3D] text-white py-3 rounded-lg hover:bg-[#1d4a32] transition-colors font-medium">
                    Passer la commande
                  </button>
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{order.orderNumber}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      {order.date}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.status === "Livrée"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="text-sm text-gray-500">
                          Quantité: {item.quantity} × {item.price} DH
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-3 flex justify-between items-center">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold text-lg text-[#235A3D]">
                    {order.total} DH
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
