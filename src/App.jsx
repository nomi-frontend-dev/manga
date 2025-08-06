import { useState } from "react";
import "./styles/app.scss";
import Carousel from "./components/Carousel";
import img1 from "../public/cover/2020.png";
import img2 from "../public/cover/a-gloomy-delusion.png";
import img3 from "../public/cover/bj-alex.png";
import img4 from "../public/cover/love-tide-in-twilight.png";
import img5 from "../public/cover/boundry-of-delusion.png";

const Card = ({ title }) => {
  return <h2>{title}</h2>;
};

const slideData = [
  {
    image: img1,
    title: "Slide 1",
    description: "Description for slide 1",
  },
  {
    image: img2,
    title: "Slide 2",
    description: "Description for slide 2",
  },
  {
    image: img3,
    title: "Slide 3",
    description: "Description for slide 3",
  },
  {
    image: img4,
    title: "Slide 4",
    description: "Description for slide 2",
  },
  {
    image: img5,
    title: "Slide 5",
    description: "Description for slide 3",
  },
];

const App = () => {
  return (
    <>
      <h2>hi</h2>
      {/* <Card className="card" title="Title1" /> */}
      <Carousel slides={slideData} />
    </>
  );
};

export default App;
