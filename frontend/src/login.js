import React from 'react'
import './index.js'
import axios from 'axios'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './home'
import './login.css'
class Login extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        form:{
        name: '',
        pwd:'',
        },
        //details:[],
        formErrors:{
          nameErr:'',
          pwdErr:'',
        },
        fieldValidity: {
          name: false,
          pwd:false
          },
    formValid: false,
    formError:''
        
      }; 
    }
    handleChange=(event)=> {
      var formErrors = this.state.formErrors;
      var fieldValidity = this.state.fieldValidity;
      let dummy=this.state.form
      let {name,value}=event.target
      dummy[name]=value
      this.setState({name:dummy.name,pwd:dummy.pwd})
      if(name==='name'){

      
      if(dummy.name.length<6){
        formErrors.nameErr="name length is less than 6"
        fieldValidity.name=false
    }
    else{
      formErrors.nameErr='';
      fieldValidity.name=true;
    }
  }
    else if(name==='pwd'){
      if(dummy.pwd.length===''){
      formErrors.pwdErr="password required ";
      fieldValidity.pwd=false
      }
      else{
        formErrors.pwdErr="";
      fieldValidity.pwd=true
      }
    }
    else {
      formErrors.nameErr = "";
      formErrors.pwdErr="";
      fieldValidity.name = true;
      fieldValidity.pwd=true;
    }
    this.setState({form:dummy})
    this.setState({ formErrors: formErrors });
    this.setState({ formValid: fieldValidity.name})
    this.setState({ formValid: fieldValidity.pwd})
    
  }
    handleSubmit=async(event)=> {
      event.preventDefault();
      try{
            
        let res=await axios.post("http://localhost:4000/login",this.state.form)
        console.log(res)
        }
        catch(err)
        {
            console.log(err.message)
        }
 
      if(this.state.form.name===''||this.state.form.pwd===''){
        let error1="Invalid username Or password"
        this.setState({formValid:true,formError:error1})
        
     }
     else{
        this.props.history.replace('/home');
     }
    }
    render() {
       
      return (
        
          <div style={{backgroundColor:"white",height:"650px"}}>
        <form  onSubmit={this.handleSubmit}>
            <br/>
            <br/><br/><br/><br/><br/>
             <div className="card" style={{width:"30%",color:"black",left:"450px",backgroundColor: "lightgray",boxShadow:"2px"}}  >
                <center><h1 style={{backgroundColor:"darkgray"}}>USER LOGIN</h1></center>
                <br/><br/>
          <div style={{left:"30px",position:"relative"}}>
          <b>Name: </b><br/>
          
         
          <input type="text"  placeholder=" Enter name" name="name"value={this.state.form.name} onChange={this.handleChange} />
          
            <div className="text-danger">{this.state.formErrors.nameErr}</div>      
          <br/>
          <br/>
          <div></div>    
          
           <b> Password:</b><div></div>
           
            
            <input type="password"   name="pwd" placeholder=" Enter password" value={this.state.form.pwd} onChange={this.handleChange} />
            <div className="text-danger">{this.state.formErrors.pwdErr}</div>
            <div className="text-danger">{this.state.formError}</div>

           </div>
           
          <br/><br/>
          <div></div>
         <center> <button style={{width:"20%"}}type="submit" class="btn btn-dark" >Login</button></center>
          
        
  </div>


</form>
</div>

        
      );
    }
  }
  export default Login;