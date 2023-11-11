import { BsMoon, BsSun } from "react-icons/bs";
import useTheme from "../../hooks/useTheme";

const Toggle = () => {
    const [theme, setTheme] = useTheme();
    const onClickToggle = () => {
        setTheme();
    };
    document.querySelector("html").setAttribute("data-theme", theme);

    return (
        <div onClick={onClickToggle}>
            {theme !== "dark" ? <BsSun /> : <BsMoon />}
        </div>
    );
};

export default Toggle;
