 
const styles ={
    mainForum:{
     display: "flex",
     flexWrap: "wrap",
     justifyContent:"center",
     alignItems:"center",
    },noResult:{
      position: "fixed",
       /* or absolute */
      top: "40%",
      left: "45%"
    },
    linkBtn:{ 
     display:"flex",
     left: "20%",
     top: "10%",
     padding:"8px 0px 8px 16px",
     listStyle:"none",
     color:"black",
     height:"60px",
     "& a":{
         textDecoration:"none",
         backgroundColor:"#060b26",
         color:"black",
         fontSize:"18px",
         width:"68%",
         height:"100%",
         display:"flex",
         justifyContent:"center",
         alignItems:"center",
         padding:"0 16px 0 5px",
         borderRadius:"4px",
     },"& a:hover":{
        backgroundColor:"#1a83ff"         
     }
    },
    span :{
      color:"white",
    }
}
export default styles;