import { useContext } from "react";
import { Link } from "react-router-dom";

import "./style.scss";
import adminAvatar from "../../assets/img/adminAvatar.png";
import { AiOutlineHome } from "react-icons/ai";

import { ThemeApp } from "../../Utils/context";
import SettingTheme from "../../Components/SettingTheme";
import Menu from "../../Components/Menu";
import Button from "../../Components/Button";

import { IoSettingsOutline } from "react-icons/io5";
import { ImProfile } from "react-icons/im";

const Header = ({}) => {
  const [theme, setTheme] = useContext(ThemeApp);

  return (
    <div className={"wrapper_header"}>
      <div className={"info_header"}>
        <Link to="/">
          <AiOutlineHome
            className={"icon_back_home"}
            style={{
              color: theme.color,
            }}
          />
        </Link>
        <div className={"info_header_sub"}>
          <h1
            style={{
              color: theme.color,
            }}
          >
            Admin
          </h1>
          <h5
            style={{
              fontSize: "1.2rem",
            }}
          >
            Management users
          </h5>
        </div>
      </div>
      <div
        className={"wrapper_info"}
        style={{
          position: "relative",
        }}
      >
        <SettingTheme></SettingTheme>

        <img style={{ width: "5rem", borderRadius: "50%" }} src={adminAvatar} />
        <Menu
          position="absolute"
          addStyle={{
            borderRadius: "var(--primary_border_radius)",
            padding: " 1rem",
          }}
          top="calc(var(--height_header) )"
          left="0"
          right="0"
          width="100%"
          backgroundColor={theme.secondBackgroundColor}
          display={"block"}
          arrow={true}
          positionArrow={{
            top: "-2rem",
            right: "2rem",
          }}
        >
          <Button
            nameButton="Settings"
            addStyleCustom={{
              borderRadius: "var(--primary_border_radius)",
              "--hover_background_color": theme.thirdBackgroundColor,
              "--hover_color": theme.color,
              justifyContent: "flex-start",
              padding: " .5rem 1rem",
            }}
            width="100%"
            icon={
              <IoSettingsOutline
                style={{
                  marginRight: "1rem",
                }}
              />
            }
          ></Button>
          <Button
            nameButton="Profile"
            addStyleCustom={{
              borderRadius: "var(--primary_border_radius)",
              "--hover_background_color": theme.thirdBackgroundColor,
              "--hover_color": theme.color,
              justifyContent: "flex-start",
              padding: " .5rem 1rem",
              marginTop: "1rem",
            }}
            width="100%"
            icon={
              <ImProfile
                style={{
                  marginRight: "1rem",
                }}
              />
            }
          ></Button>
        </Menu>
      </div>
    </div>
  );
};
export default Header;
