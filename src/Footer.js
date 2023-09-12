import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Foot({ className }) {
  return (
    <div className={className} id="contact">
        <footer className="footer text-center">
        <div align="center">
            <div style={{ fontSize: 30, color: "#353535", fontWeight: 'bold' }}>Contact</div>
            <div style={{ fontSize: 15, color: "grey" }}>Contact me at <a href="mailto:barrykhaw@outlook.com">barrykhaw@outlook.com</a> or connect with me on <a href="https://www.linkedin.com/in/barry-khaw-32850a236/">LinkedIn</a></div>
            <a href="./resume_barry_khaw.pdf" download="barryKhawResume.pdf" className="download-button">
                <button type="button" class="btn btn-secondary mt-2">Download my resume here</button>
            </a>

        </div>
        </footer>
        <hr></hr>
        <div className='mb-2' align="center">
        © Copyright 2023. Made by <b>Barry Khaw</b> with <img alt="React" src={"./logo192.png"} style={{ height: "30px", paddingRight: "10px" }} /> 
        </div>
  </div>
  );
}

export default Foot;
