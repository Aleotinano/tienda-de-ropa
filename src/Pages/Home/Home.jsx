import React from "react";

import { Filters } from "../../Componentes/Filters";
import { Products } from "../../Componentes/Productos";
import { Usefilters } from "../../Hooks/Usefilters";
import { Title } from "../../Componentes/Title";
import { products as initialProducts } from "../../../products.json";

export const Home = () => {
  const { filterProducts } = Usefilters();
  const filtredProducts = filterProducts(initialProducts); // Filtrado de productos

  return (
    <>
      <Title products={initialProducts} />
      <Filters />
      <Products products={filtredProducts} />
    </>
  );
};
