import React from "react";
import "./Sidebar.css";
import EmojiEmotionsRoundedIcon from "@mui/icons-material/EmojiEmotionsRounded";
import SettingsApplicationsOutlinedIcon from "@mui/icons-material/SettingsApplicationsOutlined";
import BuildIcon from "@mui/icons-material/Build";
import FolderIcon from "@mui/icons-material/Folder";
import TimelineIcon from "@mui/icons-material/Timeline";
import TableChartIcon from "@mui/icons-material/TableChart";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h2>
            <EmojiEmotionsRoundedIcon style={{ paddingRight: 10 }} />
            <span>SB Admin 2</span>
          </h2>
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItemTitle">Interface</li>
            <li className="sidebarListItem">
              <SettingsApplicationsOutlinedIcon style={{ paddingRight: 10 }} />
              Components
            </li>
            <li className="sidebarListItem">
              <BuildIcon style={{ paddingRight: 10 }} />
              Utilites
            </li>
            <li className="sidebarListItemTitle">ADDONS</li>
            <li className="sidebarListItem">
              <FolderIcon style={{ paddingRight: 10 }} />
              Pages
            </li>
            <li className="sidebarListItem">
              <TimelineIcon style={{ paddingRight: 10 }} />
              Charts
            </li>
            <li className="sidebarListItem">
              <TableChartIcon style={{ paddingRight: 10 }} />
              Tables
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
