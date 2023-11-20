import logo from "../assets/logo.png"
import personalLogo from "../assets/personal-logo.png"
import { footerLinks } from "../constants"

const Footer = () => {
    return (
        <footer className=' flex flex-col mt-5 border-t border-gray-100'>
            <div className=' flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10 mb-6'>
                <div className="flex flex-col justify-start items-start gap-4">
                    <div className=" flex items-center gap-2">
                        <img src={logo} alt="logo" width={30} />
                        <h3 className=" font-bold text-lg">AutoSquad</h3>
                    </div>
                    <p className=" text-base text-gary-700">Unlock Adventure on Wheels.</p>
                </div>
                {
                    footerLinks.map((link, index) => (
                        <div key={index}>
                            <h3 className="font-bold text-md mb-4">{link.title}</h3>
                            <ul>
                                {
                                    link.links.map((ele, index) => (
                                        <li key={index} className=" mb-2">{ele.title}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
            <div className=" flex justify-center items-center gap-2 mb-4">
                <img src={personalLogo} alt="personal logo" />
                <p>Tanmay Vedpathak</p>
            </div>
        </footer>
    )
}

export default Footer