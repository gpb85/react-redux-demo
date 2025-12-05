import "./App.css";
import { CakeView } from "./app/features/cake/CakeView";
import { IcecreamView } from "./app/features/icecream/IcecreamView";
import { UsersView } from "./app/features/user/UserView";

function App() {
  return (
    <div>
      <CakeView />
      <IcecreamView />
      <UsersView />
    </div>
  );
}

export default App;
