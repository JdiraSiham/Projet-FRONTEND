export default function Home({ onNavigate }) {
  const featuredProducts = [
    {
      id: 1,
      name: "Maillot Maroc",
      price: "800 DH",
      image: "https://sporhousepro.ma/wp-content/uploads/2024/11/frmf-away-jersey-replica.webp",
      category: "Équipement national",
    },
    {
      id: 2,
      name: "Maillot FC Barcelone",
      price: "1100 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_cgHJm10LpBHfBZA8h3R14QZBClbzpJPyPw&s",
      category: "Maillots de club",
    },
    {
      id: 3,
      name: "Ballons PUMA Pro",
      price: "800 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyz-Or9jFDopKQUyCqnLQflDNCJ1ENLeByKg&s",
      category: "Équipement",
    },
  ];

  const featuredFields = [
    {
      id: 1,
      name: "Complexe Sportif Atlas",
      location: "Hay Ryad, Rabat",
      price: "1000 DH",
      image: "https://i.pinimg.com/1200x/bd/9d/4b/bd9d4bdb80eb6dce0816aaa6b35785d2.jpg",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Stade Municipal",
      location: "Centre-ville, Casablanca",
      price: "800 DH",
      image: "https://i.pinimg.com/1200x/e0/fe/9c/e0fe9c21fbc2511996da2015c6225642.jpg",
      rating: 4.6,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#173827] via-[#1a4730] to-[#235A3D] text-white overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full opacity-20"
          style={{
            backgroundImage: `url(https://i.pinimg.com/736x/55/85/2d/55852d0dbc1d48073e3df9775e4e67c3.jpg)`,
            backgroundSize: 'auto 100%',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

        <div className="relative z-10 px-8 py-12 md:py-16 max-w-5xl pl-6 md:pl-10 lg:pl-12">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Bonjour Ahmed
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-4 opacity-95 font-light">
              Bienvenue sur <span className="font-semibold text-white">FootMatch</span>
            </p>
            <p className="text-lg md:text-xl mb-8 opacity-80 max-w-full">
              Réservez vos terrains, rejoignez des matchs, et équipez-vous avec le meilleur du football marocain.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <button
                onClick={() => onNavigate('reserver')}
                className="bg-white hover:bg-gray-100 text-[#173827] font-bold py-4 px-8 rounded-2xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Réserver un terrain
              </button>
              <button
                onClick={() => onNavigate('boutique')}
                className="border-2 border-white text-white hover:bg-white hover:text-[#173827] font-bold py-4 px-8 rounded-2xl transition-all transform hover:scale-105"
              >
                Voir la boutique
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/60">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Boutique populaire</h2>
              <p className="text-lg text-gray-600">Découvrez nos équipements préférés des supporters</p>
            </div>
            <button
              onClick={() => onNavigate('boutique')}
              className="hidden md:flex items-center gap-2 bg-[#235A3D] text-white px-6 py-3 rounded-xl hover:bg-[#1d4a32] transition-colors font-medium"
            >
              Tout voir
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-[#235A3D] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-[#235A3D] mb-4">
                    {product.price}
                  </p>
                  <button
                    onClick={() => onNavigate('boutique')}
                    className="w-full bg-[#235A3D] text-white py-3 rounded-xl hover:bg-[#1d4a32] transition-colors font-medium"
                  >
                    Voir détails
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 md:hidden">
            <button
              onClick={() => onNavigate('boutique')}
              className="bg-[#235A3D] text-white px-8 py-4 rounded-xl hover:bg-[#1d4a32] transition-colors font-medium"
            >
              Voir toute la boutique
            </button>
          </div>
        </div>
      </section>

      {/* Featured Fields Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Terrains populaires</h2>
              <p className="text-lg text-gray-600">Réservez les meilleurs terrains près de chez vous</p>
            </div>
            <button
              onClick={() => onNavigate('reserver')}
              className="hidden md:flex items-center gap-2 bg-[#235A3D] text-white px-6 py-3 rounded-xl hover:bg-[#1d4a32] transition-colors font-medium"
            >
              Tout voir
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredFields.map((field) => (
              <div
                key={field.id}
                className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={field.image}
                    alt={field.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#235A3D]">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span className="text-sm font-medium text-gray-900">{field.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {field.name}
                  </h3>
                  <p className="text-gray-600 mb-4 flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {field.location}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-3xl font-bold text-[#235A3D]">
                      {field.price}
                    </p>
                    <button
                      onClick={() => onNavigate('reserver')}
                      className="bg-[#235A3D] text-white px-6 py-3 rounded-xl hover:bg-[#1d4a32] transition-colors font-medium"
                    >
                      Réserver
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 md:hidden">
            <button
              onClick={() => onNavigate('reserver')}
              className="bg-[#235A3D] text-white px-8 py-4 rounded-xl hover:bg-[#1d4a32] transition-colors font-medium"
            >
              Voir tous les terrains
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#235A3D] to-[#1a4730] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à vivre votre passion du football ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez des milliers d'amateurs et réservez votre prochain match dès maintenant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('reserver')}
              className="bg-white hover:bg-gray-100 text-[#235A3D] font-bold py-4 px-8 rounded-2xl transition-all transform hover:scale-105 shadow-lg"
            >
              Commencer maintenant
            </button>
            <button
              onClick={() => onNavigate('creer-match')}
              className="border-2 border-white text-white hover:bg-white hover:text-[#235A3D] font-bold py-4 px-8 rounded-2xl transition-all"
            >
              Créer un match
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a4730] text-white pb-20">
        <div className="max-w-7xl mx-auto px-4 pt-8 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#235A3D] rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-white">F</span>
                </div>
                <span className="text-2xl font-bold">FootMatch</span>
              </div>
              <p className="text-gray-300 mb-4">
                La plateforme ultime pour les amateurs de football au Maroc. Réservez, jouez, équipez-vous.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
              <div className="flex flex-wrap gap-4">
                <a href="#" onClick={() => onNavigate('reserver')} className="text-gray-300 hover:text-white transition-colors">Réserver un terrain</a>
                <a href="#" onClick={() => onNavigate('boutique')} className="text-gray-300 hover:text-white transition-colors">Boutique</a>
                <a href="#" onClick={() => onNavigate('creer-match')} className="text-gray-300 hover:text-white transition-colors">Créer un match</a>
                <a href="#" onClick={() => onNavigate('mes-matchs')} className="text-gray-300 hover:text-white transition-colors">Mes matchs</a>
                <a href="#" onClick={() => onNavigate('mes-reservations')} className="text-gray-300 hover:text-white transition-colors">Mes réservations</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-6">
            <div className="text-center">
              <p className="text-gray-300 text-sm">
                © 2024 FootMatch. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
