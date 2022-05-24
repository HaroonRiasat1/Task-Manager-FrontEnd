import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import Desktop from "@material-ui/icons/DesktopMac";

const DeveloperListItems = (props) => {
  const { menuOption, setMenuOption } = props;
  const handleClick = (e) => {
    console.log(e.target.id);
  };
  return (
    <div>
      <ListItem
        button
        onClick={() => {
          setMenuOption("My Tasks");
        }}
        selected={menuOption === "My Tasks" ? true : false}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="My Tasks" />
      </ListItem>
      <ListItem
        onClick={() => {
          setMenuOption("Submit Task");
        }}
        selected={menuOption === "Submit Task" ? true : false}
        button
      >
        <ListItemIcon>
          <Desktop />
        </ListItemIcon>
        <ListItemText primary="Submit Task" />
      </ListItem>
      <ListItem
        onClick={() => {
          setMenuOption("My Details");
        }}
        selected={menuOption === "My Details" ? true : false}
        button
      >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="My Details" />
      </ListItem>
      {/* <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="FeedBack" />
    </ListItem> */}
    </div>
  );
};
export default DeveloperListItems;
