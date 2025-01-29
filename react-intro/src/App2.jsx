import React from 'react'

const Card=()=>{
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 4px 8px, rgba(0, 0, 0, 0.1) 0px 2px 4px",
          padding: "20px",
          alignItems: "center",
          borderRadius: "10px",
          backgroundColor: "#fff",
        }}
      >
        <h1>Product Card</h1>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_4uJBa11cITBfhLRWsqYw-eW2jxR32HffA&s"
          alt="product Image"
          height={400}
          width={350}
        />
        <h4>RhodeSkin</h4>
        <p>
          A silicone, bubble case for your phone that keeps your lip on hand.
          Our design has a silky, soft touch feel and a puffy back for easy
          gripping.
        </p>
        <button
          style={{
            padding: "10px",
            background: "#9ACBD0",
            border: "none",
            cursor: "pointer",
          }}
        >
          See More
        </button>
      </div>
    );
};
const App2 = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        justifyContent: "center",
        alignments: "Center",
        margin: "4rem",
      }}
    >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App2;
