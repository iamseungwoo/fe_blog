import metadata from "../../data/metadata";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div className={`items-center sm:flex`}>
            <Link to={`/`}>
                <img
                    src={`/logo.png`}
                    alt="logo"
                    height={40}
                    width={40}
                    className={``}
                />
            </Link>
            <span
                className={`hidden mx-2 font-extralight text-lg py-3 sm:flex font-semibold`}
            >
                {metadata.title}
            </span>
        </div>
    );
};

export default Logo;
