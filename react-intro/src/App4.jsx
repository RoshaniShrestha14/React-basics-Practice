import React from 'react'
const DisplayProduct=(props)=>{
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
        <h1>{props.Product}</h1>
        <img src={props.image} alt="ProductImage" height={400} width={350} />
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    );
};

const App4 = () => {
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
      <DisplayProduct
        Product={"Gray Lip Case"}
        image={
          "https://skinvaletkw.com/cdn/shop/files/PDP-lip-case-1-d_2000x_a8355ff5-971d-4cdf-bd04-78de91f9eff5.webp?v=1714864821"
        }
        title={"Lip Case"}
        description={
          " A silicone, bubble case for your phone that keeps your lip on hand.Our design has a silky, soft touch feel and a puffy back for easy gripping."
        }
      />

      <DisplayProduct
        Product={"Red Lip Case"}
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSd8idnAhKLghGZHhgFPpxCSvd0rje9xMR2h2aROIPJtYcUZiLRjILwuTonKgrnAD7cCI&usqp=CAU"
        }
        title={"Lip Case"}
        description={
          " A silicone, bubble case for your phone that keeps your lip on hand.Our design has a silky, soft touch feel and a puffy back for easy gripping."
        }
      />
      <DisplayProduct
        Product={"Pink Lip Case"}
        image={
          "https://i5.walmartimages.com/seo/Rhode-Phone-Case-Lip-Gloss-Phone-Case-Cute-for-Women-Girls-Protective-Silicone-Shockproof-Slim-Funny-Stylish-Phone-Case_7bff3c78-03c5-45bc-8c98-ecf7d6acf208.db30e1c0ab3d32626cc8e3e8e7031c8f.jpeg"
        }
        title={"Lip Case"}
        description={
          " A silicone, bubble case for your phone that keeps your lip on hand.Our design has a silky, soft touch feel and a puffy back for easy gripping."
        }
      />
      <DisplayProduct
        Product={"Orange Lip Case"}
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTap4zRw7A-udXLRoA9bzloEDiuC6C3Ic0tQozcwnxyap13uIT7OK-4E38i0NJ2c-c0VTE&usqp=CAU"
        }
        title={"Lip Case"}
        description={
          " A silicone, bubble case for your phone that keeps your lip on hand.Our design has a silky, soft touch feel and a puffy back for easy gripping."
        }
      />
    </div>
  );
}

export default App4
