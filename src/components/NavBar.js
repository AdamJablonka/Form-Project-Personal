import { BiUserCircle } from "react-icons/bi"
import { Link } from "react-router-dom"

const NavBar = ({ showProfile, profileClickHandler, homeButtonClickHandler }) => {
    return(
        <div>
            <header className="fixed w-full font-bold bg-custom-dark-gray z-0 p-2">
                <div className="text-xl mx-auto flex flex-row justify-around"> 
                    <Link to='/'>
                    <button className="transition-opacity ease-in duration-100 opacity-70 hover:opacity-100 flex-col" onClick={ homeButtonClickHandler }>Survery Serving Service</button>
                    </Link>
                <div>
                    <Link to='/Login'>
                        <button className="border rounded mr-2 p-2">Log In</button>
                    </Link>
                    <Link to='/Signup'>
                        <button className="border rounded p-2">Sign Up</button>
                    </Link>
                </div>
                    {/* <button className="transition-opacity ease-in duration-100 opacity-70 hover:opacity-100 flex-col" onClick={ profileClickHandler }><BiUserCircle/></button> */}
                </div>
            </header>
        </div>
    )
}

export default NavBar