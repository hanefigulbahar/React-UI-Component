import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom"
import { register } from "../firebase";
import { Toaster } from "react-hot-toast"; 

const SignUp = () => {
    const [firtName, setFirtName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isShown, setIsSHown] = useState(false);
    const [type, setType] = useState("password")

    useEffect(() => {
        if (isShown) {
            setType("text")
        } else {
            setType("password")
        }

    }, [isShown])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = await register(email, password)
        console.log(user)
        }

    return (
        <div className="mx-auto w-screen h-screen py-10 px-20 grid grid-cols-2" >
            <Toaster position="top-left "/>
            <div className="flex flex-col justify-evenly">
                <h1 className="text-2xl text-center ">Lorem Ipsum</h1>
                <h4 className="text-center ">Welcome to Lorem Ipsum</h4>
                <div className="flex justify-center items-center">
                    <form onSubmit={handleSubmit} className="my-2 px-20 flex-col col-span-6 grid gap-1 text-m" action="URL">
                        <label className="block my-1 opacity-60 text-xs" htmlFor="userName">First Name</label>
                        <span className="flex w-96 border-b-[3px]">
                            <input className="outline-none w-96" type="text" value={firtName} onChange={(e) => setFirtName(e.target.value)} />
                        </span>
                        <label className="block my-1 mt-4 opacity-60 text-xs" htmlFor="userName">Last Name</label>
                        <span className="flex w-96 border-b-[3px]">
                            <input className="outline-none w-96" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </span>
                        <label className="block my-1 mt-4 opacity-60 text-xs" htmlFor="userName">Email</label>
                        <span className="flex w-96 border-b-[3px]">
                            <input className="outline-none w-96" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </span>
                        <label className="block my-1 mt-4 opacity-60 text-xs">Password</label>
                        <span className="flex w-96 border-b-[3px]">
                            <input className="outline-none w-96" autoComplete="on" value={password} type={type} onChange={(e) => setPassword(e.target.value)} />
                            <button type="button" onClick={() => setIsSHown(show => !show)} >{isShown ? <FaEyeSlash /> : <FaEye />}</button>
                        </span>
                        <div className="flex justify-center">
                            <button className="my-8 px-6 text-white bg-blue-500 rounded-full shadow-md w-2/4 h-8 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" type="submit">Create Account</button>
                        </div>
                        <div className="flex items-center">
                            <div className="h-px bg-gray-300 flex-1" />
                            <span className="px-4 text-sm text-gray-500 font-semibold">or</span>
                            <div className="h-px bg-gray-300 flex-1" />
                        </div>
                        <div className="flex items-center justify-center mt-4 text-center opacity-70" id="alternative">
                            <Link to="#" className="flex items-center hover:bg-gray-100 rounded"><FcGoogle className="text-2xl mr-1" />Sign up with Google</Link>
                        </div>
                        <div className="mt-4 text-center opacity-70">
                            <p>Have Account? <Link to="/" className="text-sm border-b-2 border-gray-300">Sign In</Link></p>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex justify-end">
                <img className=" rounded-xl" src="https://picsum.photos/400/300.jpg" alt="yazı" />
            </div>
        </div>
    )
}

export default SignUp