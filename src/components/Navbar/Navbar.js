import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>F1 Timer</h1>
      <div className="links">
        <a href="/login">Log in</a>
        <a href="/register">Register</a>
      </div>
    </nav>
  );
};

export default Navbar;
