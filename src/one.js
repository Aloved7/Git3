import classNames from "classnames/bind";
import Style1 from "./css/style.css";
// Style1
// {
//   special: "Adfsfw34432j4kls==",
//   one: "sdfs3321323dsre==",
//   two: "sdfsdfsdfdsf==",
// }

const cx = classNames.bind(Style1);
// cx 是一个函数，可以根据类名获得css modules别名
const className = cx("special", "one", "two"); // => 'abc def xyz'
console.log("className", className);
