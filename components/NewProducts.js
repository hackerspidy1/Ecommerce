import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";

const Title = styled.h2`
  font-size: 2rem;
  margin:30px 0 20px;
  font-weight: normal;
`;

export default function NewProducts({products,name}) {
  return (
    <Center>
      <Title>{name}</Title>
      <ProductsGrid products={products} />
    </Center>
  );
}