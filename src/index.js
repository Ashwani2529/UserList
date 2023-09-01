import React from "react";
import ReactDOMClient from "react-dom/client";
import { Users } from "./components/Users";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Users />);
