import React from "react"
import { StaticImage } from 'gatsby-plugin-image'

export default function Home() {
  return <div>
    
   <h1>Hello world!</h1>
    <StaticImage 
      src="../images/cat-1.jpeg"
      width={300}
      alt="Cat 1"
    />
    </div>
}
