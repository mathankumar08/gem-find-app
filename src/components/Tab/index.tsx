import Info from "@mui/icons-material/Info";
import { useEffect, useState } from "react";
import { navigation } from "../../services/baseService";
import ForwardIcon from "@mui/icons-material/Forward";
import UndoIcon from "@mui/icons-material/Undo";
import "./styles.css";
import { tabMenu } from "../../common/constants";
import {Tooltip } from "@mui/material";

const Tab: React.FC = () => {
  const [value, setValue] = useState<string>("Mined");

  const getHearderData = async (): Promise<void> => {
    const data = await navigation();
  };

  useEffect(() => {
    getHearderData();
  }, []);

  return (
    <div className="tabContainer-main">
      <div className="tabContainer">
        {tabMenu.map((menu: string) => (
          <Tooltip title={menu}>
          <span
            className={`tabMenu ${value === menu ? "tagactive" : ""} `}
            key={menu}
            onClick={() => setValue(menu)}
          >
            {menu}
            <Info className="info-icon" fontSize="small" />
          </span>
          </Tooltip>
        ))}
      </div>
      <div className="tab-end">
        <div className="save">
          <ForwardIcon />
          <p>Save Search</p>
        </div>
        <div className="reset" onClick={() => window.location.reload()}>
          <UndoIcon />
          <p>Reset</p>
        </div>
      </div>
    </div>
  );
};
export default Tab;
