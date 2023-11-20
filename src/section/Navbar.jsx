import logo from "../assets/logo.png"
import Button from "../components/Button"

const Navbar = () => {
    return (
        <div className=" py-2 md:px-16 px-6 flex justify-between items-center">
            <img className=" " src={logo} alt="logo" width={50} />
            <Button content="Sign Up" />
        </div>
    )
}

export default Navbar