export default function fetchData(setData, setError, setLoading) {
  fetch("https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK.");
      }
      return response.json();
    })
    .then((data) => {
      if (data != null) {
        setData(data);
        setError(null);
      } else {
        throw new Error("Fetched data is empty (null).");
      }
    })
    .catch((error) => {
      setError("A problem occurred while trying to fetch the data: " + error.message);
      setData(null);
    })
    .finally(() => {
      setLoading(false);
    })
};
