import React from "react";

type characterProps = {
  name: string;
  image: string;
};

function Character({ name, image }: characterProps) {
  return (
    <article>
      <h3>{name}</h3>
      <img src={image} alt="" />
    </article>
  );
}

export default Character;
