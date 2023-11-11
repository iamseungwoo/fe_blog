import { Link } from "react-router-dom";

const Tag = ({ name }) => {
    return (
        <Link to={`/tags/${name}`}>
            <div className="rounded-lg px-2 py-0.5 transition-colors bg-secondary hover:text-primary hover:bg-tertiary text-secondary font-normal">
                {name}
            </div>
        </Link>
    );
};

export default Tag;
