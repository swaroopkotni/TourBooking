import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
// import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'
function Experience(){
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
        height:"200px",width:"100%"
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

<h4 className="text-dark" style={{marginLeft:"190px"}}>Best Experiences</h4><div className="text-danger" style={{position:"absolute",marginTop:"0px",marginLeft:"1000px"}}></div><br/>
<div style={Layout}>
<div>
  
</div>
</div>

</div>
    )
    
    }
    export default Experience;