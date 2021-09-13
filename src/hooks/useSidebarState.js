import {useState} from 'react';

function useSidebarState(initialValue=false){
    const [sidebar, setSidebar] = useState(initialValue);

    const showSidebar = () => setSidebar(!sidebar);

    return [sidebar, showSidebar];
}
export default useSidebarState;