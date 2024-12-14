import React from 'react';
import Link from "next/link";

export default function Home() {
  return (
    <div>
    <h1 style={{textAlign:'center', padding:40,backgroundColor:'lightgrey',fontSize:50,color:'darkblue'}}>CareerSupport.com</h1>
   
    <nav className="bg-gray-800 text-white p-4">
       <div className="container mx-auto flex justify-between items-center">
         <div className="font-bold text-xl"></div>
         <ul className="flex space-x-6">
           <li><Link href="/">Home</Link></li>
           <li><Link href="/aboutus">About</Link></li>
           <li><Link href="/service">Services</Link></li>
           <li><Link href="/careers">Careers</Link></li>
           <li><Link href="/contact">Contact</Link></li>
           <li><Link href="/support">Support</Link></li>
         </ul>
       </div>
     </nav>
     <h1 style={{textAlign:"center",backgroundColor:'lightblue',padding:15,fontSize:20}}>Home</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum eaque odio
        repellendus sequi qui, placeat quasi facere laboriosam dolorem ea,
        voluptatibus recusandae quaerat temporibus quisquam sed numquam quos
        eveniet minus! Odio, sequi temporibus! Voluptatum deleniti est quidem
        similique esse repudiandae doloremque ipsum ipsa excepturi debitis.
        Eligendi beatae vel aspernatur, mollitia minima itaque, recusandae a
        facere repellat fugiat neque iure dolores ullam modi qui. Sapiente
        laborum possimus maiores, eum repellat odit quasi inventore rem sequi
        obcaecati temporibus, hic vel, assumenda labore deleniti iste magnam
        animi voluptate? Eaque alias qui modi obcaecati voluptates, minus
        debitis ut delectus necessitatibus placeat magni, magnam dolorum nostrum
        est. Est sint porro at nesciunt exercitationem dignissimos enim fugit
        explicabo impedit ullam, molestias eaque illum in. Nobis dolore sit
        minima voluptas numquam nisi necessitatibus obcaecati magnam non magni
        excepturi, aperiam praesentium consectetur quis id sunt fugit dolorum
        earum hic soluta deserunt, eveniet modi harum perspiciatis! Velit dolore
        veniam a deserunt nobis possimus delectus, atque optio, excepturi
        inventore quam animi omnis iusto. Suscipit fugit quibusdam,
        necessitatibus odit neque recusandae velit id distinctio temporibus eius
        atque illum nulla doloremque corrupti. Similique repudiandae cumque
        repellat consequuntur animi iure, eaque mollitia autem neque quo cum sed
        nobis fugiat perspiciatis vero, quidem veniam.
      </p>
     <div>
      <footer style={{textAlign:'center', backgroundColor:'lightgray'}}><p>© Copy rights reserved</p></footer>
     </div>
     </div>
  );
}
