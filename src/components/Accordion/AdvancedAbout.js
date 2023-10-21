import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import { useState } from 'react';


//Basic Accordion
function Section({title,description,isVisible,setIsVisible}){
    return (
        <div style={{border: "1px solid black"}}>
        <div style={{padding: "5px"}}> 
        <h3>{title}</h3>
        {isVisible ? <button onClick={()=>setIsVisible(false)}>Hide</button>: <button onClick={()=>setIsVisible(true)}>Show</button>}
        {isVisible && <p>{description}</p>}
        </div>
        </div>
    )
}


function AdvancedAbout(){
    const [isVisible, setIsVisible] = useState("team");

    const data =[
        {
            title:"About team",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"
        },
        {
            title:"Card team",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"
        },
        {
            title:"Product team",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"
        }
    ]
    return (
        <>
        <Header />
        <h1>thsi is avanced accordion</h1>
        {data.map((section,index)=><Section title={section.title} description={section.description} isVisible={isVisible === index} setIsVisible={(value)=>value? setIsVisible(index): setIsVisible("")} />)}
        {/* <Section title={"About card"}
        description ={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}
        isVisible={isVisible === "about"}
        setIsVisible={(value)=>{console.log(value);
        value? setIsVisible("about"): setIsVisible("")}}
        />  */}     
        <Footer />
        </>
    )
}

export default AdvancedAbout;