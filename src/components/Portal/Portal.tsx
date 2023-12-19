import { type ReactNode } from "react";
import { createPortal } from "react-dom";
import NoSSR from "src/hocs/NoSSR";

type PortalProps = {
  children: ReactNode;
};

export const Portal = ({ children }: PortalProps) => {
  if (typeof document === "undefined") return null;

  return (
    <NoSSR>{createPortal(children, document.getElementById("portal")!)}</NoSSR>
  );
};
