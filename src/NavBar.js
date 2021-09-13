import React,{useContext} from 'react';
import {Link, withRouter} from 'react-router-dom';
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
    const {data, dis} = useContext(searchReasultContext);

    const handleLink = (item)=>{
        console.log(item,'s');
        dispatch({type:`${item.title}`, id:`${item.id}`})
        dis({items:""});
        
    }
    return(
     <>    
      <IconContext.Provider value={{color:"white"}}> 
        <div className={classes.root}>
            <Link tg='#' className={classes.menubar}>
             { !sidebar? <FaIcons.FaBars onClick={showSidebar}/> :""}
            </Link>
        </div>
        <div style={{position:"relative"}} >
         <nav className={sidebar ? classes.navActive: classes.nevMenu}>
             <div className={classes.navItems} onClick={showSidebar}>
                <li className={classes.navbarToggle} >
                   <Link to="#" className={classes.menubar}>
                     <AiIcons.AiOutlineClose onClick={showSidebar}/>
                   </Link>
                   {SidebarContent.map((item, index) =>{
                     return(
                         <li key={index} className={classes.navText} >
                            <Link exact  to={item.title !== "Home"? `${item.path}` : "/Home"} onClick={()=>{handleLink(item)} } >
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
     </>
    );
}
export default withStyles(styles)(withRouter(NavBar));