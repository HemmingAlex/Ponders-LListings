import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
// import Image from "next/image";

export default function Index() {
    return (
        <Layout>
            <BasicMeta url={"/"} />
            <OpenGraphMeta url={"/"} />
            <TwitterCardMeta url={"/"} />

            <div className="container">
                <div>
                    <h1 className="text-gold flex justify-content pl-8">
                        Ponders East Listings<span className="text-black">.</span>
                    </h1>
                    <br />
                    <div className="pl-9">
                    <img
                    className="rounded-xl"
                        src="/images/James.JPG"
                        height={300}
                        width={300}
                        alt="Portrait"
                    />
                    </div>
                    <div
                     className="font-bold mt-4">
                        James Gibson Property Advisor
                    </div>

                    <div className="text-gold font-bold mb-3">
                    Director - Ponders East
                      </div>
                    <br />
                    I work on behalf of Private Landlords. I negotiate using my
                    knowledge and experience to find the right deals for
                    everyone registered with me.
                    <br />
                    I treat customer service with care. From starting your
                    search to finding your next home I will only be one phone
                    call away to help throughout your journey.
                    <br />
                    <br />
                    <div className="text-gold font-bold mb-4">
                        I encourage feedback and reviews.
                    </div>
     
                    {/* Trust Pilot */}
         I promise your points and opinions will not get lost
                    in administration. All your insight will be useful to help
                    improve our services.
                    <span className="handle mb-4 text-gold">Gibson and Co</span>
                    <h2 className="text-gold ">Bringing People and Properties Together</h2>

                    <SocialList />
                </div>
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex: 1 1 auto;
                    padding: 0 1.5rem;
                }
                h1 {
                    font-size: 2.5rem;
                    margin: 0;
                    font-weight: 500;
                }
                h2 {
                    font-size: 1.75rem;
                    font-weight: 400;
                    line-height: 1.25;
                }
                .fancy {
                    color: #15847d;
                }
                .handle {
                    display: inline-block;
                    margin-top: 0.275em;
                    color: #9b9b9b;
                    letter-spacing: 0.05em;
                }

                @media (min-width: 769px) {
                    h1 {
                        font-size: 3rem;
                    }
                    h2 {
                        font-size: 2.25rem;
                    }
                }
            `}</style>
        </Layout>
    );
}
