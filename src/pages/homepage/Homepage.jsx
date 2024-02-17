import { useLocation } from "react-router";
import Content from "../../components/content/Content";
import "./homepage.css";

import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";

export default function Homepage() {
  return (
    <>
      <div className="home">
        <Content/>
        {/* <Sidebar/> */}
      </div>
    </>
  )
}
