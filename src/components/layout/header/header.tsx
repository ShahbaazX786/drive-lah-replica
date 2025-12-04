import { navMenu } from "@/assets/constants";
import BrandLogo from "@/assets/icons/DriveLah.png";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <RxHamburgerMenu size={28} className="mobile-menu" />
      <div>
        <img src={BrandLogo} alt="Drive Lah Logo" className="brand-logo" />
      </div>
      <HiOutlineUserCircle size={28} className="mobile-menu" />
      <nav className="flex-row-sbc gap hide-mobile">
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
