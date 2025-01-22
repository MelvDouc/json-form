import { initDsx } from "@melvdouc/dsx";
import App from "$/App";
import "./style.scss";

initDsx();

// const data = {
//   title: "Poems",
//   publishedYear: 1846,
//   authors: [
//     {
//       name: "Emily Brontë",
//       born: 1818,
//       ownBooks: [
//         "Wuthering Heights"
//       ]
//     },
//     "Charlotte Brontë",
//     "Anne Brontë"
//   ]
// };

// const form = JsonForm({ value: data });
document.body.append(App());