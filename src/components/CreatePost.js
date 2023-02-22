import React , {useState}from "react";
import { addDoc , collection } from "firebase/firestore";
import { db } from "../ApiService/firebase-config";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";
import NavBar from "./navBar";

export const CreatePost = () => {

    const [ title , setTitle ] = useState("")
    const [ content , setContent ] = useState("")
    const [ author , setAuthor ] = useState("")
    const [ date , setDate ] = useState("")

    let navigate = useNavigate();
 
const postCollectionsRef = collection(db,'post');

const createPost = async () => {
    if(title === '' || content === '' || author===''){
        alert("enter crendentials");
        return false;
    } else {
       try{
        await addDoc(postCollectionsRef , {
            title ,
            content ,
            author ,
            date
         
        })
       alert("Posted Successfully!")
       navigate("/BlogEditor");
       }
       catch (error){
                  console.log(error)
       }
    }
}

    return (
        <div className="containeer">
            <NavBar></NavBar>
            <div className="bg-light p-5 rounded mt-3">
                <h1>Create Post</h1>
                <div className="mb-3 ">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input className="form-control"  onChange={(e)=>setTitle(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="posts" className="form-label" >Post:</label>
                    <textarea className="form-control"onChange={(e)=> setContent(e.target.value)}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="Author" className="form-label" >Author:</label>
                    <input className="form-control"onChange={(e)=> setAuthor(e.target.value)} ></input>
                    <label htmlFor="Author" className="form-label" >Date:</label>
                    <input type="date" className="form-label mt-4 p-1 "   onChange={(e)=> setDate(e.target.value)} ></input>
                </div>
                <button className="btn btn-dark" onClick={createPost}>post</button>
            </div>
        </div>
    )
} 