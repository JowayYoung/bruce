import "./assets/css/reset.css";
import "./index.scss";
import ImgLogo from "./assets/img/logo.svg";

console.log("应用构建环境：", process.env.NODE_ENV);
console.log("应用运行环境：", RUN_ENV); // eslint-disable-line
RUN_ENV === "dev" && module?.hot?.accept(); // eslint-disable-line

const img = document.getElementsByClassName("title-icon")[0];
img.setAttribute("src", ImgLogo);