import React from "react";
import * as S from "./form.styles";

const Form = ({
  setPrice,
  setItem,
  onClickSubmit,
  item,
  price,
  setNotification,
  edit,
}) => {
  const onChangePrice = (e) => {
    setPrice(Number(e.target.value));
    setNotification();
  };

  const onChangeItem = (e) => {
    setItem(e.target.value);
    setNotification();
  };

  if (!edit) {
    return (
      <div>
        <S.Wrapper>
          <div>
            <div>지출 항목</div>
            <S.Input type="text" onChange={onChangeItem} value={item} />
          </div>
          <div>
            <div>비용</div>
            <S.Input type="number" onChange={onChangePrice} value={price} />
          </div>
        </S.Wrapper>
        <S.Button onClick={onClickSubmit}>제출</S.Button>
      </div>
    );
  } else {
    return (
      <div>
        <S.Wrapper>
          <div>
            <div>지출 항목</div>
            <S.Input type="text" onChange={onChangeItem} value={item} />
          </div>
          <div>
            <div>비용</div>
            <S.Input type="number" onChange={onChangePrice} value={price} />
          </div>
        </S.Wrapper>
        <S.Button onClick={onClickSubmit}>수정</S.Button>
      </div>
    );
  }
};

export default Form;
