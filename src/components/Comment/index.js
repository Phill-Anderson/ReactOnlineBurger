import React, { Component } from "react";
import { MyCoolButton } from "../MyCoolButton";
import "./style.css";
import App from "../App";
// класс компонэнт
class Comment extends Component {
  // класс компонэнт нь өөртөө state хадгалах зорилготойгоор ашиглагдаж эхэлсэн бөгөөд энэ нь ихээн хэмжээтэй том төслүүд дээр асуудлыг үүсгэдэг
  constructor(props) {
    super(props);
    console.log(this.props.zohiogch);
    this.state = {
      publisher: "",
      comment: "",
    };
  }
  // constructor функц үүсгэхгүйгээр шууд доорхи байдлаар
  // state бичиж болно. Энэ тохиолдолд React нь автоматаар constructor функцыг үүсгэж өгдөг
  /*  state = {
    publisher: "",
    comment: "",
  }; */
  bichih = (e) => {
    this.setState({ comment: e.target.value });
  };
  render() {
    return (
      <div className="CommentContainer">
        <div className="CoolText">{this.state.comment}</div>
        <div className="CoolText">Зохиогч: {this.props.zohiogch}</div>
        <textarea onChange={this.bichih}></textarea>
        <MyCoolButton
          comment={this.state.comment}
          tovchNer="Коммэнт бич"
          text="Хадгал"
        />
        <MyCoolButton
          comment={this.state.comment}
          tovchNer="Коммэнт Ил тодоор бичээрэй"
          text="Хадгалаарай"
        />
      </div>
    );
  }
}
// MyCoolButton дээр бичигдсэн comment нь эх компонэнт руу илгээгдэх ба эх компонэнтээс MyCoolButton нь өөрийн props - оор дамжуулан comment утгыг хүлээн авна
export default Comment;
