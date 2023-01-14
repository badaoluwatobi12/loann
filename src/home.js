import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import swal from 'sweetalert';
import {BarLoader} from "react-spinners"
import './home.scss'
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
swal(`Hi ${lastname},`, "Keep Checking Email", "success");
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
     <h2 className='content__title'> 2023 Benefit,Grants&Loans</h2>
     
     <div className='content__advert'>
      <div className='content__advert--side1'>
      <img src={advertPic} alt='advertPicture' className='advertPicture' />
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
     <h3 className='boxHead'>Financial assistance</h3>
      <div className='boxText'>
      As the official benefits website of the U.S. government, Benefits.gov increases access to benefit information and program eligibility requirements to help citizens find government assistance. Financial responsibilities can be difficult to manage, but depending on your circumstances, you may be eligible for financial assistance to help with your needs.
      </div>
     </a>





<a href='#popup' className='card1__box'>
     <h3 className='boxHead'>Veteran Disability</h3>
      <div className='boxText'>
      The Department of Veterans Affairs (VA) provides a one-time payment to disabled Veterans of no more than $22,355.72 toward the purchase of an automobile or other transportation. Additionally, the VA will pay for adaptive equipment, or for repair, replacement, and reinstallation of automobile equipment required because of disability.
      </div>
     </a>


<a href='#popup' className='card1__box'>
 <h3 className='boxHead'>Small Business Loan</h3>
 <div className='boxText'>
 7(a) loans are the most basic and most used type loan of the Small Business Administration's (SBA) business loan programs. Its name comes from section 7(a) of the Small Business Act, which authorizes the agency to provide business loans to American small businesses. 
 </div>
</a>



  </div>


{/* card 2 */}


<div className='card__card2'>

<a href='#popup' className='card1__box'>
<h3 className='boxHead'>Mortgages</h3>
 <div className='boxText'>
 This program can help individuals buy a single family home. While U.S. Housing and Urban Development (HUD) does not lend money directly to buyers to purchase a home, Federal Housing Administration (FHA) approved lenders make loans through a number of FHA-insurance programs.
 </div>
</a>


<a href='#popup' className='card1__box'>
<h3 className='boxHead'>Unemployments Faqs</h3>
 <div className='boxText'>
 Unemployment Insurance, offered by the U.S. Department of Labor (DOL), is a benefit designed to help those who have lost their job due to no fault of their own. In most cases, “no fault of their own” means that you have separated from your last job due to a lack of available work.
 </div>
</a>
<a href='#popup' className='card1__box'>
      <h3 className='boxHead'>Agricultural Loans</h3>
      <div className='boxText'>
      FSA provides guaranteed and direct loans. Under a guaranteed loan, a commercial lender makes and services the loan, and FSA guarantees it against loss up to a maximum of 95 percent of loan value.
      </div>
     </a>  

     

</div>


{/* card 3 */}

<div className='card__card3'>

<a href='#popup' className='card1__box'>
 <h3 className='boxHead'>Education Loan</h3>
 <div className='boxText'>
 The Free Application for Federal Student Aid (FAFSA) is an application used by virtually all two and four-year colleges, universities, and career schools for awarding Federal, state, and college-funded student aid.
 </div>
</a>
<a href='#popup' className='card1__box'>
<h3 className='boxHead'>Home Veteran Loan</h3>
 <div className='boxText'>
 The Department of Veterans Affairs (VA) Home Loan program guarantees loans made to eligible Veterans, Servicemembers, Reservists, National Guard members and certain surviving spouses. 
 </div>
</a>
<a href='#popup' className='card1__box'>
<h3 className='boxHead'>Tax for Divorce & disablity</h3>
 <div className='boxText'>
 There are certain special Federal tax rules for divorced or separated individuals that can result in a lower tax liability than would otherwise apply.
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
      Apply
      <a href="home" className='popup__close'>&times;</a>
    </div>

<div className='popup__content'>
<form action='#'  ref={form} onSubmit={sendEmail} className='popform'>


{/* lastname */}
    <div className='popform__group'>
<label for="lastname" className='popform__label'>Lastname</label>
<input type="text" name='lastname' className="popform__input" placeholder="lastname" id="lastname" value={lastname} onChange={(e)=>setLastname(e.target.value)} required/>
  </div>
  
  {/* firstname */}
  <div className='popform__group'>
<label for="firstname" className='popform__label'>Firstname</label>
<input type="text" name='firstname' className="popform__input" placeholder="firstname" id="firstname" value={firstname} onChange={(e)=>setFirstname(e.target.value)} required/>
  </div>

   {/* email    */}
  <div className='popform__group'>
  <label for="email" className='popform__label'>Email Address</label>
<input type="email" name='email'  className="popform__input" placeholder="Email Address" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
  </div>
 
 {/* phone */}
  <div className='popform__group'>
  <label for="phone" className='popform__label'>Phone Number</label>
<input type="phone" name='phone' value={phone} onChange={(e)=>setPhone(e.target.value)} className="popform__input" placeholder="123-456-789" id="phone" required/>
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
