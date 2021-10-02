import React from 'react';
import './home.css'
// import { bestExperiencedata } from './data';
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
// import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function BestExperience(){
  const BestExperiencedata=[
    {
        name:"The Golden Circle",
        days:"3-4 days",
        kms:"40 kms"
    },
    {
       name:"Snorkelling Island",
       days:"5-7 days",
       kms:"40 kms"
   },
   {
       name:"Snorkelling Island",
       days:"3-4 days",
       kms:"40 kms"
   },
   {
       name:"The Golden Circle",
       days:"6-8 days",
       kms:"40 kms"
   }
]
    const imgStyle={
        height:"200px",width:"160px"
    }
    const Layout={
        margin:"0px 10px 30px 170px"
    }
    const TextSize={
      font:5,
      marginLeft:"20px"
    }
   
    return(
<div>

<h4 className="text-dark" style={{marginLeft:"190px"}}>Best Experiences</h4><div className="text-danger" style={{position:"absolute",marginTop:"0px",marginLeft:"1000px"}}><a href='/experiences' style={{color:"red"}}><p>see all</p></a></div><br/>
<div style={Layout}>
<div>
  <div className="row">
    <div className="col-2">
      <div className="container">
    <a href="#y" ><img className="border2 " style={imgStyle} src={img1} alt="Card  cap"/>
    <div className="textBlock im1"><h7 className="text-white" style={TextSize}>{BestExperiencedata[0].name}<br/><i class="fas fa-calendar-week"></i>&nbsp;{BestExperiencedata[0].days}&nbsp;{BestExperiencedata[0].kms}</h7></div></a>
    </div>
    </div>
    <div className="col-2">
      <div className="container">
    <a href="#ds" ><img className="border2" style={imgStyle} src={img2} alt="Card  cap"/>
    <div className="textBlock im1"><center><h7 className="text-white"style={TextSize}>{BestExperiencedata[1].name}<br/><i class="fas fa-calendar-week"></i>&nbsp;{BestExperiencedata[1].days}&nbsp;{BestExperiencedata[1].kms}</h7></center></div></a>
    </div>
    </div>
    <div className="col-2">
      <div className="container">
    <a href="#sd" ><img className="border2" style={imgStyle} src={img4} alt="Card  cap"/>
    <div className="textBlock im1"><h7 className="text-white"style={TextSize}>{BestExperiencedata[2].name}<br/><i class="fas fa-calendar-week"></i>&nbsp;{BestExperiencedata[2].days}&nbsp;{BestExperiencedata[2].kms}</h7></div></a>
    </div>
    </div>
    <div className="col-2">
      <div className="container">
    <a href="#sd" ><img className="border2" style={imgStyle} src={img5} alt="Card  cap"/>
    <div className="textBlock im1"><h7 className="text-white"style={TextSize}>{BestExperiencedata[3].name}<br/><i class="fas fa-calendar-week"></i>&nbsp;{BestExperiencedata[3].days}&nbsp;{BestExperiencedata[3].kms}</h7></div></a>
    </div>
    </div>
    </div>
</div>
</div>

</div>
    )
}
export default BestExperience;