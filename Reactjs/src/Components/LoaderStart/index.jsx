import { useContext } from "react";
import { ThemeApp } from "../../Utils/context";
import "./style.scss";

const LoaderStart = ({ show = "false" }) => {
    const [theme, setTheme] = useContext(ThemeApp);

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                display: show ? "flex" : "none",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: theme.backgroundColor,
            }}
        >
            <div class='dashed-loading'></div>
        </div>
    );
};
export default LoaderStart;
