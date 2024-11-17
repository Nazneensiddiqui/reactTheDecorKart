import a2 from "../image/a2.webp"
import a3 from "../image/a3.webp"
import a4 from "../image/a4.webp"
import a5 from "../image/a5.webp"
import a1 from "../image/a1.webp"

const Bath = () => {
    return(
        <>
        <div id="img">
            <div>
            <img src={a1} width={320} height={420}/><br/><br/>
            <img src={a4} width={320} height={300} />
            </div>
            <div style={{marginTop:"10px"}}>
            <img src={a2} width={290} height={350} /><br/>
            <img src={a5} width={290} height={380} style={{marginTop:"20px"}}/>
            </div>
            <div style={{marginBottom:"160px"}}>
                <img src={a3} width={320} height={420}  /><br/>
 <span style={{textAlign:"center", marginLeft:"50px",fontFamily:"time", marginTop:"100px"}}><h2>Magical Illumination</h2>
    <p>Create the perfect ambiance with<br/> lighting that adds warmth and style<br/> to every room</p></span> 
  </div>
  </div> 
        </>
    )
}

export default Bath;