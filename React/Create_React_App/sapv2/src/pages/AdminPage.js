import React from "react";
import { useNavigate } from "react-router-dom";

const permission = false;

const AdminPage = () => {
  const navigate = useNavigate();

  if (!permission) {
    navigate("/login");
    return null;
  }

  return <h3>Panel Adminia - dzień dobry</h3>;
};

export default AdminPage;
