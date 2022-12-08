import "./App.scss";
import { useState, useEffect } from "react";
import fetchData from "./utils/fetchData";
import { Post } from "./components/Post";
import { Error } from "./components/Error";
import { LoadingIndicator } from "./components/LoadingIndicator";


function App() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setError] = useState(null);

  useEffect(() => {
    fetchData(setData, setError, setLoading);
  }, [])

  return (
    <div className="row u-equal-height">
      {errorMessage ? (<Error errorMessage={errorMessage} />) : null}
      {isLoading ? (<LoadingIndicator />) : null}
      {data !=null && data.map((item) => <Post key={item.id} item={item} />)}
    </div>
  );
}

export default App;
