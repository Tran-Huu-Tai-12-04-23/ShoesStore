import { useContext } from "react";
import { ThemeApp } from "../../Utils/context";
import LottiePlayer from "@lottiefiles/lottie-player";

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
            <div
                style={{
                    width: "20%",
                    height: "20%",
                }}
            >
                <lottie-player
                    autoplay
                    loop
                    mode='normal'
                    src='https://assets5.lottiefiles.com/packages/lf20_yGAvcNz3us.json'
                    hover
                ></lottie-player>
            </div>
        </div>
    );
};
export default LoaderStart;
