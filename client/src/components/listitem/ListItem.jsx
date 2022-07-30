import {useState,useEffect} from 'react'
import "./listitem.scss";
import { PlayArrow, Add , ThumbUpAltOutlined ,ThumbDownOutlined } from '@material-ui/icons';
import axios from 'axios';

const ListItem = ({index,item}) => {

  const [isHovered , isSetHovered] = useState(false);

  // useEffect(() =>{
    
  //   const getMovie=  (() =>{
  //     const url = "http://localhost:8800/api//movies/random";
  //     try{
  //       const res =  axios.get(url,{
  //         headers: {
  //           token:
  //             "Bearers eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTMwMDkxMDU2ZGY1MTYxYzUwYWJhOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTA0NDAyNCwiZXhwIjoxNjU5NDc2MDI0fQ.PLhvdP9lZi6C9Lr5SXr1fZUX8dswDgsYbtCYLdofysQ",
  //         },
  //       });
  //       console.log(res.data)
  //     }
  //     catch(error){
  //       console.log(error);
  //     }
  //   })
  //   getMovie();
  // },[])

   

  return (
    <div className="listitem" onMouseEnter={()=> isSetHovered(true)} 
      onMouseLeave={()=> isSetHovered(false)} style={{left: isHovered && index * 225 - 50 + index * 2.5}} >
      <img
        src={item.img}
        alt=""
      />
      {isHovered && (
        <>
        <video src={item.trailer} autoPlay={true} loop />
        <div className="itemInfo">
              <div className="icons">
                  <PlayArrow className="icon" />
                  <Add className="icon" />
                  <ThumbUpAltOutlined className="icon"/>
                  <ThumbDownOutlined className="icon"/>
              </div>
              <div className="itemInfoTop">
                  <span>{item.duration}</span>
                  <span className="limit">+{item.limit}</span>
                  <span>{item.year}</span>
              </div>
              <div className="desc">
                {item.desc}
              </div>
              <div className="genre">
                  {item.genre}
              </div>
         </div>
        
        </>
      )}
      
    </div>
  )
}

export default ListItem