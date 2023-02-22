import { Remarkable } from "remarkable";
import React , {useState} from "react";
import "./ReactMarkdown.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./navBar";
import { addDoc , collection } from "firebase/firestore";
import { db } from "../ApiService/firebase-config";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";

const md = new Remarkable();

 
const postCollectionsRef = collection(db,'post');

const ReactMarkDown = (props) => {
 
  const [ Text , SetText] = useState("");
  const navigate = useNavigate();
  let data  ;
   const Handledata = (e) => {
     SetText(e.target.value)
  
   }
   
  
  const Handlepublish =  async(event) => {
     data = md.render(Text)
     console.log(data)
     try{
      await addDoc(postCollectionsRef , {
          data
       
      })
     alert("Posted Successfully!")
     navigate("/BlogEditor");
     }
     catch (error){
                console.log(error)
     }
    
    }

    return (
      <div>
          <NavBar></NavBar>
              <div className="Heading"> <h1>MARKDOWN EDITOR</h1> </div>
                <div className="Editor" >
                <textarea className="TextArea" placeholder="Your text goes here" value={Text} onChange={Handledata}></textarea> 
               
              <div className="output"  dangerouslySetInnerHTML={{__html: md.render(Text)}} >
              </div>
                </div>
        <div>
        <button type="submit" className="btn btn-primary" onClick={Handlepublish} >Publish</button>
        </div>
   
    </div>
    )
}
export default ReactMarkDown;