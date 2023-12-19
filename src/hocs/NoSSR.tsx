import React, { type FC, type ReactNode, useEffect, useState } from "react";

type NoSSRProps = {
  children: ReactNode;
};

const NoSSR: FC<NoSSRProps> = ({ children }) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return isSSR ? null : <>{children}</>;
};

export default NoSSR;
