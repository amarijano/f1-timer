import "./navbar.scss";
import { useSize } from "../../hooks";

const Navbar = () => {
  const width = useSize();
  const handleLogin = () => {};
  return (
    <nav className="navbar">
      <h1>F1 Timer</h1>
      <div className="links">
        {width > 762 ? (
          <>
            <a href="/login" onClick={handleLogin}>
              Log in
            </a>
            <a href="/register">Register</a>
          </>
        ) : (
          <>
            <p>manj</p>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
