import React, { useState } from "react";
import "./style.css";
// функц компонэнт
// функц компонэнт нь дотроо state байхгүй бөгөөд state хийхийн тулд react hooks зэрэг state management санг ашигладаг бөгөөд энэ нь бүх state - үүдийг
// нэг дор бөөгнөрүүлж кодыг эмх цэгцтэй болгож өгдөг бөгөөд сүүлийн үеийн react чиг хандлага бол функц компонэнтуудыг хэрэглэх явдал юм.
export const MyCoolButton = (props) => {
  const [commentHistory, setCommentHistory] = useState([]);
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
    setCommentHistory([...commentHistory, props.comment]); // set state -ийг утгаар хангаж байх ёстой
    // alert(`Коммэнт бичигдлээ: ${ props.comment }`);
  };
  // css.color = "green";
  return (
    <div className="CoolButtonContainer CoolText">
      <span style={css}>
        {props.tovchNer ? props.tovchNer : "Гоёмсог товч"}
      </span>
      <br />
      <input
        className="MyCoolButton"
        type="button"
        value={props.text ? `${count} ${props.text}` : "Клик"}
        onClick={clickHandler}
      />
      <div>
        {commentHistory.map((el, index) => (
          <div key={index}>
            {" "}
            {el} - {index}{" "}
          </div>
        ))}
      </div>
    </div>
  );
};
// react inline style бичих арга
const css = {
  backgorundColor: "gray",
  color: "blue",
};
