import React from "react";
import { useLocation } from "react-router-dom";
import { Image, Text, Button, Card, CardBody, CardFooter, HStack, VStack, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CardPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, image } = location.state || {}; // Получаем переданные данные

  if (!title || !image) {
    return <Text textAlign="center" mt="20">No data available</Text>;
  }

  return (
    <Box>
    <Card
    width="600px"
    bg="gray.100"
    boxShadow="md"
    borderRadius="md"
    textAlign="center"
    overflow="hidden">
      <CardBody>
        <HStack>
          <Image src={image} alt={title} width="400px" borderRadius="md" mx="auto"/>
          <VStack>
            <Text fontSize="3xl" mb="4">{title}</Text>
            <Text fontSize="2xl" mb="4">Такой акции вы ещё не видели!</Text>
          </VStack>
        </HStack>
      </CardBody>
    </Card>
    <Button mt="4" colorScheme="teal" onClick={() => navigate("/")}>
    Go Back
    </Button>
    </Box>
  );
};

export default CardPage;
