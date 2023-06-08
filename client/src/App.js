import { createContext, useState } from "react";
import { Main } from "./main/content";
import { LoginUI } from "./main/loginUI";
import './App.css'

export const UserContext = createContext(null)

function App() {
  const [user, setUser] = useState(null)

  console.log(user)

  return (
    <div>
      <UserContext.Provider value={{user: user, setUser: setUser}} >
        {user && <Main /> }
        {!user && <LoginUI /> }
      </UserContext.Provider>
    </div>
  );
}

export default App;
