import React from "react";
import { SocialList } from "../../components/SocialList";
import Layout from "../../components/Layout";

function Refister() {
    return (
        <Layout>
        <div > 
        <div className="relative left-7 md:-left-14">

<h1 className="text-xl text-gold flex font-bold justify-center"> Register</h1>

          <div > 
                <iframe
                    className="w-screen flex justify-start mr-auto ml-0 h-screen"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfeqrmPt4ZRO-5YF8-Ca87Pvko8CbzEqDP4qWnbyegu86DXEQ/viewform?embedded=true"
                    >
                    Loading…
                </iframe>
            </div>
            </div>
        <div className="ml-7"> 

                    <SocialList />

                    </div>
                    </div>

        </Layout>
    );
}

export default Refister;
