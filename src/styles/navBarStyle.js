import { sizes } from "../constants/constant";
const styles ={
    
    root:{
     backgroundColor:"#060b26",
     height:"80px",
     display:"flex",
     justifyContent:"start",
     alignItems:"center",
 },
 menubar:{
     marginLeft:"2rem",
     fontSize:"2rem",
     background:"none"
     
 },
 nevMenu:{
     width:"250px",
     height:"0%",
     position:"fixed",
     transition:"150ms", 
     left:"-200%",
     top:"0"
 },
 navActive:{
    backgroundColor:"rgba(6, 11, 38, 0.92)",
     width:"250px",
     height:"0%",
     position:"fixed",
     left:"0",
     top:"0",
     transition:"350ms",
 },
 
 navText:{
     display:"fiex",
     justifyContent:"start",
     alignItems:"center",
     padding:"8px 0px 8px 16px",
     listStyle:"none",
     marginLeft:"100px",
     height:"60px",
     "& a":{
         textDecoration:"none",
         color:"white",
         fontSize:"18px",
         width:"68%",
         height:"100%",
         display:"flex",
         alignItems:"center",
         padding:"0 16px 0 5px",
         borderRadius:"4px",
     },"& a:hover":{
        backgroundColor:"#1a83ff"         
     },"& svg":{
         width:"70px"
     },[sizes.down('xl')]:{
         marginLeft:"5.8rem",
         width:"100%",
         height:"60%",
         
         padding:"0 1px 0 1px","& a:hover":{
               padding:"0 25px 0 2px"   
         },
         "& svg":{
            width:"80px",  
         }

     }, 
     [sizes.down('lg')]:{
         marginLeft:"5rem",
         width:"68%",
         height:"60%",
         padding:"0 1px 0 1px","& a:hover":{
               padding:"0 25px 0 2px"   
         },
         "& svg":{
            width:"0px",  
         }

     }, 
     [sizes.down('sm')]:{
         marginLeft:".2rem",
         width:"68%",
         height:"60%",
         display:"block",
         fontSize:"2px",
         padding:"0 1px 0 1px","& a:hover":{
               padding:"0 25px 0 2px"   
         },
         "& svg":{
            width:"0",  
         }

     }, [sizes.down('xs')]:{
         marginLeft:".2rem",
         width:"68%",
         height:"60%",
         padding:"0 1px 0 1px","& a:hover":{
               padding:"0 28px 0 2px",
         },
         "& svg":{
            width:"0",  
         },"& span":{
             fontSize:"small",
             marginLeft:".8rem",
             width:"50px",
             justifyContent:"center",
             alignItems:"center"   
         }

     }
 },
 navItems:{
     width:"100%",
 },
 navbarToggle:{
     width:"100%",
     height:"80px",
     display:"flex",
     justifyContent:"start",
     alignItems:"center"
 },
 itemTitle:{
     marginLeft:"16px"
 }
}

export default styles;