import React from 'react'
import './home.css'
import Card from './Card'

export default function home() {
  return (
    <>
        <header>
            <nav>
                 <ul>
                     <li><a href="">Home</a></li>
                     <li><a href="">About</a></li>
                     <li><a href="">Products</a></li>
                     <li><a href="">Contact</a></li>
                 </ul>

                <div className="btnDiv">
                 <button>Sign up</button>
                 <button>Login up</button>
                 </div> 
            </nav>
        </header>

        <section id="cardSection">
            <Card text="This is Rose" img="https://w0.peakpx.com/wallpaper/636/233/HD-wallpaper-red-rose-flower-with-small-flowers-red-rose-flower-small-flowers-white-plant.jpg"/>
            <Card text="This is Flower" img="https://w0.peakpx.com/wallpaper/636/233/HD-wallpaper-red-rose-flower-with-small-flowers-red-rose-flower-small-flowers-white-plant.jpg" />
        </section>

        
    </>

  )
}
