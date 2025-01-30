import React from 'react'


const Card=(props)=>{
    return(
        <div 
        style={{
            border:'1px solid black',
            width:'400px',
            padding:'10px',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
        }}>
            <h1>{props.name}</h1>
            <p>{props.description}</p>

        </div>
    )
}

const App = () => {
    //alternative1
    // const person1 ={
    //     name:"Rohit Maharjan",
    //     description:"He is a good boy."
    // };
    // const person2 = {
    //     name: "Presha Shrestha",
    //     description: "She is a good girl",
    // };
    // const person3 = {
    //     name: "Ronit Maharjan",
    //     description: "He is a good boy.",
    // };
    // const person4 = {
    //     name: "Riya Maharjan",
    //     description: "She is a good girl.",
    // };
    //alternative 3
    const personList = [{
      id:1,
      name: "Rohit Maharjan",
      description: "He is a good boy.",
    },
    {
        id:2,
      name: "Presha Shrestha",
      description: "She is a good girl",
    },
    {
        id:3,
      name: "Ronit Maharjan",
      description: "He is a good boy.",
    },
    {
        id:4,
      name: "Riya Maharjan",
      description: "She is a good girl.",
    }];
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
      }}
    >
        {/* Alternative3 */}
        {personList.map((item)=>{
            return(
                <Card key={item.id} name={item.name} description={item.description}/>
            );
        })}
      {/* Alternative1 */}
      {/* <Card name={person1.name} description={person1.description} />
      <Card name={person2.name} description={person2.description} />
      <Card name={person3.name} description={person3.description} />
      <Card name={person4.name} description={person4.description} /> */}
      {/* Alternative */}
      {/* <Card name={"Rohit Maharjan"} description={"She is a good girl."} />
      <Card name={"Ronit Maharjan"} description={"He is a punctual boy."} />
      <Card name={"Riya Maharjan"} description={"She ia a  good girl."} /> */}
    </div>
  );
}

export default App
