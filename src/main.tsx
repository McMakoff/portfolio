import "./index.html";
import "./style/style.scss";
import React from "react";
import ReactDom from 'react-dom';
import Page from "./ts/components/Page";

document.addEventListener('DOMContentLoaded', () => {
  ReactDom.render(<Page/>, document.querySelector('.app'))
})
