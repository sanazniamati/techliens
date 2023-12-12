/** @format */

import {
  Center,
  Wrap,
  WrapItem,
  // Spinner,
  // Stack,
  // Alert,
  // AlertIcon,
  // AlertDescription,
  // AlertTitle,
} from "@chakra-ui/react";
import { products } from "../products";
import ProductCard from "../components/ProductCard";

function productsScreen() {
  return (
    <Wrap spacing={30} justify="center">
      {products.map((product) => (
        <WrapItem key={product.id}>
          <Center w="250px" h="550px">
            {/* {product.name} */}
            <ProductCard product={product} />
          </Center>
        </WrapItem>
      ))}
    </Wrap>
  );
}

export default productsScreen;
