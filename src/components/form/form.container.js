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
  onKeyDownEnter,
  inputRef,
}) => {
  const onChangePrice = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, "");
    setPrice(Number(value));
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
            <S.Input
              type="text"
              onChange={onChangeItem}
              value={item}
              onKeyDown={onKeyDownEnter}
              ref={inputRef}
            />
          </div>
          <div>
            <div>비용</div>
            <S.Input
              type="text"
              onChange={onChangePrice}
              value={price}
              onKeyDown={onKeyDownEnter}
            />
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
