import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";

type Props = {
  message: string;
};

const ErrorBox: FC<Props> = ({ message }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (message.indexOf("401") >= 0) {
      navigate("/login");
    }
  }, [message]);

  return <Container>{message}</Container>;
};

export default ErrorBox;
