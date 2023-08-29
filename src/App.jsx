import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Main from "./components/Main";
import api from "./api/api";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      let data = await api.get("posts");
      setData(data);
      console.log(data);
    })();
  }, []);

  return (
    <div>
      <Nav />
      <Banner />

      <Main data={data} />
    </div>
  );
}

export default App;
