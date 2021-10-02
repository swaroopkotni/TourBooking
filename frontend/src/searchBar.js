import img1 from './assets/user1.jpg_background=000000&cropX1=292&cropX2=3684&cropY1=592&cropY2=3987'
function SearchBar () {
    const TextStyle={
        marginLeft:"950px",
        marginTop:"20px",
        float:"left",
        position:"absolute"
        
    }
    const ImageStyle={
        width:"20px",
        height:"20px",
        float:"right"
        
    }
    return(
    <div>
        <div style={TextStyle}><img style={ImageStyle} src={img1} alt="adad"/><b>Hello User,</b></div>
    <form style={{margin:"0px 0px 0px 190px",width:"60%",padding:"10px 0px 0px 0px"}}>   
    
        <input
            type="text"
            id="header-search"
            placeholder="Search "
            name="s"
            style={{size:45,fontSize:25}}
        />
        

       
    </form>
    
    </div>
    )
};

export default SearchBar;