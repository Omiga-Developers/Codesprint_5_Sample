import React from 'react'
import "./NavBar.css"

function NavBar() {
    return (
        <div className="navBar">
            <div className="navBar__sectionOne">
                <img src="https://cdn.discordapp.com/attachments/787026782787207228/787386806110257152/Asset_1.png" alt=""/>
            </div>
            <div className="navBar__sectionTwo">
                <nav>
                    <button><a href="#">ABOUT</a></button>
                    <button><a href="#">ABOUT</a></button>
                    <button><a href="#">ABOUT</a></button>
                    <button><a href="#">ABOUT</a></button>
                    <button className="navBar__login">LOG IN</button>
                </nav>
            </div>
        </div>
    )
}

export default NavBar
