import { BackgroundBeams } from "./background-beams.tsx";
import { Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-[#1785D6] to-[#00BCF8]  text-center font-sans font-bold">
                    Manten el control de tus calorias
                </h1>
                <p></p>
                <p className="text-[#FFF2FE] max-w-lg mx-auto my-2 text-lg text-center relative z-10">
                    Bienvenido a <span className="font-bold italic">DCApp</span>, la aplicación que te permite llevar el control de tus calorias diarias.
                </p>
            </div>
            <BackgroundBeams />
            <Outlet />
        </div>
    )
}