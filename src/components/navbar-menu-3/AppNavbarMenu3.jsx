import { useEffect, useState } from "react";
import { RiCloseLine, RiSearchLine } from "react-icons/ri";
import NavbarLogin3 from "./NavbarLogin3";
import NavbarMenu3 from "./NavbarMenu3";
import NavbarSignup3 from "./NavbarSignup3";
import "./navbarMenu3.css";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    // setShowLogin(true);
  }, []);

  return (
    <>
      <NavbarMenu3
        onOpenLogin={() => setShowLogin(true)}
        onOpenSearch={() => setShowSearch(true)}
      />

      {showLogin && (
        <NavbarLogin3
          onClose={() => setShowLogin(false)}
          onSwitchToSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        />
      )}

      {showSignup && (
        <NavbarSignup3
          onClose={() => setShowSignup(false)}
          onSwitchToLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}

      {showSearch && (
        <div
          className="nav6__search show-search"
          onClick={() => setShowSearch(false)}>
          <form
            className="nav6__search-form"
            onClick={(e) => e.stopPropagation()}>
            <RiSearchLine className="nav6__search-icon" />
            <input
              type="search"
              placeholder="Que recherchez-vous ?"
              className="nav6__search-input"
            />
          </form>
          <RiCloseLine
            className="nav6__search-close"
            onClick={() => setShowSearch(false)}
          />
        </div>
      )}
    </>
  );
};

export default App;
