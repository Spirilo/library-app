import { createContext, useState } from "react";
import { Main } from "./main/content";
import { Login } from "./components/Login";

export const UserContext = createContext(null)

function App() {
  const [user, setUser] = useState({})

  return (
    <div>
      <UserContext.Provider value={{user: user, setUser: setUser}} >
        <Main />
        <Login />
      </UserContext.Provider>
    </div>
  );
}

export default App;
