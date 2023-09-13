import './App.css';


function App() {
  const icons =[
    "./skill/1.png",
    "./skill/2.png",
    "./skill/3.png",
    "./skill/4.jpg",
    "./skill/4.png",
    "./skill/5.png",
    "./skill/6.png",
    "./skill/7.png",
    "./skill/8.png",
    "./skill/9.png",
    "./skill/10.png",
    "./skill/11.png",
    "./skill/12.png",
    "./skill/13.png",
    "./skill/14.png",
    "./skill/15.png",
    "./skill/5.jpg"
  ];
  const iconsStyle = {
    position: "relative",
    marginTop: "auto", /* Push the image to the bottom */
    textAlign: "center", /* Center the image horizontally */
    height: "100px",
    paddingRight: "20px",
    paddingTop: "10px"
  };


  return (
    <div className="App">
      <div style={{ fontSize: 30, color: "#353535", fontWeight: 'bold' }} align="center">Skill</div>
      <div className="container"> {/* Add the Bootstrap container i wan everything start from left to right wrap when there more go down*/}
      <div class="d-flex flex-row flex-wrap">
      {icons.map((icon, index) => (
                    <img key={index} alt="Icon" src={icon} style={iconsStyle} />
                  ))}

        </div>


    </div>
    </div>
  );
}

export default App;
