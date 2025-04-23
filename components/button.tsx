import React from "react";
import styles from "./button.module.scss";

type ButtonType = "primary" | "danger" | null;

interface IconButtonProps {
  onClick?: () => void;
  icon?: JSX.Element;
  type?: ButtonType;
  text?: string;
  bordered?: boolean;
  shadow?: boolean;
  className?: string;
  title?: string;
  disabled?: boolean;
  tabIndex?: number;
  autoFocus?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  type = null,
  text,
  bordered = false,
  shadow = false,
  className = "",
  title,
  disabled = false,
  tabIndex = 0,
  autoFocus = false,
}) => {
  const buttonClassNames = [
    styles["icon-button"],
    bordered ? styles.border : "",
    shadow ? styles.shadow : "",
    className,
    type ? styles[type] : "",
  ].filter(Boolean).join(" ");

  return (
    <button
      className={buttonClassNames}
      onClick={onClick}
      title={title}
      disabled={disabled}
      role="button"
      tabIndex={tabIndex}
      autoFocus={autoFocus}
    >
      {icon && (
        <div
          className={
            styles["icon-button-icon"] +
            (type === "primary" ? " " + styles["no-dark"] : "")
          }
        >
          {icon}
        </div>
      )}

      {text && <div className={styles["icon-button-text"]}>{text}</div>}
    </button>
  );
};

export default IconButton;
