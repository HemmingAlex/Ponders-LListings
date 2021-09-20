import React, { useState, useEffect, useRef } from "react";
import Layout from "../../components/Layout";
// import Image from "next/image";
import { SocialList } from "../../components/SocialList";

function About() {
    const [clicked, setClicked] = useState(false);
    const picRef = useRef(null);

    useEffect(() => {
        if (clicked === false) {

        } else {
            window.scrollTo(0, 0)
        }
    }, [clicked]);

    return (
        <Layout>
            <div className="mx-9 ">
                <h1 className=" font-bold text-gold text-4xl mb-4">About </h1>
                <div className="text-3xl font-bold">
                    I am an Independent Property Advisor
                </div>
                <div  className="m-8">
                    {!clicked && (
                        <img
                            className="rounded-xl"
                            src="/images/James.JPG"
                            height={300}
                            width={300}
                            onClick={() => setClicked(!clicked)}
                        />
                    )}
                    {clicked && (
                        <div ref={picRef} className="w-screen h-screen">

                        <img 
                        
                        className="rounded-xl"
                        src="/images/James.JPG"
                        height={500}
                        width={500}
                        // layout="fill"
                        // objectFit="contain"
                        alt="Portrait"
                        onClick={() => setClicked(!clicked)}
                        />
                        </div>
                    )}
                </div>
                <div className="mr-20">
                    <h1 className="font-bold text-gold mb-4">
                        {" "}
                        Director - Ponders East
                    </h1>
                    I work on behalf of Private Landlords. I negotiate using my
                    knowledge and experience to find the right deals for
                    everyone registered with me. I treat customer service with
                    care. From starting your search to finding your next home I
                    will only be one phone call away to help throughout your
                    journey.
                </div>{" "}
                <div className="opacity-80 mt-8 mb-4">
                    I encourage feedback and reviews.{" "}
                </div>
                {/* Trust Pilot   */}
                <div className="mr-20 mb-8">
                    I promise your points and opinions will not get lost in
                    administration. All your insight will be useful to help
                    improve our services.
                </div>
                {/* Properties 
(Rent and Buy same layout)

MAP */}
                <div className="flex justify-center">
                    <SocialList />
                </div>
            </div>
        </Layout>
    );
}

export default About;
