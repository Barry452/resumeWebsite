import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Nav from "./Nav";
import Foot from "./Footer";
import Intro from "./Intro";

import reportWebVitals from './reportWebVitals';
import Experience from './Experience';
import Project from './Project';


const root = ReactDOM.createRoot(document.getElementById('root'));
const androidStyle = [
  {url:"./androidProjectESRGANSTYLEImage/1.JPG", title:"1"},
  {url:"./androidProjectESRGANSTYLEImage/2.JPG", title:"2"},
  {url:"./androidProjectESRGANSTYLEImage/3.JPG", title:"3"},
  {url:"./androidProjectESRGANSTYLEImage/4.JPG", title:"4"},
  {url:"./androidProjectESRGANSTYLEImage/5.JPG", title:"5"},
  {url:"./androidProjectESRGANSTYLEImage/6.JPG", title:"6"},
  {url:"./androidProjectESRGANSTYLEImage/7.JPG", title:"7"},
  {url:"./androidProjectESRGANSTYLEImage/8.JPG", title:"8"},
  {url:"./androidProjectESRGANSTYLEImage/9.JPG", title:"9"},
  {url:"./androidProjectESRGANSTYLEImage/10.JPG", title:"10"},
  {url:"./androidProjectESRGANSTYLEImage/11.JPG", title:"11"},
];
const androidStyleIcon = [
  "./androidStyleIcon/1.png",
  "./androidStyleIcon/2.png",
  "./androidStyleIcon/3.png",
  "./androidStyleIcon/4.png",
  "./androidStyleIcon/5.png",
];


const flutterAR = [
  {url:"./CrossMobileApplicationFurnitureStoreImage/1.JPG", title:"1"},
  {url:"./CrossMobileApplicationFurnitureStoreImage/2.JPG", title:"2"},
  {url:"./CrossMobileApplicationFurnitureStoreImage/3.JPG", title:"3"},
  {url:"./CrossMobileApplicationFurnitureStoreImage/4.JPG", title:"4"},
  {url:"./CrossMobileApplicationFurnitureStoreImage/5.JPG", title:"5"},
  {url:"./CrossMobileApplicationFurnitureStoreImage/6.JPG", title:"6"},
  {url:"./CrossMobileApplicationFurnitureStoreImage/7.JPG", title:"7"},
  {url:"./CrossMobileApplicationFurnitureStoreImage/8.JPG", title:"8"},
  {url:"./CrossMobileApplicationFurnitureStoreImage/9.JPG", title:"9"},
  {url:"./CrossMobileApplicationFurnitureStoreImage/10.JPG", title:"10"},
  {url:"./CrossMobileApplicationFurnitureStoreImage/11.JPG", title:"11"},
  {url:"./CrossMobileApplicationFurnitureStoreImage/12.JPG", title:"9"},
  {url:"./CrossMobileApplicationFurnitureStoreImage/14.JPG", title:"10"},
];
const flutterARIcon = [
  "./CrossMobileApplicationFurnitureStoreIcon/1.png",
  "./CrossMobileApplicationFurnitureStoreIcon/2.png",
  "./CrossMobileApplicationFurnitureStoreIcon/3.png",
  "./CrossMobileApplicationFurnitureStoreIcon/4.png",
  "./CrossMobileApplicationFurnitureStoreIcon/5.png",
  "./CrossMobileApplicationFurnitureStoreIcon/6.png",
  "./CrossMobileApplicationFurnitureStoreIcon/7.png",
  "./CrossMobileApplicationFurnitureStoreIcon/8.png"
];


const foodDiary = [
  {url:"./fooddiaryImage/0.JPG", title:"0"},
  {url:"./fooddiaryImage/1.JPG", title:"1"},
  {url:"./fooddiaryImage/2.JPG", title:"2"},
  {url:"./fooddiaryImage/3.JPG", title:"3"},
  {url:"./fooddiaryImage/4.JPG", title:"4"},
  {url:"./fooddiaryImage/5.JPG", title:"5"},
  {url:"./fooddiaryImage/6.JPG", title:"6"},
  {url:"./fooddiaryImage/7.JPG", title:"7"},
  {url:"./fooddiaryImage/8.JPG", title:"8"},
  {url:"./fooddiaryImage/9.JPG", title:"9"},
  {url:"./fooddiaryImage/10.JPG", title:"10"},
  {url:"./fooddiaryImage/11.JPG", title:"11"},
  {url:"./fooddiaryImage/12.JPG", title:"12"},
  {url:"./fooddiaryImage/13.JPG", title:"13"},
  {url:"./fooddiaryImage/14.JPG", title:"14"},
  {url:"./fooddiaryImage/15.JPG", title:"15"},
];
const foodDiaryIcon = [
  "./fooddiaryIcons/1.png",
  "./fooddiaryIcons/2.png",
];

const bmi = [
  {url:"./bmi/1.JPG", title:"1"},
  {url:"./bmi/2.JPG", title:"2"},
  {url:"./bmi/3.JPG", title:"3"},
];

const pos = [
  {url:"./pos/1.png", title:"1"},
  {url:"./pos/2.png", title:"2"},
  {url:"./pos/3.png", title:"3"},
  {url:"./pos/4.png", title:"4"},
  {url:"./pos/5.png", title:"5"},
  {url:"./pos/6.png", title:"6"},
  {url:"./pos/7.png", title:"7"},

];

const posIcons = [
  "./fooddiaryIcons/1.png",
  "./pos/swing.png",
];

const openGL = [
  {url:"./openGl/1.JPG", title:"1"},
  {url:"./openGl/2.png", title:"2"},
  {url:"./openGl/3.png", title:"3"},
  {url:"./openGl/6.png", title:"4"},
];


const openGLIcons = [
  "./openGl/4.png",
  "./openGl/5.png"
];


root.render(
  <React.StrictMode>
    <Nav/>
    <Intro/>
    <div id = "portfolio">
      <h2 align="center" className='my-4'>Portfolio</h2>
    </div>
    <Project title={"Photo Editor with Neural Style Transfer and ESRGAN for Android App"} text={"In this project, I have developed a feature-rich Android application using Kotlin that combines the power of neural style transfer and Enhanced Super-Resolution Generative Adversarial Networks (ESRGAN) to elevate your photo editing experience. The app offers both light and dark modes for user convenience. When a user uploads an image and selects either a unique artistic style or chooses to upscale the image. Utilizing the OkHttp library, the image is seamlessly transmitted to a server. On the server side, a Flask-based API processes the image, passing it through either neural style transfer or ESRGAN based on the user's selection. The enhanced image is then sent back to the user within the Android application, providing a one-of-a-kind photo editing experience. The neural style transfer algorithm is written in Pytorch and trained on the extensive COCO2014 training dataset. Similarly, ESRGAN is implemented using PyTorch and trained on the high-quality DIV2K dataset."} 
    images={androidStyle} icons={androidStyleIcon}
    leftRight={"right"}/>
    <br></br>
      <Project title={"Cross Mobile Application Furniture Store"} text={"This project was developed in Flutter, harnessing its single code base advantage for cross-platform compatibility. The application has been enriched with a range of compelling features, including an augmented reality (AR) module powered by ARCore, providing users with a seamless way to visualize furniture within their physical space. To enhance both user experience and security, Firebase has been seamlessly integrated, offering a comprehensive suite of functions that cover user authentication, data storage, and database management. Object detection capabilities are enhanced by the inclusion of YOLOv8, enabling the accurate identification of furniture items. Additionally, a Convolutional Neural Network (CNN), implemented with TensorFlow, offers users valuable insights by assessing furniture styles. To further streamline user interactions and ensure secure transactions, a PayPal payment system has been seamlessly incorporated into the application."} 
    images={flutterAR} icons={flutterARIcon}
    leftRight={"left"}/>
        <br></br>
      <Project title={"Food Diary"} text={"This project represents a dynamic food diary application that provides a flexible and user-friendly experience, seamlessly adjusting to horizontal, vertical, and tablet orientations. Users can effortlessly record comprehensive restaurant details, encompassing ratings, descriptions, images (captured through both the camera and gallery), and precise geolocation information, thanks to seamless Google Maps integration. To ensure efficient data storage and management, the application relies on the robust capabilities of the Room database."} 
    images={foodDiary} icons={foodDiaryIcon}
    leftRight={"right"}/>
            <br></br>
      <Project title={"BMI Calculator"} text={"A simple BMI calculator written in Java with landscape and portrait  modes."} 
    images={bmi} icons={foodDiaryIcon}
    leftRight={"left"}/>

<br></br>
      <Project title={"POS Inventory System"} text={"The Java-based POS Inventory System, built with Java Swing, showcases advanced Object-Oriented Programming (OOP) skills. It encompasses robust features for user authentication and authorization, implementing role-based access control. This comprehensive system streamlines data management with support for CRUD (Create, Read, Update, Delete) operations on items, users, and categories. Users can efficiently perform essential tasks, such as creating, reading, updating, and deleting records, all through an intuitive graphical interface."} 
    images={pos} icons={posIcons}
    leftRight={"right"}/>

<br></br>
      <Project title={"OpenGL"} text={"This project involves creating an interactive scene using C++ and OpenGL. The main focus of this application lies in the dynamic character rendered using the OpenGL library. Users have the ability to manipulate the character's actions by utilizing the arrow keys on the keyboard and navigate within the scene."} 
    images={openGL} icons={openGLIcons}
    leftRight={"left"}/>

<App />
    <Experience/>
   
    <Foot/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
