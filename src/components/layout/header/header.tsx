import { navMenu } from "@/assets/constants";
import BrandLogo from "@/assets/icons/DriveLah.png";
import { useState } from "react";
import "./header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="flex-row-sbc">
      <div>
        <img src={BrandLogo} alt="Drive Lah Logo" className="brand-logo" />
      </div>

      <div className={`nav ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </div>
      <nav className="flex-row-sbc gap">
        <ul className="flex-row-sbc gap">
          {navMenu.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User Avatar"
          className="avatar-img"
        />
      </nav>
    </header>
  );
};

export default Header;
