import React from "react";
import { Datas } from "../data/Datas";
import Product from "./Product";
function Products() {
  return (
    <div>
      {Datas.map((data) => {
        return <Product key={data.id} {...data} />;
      })}
    </div>
  );
}

export default Products;
