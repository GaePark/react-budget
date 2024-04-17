import React from "react";
import * as S from "./Lists.styles";
import List from "../list/List.container";

const Lists = ({ listItem, onClickEdit, onClickRemove, onClickAllDelete }) => {
  return (
    <S.Wrapper>
      <div>
        {listItem.map((list) => (
          <List
            key={list.id}
            id={list.id}
            item={list.item}
            price={list.price}
            onClickEdit={onClickEdit}
            onClickRemove={onClickRemove}
          />
        ))}
      </div>
      <S.Button onClick={onClickAllDelete}>목록 지우기</S.Button>
    </S.Wrapper>
  );
};

export default Lists;
