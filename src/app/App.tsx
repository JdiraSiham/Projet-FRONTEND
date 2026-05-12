import { useState } from 'react';
import Home from './pages/Home';
import Reserver from './pages/Reserver';
import Boutique from './pages/Boutique';
import BoutiqueClubs from './pages/BoutiqueClubs';
import BoutiqueNationales from './pages/BoutiqueNationales';
import BoutiqueEquipements from './pages/BoutiqueEquipements';
import MesCommandes from './pages/MesCommandes';
import Profil from './pages/Profil';
import MesMatchs from './pages/MesMatchs';
import MesReservations from './pages/MesReservations';
import CreerMatch from './pages/CreerMatch';
import PaymentModal from './components/PaymentModal';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [previousPage, setPreviousPage] = useState('home');
  const [cartItems, setCartItems] = useState([
    {
      id: 2,
      name: 'Ballon de football Nike',
      price: 299,
      displayPrice: '299 DH',
      quantity: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJvPnTCHkQd2GMeTYolX7Vt_V8tN1PfdwL3A&s',
      category: 'Équipements',
    },
    {
      id: 1,
      name: 'Maillot FC Barcelone 2023/24',
      price: 899,
      displayPrice: '899 DH',
      quantity: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4pjljKtBV1iUAWIj7fjbIufOxE7UH65UUlw&s',
      category: 'Clubs',
    },
  ]);
  const [orders, setOrders] = useState([
    {
      id: 1,
      orderNumber: '#CMD-2024-001',
      date: '5 Mars 2020',
      items: [
        {
          id: 1,
          name: 'Maillot FC Barcelone 2023/24',
          quantity: 1,
          price: 899,
          displayPrice: '899 DH',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4pjljKtBV1iUAWIj7fjbIufOxE7UH65UUlw&s',
        },
        {
          id: 2,
          name: 'Ballon de football Nike',
          quantity: 2,
          price: 299,
          displayPrice: '299 DH',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJvPnTCHkQd2GMeTYolX7Vt_V8tN1PfdwL3A&s',
        },
      ],
      total: 1497,
      status: 'Livrée',
    },
    {
      id: 2,
      orderNumber: '#CMD-2024-002',
      date: '12 Mars 2020',
      items: [
        {
          id: 1,
          name: 'Chaussures Nike Mercurial',
          quantity: 1,
          price: 1299,
          displayPrice: '1299 DH',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPHAWQkOf5XBtxEph2qq6P8uvIywjLF_IPGQ&s',
        },
      ],
      total: 1299,
      status: 'En cours',
    },
  ]);
  const [reservations, setReservations] = useState([
    {
      id: 1,
      name: "Complexe Sportif Atlas",
      location: "Hay Ryad, Rabat",
      date: "15 Mars 2020",
      time: "18:00 - 19:00",
      price: "500 DH",
      status: "Confirmée",
    },
    {
      id: 2,
      name: "Stade Municipal",
      location: "Centre-ville, Casablanca",
      date: "8 Mars 2020",
      time: "16:00 - 17:00",
      price: "500 DH",
      status: "Terminée",
    },
  ]);
  const [myMatches, setMyMatches] = useState([
    {
      id: 1,
      title: "Match amical 5v5",
      organizer: "Ahmed M.",
      location: "Hay Ryad, Rabat",
      date: "13 Mars 2020",
      time: "16:30",
      status: "À venir",
    },
    {
      id: 2,
      title: "Match compétitif 7v7",
      organizer: "Karim B.",
      location: "Complexe Sportif Atlas",
      date: "5 Mars 2020",
      time: "18:00",
      status: "Terminé",
    },
  ]);
  const [paymentContext, setPaymentContext] = useState(null);

  const navigateTo = (page) => {
    setPreviousPage(currentPage);
    setCurrentPage(page);
  };

  const goBack = () => {
    setCurrentPage(previousPage);
  };

  const formatOrderNumber = (index) => `#CMD-2026-${String(index).padStart(3, '0')}`;

  const formatDate = (date) =>
    date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

  const normalizeProduct = (product, category = 'Produit') => {
    const price = typeof product.price === 'number'
      ? product.price
      : Number(String(product.price).replace(/\D/g, '')) || 0;

    return {
      ...product,
      price,
      displayPrice: typeof product.price === 'string' ? product.price : `${price} DH`,
      category: product.category || category,
    };
  };

  const showNotification = (message) => {
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 md:top-24 right-4 bg-[#235A3D] text-white px-4 py-3 rounded-lg shadow-xl z-50';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
  };

  const handleAddToCart = (product, category = 'Produit') => {
    const normalized = normalizeProduct(product, category);
    setCartItems((items) => {
      const existingIndex = items.findIndex(
        (item) => item.id === normalized.id && item.category === normalized.category
      );
      if (existingIndex >= 0) {
        return items.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { ...normalized, quantity: 1 }];
    });

    showNotification('✓ Ajouté au panier');
  };

  const handleOpenPayment = ({ title, items, total, source }) => {
    setPaymentContext({ title, items, total, source });
  };

  const handleBuyNow = (product, category = 'Produit') => {
    const normalized = normalizeProduct(product, category);
    handleOpenPayment({
      title: `Achat immédiat - ${normalized.name}`,
      items: [{ ...normalized, quantity: 1 }],
      total: normalized.price,
      source: 'product',
    });
  };

  const handleJoinMatch = (match) => {
    setMyMatches((prev) => [...prev, { ...match, status: 'À venir' }]);
    showNotification('✓ Participation confirmée');
  };

  const handleReserveTerrain = (terrain, selectedDate, selectedTime) => {
    handleOpenPayment({
      title: `Réservation - ${terrain.name}`,
      items: [{
        id: terrain.id,
        name: terrain.name,
        price: parseInt(terrain.price.replace(' DH', '')),
        quantity: 1,
        image: terrain.image,
        location: terrain.location,
      }],
      total: parseInt(terrain.price.replace(' DH', '')),
      source: 'reserve',
      selectedDate,
      selectedTime,
    });
  };

  const handleCancelReservation = (reservationId) => {
    setReservations((prev) => prev.filter((res) => res.id !== reservationId));
    showNotification('✓ Réservation annulée');
  };

  const handleCancelMatch = (matchId) => {
    setMyMatches((prev) => prev.filter((match) => match.id !== matchId));
    showNotification('✓ Participation annulée');
  };

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      showNotification('Votre panier est vide.');
      return;
    }
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    handleOpenPayment({
      title: 'Paiement du panier',
      items: cartItems,
      total,
      source: 'cart',
    });
  };

  const handleConfirmPayment = (selectedDate?: string, selectedTime?: string) => {
    if (!paymentContext) return;
    if (paymentContext.source === 'reserve') {
      const nextReservationId = reservations.length + 1;
      setReservations((prev) => [
        ...prev,
        {
          id: nextReservationId,
          name: paymentContext.items[0].name,
          location: paymentContext.items[0].location || 'Location inconnue',
          date: selectedDate || paymentContext.selectedDate,
          time: selectedTime || paymentContext.selectedTime,
          price: `${paymentContext.total} DH`,
          status: 'Confirmée',
        },
      ]);
      setPaymentContext(null);
      navigateTo('mes-reservations');
      showNotification('✓ Réservation confirmée');
      return;
    }
    const nextOrderId = orders.length + 1;
    setOrders((prev) => [
      ...prev,
      {
        id: nextOrderId,
        orderNumber: formatOrderNumber(nextOrderId),
        date: formatDate(new Date()),
        items: paymentContext.items,
        total: paymentContext.total,
        status: 'En cours',
      },
    ]);

    if (paymentContext.source === 'cart') {
      setCartItems([]);
    }

    setPaymentContext(null);
    navigateTo('mes-commandes');
    showNotification('✓ Paiement validé, commande enregistrée');
  };

  const handleUpdateCartQuantity = (id, category, change) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.category === category
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleRemoveCartItem = (id, category) => {
    setCartItems((items) => items.filter((item) => !(item.id === id && item.category === category)));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigateTo} />;
      case 'reserver':
        return <Reserver onNavigate={navigateTo} onReserveTerrain={handleReserveTerrain} onJoinMatch={handleJoinMatch} />;
      case 'boutique':
        return <Boutique onNavigate={navigateTo} onAddToCart={handleAddToCart} onBuyNow={handleBuyNow} />;
      case 'boutique-clubs':
        return (
          <BoutiqueClubs
            onNavigate={navigateTo}
            onAddToCart={(product) => handleAddToCart(product, 'Clubs')}
            onBuyNow={(product) => handleBuyNow(product, 'Clubs')}
          />
        );
      case 'boutique-nationales':
        return (
          <BoutiqueNationales
            onNavigate={navigateTo}
            onAddToCart={(product) => handleAddToCart(product, 'Nationales')}
            onBuyNow={(product) => handleBuyNow(product, 'Nationales')}
          />
        );
      case 'boutique-equipements':
        return (
          <BoutiqueEquipements
            onNavigate={navigateTo}
            onAddToCart={(product) => handleAddToCart(product, 'Équipements')}
            onBuyNow={(product) => handleBuyNow(product, 'Équipements')}
          />
        );
      case 'mes-commandes':
        return (
          <MesCommandes
            onNavigate={navigateTo}
            onBack={goBack}
            cartItems={cartItems}
            orders={orders}
            onUpdateQuantity={handleUpdateCartQuantity}
            onRemoveItem={handleRemoveCartItem}
            onPlaceOrder={handlePlaceOrder}
          />
        );
      case 'mes-matchs':
        return <MesMatchs onNavigate={navigateTo} onBack={goBack} myMatches={myMatches} onCancelMatch={handleCancelMatch} />;
      case 'mes-reservations':
        return <MesReservations onNavigate={navigateTo} onBack={goBack} reservations={reservations} onCancelReservation={handleCancelReservation} />;
      case 'creer-match':
        return <CreerMatch onNavigate={navigateTo} />;
      case 'profil':
        return <Profil onNavigate={navigateTo} />;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'reserver', label: 'Réserver' },
    { id: 'boutique', label: 'Boutique' },
    { id: 'profil', label: 'Profil' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="hidden md:block fixed top-0 left-0 right-0 bg-[#173827] shadow-lg shadow-[#0f2c1d]/20 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigateTo('home')}
              className="text-2xl font-bold text-white"
            >
              FootMatch
            </button>
            <div className="flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => navigateTo(item.id)}
                    className={`flex items-center gap-2 transition-colors ${
                      isActive ? 'text-white font-semibold' : 'text-[#d4e6cf] hover:text-white'
                    }`}
                  >
                    {item.id === 'home' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    )}
                    {item.id === 'reserver' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    )}
                    {item.id === 'boutique' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                      </svg>
                    )}
                    {item.id === 'profil' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    )}
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <div className="md:pt-16 pb-0">
        {renderPage()}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-[#173827] border-t border-[#0e2618] md:hidden z-50">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                  isActive ? 'text-white' : 'text-[#c8d6bb]'
                }`}
              >
                {item.id === 'home' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={isActive ? '2.5' : '2'}>
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                )}
                {item.id === 'reserver' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={isActive ? '2.5' : '2'}>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                )}
                {item.id === 'boutique' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={isActive ? '2.5' : '2'}>
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                )}
                {item.id === 'profil' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={isActive ? '2.5' : '2'}>
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                )}
                <span className="text-xs mt-1">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <PaymentModal
        context={paymentContext}
        onClose={() => setPaymentContext(null)}
        onConfirm={handleConfirmPayment}
        source={paymentContext?.source}
        selectedDate={paymentContext?.selectedDate}
        selectedTime={paymentContext?.selectedTime}
      />
    </div>
  );
}

export default App;
