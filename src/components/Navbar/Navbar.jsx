import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import navImg from "../../assets/logo.png";

const Navbar = ({ availableCoins }) => {
  return (
    <div>
      <div className="navbar bg-base-100 px-4 md:px-0">
        <div className="navbar-start flex-1">
          <a className="text-xl">
            <img className="w-12 h-12" src={navImg} />
          </a>
        </div>
        <div className="navbar-end hidden md:flex flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="mb-0">
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Feature</a>
            </li>
            <li>
              <a href="">Teams</a>
            </li>
            <li>
              <a href="">Schedules</a>
            </li>
          </ul>
          <button className="btn">
            <span>{availableCoins}</span>
            <FontAwesomeIcon
              className="text-yellow-500 text-lg"
              icon={faCoins}
            />
          </button>
        </div>
        <div className="navbar-end flex-none md:hidden">
          <h1>Hello</h1>
          <button className="btn">
            <span>{availableCoins}</span>
            <FontAwesomeIcon
              className="text-yellow-500 text-lg"
              icon={faCoins}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
