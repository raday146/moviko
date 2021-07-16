
const styles ={
    root:{
    backgroundColor:"#002e4b",
    borderRadius: "8px",
    boxShadow: "0 4px 5px rgba(0,0,0,0.2)",
    width: "200px",
    margin: "10px",
    height: "fit-content",
    overflow: "hidden",    
    position:"relative"
 },
 info:{
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: ".25rem .5rem .25rem",
    /*padding: .5rem 1rem .5rem;*/
    letterSpacing: ".25px"
 },
 title:{
    fontSize: "small",
    margin: "0",
    fontweight: "600"
 },
 infoSpan:{
    backgroundColor: "#00385a",
    margin: ".5rem",
    borderRadius: "4px",
    fontSize: "small",
    padding: ".25rem .25rem"
 },
 overView:{ 
     backgroundColor: "rgba(255, 255, 255, 0.863)",
     fontSize: "small",
     fontWeight: "600",
     position: "absolute",
     padding: ".25rem .5rem .25rem",
     left: "0",
     bottom: "0",
     right: "0",
     height: "100%",
     overflow: "auto",
     transform: "translateY(100%)",
     transition: "transform 0.3s ease-in",
     
     /*"&:hover":{
              transform: "translateY(0)",
     }*/
 },
 showView:{
     backgroundColor: "rgba(255, 255, 255, 0.863)",
     fontSize: "small",
     fontWeight: "600",
     position: "absolute",
     padding: ".25rem .5rem .25rem",
     left: "0",
     bottom: "0",
     right: "0",
     height: "100%",
     overflow: "auto",
     transform: "translateY(0)",
     transition: "transform 0.3s ease-in",
},
 colorRate:{
   color:"red",
   fontWeight: "600"
},
 image:{
    objectFit: "cover",
    borderRadius: "8px 8px 0 0",
    width: "100%",
    height: "350px",
 }
}

export default styles;