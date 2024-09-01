import { FaGithub } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

export const Header = () => {
  // use theme from local storage if available or set light theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "emerald"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("business");
    } else {
      setTheme("emerald");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <header className="navbar bg-base-100 shadow-md py-4 fixed">
      <div className="navbar-start">
        <details className="dropdown">
          <summary tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <p className="text-3xl">
              <FaBarsStaggered />
            </p>
          </summary>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Inicio</a>
            </li>
            <li>
              <a>Acerca del Proyecto</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">Conversor de Monedas</a>
      </div>
      <div className="navbar-end">
        <a
          className="btn btn-ghost btn-circle text-3xl"
          href="https://github.com/cylantomacio"
          target="_blank"
        >
          <FaGithub />
        </a>
        <div className="divider divider-horizontal"></div>
        {/* Toggle button here */}
        <button className="btn btn-circle btn-ghost">
          <label htmlFor="themeChanger" className="swap swap-rotate text-3xl w-full h-full">
            {/* this hidden checkbox controls the state */}
            <input
              id="themeChanger"
              type="checkbox"
              onChange={handleToggle}
              checked={theme === "emerald" ? false : true}
            />

            {/* sun icon */}
            <GoSun className="swap-on fill-current" />

            {/* moon icon */}
            <FaMoon className="swap-off fill-current" />
          </label>
        </button>
      </div>
    </header>
  );
};
