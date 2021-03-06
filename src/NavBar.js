import React,{useContext} from 'react';
import {Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import *  as AiIcons from 'react-icons/ai';
import {SidebarContent} from './SidebarContent';
import {withStyles} from '@material-ui/styles';
import useSidebarState from './hooks/useSidebarState';
import { IconContext } from 'react-icons/lib';
import { DispatchContext, searchReasultContext } from './contexts/moviko.context';
import SearchForm from './NavForm';
import styles from './styles/navBarStyle';

function NavBar(props){
    
    const {classes} = props;
    const [sidebar, showSidebar] = useSidebarState(false);
    const dispatch = useContext(DispatchContext);
    const {dis} = useContext(searchReasultContext);
  
    const handleLink = (item)=>{
        dispatch({type:`${item.title}`, id:`${item.id}`})
        dis({items:""});
    }
    return(
     <div>    
      <IconContext.Provider value={{color:"white"}}> 
        <div className={classes.root}>
            <ul className={classes.menubar}>
             { !sidebar? <FaIcons.FaBars onClick={showSidebar}/> :""}
            </ul>
        </div>
        <div style={{position:"relative"}} >
         <nav className={sidebar ? classes.navActive: classes.nevMenu}>
             <div className={classes.navItems} onClick={showSidebar}>
                <li className={classes.navbarToggle} >
                   <ul className={classes.menubar}>
                     <AiIcons.AiOutlineClose onClick={showSidebar}/>
                   </ul>
                   {SidebarContent.map((item, index) =>{
                     return(
                         <li key={index} className={classes.navText} >

                            <Link exact  to={`/moviko${item.path}`} onClick={()=>{handleLink(item)} } >
                                  {item.icon}
                                  <span className={classes.itemTitle}>{item.title}</span>
                            </Link>
                        </li>
                        
                     );
                   })}   
                </li>
                
             </div>
          </nav>
             <SearchForm/>
         </div>
      </IconContext.Provider> 
     </div>
     
    );
}
export default withStyles(styles)(NavBar);