import { useState } from "react";
import Form from "./components/form/form.container";
import Lists from "./components/lists/Lists.container";
import "./App.css";
import * as S from "./styles/styles";

function App() {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [listItem, setListItem] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");

  const [notification, setNotification] = useState("");

  const onClickSubmit = () => {
    if (item !== "" && price > 0) {
      if (!edit) {
        const newItem = {
          id: String(Date.now()),
          item,
          price,
        };

        setListItem((prev) => [...prev, newItem]);

        setNotification("아이템이 생성되었습니다.");
        setIsActive(true);

        setItem("");
        setPrice("");
      } else {
        const newItem = listItem.map((list) => {
          return list.id === id ? { ...list, price, item } : list;
        });
        console.log(newItem);
        setListItem(newItem);
        setEdit(false);
        setNotification("아이템이 수정되었습니다.");
        setIsActive(true);

        setItem("");
        setPrice("");
      }
    }
  };

  const onClickEdit = (e) => {
    const expense = listItem.find((list) => list.id === e.currentTarget.value);
    const { item, price } = expense;
    setId(e.currentTarget.value);
    setPrice(price);
    setItem(item);
    setEdit(true);
  };

  const onClickRemove = (e) => {
    const removeList = listItem.filter(
      (list) => list.id !== e.currentTarget.value
    );
    setListItem(removeList);
    setIsActive(false);
    setEdit(false);
    setItem("");
    setPrice("");
    setNotification("아이템이 제거되었습니다.");
  };

  const onClickAllDelete = () => {
    setListItem([]);
  };
  return (
    <S.Wrapper>
      <div>
        <S.Notification isActive={isActive}>{notification}</S.Notification>
        <h1>예산 계산기</h1>
        <S.Container>
          <Form
            item={item}
            price={price}
            setItem={setItem}
            setPrice={setPrice}
            onClickSubmit={onClickSubmit}
            setNotification={setNotification}
            edit={edit}
          />
          <Lists
            listItem={listItem}
            onClickEdit={onClickEdit}
            onClickRemove={onClickRemove}
            onClickAllDelete={onClickAllDelete}
          />
        </S.Container>
        <S.Total>
          총지출:
          <span>
            {listItem.reduce((acc, curr) => {
              return (acc += curr.price);
            }, 0)}
          </span>
          원
        </S.Total>
      </div>
    </S.Wrapper>
  );
}

export default App;
