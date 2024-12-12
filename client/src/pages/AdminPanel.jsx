import { Cards } from "../components/ui/Cards";
import navList from "../constants";
import { Link } from "react-router-dom";
import { LuCircleUserRound } from "react-icons/lu";


export function AdminPanel() {
  return (
    <div className="w-full h-screen bg-dark flex flex-col items-center justify-center">
      <header className="w-full h-12 flex items-center justify-between">
        <img src="/assets/images/surge-w.svg" alt="surge logo" role="logo" />
        <nav className="text-white">
          <ul className="flex gap-10">
            {navList.map((nav) => (
              <Link key={nav.name} to={nav.path} className="hover:text-green-500 transition-all">
                {nav.name}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
            <LuCircleUserRound className="text-white text-3xl"/>
            <select name="" id="">
                <option>foo</option>
                <option>bar</option>
                <option>baz</option>
            </select>
        </div>
      </header>
      <section id="content" className="flex flex-col w-full h-full items-center justify-center">
        <Cards />
      </section>
    </div>
  );
}
