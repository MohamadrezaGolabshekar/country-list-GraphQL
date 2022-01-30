import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Login";
import CountryList from "./CountryList";
import NotFound from "./NotFound";
import { checkLogin } from "../requests/authentication";
import Loading from "../components/Elements/Loading";

const RouteComp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const resp = await checkLogin();
      setIsLoading(false);
      if (!resp.result) {
        navigate("/login");
      } else {
        navigate("/country");
      }
    })();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/country" element={<CountryList />} />
    </Routes>
  );
};

export default RouteComp;
