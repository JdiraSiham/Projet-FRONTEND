import { useState, type FormEvent } from "react";

type PaymentItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  displayPrice?: string;
};

type PaymentContext = {
  title: string;
  items: PaymentItem[];
  total: number;
  source?: 'product' | 'reserve' | 'cart';
  selectedDate?: string;
  selectedTime?: string;
};

type PaymentModalProps = {
  context: PaymentContext | null;
  onClose: () => void;
  onConfirm: (selectedDate?: string, selectedTime?: string) => void;
  source?: 'product' | 'reserve' | 'cart';
  selectedDate?: string;
  selectedTime?: string;
};

export default function PaymentModal({ context, onClose, onConfirm, source = 'product', selectedDate, selectedTime }: PaymentModalProps) {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState("");
  const [reserveDate, setReserveDate] = useState(selectedDate || "");
  const [reserveTime, setReserveTime] = useState(selectedTime || "");

  if (!context) return null;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!cardName.trim() || !cardNumber.trim() || !expiry.trim() || !cvv.trim()) {
      setError("Veuillez remplir tous les champs de paiement.");
      return;
    }

    // Validate expiry format MM/YY
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryRegex.test(expiry)) {
      setError("La date d'expiration doit être au format MM/AA (ex: 12/25).");
      return;
    }

    // For reserve source, ensure date and time are selected
    if (source === 'reserve' && (!reserveDate || !reserveTime)) {
      setError("Veuillez sélectionner une date et une heure pour la réservation.");
      return;
    }

    setError("");
    onConfirm(source === 'reserve' ? reserveDate : undefined, source === 'reserve' ? reserveTime : undefined);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-[#235A3D] to-[#1a4730] px-6 py-6 text-white rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                  <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold">Paiement sécurisé</h2>
                <p className="text-sm text-white/80">{context.title}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Order Summary */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="m1 1 4 4h15l-1 8H6"></path>
                  </svg>
                  Récapitulatif de la commande
                </h3>
                <div className="space-y-3">
                  {context.items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                      ) : (
                        <div className="w-16 h-16 bg-[#235A3D]/10 rounded-lg flex items-center justify-center">
                          <span className="text-[#235A3D] font-semibold text-lg">
                            {item.name.slice(0, 2)}
                          </span>
                        </div>
                      )}
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-600">Quantité: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-[#235A3D]">
                          {item.displayPrice ?? `${item.price} DH`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total */}
              <div className="bg-[#235A3D]/5 border border-[#235A3D]/20 rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Sous-total</span>
                  <span className="font-medium">{context.total} DH</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold text-[#235A3D] border-t pt-4">
                  <span>Total à payer</span>
                  <span>{context.total} DH</span>
                </div>
              </div>
            </div>

            {/* Right Column - Payment Form */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                    <line x1="1" y1="10" x2="23" y2="10"></line>
                  </svg>
                  Informations de paiement
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Card Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom sur la carte *
                    </label>
                    <input
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      type="text"
                      placeholder="Nom complet"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#235A3D]/20 focus:border-[#235A3D] transition-colors"
                    />
                  </div>

                  {/* Card Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Numéro de carte *
                    </label>
                    <input
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      type="text"
                      inputMode="numeric"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#235A3D]/20 focus:border-[#235A3D] transition-colors"
                    />
                  </div>

                  {/* Expiry and CVV */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date d'expiration *
                      </label>
                      <input
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        type="text"
                        placeholder="MM/AA"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#235A3D]/20 focus:border-[#235A3D] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV *
                      </label>
                      <input
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        type="password"
                        inputMode="numeric"
                        placeholder="123"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#235A3D]/20 focus:border-[#235A3D] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Reservation Date/Time - Only for reserve source */}
                  {source === 'reserve' && (
                    <div className="space-y-4 pt-4 border-t border-gray-200">
                      <h4 className="font-medium text-gray-900 flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        Détails de la réservation
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Date *
                          </label>
                          <input
                            value={reserveDate}
                            onChange={(e) => setReserveDate(e.target.value)}
                            type="date"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#235A3D]/20 focus:border-[#235A3D] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Heure *
                          </label>
                          <input
                            value={reserveTime}
                            onChange={(e) => setReserveTime(e.target.value)}
                            type="time"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#235A3D]/20 focus:border-[#235A3D] transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-500">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                      </svg>
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-6">
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-[#235A3D] text-white rounded-xl hover:bg-[#1d4a32] transition-colors font-medium flex items-center justify-center gap-2"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                        <line x1="1" y1="10" x2="23" y2="10"></line>
                      </svg>
                      Payer {context.total} DH
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
