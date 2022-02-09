import { Container, Arrow, Wrapper, Slide, ImgContainer, ImgSlider,InfoContainer, Title, Desc } from "./SliderStyles"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState, useEffect } from "react";
import {db} from "../Firebase"
import { collection, getDocs, query} from "firebase/firestore";





const Slider =  () => {

  const [ title, setTitle ] = useState([])

  useEffect( () => {
    async function fetchData(){
    const querySnapshot = await getDocs(query(collection(db, "titles")));
      let titleArray = []
      querySnapshot.forEach((doc) => {
        titleArray.push({...doc.data(), id: doc.id});
      });
      setTitle(titleArray)
    }
    fetchData();
}, [])


  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>          
        {title.map((dato) => (
          <Slide bg={dato.bg} key={dato.id}>
            <ImgContainer>
              <ImgSlider src={dato.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{dato.title}</Title>
              <Desc>{dato.desc}</Desc>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;