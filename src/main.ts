import { PageCtrl } from "./rlib/timeline/t2025/july/arc_view/page";
import "./style.css";
let page = PageCtrl();

document
    .querySelector<HTMLDivElement>("#app")
    ?.appendChild(page.comp.getElement());
