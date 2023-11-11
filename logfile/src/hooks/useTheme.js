import { useCallback, useState } from "react";

const useTheme = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );
    localStorage.setItem("theme", theme);
    const onChangeTheme = useCallback(() => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }, []);

    return [theme, onChangeTheme];
};

export default useTheme;
