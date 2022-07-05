import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

function Categories() {
  return (
    <div>
      <Container>
        {categories.map((category, i) => (
          <CategoryItem key={i} category={category} />
        ))}
      </Container>
    </div>
  );
}

export default Categories;
