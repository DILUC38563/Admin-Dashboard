import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ForumIcon from "@material-ui/icons/Forum";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import "./page.css";
import TextField from "@material-ui/core/TextField";
import ToolBar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailIcon from "@material-ui/icons/Mail";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

export const Pages = () => {
  const data = [
    {
      month: "Jan",
      earning: 0,
    },
    {
      month: "feb",
      earning: 10000,
    },
    {
      month: "Mar",
      earning: 5000,
    },
    {
      month: "Arp",
      earning: 15000,
    },
    {
      month: "May",
      earning: 10000,
    },
    {
      month: "Jun",
      earning: 20000,
    },
    {
      month: "Jul",
      earning: 15000,
    },
    {
      month: "Aug",
      earning: 25000,
    },
    {
      month: "Sep",
      earning: 20000,
    },
    {
      month: "Oct",
      earning: 30000,
    },
    {
      month: "Nov",
      earning: 25000,
    },
    {
      month: "Dec",
      earning: 40000,
    },
  ];

  const pieData = [
    { name: "Social", value: 15 },
    { name: "Referral", value: 30 },
    { name: "Direct", value: 55 },
  ];
  const COLORS = ["#36B9CC", "#1DC88B", "#4E72DE"];
  return (
    <div className="page">
      <div className="bar">
        <ToolBar>
          <TextField variant="outlined" label="search..." />
          <Button>
            <SearchIcon
              style={{
                backgroundColor: "#345FDB",
                padding: 15,
                borderRadius: 10,
                color: "white",
              }}
            />
          </Button>

          <ToolBar>
            <Badge
              badgeContent={3}
              color="secondary"
              style={{ paddingLeft: 10 }}
            >
              <NotificationsIcon />
            </Badge>
            <Badge
              badgeContent={7}
              color="secondary"
              style={{ paddingLeft: 20 }}
            >
              <MailIcon />
            </Badge>
            <AccountCircleIcon style={{ paddingLeft: 20 }} />
          </ToolBar>
        </ToolBar>
      </div>

      {/* Top Part */}

      <div className="title">
        <h1>Dashboard</h1>
        <Button
          variant="contained"
          style={{ backgroundColor: "rgb(74,113,221)", color: "white" }}
        >
          Generate Report
        </Button>
      </div>
      <div className="cards">
        <Card
          style={{
            padding: 20,
            borderLeft: "solid rgb(74,113,221)",
            fontSize: 20,
            fontWeight: "bold",
            color: "rgb(74,113,221)",
          }}
        >
          Earning(Monthly)
          <div className="amount">
            $40,000
            <span className="icon">
              <CalendarTodayIcon />
            </span>
          </div>
        </Card>
        <Card
          style={{
            padding: 20,
            borderLeft: "solid rgb(29,201,138)",
            fontSize: 20,
            fontWeight: "bold",
            color: "rgb(29,201,138)",
          }}
        >
          Earning(Annually)
          <div className="amount">
            $215,000
            <span className="icon">
              <AttachMoneyIcon />
            </span>
          </div>
        </Card>
        <Card
          style={{
            padding: 20,
            borderLeft: "solid rgb(55,184,204)",
            fontSize: 20,
            fontWeight: "bold",
            color: "rgb(55,184,204)",
          }}
        >
          Tasks Completed
          <div className="amount">
            50%
            <span className="icon">
              <AssignmentIcon />
            </span>
          </div>
        </Card>
        <Card
          style={{
            padding: 20,
            borderLeft: "solid rgb(246,194,62)",
            fontSize: 20,
            fontWeight: "bold",
            color: "rgb(246,194,62)",
          }}
        >
          Pending Requests
          <div className="amount">
            18
            <span className="icon">
              <ForumIcon />
            </span>
          </div>
        </Card>
      </div>

      {/* Charts */}

      <div className="section">
        <div className="charts">
          <h3>Earnings Overview</h3>
          <ResponsiveContainer width="100%" height="80%">
            <LineChart data={data} width={500} height={300}>
              <XAxis dataKey="month" />
              <YAxis unit="$" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="earning"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="pie">
          <h3>Revenue Sources</h3>
          <PieChart width={400} height={400}>
            <Pie
              data={pieData}
              cx={200}
              cy={200}
              innerRadius={80}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <h4 style={{ color: "#1DC88B" }}>
            Referral<span style={{ color: "#4E72DE" }}>Direct</span>
            <span style={{ color: "#36B9CC" }}>Social</span>
          </h4>
        </div>
      </div>

      {/* Middle Part */}

      <div className="content">
        <Card style={{ width: "48%", padding: 10 }}>
          <h3 style={{ color: "#4e73df" }}>Projects</h3>
          <h4 className="projects">
            Server Migration<span>20%</span>
          </h4>
          <Box>
            <LinearProgress
              variant="determinate"
              value={20}
              style={{
                padding: 5,
                borderRadius: 15,
                backgroundColor: "#EBEDF4",
              }}
            />
          </Box>
          <h4 className="projects">
            Sales Tracking<span>40%</span>
          </h4>
          <Box>
            <LinearProgress
              color="secondary"
              variant="determinate"
              value={40}
              style={{
                padding: 5,
                borderRadius: 15,
                backgroundColor: "#EBEDF4",
              }}
            />
          </Box>
          <h4 className="projects">
            Customer DataBase<span>60%</span>
          </h4>
          <Box>
            <LinearProgress
              color="inherit"
              variant="determinate"
              value={60}
              style={{
                padding: 5,
                borderRadius: 15,
                backgroundColor: "#EBEDF4",
              }}
            />
          </Box>
          <h4 className="projects">
            Payout Details<span>80%</span>
          </h4>
          <Box>
            <LinearProgress
              variant="determinate"
              value={80}
              style={{
                padding: 5,
                borderRadius: 15,
                backgroundColor: "#EBEDF4",
              }}
            />
          </Box>
          <h4 className="projects">
            Account Setup<span>Complete!</span>
          </h4>
          <Box>
            <LinearProgress
              color="success"
              variant="determinate"
              value={100}
              style={{
                padding: 5,
                borderRadius: 15,
                backgroundColor: "#EBEDF4",
              }}
            />
          </Box>
        </Card>
        <Card style={{ width: "48%", padding: 10 }}>
          <h3 style={{ color: "#4e73df" }}>Illustrations</h3>
          <img
            style={{ width: "25rem" }}
            src="	https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"
            alt="..."
          />
          <p>
            Add some quality, svg illustrations to your project courtesy of
            unDraw, a constantly updated collection of beautiful svg images that
            you can use completely free and without attribution!
          </p>
          <a href="https://undraw.co/">Browse Illustrations on unDraw →</a>
        </Card>
      </div>

      {/* bottom part */}

      <div className="colors">
        <div className="color-card">
          <Card
            style={{
              padding: 10,
              margin: 10,
              backgroundColor: "#4e73df",
              width: "50%",
              color: "white",
            }}
          >
            <h3>Primary</h3>
            <h3>#4e73df</h3>
          </Card>
          <Card
            style={{
              padding: 10,
              margin: 10,
              backgroundColor: "#1cc88a",
              width: "50%",
              color: "white",
            }}
          >
            <h3>Success</h3>
            <h3>#1cc88a</h3>
          </Card>
        </div>
        <div className="color-card">
          <Card
            style={{
              padding: 10,
              margin: 10,
              backgroundColor: "#36b9cc",
              width: "50%",
              color: "white",
            }}
          >
            <h3>Info</h3>
            <h3>#36b9cc</h3>
          </Card>
          <Card
            style={{
              padding: 10,
              margin: 10,
              backgroundColor: "#f6c23e",
              width: "50%",
              color: "white",
            }}
          >
            <h3>Warning</h3>
            <h3>#f6c23e</h3>
          </Card>
        </div>
        <div className="color-card">
          <Card
            style={{
              padding: 10,
              margin: 10,
              backgroundColor: "#e74a3b",
              width: "50%",
              color: "white",
            }}
          >
            <h3>Danger</h3>
            <h3>#e74a3b</h3>
          </Card>
          <Card
            style={{
              padding: 10,
              margin: 10,
              backgroundColor: "#858796",
              width: "50%",
              color: "white",
            }}
          >
            <h3>Secondary</h3>
            <h3>#858796</h3>
          </Card>
        </div>
        <div className="color-card">
          <Card
            style={{
              padding: 10,
              margin: 10,
              backgroundColor: "#5a5c69",
              width: "50%",
              color: "white",
            }}
          >
            <h3>Dark</h3>
            <h3>#5a5c69</h3>
          </Card>
          <Card
            style={{
              padding: 10,
              margin: 10,
              backgroundColor: "#f8f9fc",
              width: "50%",
              color: "#5a5c69",
            }}
          >
            <h3>Light</h3>
            <h3>#f8f9fc</h3>
          </Card>
        </div>
      </div>
      <div className="dev">
        <Card style={{ fontWeight: "bold" }}>
          <h3 style={{ padding: 20, color: "#4e73df" }}>Developer Approach</h3>
          <p className="para">
            SB Admin 2 makes extensive use of Bootstrap 4 utility classes in
            order to reduce CSS bloat and poor page performance. Custom CSS
            classes are used to create custom components and custom utility
            classes.
          </p>
          <p className="para">
            Before working with this theme, you should become familiar with the
            Bootstrap framework, especially the utility classes.
          </p>
        </Card>
      </div>
    </div>
  );
};
