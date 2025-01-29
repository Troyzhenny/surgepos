import { Cards } from "../components/ui/Cards";
import AdminCards from "../utils/constants";
import { Link } from "react-router-dom";
import { LuCircleUserRound } from "react-icons/lu";
import surgeIcon from "../assets/images/surge-w.svg";
import { useState } from "react";

export function AdminPanel() {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setToggleDropdown((prevState) => !prevState);
  };

  return (
    <div className="w-full h-screen bg-dark bg-gradient-to-t from-dark flex flex-col items-center justify-center">
      <header className="w-full h-12 flex items-center justify-between p-10">
        <Link to="/admin-panel">
          <img
            src={surgeIcon}
            alt="surge logo"
            role="logo"
            className="w-20 h-20"
          />
        </Link>
        <div className="flex items-center gap-2">
          <p className="text-white">admin.name</p>
          <LuCircleUserRound
            className="text-white text-3xl cursor-pointer"
            onClick={handleToggleDropdown}
          />
          {toggleDropdown && (
            <div
              role="dropdown menu"
              className="text-white absolute flex flex-col bg-zinc-800 w-40 top-[81px] p-5 transition-all"
            >
              <Link
                className="hover:text-green-500 active:text-orange-300 focus:text-orange-300"
                onClick={""}
              >
                Logout
              </Link>
              <Link className="hover:text-green-500 active:text-orange-300 focus:text-orange-300">
                Settings
              </Link>
              <Link className="hover:text-green-500 active:text-orange-300 focus:text-orange-300">
                Support
              </Link>
            </div>
          )}
        </div>
      </header>
      <section
        id="content"
        className="flex flex-col w-full h-full items-center justify-center"
      >
        <div className="flex flex-wrap items-center justify-center w-fit h-fit gap-10">
          {AdminCards.map((data) => (
            <Link key={data.id} to={data.path}>
              <Cards
                label={data.name}
                className="flex items-center justify-center rounded-lg text-orange-100 text-lg bg-green-600 bg-gradient-to-t from-dark bg-opacity-5 border-2 w-72 h-44 border-sage transition-all hover:translate hover:bg-opacity-10 focus:bg-opacity-10 active:bg-opacity-10"
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
