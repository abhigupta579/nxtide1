import React from 'react'
import './Case.css';
import Header from '@/Components/Header';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';



 let caseData = [
    {image:'https://nxtide.com/wp-content/uploads/2022/04/kit2.jpg',head:'Kitopi: Scaling the software development team for one of the fastest growing unicorns.'},
    {image:'https://nxtide.com/wp-content/uploads/2022/04/Atom-Bank-1.jpg',head:'Atom Bank: Establishing an entirely new, remote team for the UK’s first fully digital bank.'},
    {image:'https://nxtide.com/wp-content/uploads/2022/04/Trader-7.jpg',head:'FinTech: Designing and building the innovative ETF investment platform from the scratch.'},
    {image:'https://nxtide.com/wp-content/uploads/2022/04/app-cellphone-device-870903-e1548080261618.jpg',head:'KodyPay: Scaling a software development team of one of the best mobile payment applications.'},
 ]

export default function Case() {
  return (
    <div className='section case'>
      <div className='container-fluid'>
        <Header/>
        <h1>Learn more about our previous projects and client&aposs testimonials</h1>
        <div className='row justify-content-evenly'>
           { caseData.map((data)=>(
            <div className='col-md-5 mt-8 colCaseData' key={data.id}>
              <img src={data.image} className='img-fluid'/>
              <h2>{data.head}</h2>
              <Link href={'/Learn'} style={{color:'indianred',textDecoration:'none',fontWeight:'bold'}}>READ MORE</Link>
            </div> 
           ))}
        </div>

        <div className='row justify-content-evenly'>
            <div className='col-md-11 colSlider'>
               <div className='row'>
                <h1>More projects accomplished by our company:</h1>
                <Carousel>
                    <Carousel.Item>
                     <div className='row'>   
                     <div className='divSlide col-md-3'>   
                      <img src='https://nxtide.com/wp-content/uploads/elementor/thumbs/applications-scaled-pobnhj4i72z8qxiev8w2r4smxpclh6f97fe1ik73ig.jpg' className='img-fluid'/>
                      <h2>Frost</h2>
                     </div>
                     <div className='divSlide col-md-3'>  
                      <img src='https://nxtide.com/wp-content/uploads/elementor/thumbs/applications-scaled-pobnhj4i72z8qxiev8w2r4smxpclh6f97fe1ik73ig.jpg' className='img-fluid'/>
                      <h2>Winhealth</h2>
                      </div>
                      <div className='divSlide col-md-3'>
                      <img src='https://nxtide.com/wp-content/uploads/elementor/thumbs/applications-scaled-pobnhj4i72z8qxiev8w2r4smxpclh6f97fe1ik73ig.jpg' className='img-fluid'/>
                      <h2>Duel</h2>
                      </div>
                      <div className='divSlide col-md-3'>
                      <img src='https://nxtide.com/wp-content/uploads/elementor/thumbs/applications-scaled-pobnhj4i72z8qxiev8w2r4smxpclh6f97fe1ik73ig.jpg' className='img-fluid'/>
                      <h2>Tech</h2>
                      </div>
                      </div>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                    <div className='row'>     
                     <div className='divSlide col-md-3'>   
                      <img src='https://nxtide.com/wp-content/uploads/elementor/thumbs/applications-scaled-pobnhj4i72z8qxiev8w2r4smxpclh6f97fe1ik73ig.jpg' className='img-fluid'/>
                      <h2>Frost</h2>
                     </div>
                     <div className='divSlide col-md-3'>  
                      <img src='https://nxtide.com/wp-content/uploads/elementor/thumbs/applications-scaled-pobnhj4i72z8qxiev8w2r4smxpclh6f97fe1ik73ig.jpg' className='img-fluid'/>
                      <h2>Winhealth</h2>
                      </div>
                      <div className='divSlide col-md-3'>
                      <img src='https://nxtide.com/wp-content/uploads/elementor/thumbs/applications-scaled-pobnhj4i72z8qxiev8w2r4smxpclh6f97fe1ik73ig.jpg' className='img-fluid'/>
                      <h2>Duel</h2>
                      </div>
                      <div className='divSlide col-md-3'>
                      <img src='https://nxtide.com/wp-content/uploads/elementor/thumbs/applications-scaled-pobnhj4i72z8qxiev8w2r4smxpclh6f97fe1ik73ig.jpg' className='img-fluid'/>
                      <h2>Tech</h2>
                      </div></div>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                     <div className='row'>   
                     <div className='divSlide col-md-3'>   
                      <img src='https://nxtide.com/wp-content/uploads/elementor/thumbs/applications-scaled-pobnhj4i72z8qxiev8w2r4smxpclh6f97fe1ik73ig.jpg' className='img-fluid'/>
                      <h2>Frost</h2>
                     </div>
                     <div className='divSlide col-md-3'>  
                      <img src='https://nxtide.com/wp-content/uploads/elementor/thumbs/applications-scaled-pobnhj4i72z8qxiev8w2r4smxpclh6f97fe1ik73ig.jpg' className='img-fluid'/>
                      <h2>Winhealth</h2>
                      </div>
                      <div className='divSlide col-md-3'>
                      <img src='https://nxtide.com/wp-content/uploads/elementor/thumbs/applications-scaled-pobnhj4i72z8qxiev8w2r4smxpclh6f97fe1ik73ig.jpg' className='img-fluid'/>
                      <h2>Duel</h2>
                      </div>
                      <div className='divSlide col-md-3'>
                      <img src='https://nxtide.com/wp-content/uploads/elementor/thumbs/applications-scaled-pobnhj4i72z8qxiev8w2r4smxpclh6f97fe1ik73ig.jpg' className='img-fluid'/>
                      <h2>Tech</h2>
                      </div></div>
                    </Carousel.Item>
                </Carousel> 
               </div> 
            </div>
        </div>
      </div>
    </div>
  )
}
