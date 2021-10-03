import  './assets/img1.jpg'
import  './assets/img2.jpg'
import  './assets/img3.jpg'
import  './assets/img4.jpg'
import './assets/img5.jpg'
import {BestExperiencedata} from './data';
function Experience(){

    const imgStyle={
        height:"300px",width:"100%"
    }
    const Layout={
        margin:"0px 10px 30px 170px",
        float:"left"
        
    }
    
    var Arr=BestExperiencedata.map((data)=>{
        return(
            
          <div className="card" style={{float:"left",width:"250px",marginRight:"30px"}}>
        <a href="#y" ><img className="border2 " style={imgStyle} src={data.src} alt="Card  cap"/>
        <div className="card-title">{data.name}<br/><i class="fas fa-calendar-week"></i>&nbsp;{data.days}&nbsp;{data.kms}</div></a>
        </div> 
        )
})
    return(
<div>

<h4 className="text-dark" style={{marginLeft:"190px"}}>Best Experiences</h4><div className="text-danger" style={{position:"absolute",marginTop:"0px",marginLeft:"1000px"}}></div><br/>
<div style={Layout}>
   {Arr}

</div>

</div>
    )
    
    }
    export default Experience;



