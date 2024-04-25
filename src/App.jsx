import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "./useFetch";

export default function App() {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );

  return (
    <div className="container my-4">
      <h1>Posts</h1>
      {error && <p>Soomething went wrong</p>}
      {loading && <p>Loading...</p>}
      {data &&
        data.map((post) => (
          <div className="card my-3">
            <div className="card-body">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
