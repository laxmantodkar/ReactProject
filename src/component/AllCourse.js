import React, { useEffect,useState } from "react";
import Course from "./Course";
import base_url from "../api/bootApi";
import axios from 'axios';

const AllCourse = () => {
   useEffect(()=>{
      document.title="All Course";
      getAllcourse();
  }, []);

  //call to the server api
  const getAllcourse=()=>
  {
     axios.get(`${base_url}/book/getAllBook`).then(
      (Promise)=>
      {
         console.log(Promise)
         setCourse(Promise.data);

      },
      (error)=>{
       console.log(error);
       console.log("error");
      }
     );
  }
   const [course, setCourse]=useState([]);


    return (
        <div>

          <h3>All Courses</h3>

           {
             course.map((x)=>{
               console.log(x);
                return(
                   <Course course={x}/>
                )
             })
          } 
        </div>
       
        
        
    )
}
export default AllCourse;