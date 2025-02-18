import React from "react";
import "./Footer.css";
import { Link } from "react-router";

export default function Footer() {
  return (
    <div className="footer">
      <p>All rights reserved.</p>
      <Link to="PrivacyPolicy">Privacy Policy</Link>
    </div>
  );
}
