import {  ArrowRight } from "lucide-react"

const Aboutsectionhero = () => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden pt-20 lg:pt-10">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url(/assets/aboutimage.jpg)",
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 flex flex-col justify-center min-h-screen items-center gap-5">
                    <h1 className="text-white font-extrabold text-center uppercase text-4xl  tracking-wide">About Us</h1>
            
                    <p className="text-white flex gap-3 items-center font-extrabold text-center text-sm tracking-wide">Home <ArrowRight size={10} color="#a89447" /> About us</p>
           
                </div>
            </div>
        </div>
    )
}

export default Aboutsectionhero
