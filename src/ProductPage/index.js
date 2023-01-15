import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.scss"

function ProductPage() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");

    useEffect(() => {
        const loadPosts = async () => {
            setLoading(true);
            const response = await axios.get(
                "https://northwind.vercel.app/api/products"
            );
            setPosts(response.data);
            setLoading(false);
        };

        loadPosts();
    }, []);
    return (
        <div>
            <h3 style={{ color: "white", marginTop: "10px" }} >Search Filter</h3>
            <div className="inpBtn">
                <input
                    style={{ width: "30%", height: "40px" }}
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearchTitle(e.target.value)}
                />
                <div className="container">
                    <div class="button-container">
                        <span class="mask">Sort by price</span>
                        <button type="button" name="Hover" onClick={() => { setPosts([...posts].sort((a, b) => (a.unitPrice > b.unitPrice) ? 1 : ((b.unitPrice > a.unitPrice) ? -1 : 0))) }} >Sort by price</button>
                    </div>
                </div>
            </div>

            {loading ? (
                <h4 style={{ color: "white" }}>Loading ...</h4>
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
                            <div className="main" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                                <div className="card" style={{ width: "18rem", margin: "10px",display: "flex", flexDirection: "row", width: "25%"}}>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.quantityPerUnit}</p>
                                        <p className="card-text">{item.unitPrice}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
            )}
        </div>
    )
}

export default ProductPage