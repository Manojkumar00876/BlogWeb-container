import React  , {useEffect, useState } from "react";
import NavBar from "./navBar";
import "./BlogEditor.css";
import { Card, Nav } from "react-bootstrap";
import {  collection , deleteDoc,doc , getDocs } from "firebase/firestore";
import { db } from "../ApiService/firebase-config";
import { async } from "@firebase/util";
import { logout } from "../ApiService/Auth";
import { useNavigate } from "react-router-dom";

export const BlogEditor =  () => {

   const navigate =  useNavigate();
    const [postList , setPostList] = useState([]);
    const [loading , setLoading ] = useState(false);
    const postCollectionsRef = collection(db,'post');

    const logoutUser = () => {
        logout();
        navigate('/')
    }

const getPosts = async() => {
    setLoading(false);
    const data = await getDocs(postCollectionsRef);
    setPostList(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
    // console.log(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
    setLoading(false)
}
const deletePost = async(id)  =>{
  const postDoc = doc(db,'post',id);
  await deleteDoc(postDoc);
  getPosts()
}
useEffect(() => {
      getPosts();
},[])
    return(
        <div className="homepage">
                <NavBar  logoutUser={logoutUser}></NavBar>
                
                    {postList.length===0 ? <div className="NoPost"> <h3 >No post added</h3> </div> : postList.map((post) => {
                        return (  
                         <div className="body">
                        <div className="body-2 card mb-4 shadow shadow-sm">
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-danger mt-5" onClick={()=>{deletePost(post.id)}}>Delete</button>
                                    </div> 
                            <div className="card-body">
                                <h5 className="title-head card-title mb-5 fw-bold" id="Heading">{post.title}</h5>
                                <p className="card-title mb-3">{post.content}</p>
                                <h5 className="card-title mb-3"> Author:{post.author}</h5>
                                <span className="date">Date:{post.date}</span>
                            </div>
                            </div>
                           </div>
                       
                     ) 
                    
                    })}
         </div>
       )
  
}
