import { BiUserCircle } from "react-icons/bi"

const NavBar = ({ showProfile, profileClickHandler, homeButtonClickHandler }) => {
    return(
        <div>
            <header className="fixed w-full font-bold bg-custom-dark-gray z-0 p-2">
                <div className="text-xl mx-auto flex flex-row justify-around"> 
                    <button className="transition-opacity ease-in duration-100 opacity-70 hover:opacity-100 flex-col" onClick={ homeButtonClickHandler }>Survery Serving Service</button>
                    <button className="transition-opacity ease-in duration-100 opacity-70 hover:opacity-100 flex-col" onClick={ profileClickHandler }><BiUserCircle/></button>
                </div>
            </header>
        </div>
    )
}

export default NavBar