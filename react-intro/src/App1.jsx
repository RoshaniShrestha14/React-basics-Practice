const h1Style = {
  color: "#9ACBD0",
  fontSize: "5rem",
  background: "white",
};
const buttonStyle={
  background:'#9ACBD0',
}
const App1 =()=>{
  //return bhanda mathi ko section pure javascript section and below return it is purely html section 
  // const num=25;
  return(
    <div>
      <h1 style={h1Style}>Hello World</h1>
      {/* <p>{num}</p> */}
      <button style={buttonStyle} onClick={()=>{
        console.log('Button is clicked');

      alert("Thank you for clicking here!!!!")
      }}>Click here</button>
    </div>
  )
};

export default App1;


//rafce: react arrow function component with export