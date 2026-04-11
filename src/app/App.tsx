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

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [previousPage, setPreviousPage] = useState('home');

  const navigateTo = (page) => {
    setPreviousPage(currentPage);
    setCurrentPage(page);
  };

  const goBack = () => {
    setCurrentPage(previousPage);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigateTo} />;
      case 'reserver':
        return <Reserver onNavigate={navigateTo} />;
      case 'boutique':
        return <Boutique onNavigate={navigateTo} />;
      case 'boutique-clubs':
        return <BoutiqueClubs onNavigate={navigateTo} />;
      case 'boutique-nationales':
        return <BoutiqueNationales onNavigate={navigateTo} />;
      case 'boutique-equipements':
        return <BoutiqueEquipements onNavigate={navigateTo} />;
      case 'mes-commandes':
        return <MesCommandes onNavigate={navigateTo} onBack={goBack} />;
      case 'mes-matchs':
        return <MesMatchs onNavigate={navigateTo} onBack={goBack} />;
      case 'mes-reservations':
        return <MesReservations onNavigate={navigateTo} onBack={goBack} />;
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
                      isActive ? "text-white font-semibold" : "text-[#d4e6cf] hover:text-white"
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

      <div className="md:pt-16 pb-20 md:pb-0">
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
                  isActive ? "text-white" : "text-[#c8d6bb]"
                }`}
              >
                {item.id === 'home' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={isActive ? "2.5" : "2"}>
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                )}
                {item.id === 'reserver' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={isActive ? "2.5" : "2"}>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                )}
                {item.id === 'boutique' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={isActive ? "2.5" : "2"}>
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                )}
                {item.id === 'profil' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={isActive ? "2.5" : "2"}>
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
    </div>
  );
}

export default App;
