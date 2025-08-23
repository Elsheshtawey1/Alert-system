import type { ReactNode } from "react";
import "./index.scss";
import { X } from "lucide-react";
interface AlertProps {
  type: string;
  icon: ReactNode;
  title: string;
  description: ReactNode;
}
const Alert = ({ type = "danger", icon, title, description }: AlertProps) => {
  return (
    <div className={`alert alert-${type}`}>
      <div className="alert-header">
        <div className="alert-title">
          {icon}
          <h4>{title}</h4>
        </div>
        <button className="alert-close">
          <X />
        </button>
      </div>

      <p className="alert-message">{description}</p>
    </div>
  );
};

export default Alert;
