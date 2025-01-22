import { initDsx } from "@melvdouc/dsx";
import App from "$/App";
import "./style.scss";
import favicon from "/favicon.png";

initDsx();

(() => {
  const link = document.createElement("link");
  link.rel = "icon";
  link.href = favicon;
  link.type = "image/png";
  document.head.append(link);
})();

document.body.append(App());