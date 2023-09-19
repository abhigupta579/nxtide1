import './Learn.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faLocationDot,
    faStar,
    faHeart,
    faUser,
    faBoxOpen,
    faCalendarDays,
    faPeopleGroup
} from "@fortawesome/free-solid-svg-icons";
import React,{use, useEffect} from 'react'
import Header from '@/Components/Header';
import $ from 'jquery';
import Count from './Count';
import ZoomImg from './ZoomImg';
import Magnify from '@/Components/Magnify';
import Response from '@/Components/Response';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Learn() {
//  useEffect(()=>{
//   $(document).ready(function(){
//     $('#btn1').click(function(){
//       $('.learnMain').slideUp(2000);
//     }),
//     $('#btn2').click(function(){
//       $('.learnMain').slideDown(2000);
//     })
//   })
//  })

      
 
  return (
    <div className='learn'>
      {/* <button id='btn1'>button1</button>
      <button id='btn2'>button2</button> */}
        <Header/>
        {/* <Magnify/> */}
        {/* <ZoomImg/> */}
        {/* <Count/> */}
        <div className='container-fluid learnMain'>
           <h1>Kitopi: Scaling the software development team of one of the fastest-growing unicorns.</h1>
           <div className='row kitopi justify-content-center mb-3'>
             <div className='col-md-3 colKitopi text-center mt-3'>
               <FontAwesomeIcon icon={faUser} className='iconFont' />
               <h2>Client Details</h2>
               <p>Kitopi Catering Services LLC / Dubai, UAE</p>
             </div>

             <div className='col-md-3 colKitopi text-center mt-3'>
             <FontAwesomeIcon icon={faBoxOpen}  className='iconFont' />
               <h2>Products / Services</h2>
               <p>Scaling the Software Development Team; Custom development of one of the products</p>
             </div>

             <div className='col-md-3 colKitopi text-center mt-3'>
             <FontAwesomeIcon icon={faCalendarDays}  className='iconFont' />
               <h2>Project Duration</h2>
               <p>February 2018 , ongoing</p>
             </div>

             <div className='col-md-3 colKitopi text-center mt-3'>
             <FontAwesomeIcon icon={faPeopleGroup}  className='iconFont'/>
               <h2>Team Size</h2>
               <p>10+ Senior Developers / 3 Product Owners / 1x UI Designer</p>
             </div>
           </div>

           <div className='row justify-content-center about mt-4 mb-4'>
            <div className='col-md-12 LearnText mt-3'>
                <h2>About the Project</h2>
                <p>Kitopi is a Kitchen as a Service (KaaS) platform that enables restaurants to open delivery-only locations by providing the necessary managed infrastructure and software with minimal capital expenditure and time.<br/>

                Only a few people were aware of cloud kitchens when Kitopi debuted in Dubai in January 2018. But now surprisingly Kitopi became a true Unicorn, a leader and a trendsetter of the fastest-growing sectors in the whole food industry.</p>
                <img src='https://nxtide.com/wp-content/uploads/elementor/thumbs/p2t84jDB-Kitopi-1-pnb156s6atrlu9wtw8bea665mpkg7s7ih3viav2m40.jpg'className='img-fluid'/>

                <h2>The “cloud kitchen” concept</h2>
                <p>Cloud kitchen” (also known as a “ghost kitchen” or “kitchen as a service”) is a totally new, disruptive B2B service offered to existing, local restaurants. A provider like Kitopi offers to cook and deliver specific dishes on behalf of the restaurants in other, distinct locations (like districts, cities, countries), that were usually out of their reach. What is with mentioning that all the cooking standards, recipes and procedures must be preserved in the whole process. This concept goes far beyond standard “shared kitchen” services available on the market. The benefits are obvious. Restaurant owners can focus on their main, traditional business when the ghost kitchen provider scales their sales locally and helps them expand to totally new locations (through online orders + delivery network).</p>

                <h2>The story of Kitopi</h2>
                <p>The Kitopi startup was founded in January 2018 by 4 enthusiastic entrepreneurs Mohamad Ballout, Saman Darkan, Bader Ataya, and Andres Arenas. They all started realizing Kitopis mission “to power the food economy by revolutionizing the way people can access food”. And it worked out! <br/>

                Last year Kitopi completed a $60 million Series B funding round. The round was led by Knollwood and Lumia Capital. This year Kitopi raised $415 million in a Series C funding round led by Softbank. That made Kitopi a true unicorn a company with a valuation greater than $1 Billion in less than three years from the start. <br/>

                Kitopi currently operates 30 kitchens across the United States, United Arab Emirates, Saudi Arabia, United Kingdom, and Kuwait and plans to continue expanding into both new and existing markets. In the coming years, it aims to open dozens more locations in the United States and globally. </p>
            </div>

            <div className='col-md-6 colTextImg mt-3'>
               <p>The cloud kitchen startup has already partnered with over 100 restaurants including names like Operation Flalfel, Pizza Express, Rite Bite, and Under 500. Under 500, Kitopi said, has doubled its revenue year on year and scales internationally using its services. Kitopi, according to its website, currently has over 1,200 employees.</p>
            </div>

            <div className='col-md-6 colImage mt-3'>
                <img src='https://nxtide.com/wp-content/uploads/elementor/thumbs/Kitopi-pnayz1h0sk3ib4hrqp3de8jelytp4tm4k09q45nid4.png' className='img-fluid'/>
            </div>

            <div className='col-md-12 LearnText mt-4'>
                <h2>Business Challenge</h2>
                <p>The main problem that is nurturing the industry and restaurant owners was the small, local range of their activity. Yes, today almost every restaurant offers “delivery” service  however, it is still limited to certain areas, not to mention the additional staff needed to serve online / phone orders. Kitopi solves this problem through ghost kitchens. Restaurants do not have to spend the resources or hire additional staff in order to cover the entire city or region. By using the network of cloud kitchens, Kitopi aims for the delivery process from the time a client places an order on a third-party app to take 35 minutes or less. 
                <br/>
                The other, more strategic issue, when it comes to the hospitality business is scaling. Setting up a restaurant is an extremely complex and expensive process. This is what makes it so difficult to scale a restaurant brand to a “restaurant network level”. This is where a cloud kitchen like Kitopi steps in. As a restaurant owner, you can now cook and deliver your famous dishes to other cities or even countries without the need to open a local branch. 
                <br/>
               Kitopis “managed cloud kitchen” approach goes even beyond full outsourcing offers for these food companies. It also includes a “restaurant-as-a-service,” which takes care of all the procurement of goods, hiring staff to prepare the meals, as well as finding the most optimal way for delivering orders. Thanks to cloud software technology, business scale, and advanced business partnerships everything is done way more efficiently than in a single restaurant. Kitopi aggregates the interests of many restaurants to negotiate the best deals with suppliers or delivery operators. 
              <br/>
               With partners like Kitopi, the restaurants can simply focus on growing their restaurant brands and expanding to new locations without making costly mistakes or failing in negotiations with bigger market players.</p>
            </div>

            <div className='col-md-6 polandText mt-3'>
                <h2>Building a software development hub in Poland</h2>
                <p>One of the biggest challenges for every tech unicorn is to build a strong IT team that will lead the product development. Encouraged by the latest trends in the IT market Kitopi has made a bold decision to create its software development hub in Poland. This decision was driven by several crucial factors like software developers skills potential, similar time zones and standards, and attractive rates. Once again it has occurred to be a great move.</p> 
            </div>
            <div className='col-md-6 polandImage mt-3'>
                <img src='https://nxtide.com/wp-content/uploads/elementor/thumbs/Kitopi_Poland-pnb1lehqvtacagrp2k5j8j59uc6f4u78sjgcj49ork.jpg' className='img-fluid'/>
            </div>

            <div className='col-md-12 mt-3'>
                <p>During the first years, Kitopis IT team grew in numbers very rapidly. From 7 software developers in 2019 to 57 at the end of 2021. A significant part of this growth was made in the Kitopi IT department alone that was set up in our neighborhood in Kraków, Poland.</p>
            </div>

            <div className='col-md-12 mt-3 clientCol'>
              <h2>Clients testimonial</h2>
              <div className='clientImg text-center' >
                  <img src='https://nxtide.com/wp-content/uploads/2022/04/Marcin-Welner.jpg' className='img-fluid client'/>
                  <h3>Marcin Welner</h3>
                  <p>Technical Director, Kitopi</p>
                </div>
                <div className='clientText'>
                  <p className='paraClient'>Pragmatic Coders pays attention to detail and understands the business domain correctly. They led us to a successful launch of our product this year. We are happy with the effects of their work. Our team is still using the platform and building on top of it.</p>
                </div>  
            </div>
            <Response/>
           </div>
        </div>
    </div>
  )
}
