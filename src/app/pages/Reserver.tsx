import { useState } from "react";

export default function Reserver({ onNavigate, onReserveTerrain, onJoinMatch }) {
  const [activeTab, setActiveTab] = useState("matchs");
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchDate, setSearchDate] = useState("");
  const [searchTime, setSearchTime] = useState("");
  const [searchVille, setSearchVille] = useState("");

  const niveaux = ["Débutant", "Amateur", "Compétitif", "Semi-pro"];
  const villes = ["Casablanca", "Rabat", "Marrakech", "Fès", "Tanger", "Agadir"];

  // Generate random availability for terrains
  const generateAvailability = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    const times = ['08:00', '10:00', '14:00', '16:00', '18:00', '20:00'];
    return { dates, times };
  };

  const { dates: availableDates, times: availableTimes } = generateAvailability();

  const terrains = [
    {
      id: 1,
      name: "Complexe Sportif Atlas",
      location: "Hay Ryad, Rabat",
      city: "Rabat",
      price: "1000 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgE-riAGqO1kA2Ko6yO-G5sFc-xYfkLtemtg&s",
      type: "Terrain synthétique",
      availableDates: availableDates.slice(0, 3), // Random subset
      availableTimes: availableTimes.slice(0, 4),
    },
    {
      id: 2,
      name: "Stade Municipal",
      location: "Centre-ville, Casablanca",
      city: "Casablanca",
      price: "800 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81ZMCo0VjSf0r3OlfkAKStqniTe8nCEaNag&s",
      type: "Gazon naturel",
      availableDates: availableDates.slice(1, 4),
      availableTimes: availableTimes.slice(1, 5),
    },
    {
      id: 3,
      name: "Terrain Al Amal",
      location: "Agdal, Rabat",
      city: "Rabat",
      price: "1100 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN73D2o5nzCMWSOUdhpDpe7sPtcTXilaBS1w&s",
      type: "Terrain synthétique",
      availableDates: availableDates.slice(2, 5),
      availableTimes: availableTimes.slice(0, 3),
    },
    {
      id: 4,
      name: "Stade Olympique",
      location: "Maarif, Casablanca",
      city: "Casablanca",
      price: "900 DH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiMt_VER_OHcXjreVkFaMfU5QCe_VEOP5CjQ&s",
      type: "Gazon naturel",
      availableDates: availableDates.slice(0, 4),
      availableTimes: availableTimes.slice(2, 6),
    },
  ];

  const matches = [
    {
      id: 1,
      title: "Match amical 5v5",
      organizer: "Ahmed M.",
      location: "Hay Ryad, Rabat",
      date: "13 Mars 2020",
      time: "16:30",
      players: "10/14",
      level: "Débutant",
      city: "Rabat",
    },
    {
      id: 2,
      title: "Match compétitif 7v7",
      organizer: "Karim B.",
      location: "Complexe Sportif Atlas, Casablanca",
      date: "15 Mars 2020",
      time: "18:00",
      players: "8/14",
      level: "Compétitif",
      city: "Casablanca",
    },
    {
      id: 3,
      title: "Match débutants 7v7",
      organizer: "Youssef A.",
      location: "Stade Municipal, Rabat",
      date: "16 Mars 2020",
      time: "10:00",
      players: "6/14",
      level: "Débutant",
      city: "Rabat",
    },
    {
      id: 4,
      title: "Match amateur 5v5",
      organizer: "Hassan L.",
      location: "Centre-ville, Casablanca",
      date: "17 Mars 2020",
      time: "15:00",
      players: "7/10",
      level: "Amateur",
      city: "Casablanca",
    },
  ];

  const filteredMatches = matches.filter((match) => {
    if (selectedLevel && match.level !== selectedLevel) return false;
    if (selectedCity && match.city !== selectedCity) return false;
    return true;
  });

  const filteredTerrains = terrains.filter((terrain) => {
    if (searchVille && terrain.city !== searchVille) return false;
    if (searchDate && !terrain.availableDates.includes(searchDate)) return false;
    if (searchTime && !terrain.availableTimes.includes(searchTime)) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white sticky top-0 md:top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Réserver</h1>
            <button
              onClick={() => onNavigate(activeTab === "matchs" ? 'mes-matchs' : 'mes-reservations')}
              className="hidden md:flex px-6 py-2.5 bg-[#235A3D] text-white rounded-lg hover:bg-[#1d4a32] transition-all font-medium items-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {activeTab === "matchs" ? (
                  <>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </>
                ) : (
                  <>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </>
                )}
              </svg>
              {activeTab === "matchs" ? "Mes matchs" : "Mes réservations"}
            </button>
          </div>
          <div className="flex gap-4 border-b">
            <button
              onClick={() => setActiveTab("matchs")}
              className={`pb-3 px-1 font-medium transition-colors relative ${
                activeTab === "matchs"
                  ? "text-[#235A3D]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Rejoindre un match
              {activeTab === "matchs" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#235A3D]"></div>
              )}
            </button>
            <button
              id="terrains"
              onClick={() => setActiveTab("terrains")}
              className={`pb-3 px-1 font-medium transition-colors relative ${
                activeTab === "terrains"
                  ? "text-[#235A3D]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Réserver un terrain
              {activeTab === "terrains" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#235A3D]"></div>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 pb-24">
        {activeTab === "matchs" ? (
          <div className="space-y-4">
            <button
              onClick={() => onNavigate('mes-matchs')}
              className="md:hidden w-full px-6 py-3 bg-[#235A3D] text-white rounded-lg hover:bg-[#1d4a32] transition-all font-medium flex items-center justify-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Mes matchs
            </button>

            <div className="bg-white rounded-xl shadow-sm p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Niveau de jeu
                </label>
                <select
                  value={selectedLevel || ""}
                  onChange={(e) => setSelectedLevel(e.target.value || null)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#235A3D] bg-white"
                >
                  <option value="">Tous les niveaux</option>
                  {niveaux.map((niveau) => (
                    <option key={niveau} value={niveau}>
                      {niveau}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ville
                </label>
                <select
                  value={selectedCity || ""}
                  onChange={(e) => setSelectedCity(e.target.value || null)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#235A3D] bg-white"
                >
                  <option value="">Toutes les villes</option>
                  {villes.map((ville) => (
                    <option key={ville} value={ville}>
                      {ville}
                    </option>
                  ))}
                </select>
              </div>

              {(selectedLevel || selectedCity) && (
                <button
                  onClick={() => {
                    setSelectedLevel(null);
                    setSelectedCity(null);
                  }}
                  className="text-[#235A3D] hover:text-[#1d4a32] text-sm font-medium"
                >
                  Réinitialiser les filtres
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredMatches.map((match) => (
                <div
                  key={match.id}
                  className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-lg">{match.title}</h3>
                      <p className="text-sm text-gray-600">Par {match.organizer}</p>
                    </div>
                    <span className="px-3 py-1 bg-[#235A3D]/10 text-[#235A3D] rounded-full text-xs font-medium">
                      {match.level}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {match.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      {match.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      {match.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      {match.players} joueurs
                    </div>
                  </div>

                  <button 
                    onClick={() => onJoinMatch?.(match)}
                    className="w-full bg-[#235A3D] text-white py-2 rounded-lg hover:bg-[#1d4a32] transition-colors font-medium"
                  >
                    Rejoindre
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <button
              onClick={() => onNavigate('mes-reservations')}
              className="md:hidden w-full px-6 py-3 bg-[#235A3D] text-white rounded-lg hover:bg-[#1d4a32] transition-all font-medium flex items-center justify-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Mes réservations
            </button>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-2">Date</label>
                  <input
                    type="date"
                    value={searchDate}
                    onChange={(e) => setSearchDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#235A3D]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Heure</label>
                  <input
                    type="time"
                    value={searchTime}
                    onChange={(e) => setSearchTime(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#235A3D]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Ville</label>
                  <select
                    value={searchVille}
                    onChange={(e) => setSearchVille(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#235A3D]"
                  >
                    <option value="">Toutes les villes</option>
                    {villes.map((ville) => (
                      <option key={ville} value={ville}>
                        {ville}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredTerrains.length === 0 ? (
                <div className="bg-white rounded-xl shadow-sm p-8 text-center text-gray-600">
                  Aucun terrain disponible pour ces critères.
                </div>
              ) : (
                filteredTerrains.map((terrain) => (
                  <div
                    key={terrain.id}
                    className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <img
                      src={terrain.image}
                      alt={terrain.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-1">{terrain.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{terrain.type}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        {terrain.location}
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-xl font-bold text-[#235A3D]">
                          {terrain.price}
                        </p>
                        <button
                          onClick={() => onReserveTerrain(terrain, searchDate, searchTime)}
                          className="bg-[#235A3D] text-white px-4 py-2 rounded-lg hover:bg-[#1d4a32] transition-colors"
                        >
                          Réserver
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      {activeTab === "matchs" && (
        <button
          onClick={() => onNavigate('creer-match')}
          className="fixed bottom-24 md:bottom-8 right-4 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-[#235A3D] text-white rounded-full shadow-xl hover:bg-[#1d4a32] transition-all hover:scale-110 flex items-center justify-center z-50"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      )}
    </div>
  );
}
