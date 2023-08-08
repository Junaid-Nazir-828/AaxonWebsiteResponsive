// import Layout from "@/components/Layout"
// import Nav from "@/components/Navbar"
import { Navigation } from "@/components/Navigation"
import Hero from "@/components/Hero"
import Who from "@/components/Who"
import Techs from "@/components/Techs"
import Comments from "@/components/Comments"
// import Client from "@/components/Client"
// import Contact from "@/components/Contact"
// import Footer from "@/components/Footer"
// import Services from "@/components/Services"
// import { CirclularComponent } from "@/components/CirclularComponent"
// import Testing from "@/components/Testing"
// <CirclularComponent text="Web Development" margin="ml-20 mt-20"/>
// <CirclularComponent text="Data Analytics" margin="ml-[520px]"/>
// <CirclularComponent text="System Applications and Products" margin="ml-20"/>

export default function Home() {
  return (
    <div>
    <Navigation />
    <Hero />
    <Who /> 
    <Techs />
    <Comments />        
    </div>  
  )
}
