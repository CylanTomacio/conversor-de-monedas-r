import { FaGithub } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaRegSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <p className="text-2xl">
              <FaBarsStaggered />
            </p>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">Conversor de Monedas</a>
      </div>
      <div className="navbar-end">
        <a
          className="btn btn-ghost btn-circle text-2xl"
          href="https://github.com/cylantomacio"
          target="_blank"
        >
          <FaGithub />
        </a>
        <div>
          {/* Toggle button here */}
          <button className="btn btn-square btn-ghost">
            <label className="swap swap-rotate text-2xl">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" />

              {/* sun icon */}
              <FaRegSun className="swap-off fill-current" />

              {/* moon icon */}
              <FaMoon className="swap-on fill-current" />
            </label>
          </button>
        </div>
      </div>
    </header>
  );
};
