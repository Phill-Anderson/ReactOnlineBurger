import React from "react";
// функц компонэнт
export const MyCoolButton = props => {
    const clickHandler = () =>alert(`Коммэнт бичигдлэээ: ${ props.comment }`);
  
    return (
      <div className="MyButton">
        <span>{props.tovchNer? props.tovchNer : "Гоёмсог товч"}</span><br/>
        <input className="MyCoolButton" type="button" value={ props.text ? props.text : "Клик" } onClick={clickHandler} />
      </div>
    );
  };