import React, { useState, useEffect, useRef } from "react";
import Layout from "../../components/Layout";
// import Image from "next/image";
import { SocialList } from "../../components/SocialList";
import Collapisble from "../../components/collapsible";
import Modal from "../../components/modal";
import Button from "../../components/Button";

function About() {
    const [modalOpen, setModalOpen] = useState(false);

    const [clicked, setClicked] = useState(false);
    const picRef = useRef(null);

    const flip = () => {
        setModalOpen(!modalOpen);
    };

    useEffect(() => {
        if (clicked === false) {
        } else {
            window.scrollTo(0, 0);
        }
    }, [clicked]);

    return (
        <Layout>
            <div className="mx-9 ">
                <div className="m-8 flex flex-wrap">
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
                        <Modal
                        handleClose={() => setClicked(!clicked)}
                        full={true}
                 >
                            <img
                                className="rounded-xl"
                                src="/images/James.JPG"
                                height={500}
                                width={500}
                                alt="Portrait"
                            />
                        </Modal>
                    )}{" "}
                    <div className="mx-5 my-2 text-2xl w-1/2 font-bold">
                        <h1 className="font-bold text-gold text-4xl mb-4">
                            About
                        </h1>
                        <Button onClick={flip}>Open modal </Button>
                        {modalOpen &&
                                                <Modal handleClose={flip}>info or picture</Modal>
                        }

                        I am an Independent Property Advisor
                        <br />
                        and some more info about this stuff here
                    </div>
                </div>
                <div className="mr-20">
                    <Collapisble
                        label="Director - Ponders East"
                        body="I work on behalf of Private Landlords. I negotiate using my
                    knowledge and experience to find the right deals for
                    everyone registered with me. I treat customer service with
                    care. From starting your search to finding your next home I
                    will only be one phone call away to help throughout your
                    journey."
                    />
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
