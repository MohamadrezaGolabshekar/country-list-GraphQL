import { login } from "../../requests/authentication";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Elements/Button";
import { Container } from "./style";

const Login = () => {
  const navigate = useNavigate();
  const doLogin = async () => {
    const resp = await login();
    if (resp.result) {
      navigate("/country");
    } else {
      //toast error
    }
  };

  return (
    <Container>
      <Button size="large" onClick={doLogin}>
        Login
      </Button>

      <p>Click login to see country search :)</p>
    </Container>
  );
};

export default Login;
