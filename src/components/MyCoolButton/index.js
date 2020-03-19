import React from "react";
import "./style.css";
// функц компонэнт
// функц компонэнт нь state хийхийн тулд react hooks зэрэг state management санг ашигладаг бөгөөд энэ нь бүх state - үүдийг
// нэг дор бөөгнөрүүлж кодыг эмх цэгцтэй болгож өгдөг бөгөөд сүүлийн үеийн react чиг хандлага бол функц компонэнтуудыг хэрэглэх явдал юм.
export const MyCoolButton = props => {
    const clickHandler = () =>alert(`Коммэнт бичигдлээ: ${ props.comment }`);
    
   // css.color = "green";
    return (
      <div className="MyButton coolText">
        <span style={css}>{props.tovchNer? props.tovchNer : "Гоёмсог товч"}</span><br/>
        <input className="MyCoolButton" type="button" value={ props.text ? props.text : "Клик" } onClick={clickHandler} />
      </div>
    );
  };
// react inline style бичих арга
  const css = {
      backgorundColor: "gray",
      color : "blue"
  };