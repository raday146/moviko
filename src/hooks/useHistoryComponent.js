
import { useHistory } from "react-router-dom";

export default function useHistoryComponent(dest) {
  
  const history = useHistory();
  
  const navigateToDest = () => history.push(dest);  
  
  return navigateToDest;

}