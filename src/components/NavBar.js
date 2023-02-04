import { BiUserCircle } from "react-icons/bi"
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext";

const NavBar = ({ showProfile, profileClickHandler, homeButtonClickHandler }) => {
    const {user, logOut} = UserAuth()
    const navigate = useNavigate()
    console.log(user)
    const handleLogout = async () => {
        try{
            await logOut()
            navigate('/')
        } catch(error){
            console.log(error)
        }
    }  

    return (
        <div className="fixed w-full font-bold bg-custom-dark-gray z-0 p-2">
            <div className="text-xl mx-auto flex flex-row justify-around"> 

                <Link to={user?.email ? '/Assignment' : '/'}>
                <button className="text-xl mx-auto flex flex-row justify-around transition-opacity ease-in duration-100 opacity-70 hover:opacity-100 flex-col" onClick={ homeButtonClickHandler }>Survery Serving Service</button>
                </Link>
        {user?.email ? (       
            <div>
                <Link to='/Assignment'>
                <button className="border rounded mr-2 p-2">Assignments</button>
                </Link>
                <button 
                onClick={handleLogout}
                className="border rounded mr-2 p-2">
                    Logout
                </button>
            </div>
            ) : (
            <div>
                <Link to='/Login'>
                    <button className="border rounded mr-2 p-2">Log In</button>
                </Link>
                <Link to='/Signup'>
                    <button className="border rounded mr-2 p-2">
                        Sign up
                    </button>
                </Link>
            </div>)
            }
            </div>
        </div>
      );
    };

export default NavBar