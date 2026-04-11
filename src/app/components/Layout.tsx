import { Outlet, Link, useLocation } from "react-router";
import { Home, ShoppingBag, Calendar, User } from "lucide-react";

export default function Layout() {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Accueil" },
    { path: "/reserver", icon: Calendar, label: "Réserver" },
    { path: "/boutique", icon: ShoppingBag, label: "Boutique" },
    { path: "/profil", icon: User, label: "Profil" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-2xl font-bold text-[#235A3D]">
              FootMatch
            </Link>
            <div className="flex items-center gap-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 transition-colors ${
                      isActive ? "text-[#235A3D] font-semibold" : "text-gray-700 hover:text-[#2d6e4a]"
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="md:pt-16 pb-20 md:pb-0">
        <Outlet />
      </div>
      
      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                  isActive ? "text-[#235A3D]" : "text-gray-500"
                }`}
              >
                <Icon size={24} className={isActive ? "stroke-2" : ""} />
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}