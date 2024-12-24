import React from "react";
import Slider from "react-slick";
import { Card, CardBody, CardFooter, Image, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../photos/2_23.jpg";
import image2 from "../photos/2_24.jpg";
import image3 from "../photos/2_25.jpg";

const cards = [
  {
    id: 1,
    title: "Английский язык",
    description: "Репетиторы по английскому языку!",
    link: "/card",
    image: image1,
  },
  {
    id: 2,
    title: "Математика",
    description: "Репетиторы по математике!",
    link: "/card",
    image: image2,
  },
  {
    id: 3,
    title: "География",
    description: "Репетиторы по географии!",
    link: "/card",
    image: image3,
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} style={{ maxWidth: "600px", margin: "0 auto", marginTop: "40px"}}>
      {cards.map((card) => (
        <Card
          key={card.id}
          bg="gray.100"
          boxShadow="md"
          borderRadius="md"
          textAlign="center"
          overflow="hidden"
        >
          <Image 
            src={card.image} 
            alt={card.title} 
            width="100%" 
            objectFit="cover" 
          />
          <CardBody>
            <Text fontSize="2xl" mb="2">
              {card.title}
            </Text>
            <Text mb="4">{card.description}</Text>
          </CardBody>
          <CardFooter display="flex" justifyContent="center" alignItems="center">
            <Button
              colorScheme="teal"
              onClick={() =>
                navigate(card.link, { state: { title: card.title, image: card.image } })
              }
              >Записаться</Button>
          </CardFooter>
        </Card>
      ))}
    </Slider>
  );
};

export default HomePage;
