import Navbar from "./Navbar";



function Header() {
  return (
    <header>
      <div className="w-full absolute left-0 z-50 top-0 bg-blue-500">Header
        <Navbar></Navbar>
      </div>
    </header>
  );
}

export default Header