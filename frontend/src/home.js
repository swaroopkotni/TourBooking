
import React from 'react';
import './home.css'
import SearchBar from './searchBar'
import NavBar2 from './navbar';
import BestExperience from './bestExperience';
import Hotels from './hotels'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function Home(){
 
  // render(){
    return(
      
      <div  style={{backgroundColor:"rgb(243,188,197)",height:"720px"}} >
        
      <div className="sidenav border1">
        <center>
  <a  href="#about"><i className="fas fa-mountain"></i></a><br/>
  <a href="#services"><i className="fas fa-home"></i></a><br/>
  <a href="#clients"><i className="fas fa-heart"></i></a><br/>
  <a href="#contact"><i className="fas fa-user-circle"></i></a><br/>
  <a  href="#about"><i className="fas fa-bell"></i></a><br/>
  <a href="#services"><i className="fas fa-cog"></i></a><br/>
  </center>
  
</div>

<SearchBar/>
<NavBar2/>
<BestExperience/>
<Hotels/>



</div>
    )
  }
// }

export default Home;