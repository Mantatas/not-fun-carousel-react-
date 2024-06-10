import React, { useState } from "react";
import Quotes from "../quotes/Quotes";

const QuotesContainer = () => {
    const [quotes, setQuotes] = useState([]);

    return (
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" style={{ width: "1000px", height: "200px" }}>
            <Quotes setQuotes={setQuotes} />
            <div className="carousel-inner">
                {quotes.map((quote, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={quote.id}>
                        <div className="d-flex flex-column justify-content-center align-items-center h-100 ps-5 ms-2 pe-5 me-2">
                            <h5>{quote.author}</h5>
                            <p>{quote.quote}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev bg-secondary" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" style={{ width: "5%" }}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next bg-secondary" type="button" data-bs-target="#carouselExample" data-bs-slide="next" style={{ width: "5%" }}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default QuotesContainer;