import { NavLink } from "react-router-dom";

export const AppHeader = () => {
  return (
    <div className="app-header">
     <NavLink activeClassName="active-nav" exact to="/" > <h1>LoopMachine</h1></NavLink>
    </div>
  )
}


