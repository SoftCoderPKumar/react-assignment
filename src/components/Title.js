import React from "react";
import styled from "styled-components";

export default function Title({ name, title }) {
  return (
    <TitlaBody>
      <div className="text-title">
        <h2>
          {name} <strong className="text-blue">{title}</strong>
        </h2>
      </div>
    </TitlaBody>
  );
}
const TitlaBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
