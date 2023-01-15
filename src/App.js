import React from "react";
import "./App.css";
import ProductPage from "./ProductPage";
// import axios from "axios";

function App() {
  // const [loading, setLoading] = useState(false);
  // const [posts, setPosts] = useState([]);
  // const [searchTitle, setSearchTitle] = useState("");

  // useEffect(() => {
  //   const loadPosts = async () => {
  //     setLoading(true);
  //     const response = await axios.get(
  //       "https://northwind.vercel.app/api/products"
  //     );
  //     setPosts(response.data);
  //     setLoading(false);
  //   };

  //   loadPosts();
  // }, []);
  return (
    <div className="App">
      <ProductPage/>
      {/* <h3>Search Filter</h3>
      <input
        style={{ width: "30%", height: "25px" }}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        posts
          .filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item) => {
            return (
              
              <div className="main">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.quantityPerUnit}</p>
                    <p className="card-text">{item.discontinued}</p>
                  </div>
                </div>
              </div>
            );
          })
      )} */}
    </div>
  );
}

export default App;
