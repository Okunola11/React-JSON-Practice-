import React from "react";
import LineItem from "./LineItem";

const Contents = ({ items }) => {
  return (
    <main>
      <ul>
        {items.map((item) => (
          <LineItem key={item.id} item={item} />
        ))}
      </ul>
    </main>
  );
};

export default Contents;
