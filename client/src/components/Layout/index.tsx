import { FC, ReactChild } from "react";
import { Container } from "./style";

type Props = {
  children: ReactChild;
};

const Layout: FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
