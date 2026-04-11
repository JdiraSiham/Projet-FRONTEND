import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Reserver from "./pages/Reserver";
import CreerMatch from "./pages/CreerMatch";
import Boutique from "./pages/Boutique";
import BoutiqueClubs from "./pages/BoutiqueClubs";
import BoutiqueNationales from "./pages/BoutiqueNationales";
import BoutiqueEquipements from "./pages/BoutiqueEquipements";
import Profil from "./pages/Profil";
import MesMatchs from "./pages/MesMatchs";
import MesReservations from "./pages/MesReservations";
import MesCommandes from "./pages/MesCommandes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "reserver", Component: Reserver },
      { path: "creer-match", Component: CreerMatch },
      { path: "boutique", Component: Boutique },
      { path: "boutique/clubs", Component: BoutiqueClubs },
      { path: "boutique/nationales", Component: BoutiqueNationales },
      { path: "boutique/equipements", Component: BoutiqueEquipements },
      { path: "profil", Component: Profil },
      { path: "mes-matchs", Component: MesMatchs },
      { path: "mes-reservations", Component: MesReservations },
      { path: "mes-commandes", Component: MesCommandes },
    ],
  },
]);