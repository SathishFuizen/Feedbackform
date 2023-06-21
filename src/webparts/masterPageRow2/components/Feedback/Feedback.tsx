import * as React from 'react'
import './Feedback.scss'
import { getSP } from '../pnpConfig';
import { SPFI } from '@pnp/sp';
import "@pnp/sp/sputilities";
import { SlCheck } from "react-icons/sl";
import { IItemAddResult } from "@pnp/sp/items";
import { AiFillCloseCircle} from "react-icons/ai";
import { BsFillArrowRightSquareFill} from "react-icons/bs";

const Feedback = (props: any) => {

  const [fb, setFb] = React.useState<any>(false)
  const [data,setData] = React.useState<any>("")
  const [msg, setMsg] = React.useState<any>(false)
  const postFeedback = async () => {
    let _sp: SPFI = getSP(props.context);
    const list: IItemAddResult = await _sp.web.lists.getByTitle("Feedback List").items.add({
      Complients_x002f_Comments: data,
      DepartmentNameId: props.depID
    });
    console.log(list)
   

    _sp.utility.sendEmail({
      To: [props.repman],
      Subject: "Recived Feedback ",
      Body: "You got feedback",
      AdditionalHeaders: {
        "content-type": "text/html"
      }
    })
  }

 React.useEffect(()=>{
  console.log(data)

 },[data])


  return (
    
    <div className='rowMains'>
      <div className="feedbackTitle">
      </div>
      <div className='button'>
      <button className='btn' onClick={()=>setFb(true)}>Please write your feedback </button>
      <div>
      {
        fb && (
          <div className='form-container'>
            <div className='data-container' id="myfrom">
              <textarea placeholder='Enter your Feedback' value={data} onChange={(e)=>setData(e.target.value)}></textarea>
              </div>
            <div className="btnclose" onClick={()=>{setFb(false);setData("")}}><AiFillCloseCircle  size={20}/></div>

            
      {/* <div className="field"><textarea value={fb} placeholder='Enter your Feedback here' onChange={(e) => setFb(e.target.value)}></textarea></div>  */}
        <div className='submitBtn'><div className={data == "" ? "btnDivHide" : "btnDivShow"}><button onClick={() => {
          postFeedback(); setFb(""); setData(""); setMsg(true); setTimeout(() => {
            setMsg(false)
          },2000)
        }}><BsFillArrowRightSquareFill size={20}/></button></div>
      
      
      </div>
     </div>
     
          
        )
        
      }
     <div className = {msg ? "msgopen" : "msgclose"} > <SlCheck size={15} color={"green"}  />   <div className="successm"> Successfully Submitted </div></div>
      </div>
      </div>  
    </div>
  )
}

export default Feedback
