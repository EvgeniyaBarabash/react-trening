import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
const Navigation = () => {
    return (
        <nav className={s.nav}>
            <NavLink
                to="/"
                className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
                Video
            </NavLink>
            <NavLink
                to="/reader"
                className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
                Reader
            </NavLink>
            <NavLink
                to="/list"
                className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
                List
            </NavLink>
            <NavLink
                to="/create"
                className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
                Create
            </NavLink>
        </nav>
    );
};
export default Navigation;