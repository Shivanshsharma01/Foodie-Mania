import React from "react";
import "./styles.css";
import { useState } from "react";

const foodDB = {
  Indian: [
    { name: "Dal Makhni", rating: "5/5" },
    { name: "Paneer Makhni", rating: "5/5" },
    { name: "Korma", rating: "4.5/5" }
  ],

  Chinese: [
    {
      name: " Wonton Soup",
      rating: "4/5"
    },
    {
      name: "Stinky tofu",
      rating: "3.5/5"
    },
    {
      name: "Fried Rice ",
      rating: "4.5/5"
    }
  ],
  French: [
    {
      name: "Mushroom Risotto",
      rating: "4.5/5"
    },
    {
      name: "Bruschetta",
      rating: "4/5"
    },
    {
      name: "Margherita Pizza",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Indian");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 😋 Foodie Mania </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite Dishes. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(foodDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[selectedGenre].map((food) => (
            <li
              key={food.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {food.name} </div>
              <div style={{ fontSize: "smaller" }}> {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
