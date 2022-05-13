import logo from "../static/picture/logo.png";
import {Register} from "./Register";
import background from "../img/img22.jpg";

export const Header=()=>{
    return <div className='ui vertical center aligned segment' style={{backgroundImage: `url(${background})`,backgroundRepeat:"no-repeat",
        backgroundPosition:"bottom",minHeight:'350px'}}>
           <div className='ui container' style={{width:'100%'}}>
               <div className='ui large secondary pointing menu' style={{backgroundColor:"white"}}>
                   <a href="#"><img src={logo} alt="TIANNA" /></a>
                    <a href="tel:12345678910" className='header item'>
                        <i className="phone icon"></i>+12 345 678 910
                    </a>
                    <a href="#wrapper" className='item'>Home</a>
                    <a href="#about" className='item'>ABOUT</a>
                    <a href="#features" className='item'>features</a>
                    <a href="#works" className='item'>works</a>
                    <a href="#team" className='item'>team</a>
                    <a href="#pricing" className='item'>pricing</a>
                    <a href="#contact" className='item'>contact</a>
                    <div className='ui right inverted orange menu' style={{marginTop:'15px'}} >
                         <a  className='item'  href="#">sign up</a>

                    </div>
               </div>
           </div>
        <div className='ui text container' style={{marginTop:'200px'}}>
            <Register />
        </div>

    </div>
 }