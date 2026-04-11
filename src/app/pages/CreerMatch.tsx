import { useState } from "react";

export default function CreerMatch({ onNavigate }) {
  const [formData, setFormData] = useState({
    lieu: "",
    date: "",
    heure: "",
    joueurs: "",
    niveau: "Amateur",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Match créé avec succès!");
    onNavigate('reserver');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#235A3D] text-white px-4 py-6 md:py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">Créer un match</h1>
          <p className="opacity-90">Organisez votre prochaine partie</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6 md:py-8 pb-24">
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-5 md:p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Titre du match
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#235A3D] focus:border-transparent transition-all"
              placeholder="Ex: Match amical 5v5"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lieu
              </label>
              <input
                type="text"
                required
                value={formData.lieu}
                onChange={(e) =>
                  setFormData({ ...formData, lieu: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#235A3D] focus:border-transparent transition-all"
                placeholder="Complexe Sportif..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#235A3D] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Heure
              </label>
              <input
                type="time"
                required
                value={formData.heure}
                onChange={(e) =>
                  setFormData({ ...formData, heure: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#235A3D] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre de joueurs
              </label>
              <input
                type="number"
                required
                value={formData.joueurs}
                onChange={(e) =>
                  setFormData({ ...formData, joueurs: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#235A3D] focus:border-transparent transition-all"
                placeholder="10, 14, 22..."
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Niveau
            </label>
            <select
              value={formData.niveau}
              onChange={(e) =>
                setFormData({ ...formData, niveau: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#235A3D] focus:border-transparent transition-all"
            >
              <option value="Débutant">Débutant</option>
              <option value="Amateur">Amateur</option>
              <option value="Compétitif">Compétitif</option>
              <option value="Semi-pro">Semi-pro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              rows={4}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#235A3D] focus:border-transparent transition-all"
              placeholder="Ajoutez des détails sur le match..."
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={() => onNavigate('reserver')}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-[#235A3D] text-white rounded-lg font-medium hover:bg-[#1d4a32] transition-colors"
            >
              Créer le match
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
