import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import Theme from '../Theme/Theme';

const NavBar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <NavLink to="/category/geologico">Geológico</NavLink>
              </li>
              <li>
                <NavLink to="/category/montañoso">Montañoso</NavLink>
              </li>
              <li>
                <NavLink to="/category/crater">Cráter</NavLink>
              </li>
              <li>
                <NavLink to="/category/polar">Polar</NavLink>
              </li>
              <li>
                <NavLink to="/category/plana">Plana</NavLink>
              </li>
              <li>
                <NavLink to="/category/vista">Vista</NavLink>
              </li>
              <li>
                <NavLink to="/category/historico">Histórico</NavLink>
              </li>
              <li>
                <NavLink to="/category/cientifico">Científico</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-xl">
            marTerra
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/category/geologico">Geológico</NavLink>
            </li>
            <li>
              <NavLink to="/category/montañoso">Montañoso</NavLink>
            </li>
            <li>
              <NavLink to="/category/crater">Cráter</NavLink>
            </li>
            <li>
              <NavLink to="/category/polar">Polar</NavLink>
            </li>
            <li>
              <NavLink to="/category/plana">Plana</NavLink>
            </li>
            <li>
              <NavLink to="/category/vista">Vista</NavLink>
            </li>
            <li>
              <NavLink to="/category/historico">Histórico</NavLink>
            </li>
            <li>
              <NavLink to="/category/cientifico">Científico</NavLink>
            </li>
          </ul>
        </div>
        <Theme />
        <div className="navbar-end">
          <Link to="/cart" className="btn btn-accent">
            <CartWidget />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
