import React from "react";

interface Props {
  title: string;
  description: string;
  cheat: string;
}

const CheatSheet: React.FC<Props> = ({ title, description, cheat }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <code>{cheat}</code>
    </>
  );
};

export default CheatSheet;
