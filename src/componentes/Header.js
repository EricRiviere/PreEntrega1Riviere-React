import NavBar from "./NavBar";
import MaapLogo from "../imagenes/MaapLogo.webp";

function Header() {
  return (
    <header id="header" className="header flex bg-slate-400 fixed top-0 w-full">
      <img src={MaapLogo} className="w-2/12 h-auto" alt="Maap Logo" />
      <NavBar />
    </header>
  );
}

export default Header;
