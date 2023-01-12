import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import swal from 'sweetalert';
import {BarLoader} from "react-spinners"
import './main.scss'
import advertPic from './img/advertPic.jpg'
import USflag from './img/USflag.png'
import USlogo from './img/USlogo.png'


export default function() {


  const [lastname,setLastname]=useState('')
  const [firstname,setFirstname]=useState('')
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")
  const [loader,setLoader]=useState(false)
   
  const form=useRef()

   const sendEmail=(e)=>{
     e.preventDefault();
     console.log(form)
   setLoader(true)
if (firstname&&lastname&&email&&phone) {
emailjs.sendForm("service_mc33p8e", "template_pjqdnwb", form.current, "NBfXFPxY5-jRL1yVx").then(res=>{
  console.log(res)
  setLoader(false)
swal(`Hi ${lastname},`, "Message sent", "success");
setFirstname("")
setLastname("")
setEmail("")
setPhone("")
  
    }).catch(err=>{
       console.log(err)   
      setLoader(false)
swal(`Hi ${lastname},`, "Network error! Try again", "error");
             });
    }else{
      setLoader(false)
swal("Please input all filed!", "Try again!", "warning");
      }
   }
  return (
    <>
    <div className='container'>
    <header className='header'>
   <div className='header__header1'>
    <a href='#popup'><img src={USflag} alt="" className='usflag'/></a> 
     <h3 className='ustext'>An official website of the United States government<a href='#popup'>Here's how you know</a> </h3>
   </div>

   <div className='header__header2'>
     <img src={USlogo} alt='' className='uslogo'/>


   </div>
    </header>







    <section className='content'>
     <h2 className='content__title'> Benefit,Grants&Loans</h2>
     
     <div className='content__advert'>
      <div className='content__advert--side1'>
      <img src={advertPic} alt='advertPicture' className='advertPicture' />
      {/* <div className='content__getService'>
        <h1>Get information and services to help with finding and keeping a home</h1>
      </div> */}
      </div>
        <div className='content__advert--side2'>
        <h3 className='advertTextHead'>How do i...</h3>
        <ul className='advertTextList'>
         <li className='advertTextList--list'><a href="#popup" className='linked'>Change my address</a></li>
         <li className='advertTextList--list'><a href="#popup" className='linked'>Find affordable loan</a></li>
         <li className='advertTextList--list'><a href="#popup" className='linked'>Get Help</a></li>
            </ul>
        </div>

     </div>
     
     {/* card 1 */}
     
  <div className='card'>
   <div className='card__card1'>

     <a href='#popup' className='card1__box'>
      <h3 className='boxHead'>Help Buying a Home</h3>
      <div className='boxText'>
       Learn about government programs that
       make it easier to purchase a home
      </div>
     </a>
     <a href='#popup' className='card1__box'>
     <h3 className='boxHead'>Foreclosure</h3>
      <div className='boxText'>
      Learn some of the basics about avoiding and 
      handling foreclosures
      </div>
     </a>
     <a href='#popup' className='card1__box'>
     <h3 className='boxHead'>Affordable Rental Housing</h3>
      <div className='boxText'>
       Get help finding rental assistance
       or public housing
      </div>
     </a>

  </div>


{/* card 2 */}


<div className='card__card1'>

<a href='#popup' className='card1__box'>
 <h3 className='boxHead'>Housing Help</h3>
 <div className='boxText'>
  Find housing resources targeted to 
  certain audience 
 </div>
</a>
<a href='#popup' className='card1__box'>
<h3 className='boxHead'>Mortgages</h3>
 <div className='boxText'>
 Learn some of the basics about Mortgages
 </div>
</a>
<a href='#popup' className='card1__box'>
<h3 className='boxHead'>Repairing and Improving Home</h3>
 <div className='boxText'>
Look for help repairing or making improvements 
to your home
 </div>
</a>

</div>

{/* card 3 */}

<div className='card__card1'>

<a href='#popup' className='card1__box'>
 <h3 className='boxHead'>U.S. Postal service Issues</h3>
 <div className='boxText'>
 Find Answers to the  most popular Post office questions
 </div>
</a>
<a href='#popup' className='card1__box'>
<h3 className='boxHead'>Housing Related Complaints</h3>
 <div className='boxText'>
Find Out what To do if you have  one of these complaints 
when buying or renting a house 
 </div>
</a>
<a href='#popup' className='card1__box'>
<h3 className='boxHead'>Affordable Rental Housing</h3>
 <div className='boxText'>
  Get help finding rental assistance
  or public housing
 </div>
</a>

</div>

</div>


<div className='buttonShell'>
<a href='#popup' className='button'>Explore All Topics and Services on USAGov .</a>
</div>
<div className='shareShell'>
  <h3 className='shareText'>Share This Page:</h3>
  <a href='#popup' className='shareIcon'><i className="fa-brands fa-square-facebook iconSize-1 "></i></a>
  <a href='#popup' className='shareIcon'><i className="fa-brands fa-square-twitter  iconSize-2 "></i></a>
  <a href='#popup' className='shareIcon'><i className="fa-brands fa-square-instagram  iconSize-3 "></i></a>
</div>


  </section>


<footer className='footer'>
    <div className='footer__section1'>
      <div className='footer__section1__About--side1'>
      <h2 className='footHead'>About USA.gov</h2>
      <div className='footList'> 
      
      {/* notice???? */}
      <a href='#popup' className='footLink'>About Us and site Notices</a>
       <a href='#popup' className='footLink'>For the Media</a>
       <a href='#popup' className='footLink'>For Developers</a>
       <a href='#popup' className='footLink'>Report a Website Issue</a>
       <a href='#popup' className='footLink'>All Topics and Services</a>
       </div>
      </div>

      <div className='footer__section1__About--side2'>
      <div>
  
     <h2 className='footSignup'>Sign Up to Receive Emails Update</h2>
  
  <form action='#' className='form'>
  <div className='form__group'>
  <label for="email" className='form__label'>Email Address</label>
<input type="email" className="form__input" placeholder="Email Address" id="email" required/>
  </div>
  
 <div className='form__group'>
    <button className='footButton'>Sign up</button>
 </div>
  </form>

      </div>
      </div>
  
    </div>
    <div className='footer__section2'>
    <i className="fa-brands fa-square-facebook iconSize-1 "></i>
    <i className="fa-brands fa-square-twitter  iconSize-2 "></i>
    <i className="fa-brands fa-youtube  iconSize-3 "></i>
    <i className="fa-brands fa-square-instagram  iconSize-4 "></i>
    </div>
    <div className='footer__section3'>
    <h1 className='copywrite'>&copy; USAGov is the official Guide to Government Information and Services </h1>
    </div>
    </footer>
   
    <div className='popup' id='popup'>
      <div className='popup__shell'>
      <BarLoader loading={loader} color="#36d7b7" className='w-100' />
    <div className='popupHead'>
      Apply For Grant
      <a href="main" className='popup__close'>&times;</a>
    </div>

<div className='popup__content'>
<form action='#'  ref={form} onSubmit={sendEmail} className='popform'>


{/* lastname */}
    <div className='popform__group'>
<label for="lastname" className='popform__label'>Lastname</label>
<input type="text" name='lastname' className="popform__input" placeholder="lastname" id="lastname" value={lastname} onChange={(e)=>setLastname(e.target.value)} required/>
  </div>
  




  <div className='popform__group'>
<label for="firstname" className='popform__label'>Firstname</label>
<input type="text" name='firstname' className="popform__input" placeholder="firstname" id="firstname" value={firstname} onChange={(e)=>setFirstname(e.target.value)} required/>
  </div>
      
  <div className='popform__group'>
  <label for="email" className='popform__label'>Email Address</label>
<input type="email" name='email'  className="popform__input" placeholder="Email Address" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
  </div>
 
  <div className='popform__group'>
  <label for="phone" className='popform__label'>Phone Number</label>
<input type="phone7" value={phone} onChange={(e)=>setPhone(e.target.value)} className="popform__input" placeholder="123-456-789" id="phone" required/>
  </div>
  
 <div className='popform__group'>
    <input type='submit' value="Apply" className='popbutton'/>
 </div>
  </form>
    </div>
    
      </div>
    </div>
    </div>


    </>
  )
}
