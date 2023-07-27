import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <>
      <div className="block">
        <h1 className="mt-8 mr-8 ml-8">MAAP</h1>
        <p className="italic text-xs ml-4 mb-4 mr-4">
          Performance Cycling & Appeal
        </p>
      </div>
      <nav className="container flex justify-evenly items-center">
        <a href="#">New Season</a>
        <a href="#">Man</a>
        <a href="#">Woman</a>
        <a href="#">Accessories</a>
      </nav>
      <CartWidget />
    </>
  );
}

export default NavBar;
