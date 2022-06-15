import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";


function Detail(props){

    
    let[num, setNum] = useState('')
    let[count, setCount] = useState(0);
    let[alert, setAlert] = useState(true);
    let {id} = useParams();
    let 찾은상품 = props.shoes.find(function(x){
        return x.id == id
      });

      useEffect(()=>{
        if(isNaN(num) == true){
            alert('그러지 마세요')
        }
    },[num])        
    
    return (
        <>
        <div className="container">
        
        <input onChange={(e)=>{ setNum(e.target.value) }} />
            {alert == true ? 
            <div className="alert alert-warning">
            2초이내 구매시 할인
            </div> 
            : null}
            <button onClick ={()=>{ setCount(count+1)}}>버튼</button>
            <div className="row">
                <div className="col-md-6">
                <img src={"https://codingapple1.github.io/shop/shoes"+(찾은상품.id)+".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5">{찾은상품.title}</h4>
                <p>{찾은상품.content}</p>
                <p>가격 : {찾은상품.price}</p>
                <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div>
        </>
    )
}

export default Detail;