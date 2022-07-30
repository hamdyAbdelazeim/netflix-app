import {useState,useEffect} from 'react'
import "./home.scss";
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List';
import axios from "axios";

const Home = ({type}) => {

const [lists, setLists] = useState([]);
const [genre, setGenre] = useState(null);

useEffect(() => {
  const getRandomLists = async () => {
    const url = `http://localhost:8800/api/lists${type ? "?type=" + type : ""}`;
      try{   
          const res = await axios.get(url,{
            headers: {
              token:
                "Bearers eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTMwMDkxMDU2ZGY1MTYxYzUwYWJhOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTA0NDAyNCwiZXhwIjoxNjU5NDc2MDI0fQ.PLhvdP9lZi6C9Lr5SXr1fZUX8dswDgsYbtCYLdofysQ",
            },
          });
          setLists(res.data); 
         }
      catch(error)
        {
          console.log(error);
        }
    };
    getRandomLists();
},[type,genre]);









  return (
    <div className="home">
       <Navbar/>
       <Featured type={type} />
       {lists.map((list ,index) =>(
         <List list={list} key={index} />
       ))
       }
    </div>
  )
}

export default Home



