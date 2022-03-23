import React from 'react'
import {NavLink} from 'react-router-dom'

const style = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    fontweight: "bold",
    color: "green"

}

 function Navbar() {
    return (
        <div>
            <NavLink
            activeStyle={{
                color: "red",
                fontweight: "bolder"
            }}
            exact
            style={style}
            to="/"

            >Home</NavLink>

<NavLink
            activeStyle={{
                color: "red",
                fontweight: "bolder"
            }}
            exact
            style={style}
            to="/home"

            >List Of Movies</NavLink>

<NavLink
            activeStyle={{
                color: "red",
                fontweight: "bolder"
            }}
            exact
            style={style}
            to="/about"

            >About</NavLink>

        </div>
    )
}
export default Navbar;