import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

import "./style.scss";

import { ThemeApp } from "../../Utils/context";
import { FaRegUser } from "react-icons/fa";
import { RiProductHuntLine } from "react-icons/ri";
import { BsCashCoin } from "react-icons/bs";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { AiOutlineTable } from "react-icons/ai";

const Navbar = ({
  width,
  dataOf,
  setDataOf = (e) => {},
  layout,
  setLayout = (e) => {},
}) => {
  const navSetting = {
    user: {
      name: "Users",
      icon: <FaRegUser />,
      codeId: "user",
    },
    product: {
      name: "Product Posted",
      icon: <RiProductHuntLine />,
      codeId: "product",
    },
    sold_product: {
      name: "Product Sold",
      icon: <BsCashCoin />,
      codeId: "sold_product",
    },
  };
  const [theme, setTheme] = useContext(ThemeApp);
  const [dataActive, setDataActive] = useState(navSetting[dataOf]);

  const renderSetting = () => {
    return Object.keys(navSetting).map((key) => {
      return (
        <div
          key={uuid()}
          className={"action_setting"}
          style={{
            "--background_hover": theme.secondBackgroundColor,
            backgroundColor:
              dataActive.name == navSetting[key].name
                ? theme.secondBackgroundColor
                : "transparent",
          }}
          onClick={(e) => setDataOf(navSetting[key].codeId)}
        >
          {navSetting[key].icon}
          <span
            style={{
              marginLeft: "1.2rem",
            }}
          >
            {navSetting[key].name}
          </span>
        </div>
      );
    });
  };

  useEffect(() => {
    setDataActive(navSetting[dataOf]);
  }, [dataOf]);
  return (
    <div
      className={"wrapper_navbar"}
      style={{
        backgroundColor: "transparent",
        height: 40,
        color: theme.color,
      }}
    >
      <div
        style={{
          width: "30%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <div
          className={"action_setting"}
          style={{
            padding: "1.2rem 0",
            display: "inline-block",
          }}
        >
          <div
            className={"drop_menu_set_layout"}
            style={{
              color: "#ccc",
              alignItems: "center",
              "--color_hover": theme.color,
              marginLeft: "1.2rem",
            }}
          >
            <div className={"drop_menu"}>
              <BsLayoutTextSidebarReverse
                className={"icon_action"}
                onClick={(e) => setLayout(!layout)}
                style={{
                  fontSize: 18,
                  display: !layout ? "none" : "inline-block",
                }}
              />
              <AiOutlineTable
                className={"icon_action_admin"}
                onClick={(e) => setLayout(!layout)}
                style={{
                  fontSize: 24,
                  display: layout ? "none" : "inline-block",
                  transform: "translateY(-.2rem)",
                }}
              />
              <select
                onChange={(e) => setLayout(!layout)}
                className={"wrapper_choose_type_show_data"}
                style={{
                  color: theme.color,
                  padding: "4 1.2rem",
                }}
              >
                <option
                  value={layout ? "table" : "list"}
                  style={{
                    backgroundColor: theme.thirdBackgroundColor,
                  }}
                >
                  Table
                </option>
                <option
                  value={!layout ? "table" : "list"}
                  style={{
                    backgroundColor: theme.thirdBackgroundColor,
                  }}
                >
                  Card
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className={"wrapper_setting_admin"}>{renderSetting()}</div>
    </div>
  );
};
export default Navbar;
