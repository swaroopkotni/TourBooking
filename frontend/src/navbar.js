import React from 'react';
 function NavBar2(){
     const Layout={
        margin:"30px 30px 15px 190px",
        width:"60%"
     }
     const CardStyle={
         backgroundColor:"rgb(247, 228, 231)",
         width:"70px",
         height:"70px",
         padding:"15px"
        }
    const IconStyle={
        color:"rgb(226, 97, 118)",
        fontSize:35
        }
    
    return(
    <form style={Layout}>
        <div>
    
    <div className="row">
        <div className="col-2">

            <div className="card" style={CardStyle}>
                <center>
        <a href="#services"><i className="fas fa-plane-departure "style={IconStyle} ></i></a>
        </center>
        </div>
        </div>
        <div className="col-2">
            <div className="card" style={CardStyle}>
                <center>
        <a href='#user' ><i className="fas fa-home " style={IconStyle} ></i></a>
        </center>
        </div>
        </div>
        <div className="col-2">
            <div className="card" style={CardStyle}>
            <center>
        <a href="#services"><i className="fas fa-compass " style={IconStyle} ></i></a>
        </center>
        </div>
        </div>
        <div className="col-2">
            <div className="card" style={CardStyle}>
            <center>
        <a href="#services"><i className="fas fa-parachute-box" style={IconStyle} ></i></a>
        </center>
        </div>
        </div>
    </div>
    </div>
    <div className="row">
        <div className="col-2">
        <p >Flights</p>
        </div>
        <div className="col-2">
            <p >Accomodation</p>
        </div>
        <div className="col-2">
        <p >adventures</p>
        </div>
        <div className="col-2">
        <p >experiences</p>
        </div>
        </div>
    
    </form>
    )
}

export default NavBar2;