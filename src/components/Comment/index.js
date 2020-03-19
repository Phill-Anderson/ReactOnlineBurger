import React, { Component } from "react";
import {MyCoolButton} from "../MyCoolButton";
import "./style.css";
import App from "../App";
// класс компонэнт
class Comment extends Component {
    // класс компонэнт нь өөртөө state хадгалах зорилготойгоор ашиглагдаж эхэлсэн бөгөөд энэ нь ихээн хэмжээтэй том төслүүд дээр асуудлыг үүсгэдэг
    constructor(){
        super();
        this.state = {
            publisher: '',
            comment: ''
        };
    }
    bichih = (e)=>{
       this.setState({ comment: e.target.value });
    }
    render(){
        return( 
       <div>
            <div>{ this.state.comment }</div>
            <div className="CoolText">Зохиогч: { this.props.zohiogch }</div>
            <textarea onChange={this.bichih}></textarea>
            <MyCoolButton comment = {this.state.comment} tovchNer = "Коммэнт бич" text="Хадгал"/>  
              
       </div>     
       );
   
    }
}
// MyCoolButton дээр бичигдсэн comment нь эх компонэнт руу илгээгдэх ба эх компонэнтээс MyCoolButton нь өөрийн props - оор дамжуулан comment утгыг хүлээн авна
export default Comment;