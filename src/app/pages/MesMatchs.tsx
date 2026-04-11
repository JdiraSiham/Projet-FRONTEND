export default function MesMatchs({ onNavigate, onBack }) {
  const matchs = [
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
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white sticky top-0 md:top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <h1 className="text-xl font-semibold">Mes matchs</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 pb-24">
        <div className="space-y-4">
          {matchs.map((match) => (
            <div key={match.id} className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-lg">{match.title}</h3>
                  <p className="text-sm text-gray-600">Par {match.organizer}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    match.status === "À venir"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {match.status}
                </span>
              </div>

              <div className="space-y-2">
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
              </div>

              {match.status === "À venir" && (
                <button className="w-full mt-4 bg-red-50 text-red-600 py-2 rounded-lg hover:bg-red-100 transition-colors font-medium">
                  Annuler ma participation
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
