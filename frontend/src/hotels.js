import React from 'react';
import {Hoteldata} from'./data.js'
import hotel1 from './assets/Hotel1.jpg'
import './hotel.css'
function Hotels(){
    const imgStyle={
    padding:"10px",
    left:"400px",
    width:"30%",
    height:"100%",
    float:"left",
    borderRadius:"5px"
    
    }
    const cardStyle={
        width:"200px",
        height:"70px",
        marginLeft:"150px",
        float:"left"
    }
    const descrypt={
        position:"absolute",
        marginLeft:"70px",
        float:"left"

    }
//     const Hoteldata=[
//         {
//         name:"The Golden Hotel",
//         rating:9.1,
//         loc:"rkjwek"
//     },
//     {
//         name:"The Mount Hotel",
//         rating:9.5,
//         loc:"rkjwek"
//     },
//     {
//         name:"The Europe Hotel",
//         rating:8.6,
//         loc:"rkjwek"
//     }
// ]
    // const Hoteldata=JSON.Hoteldata;
    return(
        <div >
            <h4 style={{marginLeft:"190px"}}>Top Hotels</h4>
            <div style={{marginLeft:"45px"}}>
            <div className="card" style={cardStyle}>
                <img  style={imgStyle}src={hotel1} alt=" loading"/>
                <div style={descrypt}>{Hoteldata[0].name}<div>&nbsp;{Hoteldata[0].loc}&nbsp;<i style={{color:"yellow"}} className="fas fa-star"></i><b>{Hoteldata[0].rating}</b></div></div>
            </div>
            <div className="card" style={cardStyle}>
                <img  style={imgStyle}src={hotel1} alt=" loading"/>
                <div style={descrypt}>{Hoteldata[1].name}<div>&nbsp;{Hoteldata[1].loc}&nbsp;<i className="fas fa-star" style={{color:"yellow"}}></i><b>{Hoteldata[1].rating}</b></div></div>
            </div>
            <div className="card" style={cardStyle}>
                <img  style={imgStyle}src={hotel1} alt=" loading"/>
                <div style={descrypt}>{Hoteldata[2].name}<div>&nbsp;{Hoteldata[2].loc}&nbsp;<i className="fas fa-star" style={{color:"yellow"}}></i><b>{Hoteldata[2].rating}</b></div></div>
            </div>
            </div>
        </div>
    )
}
export default Hotels;
