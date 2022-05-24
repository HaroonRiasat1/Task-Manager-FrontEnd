import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import { Navigate } from "react-router";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  Button,
  MenuItem,
} from "@material-ui/core";

import TesterListItems from "./TesterListItems";
import { useEffect, useState } from "react";
import axios from "axios";
function Copyright() {
  // classes created because it is needed in the footer.
  const classes = useStyles();
  return (
    <Container className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://material-ui.com/">
          Task Manager
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  );
}

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    // content which is class of main needs to be flex and column direction
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: "80vh",
  },
  // added the footer class
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
    backgroundColor: "white",
    // just this item, push to bottom
    alignSelf: "flex-end",
  },
}));

export default function Dashboard() {
  const { testId } = useParams();
  const classes = useStyles();
  const [message, setMessage] = useState("");
  const [open, setOpen] = React.useState(true);
  const [tasks, setTasks] = useState([]);
  const [TestingTasks, setTestingTasks] = useState([]);
  const [checkform, setcheckform] = useState("admin");
  const [logout, setLogout] = useState(false);

  const [tester, setTester] = useState({});
  const [developer, setDeveloper] = useState({});
  const [formData, setFormData] = useState({
    id: "",
    status: "Development",
    code: "",
  });   
  const [menuOption, setMenuOption] = useState("My Tasks");

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  useEffect(() => {
    console.log("Tester ID", testId);
    axios.get("http://localhost:5000/Tester/" + testId).then((response) => {
      console.log("Tester", response.data);
      console.log("hello");
      setTester(response.data[0]);
    });
    axios
      .get("http://localhost:5000/assignedTaskTester/" + testId)
      .then((response) => {
        setTasks(response.data);
        setTestingTasks(
          response.data.filter((task) => task.status === "Testing")
        );
        console.log(response.data);
      });
  }, []);
  const handleSubmit = () => {
    console.log(formData);
    axios
      .put("http://localhost:5000/updateTask", formData)
      .then((response) => {
        console.log(response.data);
        setMessage("Task Submitted");
      })
      .catch((err) => {
        setMessage("Please select a task to submit");
        console.log(err);
      });
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChange1 = (e) => {
    setcheckform(e.target.value);
    console.log(e.target.value);
    if(checkform=="developer")
    {
      setFormData({ ...formData, status: "Development" });
     
    }
    else{
      setFormData({ ...formData, status: "Tested" });
    }
    console.log(formData.status);
  };

  if(logout){
    return <Navigate to="/"></Navigate>
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Tester Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge  color="secondary">
            <Button onClick={()=>{
                setLogout(true);
            }} style={{color:"white"}}>Logout</Button>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <TesterListItems
            menuOption={menuOption}
            setMenuOption={setMenuOption}
          />
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid container spacing={5} item xs={12} md={12} lg={12}>
              <Container>
                {menuOption === "My Tasks" ? (
                  <>
                    <h1>My Tasks</h1>
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">title</th>
                          <th scope="col">Description</th>
                          <th scope="col">TesterID</th>
                          <th scope="col">Status</th>
                          <th scope="col">Code</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tasks.map((task, index) => {
                          return (
                            <>
                            <tr>
                              <th scope="row">{index + 1}</th>
                              <td className="row-title" >{task.title}</td>
                              <td>{task.description}</td>
                              <td>{task.assignedTester}</td>
                              <td>{task.status}</td>
                              <td>{task.code}</td>
                            </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </>
                ) : menuOption === "Submit Task" ? (
                  <>
                    <h1>Submit Task</h1>
                    <form style={{ padding: "20px" }} onSubmit={handleSubmit}>
                      <Grid>
                        <Grid item xs={12} md={12} sx={{ mb: 10 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Task
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={formData.id}
                              name="id"
                              label="Select Task"
                              onChange={handleChange}
                            >
                              {TestingTasks.map((TestingTasks) => {
                                return (
                                  <MenuItem value={TestingTasks._id}>
                                    {TestingTasks.title}
                                  </MenuItem>
                                );
                              })}
                            </Select>
                      
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} md={12} sx={{ mb: 10 }}>
                          <TextField
                            sx={{
                              mb: 2,
                              mt: 1,
                            }}
                            fullWidth
                            name="code"
                            value={formData.code}
                            onChange={handleChange}
                            label="Code"
                            minRows={3}
                            multiline
                          ></TextField>
                          
                                <select id="Position"
                                onChange={handleChange1}

                                > 
                                        <option value="developer">developer</option>
                                      <option value="admin">admin</option>
                                      
                                        
                              
                                </select>
                              </Grid>
                        <Grid item xs={12} md={12} sx={{ mb: 10 }}>
                          <div
                            style={{
                              fontSize: 16,
                              margin: "5px",
                              color: "red",
                            }}
                          >
                            {message}
                          </div>
                        </Grid>
                        <Grid item xs={12} md={12} sx={{ mb: 10 }}>
                          <Button
                            onClick={handleSubmit}
                            style={{
                              margin: 10,
                              backgroundColor: "blue",
                              color: "white",
                              fontWeight: "bold",
                            }}
                            color="blue"
                            variant="contained"
                          >
                            Submit Task!
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </>
                ) : (
                  <>
                    <h1>My Profile</h1>
              
                      <center>
                    <Grid item xs={12} md={12} sx={{ mb: 10 }}>
                      <Typography
                        sx={{
                          mb: 2,
                          mt: 1,
                        }}
                        fullWidth
                      >
                        Name: {tester.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={12} sx={{ mb: 10 }}>
                      <Typography
                        sx={{
                          mb: 2,
                          mt: 1,
                        }}
                        fullWidth
                      >
                        Email: {tester.email}
                      </Typography>
                    </Grid>
                
                    <Grid item xs={12} md={12} sx={{ mb: 10 }}>
                      <Typography
                        sx={{
                          mb: 2,
                          mt: 1,
                        }}
                        fullWidth
                      >
                        Role: {tester.userType}
                      </Typography>
                      
                    </Grid>
                    </center>
                  </>
                  
                )}
              </Container>
            </Grid>
          </Grid>
        </Container>
        <Copyright />
      </main>
    </div>
  );
}
