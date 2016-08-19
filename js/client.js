import React from "react";
import ReactDOM from "react-dom";

import Bootstrap from "./vendor/bootstrap-without-jquery.min.js";

import Layout from "./pages/Layout";

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
