import React from "react";

import Card from "./sub/Card";
import CardWrapper from "./sub/CardWrapper";

function Body(props) {
  const { data, handleCart } = props;
  return (
    <CardWrapper>
      {data.map((card, index) => {
        return (
          <Card key={index} data={card} handleCart={handleCart} index={index} />
        );
      })}
    </CardWrapper>
  );
}

export default Body;
