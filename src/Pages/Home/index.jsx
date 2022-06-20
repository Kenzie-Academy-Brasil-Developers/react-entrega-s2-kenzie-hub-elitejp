import { Redirect } from "react-router-dom";
import Header from "../../components/header";
import Login from "../../components/login";

function Home({ authenticated, setAuthenticated }) {
  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <>
      <Header />
      <Login setAuthenticated={setAuthenticated} />
    </>
  );
}

export default Home;
