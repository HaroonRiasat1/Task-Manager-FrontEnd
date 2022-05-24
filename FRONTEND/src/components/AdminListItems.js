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
          setMenuOption("Assigned Tasks");
        }}
        selected={menuOption === "Assigned Tasks" ? true : false}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Assigned Task" />
      </ListItem>
      <ListItem
        onClick={() => {
          setMenuOption("Assign Task");
        }}
        selected={menuOption === "Assign Task" ? true : false}
        button
      >
        <ListItemIcon>
          <Desktop />
        </ListItemIcon>
        <ListItemText primary="Assign Task" />
      </ListItem>
      <ListItem
        onClick={() => {
          setMenuOption("Employee Details");
        }}
        selected={menuOption === "Employee Details" ? true : false}
        button
      >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Employee Details" />
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