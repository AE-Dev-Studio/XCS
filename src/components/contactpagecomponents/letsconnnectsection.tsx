import LetsConnectForm from './letsconnnectform'

const LetsConnectSection = () => {
    return (
        <div className="w-full h-full py-20 grid grid-rows-1  sm:grid-cols-2 max-w-[80vw] mx-auto">
            <div className="flex flex-col bg-gray-100 p-7 gap-5">
                <h1 className="font-extrabold text-center text-3xl tracking-wide">
                    Let’s Connect with You
                </h1>
                <p className="mx-auto text-center">
                    Provide the following information, and we will get back to you in a short time.
                </p>
                <div>
                    <LetsConnectForm />
                </div>
            </div>

            <div className="w-full h-[70vh] relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2380.6497644867727!2d-2.2653287000000004!3d53.3674227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bbb1da48d75bf%3A0xfd95bb9ab412730d!2sXclusive%20Chauffeur%20Services!5e0!3m2!1sen!2s!4v1761408920564!5m2!1sen!2s"
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
}

export default LetsConnectSection
