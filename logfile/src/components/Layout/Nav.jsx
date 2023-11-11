import navlinks from "../../data/navlinks";
import { Link } from "react-router-dom";
import Toggle
 from "../Icon/Toggle";
const Nav = () => {
    return (
        <div className={`ml-auto flex items-center gap-2 py-3`}>
            {navlinks.map((nav) => (
                <Link
                    to={nav.link}
                    key={nav.title}
                    className={`
                        px-3 hoveflex items-center rounded-lg transition-all hover:bg-secondary text-primary font-semibold px-3 py-1.5r:bg-secondary
                `}
                >
                    {nav.title}
                </Link>
            ))}
            <Toggle />
        </div>
    );
};

export default Nav;
