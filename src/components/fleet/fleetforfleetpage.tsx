"use client"

import { CarCard, FLEET } from "./ourfleet";

const FleetforFleetPage = () => {
    console.log("FLEET:", FLEET);
    console.log("Type of FLEET:", typeof FLEET);

    return (
        <section className="w-full bg-white py-20 sm:py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-black">
                        <span className="text-[#a89447]">Our</span> Fleet
                    </h2>
                    <p className="text-neutral-600 text-sm sm:text-base max-w-2xl mx-auto">
                        Discover our collection of luxurious vehicles, each meticulously maintained
                        and designed to provide comfort, style, and safety for every journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 justify-items-center">
                    {FLEET.map((car) => (
                        <CarCard key={car.id} car={car} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FleetforFleetPage;
