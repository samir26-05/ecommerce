/* eslint-disable react/prop-types */

import { Button, Tooltip } from "@mui/material";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import './header.css'

const AdminDashboard = ({ textColor }) => {
  return (
    <>
      <Link to={"/user"}>
        <Tooltip title="Dashboard" arrow>
          <Button className="whithoutOutline">
            <FiSettings style={{stroke: textColor, fontSize:"2rem"}} />
          </Button>
        </Tooltip>
      </Link>
    </>
  );
};

export default AdminDashboard;

