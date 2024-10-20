import { FC } from "react";
import TradableButton, { ButtonProps } from "../button";

const Example: FC<ButtonProps> = ({
  text = "Button",
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <TradableButton
        text={text}
      />
    </div>
  );
};

export default Example;