
import { Box, Heading, Button } from "@chakra-ui/react";
import axios from "axios";

const Home = () => {

  async function handleProduct() {
    try {
      let res = await axios({
        method: "get",
        url: "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products",
        
      });
      console.log(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <center>
      <Box>
        <Heading as="h1" size="xl">
          This is a Home page
        </Heading>
        <Button onClick={handleProduct} colorScheme="gray" variant="outline">
          Click me
        </Button>
      </Box>
    </center>
  );
}

export default Home
