import { useState } from "react";

export default function Profil({ onNavigate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "Ahmed Bennani",
    age: "19",
    email: "ahmed@gmail.com",
    phone: "+212 6 12 34 56 78",
    ville: "Casablanca",
    taille: "178",
    poids: "68",
    poste: "Gardien",
    pied: "Droit",
    niveau: "Amateur",
  });

  const [editedInfo, setEditedInfo] = useState(userInfo);

  const stats = [
    { label: "Matchs joués", value: "24" },
    { label: "Réservations", value: "12" },
    { label: "Commandes", value: "8" },
  ];

  const postes = ["Gardien", "Défenseur", "Milieu", "Attaquant"];
  const pieds = ["Droit", "Gauche", "Les deux"];
  const niveaux = ["Débutant", "Amateur", "Compétitif", "Semi-pro"];

  const handleEdit = () => {
    setEditedInfo(userInfo);
    setIsEditing(true);
  };

  const handleSave = () => {
    setUserInfo(editedInfo);
    setIsEditing(false);
    const notification = document.createElement("div");
    notification.className =
      "fixed top-20 md:top-24 right-4 bg-[#235A3D] text-white px-4 py-3 rounded-lg shadow-xl z-50 animate-fade-in";
    notification.textContent = "✓ Profil mis à jour avec succès";
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  };

  const handleCancel = () => {
    setEditedInfo(userInfo);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-br from-[#173b29] via-[#235A3D] to-[#173b29] text-white px-4 py-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#235A3D" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-1">{userInfo.name}</h1>
          <p className="text-sm opacity-90">{userInfo.ville}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-[#235A3D] mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Informations Personnelles</h2>
            {!isEditing ? (
              <button
                onClick={handleEdit}
                className="flex items-center gap-2 text-[#235A3D] hover:text-[#1d4a32] font-medium"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
                Modifier
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={handleCancel}
                  className="flex items-center gap-1 px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                  Annuler
                </button>
                <button
                  onClick={handleSave}
                  className="flex items-center gap-1 px-3 py-1.5 bg-[#235A3D] text-white rounded-lg hover:bg-[#1d4a32]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Sauvegarder
                </button>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Nom complet
                  </div>
                </label>
                <input
                  type="text"
                  value={isEditing ? editedInfo.name : userInfo.name}
                  onChange={(e) =>
                    setEditedInfo({ ...editedInfo, name: e.target.value })
                  }
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#235A3D] disabled:bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    Âge
                  </div>
                </label>
                <input
                  type="number"
                  value={isEditing ? editedInfo.age : userInfo.age}
                  onChange={(e) =>
                    setEditedInfo({ ...editedInfo, age: e.target.value })
                  }
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#235A3D] disabled:bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="m2 7 10 5 10-5"></path>
                    </svg>
                    Email
                  </div>
                </label>
                <input
                  type="email"
                  value={isEditing ? editedInfo.email : userInfo.email}
                  onChange={(e) =>
                    setEditedInfo({ ...editedInfo, email: e.target.value })
                  }
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#235A3D] disabled:bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    Téléphone
                  </div>
                </label>
                <input
                  type="tel"
                  value={isEditing ? editedInfo.phone : userInfo.phone}
                  onChange={(e) =>
                    setEditedInfo({ ...editedInfo, phone: e.target.value })
                  }
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#235A3D] disabled:bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    Ville
                  </div>
                </label>
                <input
                  type="text"
                  value={isEditing ? editedInfo.ville : userInfo.ville}
                  onChange={(e) =>
                    setEditedInfo({ ...editedInfo, ville: e.target.value })
                  }
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#235A3D] disabled:bg-gray-50"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4">
          <h2 className="text-lg font-semibold mb-4">Informations Physiques</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Taille (cm)
                </label>
                <input
                  type="number"
                  value={isEditing ? editedInfo.taille : userInfo.taille}
                  onChange={(e) =>
                    setEditedInfo({ ...editedInfo, taille: e.target.value })
                  }
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#235A3D] disabled:bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Poids (kg)
                </label>
                <input
                  type="number"
                  value={isEditing ? editedInfo.poids : userInfo.poids}
                  onChange={(e) =>
                    setEditedInfo({ ...editedInfo, poids: e.target.value })
                  }
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#235A3D] disabled:bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Poste préféré
                </label>
                <select
                  value={isEditing ? editedInfo.poste : userInfo.poste}
                  onChange={(e) =>
                    setEditedInfo({ ...editedInfo, poste: e.target.value })
                  }
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#235A3D] disabled:bg-gray-50"
                >
                  {postes.map((poste) => (
                    <option key={poste} value={poste}>
                      {poste}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pied fort
                </label>
                <select
                  value={isEditing ? editedInfo.pied : userInfo.pied}
                  onChange={(e) =>
                    setEditedInfo({ ...editedInfo, pied: e.target.value })
                  }
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#235A3D] disabled:bg-gray-50"
                >
                  {pieds.map((pied) => (
                    <option key={pied} value={pied}>
                      {pied}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Niveau
                </label>
                <select
                  value={isEditing ? editedInfo.niveau : userInfo.niveau}
                  onChange={(e) =>
                    setEditedInfo({ ...editedInfo, niveau: e.target.value })
                  }
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#235A3D] disabled:bg-gray-50"
                >
                  {niveaux.map((niveau) => (
                    <option key={niveau} value={niveau}>
                      {niveau}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <button 
            onClick={() => onNavigate('mes-matchs')}
            className="w-full bg-white rounded-lg p-4 shadow-sm flex items-center justify-between hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span className="font-medium">Mes matchs</span>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          <button 
            onClick={() => onNavigate('mes-reservations')}
            className="w-full bg-white rounded-lg p-4 shadow-sm flex items-center justify-between hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span className="font-medium">Mes réservations de terrain</span>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          <button 
            onClick={() => onNavigate('mes-commandes')}
            className="w-full bg-white rounded-lg p-4 shadow-sm flex items-center justify-between hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span className="font-medium">Mes commandes</span>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
