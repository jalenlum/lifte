import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom";
import { SmolovJrPage } from "../pages/smolovjrPage";

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById("app"));
root.render(<SmolovJrPage />);
