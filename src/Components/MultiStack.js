import React from 'react'
import './MultiStack.css';
import 'bootstrap/dist/css/bootstrap.min.css';

let multi = [
    {image: 'http://nxtide.com/wp-content/uploads/2021/02/dotnet.png'},
    {image: 'http://nxtide.com/wp-content/uploads/2021/02/java.png'},
    {image: 'http://nxtide.com/wp-content/uploads/2021/02/python.png'},
    {image: 'http://nxtide.com/wp-content/uploads/2021/02/node.png'},
    {image: 'https://nxtide.com/wp-content/uploads/2021/02/javascript.png'},
    {image: 'http://nxtide.com/wp-content/uploads/2021/02/react.png'},
    {image: 'http://nxtide.com/wp-content/uploads/2021/02/csharp.png'},
    {image: 'http://nxtide.com/wp-content/uploads/2021/02/angular.png'},
    {image: 'https://nxtide.com/wp-content/uploads/2023/03/swift-logo-1.png'},
    {image: 'http://nxtide.com/wp-content/uploads/2021/02/android.png'},
    {image: 'http://nxtide.com/wp-content/uploads/2021/02/ios.png'},
    {image: 'https://nxtide.com/wp-content/uploads/2023/03/go-logo-2.png'},
    {image: 'http://nxtide.com/wp-content/uploads/2021/02/oracle.png'},
    {image: 'https://nxtide.com/wp-content/uploads/2023/03/php-logo-1.png'},
    {image: 'http://nxtide.com/wp-content/uploads/2021/02/aws.png'},
    {image: 'http://nxtide.com/wp-content/uploads/2021/02/gcp.png'},
]

export default function MultiStack() {
  return (
    <div className='multi'>
      <div className='container'>
        <h1>The technology stack of our software development teams</h1>
        <div className='row justify-content-center'>
            <div className='col-md-11 colMulti  justify-content-center'>
               {
                multi.map((data)=>(
                <div className='col-md-2' key={data.id}> 
                    <img src={data.image}/>
                </div>
                ))
               }
            </div>    
        </div>
      </div>
    </div>
  )
}
