export default function Home({ onNavigate }) {
  const featuredProducts = [
    {
      id: 1,
      name: "Maillot Maroc",
      price: "799 DH",
      image: "https://sporhousepro.ma/wp-content/uploads/2024/11/frmf-away-jersey-replica.webp",
    },
    {
      id: 2,
      name: "Maillot FC Barcelone",
      price: "899 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_cgHJm10LpBHfBZA8h3R14QZBClbzpJPyPw&s",
    },
    {
      id: 3,
      name: "Ballons PUMA Pro",
      price: "299 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyz-Or9jFDopKQUyCqnLQflDNCJ1ENLeByKg&s",
    },
  ];

  const featuredFields = [
    {
      id: 1,
      name: "Complexe Sportif Atlas",
      price: "500 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgE-riAGqO1kA2Ko6yO-G5sFc-xYfkLtemtg&s",
    },
    {
      id: 2,
      name: "Stade Municipal",
      price: "500 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81ZMCo0VjSf0r3OlfkAKStqniTe8nCEaNag&s",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-[#173827] text-white overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full opacity-40"
          style={{
            backgroundImage: `url(https://i.pinimg.com/736x/55/85/2d/55852d0dbc1d48073e3df9775e4e67c3.jpg)`,
            backgroundSize: 'auto 100%',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#173827] to-transparent opacity-90" />
        <div className="relative z-10 px-4 py-12 md:py-20 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl mb-2">Bonjour Ahmed</h1>
            <p className="text-xl md:text-3xl mb-8 md:mb-12 opacity-95">
              Bienvenue sur FootMatch
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-semibold">Boutique populaire</h2>
          <button
            onClick={() => onNavigate('boutique')}
            className="text-[#235A3D] hover:text-[#1d4a32] flex items-center gap-1 font-medium"
          >
            Tout voir
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 md:h-48 object-cover"
              />
              <div className="p-3 md:p-4">
                <h3 className="text-sm md:text-base font-semibold mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-lg md:text-xl font-bold text-[#235A3D]">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl md:text-2xl font-semibold">Terrains populaires</h2>
            <button
              onClick={() => onNavigate('reserver')}
              className="text-[#235A3D] hover:text-[#1d4a32] flex items-center gap-1 font-medium"
            >
              Tout voir
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {featuredFields.map((field) => (
              <div
                key={field.id}
                className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <img
                  src={field.image}
                  alt={field.name}
                  className="w-full h-48 md:h-56 object-cover"
                />
                <div className="p-4 md:p-5">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    {field.name}
                  </h3>
                  <p className="text-xl md:text-2xl font-bold text-[#235A3D]">
                    {field.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
