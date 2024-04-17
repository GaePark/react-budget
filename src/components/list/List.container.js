import React from "react";
import * as S from "./List.styles";
import { Icon } from "@iconify/react";

const List = ({ id, item, price, onClickEdit, onClickRemove }) => {
  return (
    <S.Wrapper>
      <div>{item}</div>
      <div>{price}</div>
      <button value={id} onClick={onClickEdit}>
        <Icon
          icon="mdi-light:pencil"
          width="25"
          height="25"
          style={{ color: "#00ff00" }}
        />
      </button>
      <button value={id} onClick={onClickRemove}>
        <Icon
          icon="mdi-light:cancel"
          width="25"
          height="25"
          style={{ color: "#ff0000" }}
        />
      </button>
    </S.Wrapper>
  );
};

export default List;
