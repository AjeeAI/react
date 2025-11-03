import Counter from "./components/Counter.jsx"
import Todo_list from "./components/Todo_list.jsx";
import UserProfile from "./components/UserProfile.jsx";
import { NameInput } from "./components/Form.jsx";
import {Form}  from "./components/Form.jsx";
import { Parent } from "./components/Lifting.jsx";
// import {Parent} from "./components/CitySelector.jsx"
// import { Parent } from "./components/Child_to_parent.jsx";
function App(){
  return (
    <div>

      <Parent/>
      
      {/* <Counter/>
    <Counter/> */}
    {/* <UserProfile/> */}
    {/* <Todo_list/> */}

    {/* <NameInput/>

    <Form/> */}
    </div>
  );
}

export default App;