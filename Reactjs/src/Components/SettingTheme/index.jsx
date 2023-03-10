import { useContext } from "react";
import "./style.scss";

import { ThemeApp } from "../../Utils/context";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

const SettingTheme = ({ width = "6rem", height = "3.2rem" }) => {
    const [theme, setTheme] = useContext(ThemeApp);

    return (
        <div
            className={"setting_theme"}
            style={{
                backgroundColor: theme.secondBackgroundColor,
                width: width,
                height: height,
                transition: "all .4s ease-in-out",
            }}
            onClick={(e) => {
                e.stopPropagation();
                if (theme.theme) {
                    setTheme({
                        theme: false,
                        backgroundColor: "#fff",
                        secondBackgroundColor: "#EFF5F5",
                        thirdBackgroundColor: "#497174",
                        colorActive: "#6f2cf4",
                        button_primary: "#6f2cf4",
                        color: "#000",
                    });
                } else {
                    setTheme({
                        theme: true,
                        backgroundColor: "#0f151a",
                        secondBackgroundColor: "#2C3333",
                        thirdBackgroundColor: "#576F72",
                        colorActive: "#6f2cf4",
                        button_primary: "#6f2cf4",
                        color: "#fff",
                    });
                }
            }}
        >
            <HiOutlineMoon
                style={{
                    color: theme.color,
                    display: !theme.theme ? "block" : "none",
                    fontSize: 32,
                    lineHeight: height,
                }}
            ></HiOutlineMoon>
            <HiOutlineSun
                style={{
                    color: "yellow",
                    display: theme.theme ? "block" : "none",
                    float: "right",
                    fontSize: 32,
                    lineHeight: height,
                }}
            ></HiOutlineSun>
        </div>
    );
};
export default SettingTheme;
