import "./Button.scss";
import { iconPrint } from "../../res/iconPrint";

export default function Button({ text, icon, style }) {
  return (
    <button className={`button ${style ? style : ""}`}>
      {text}
      {icon && iconPrint(icon)}
    </button>
  );
}
