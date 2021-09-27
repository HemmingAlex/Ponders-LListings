import React from "react";
import { SocialList } from "../../components/SocialList";
import Layout from "../../components/Layout";

function Refister() {
    return (
        <Layout>
        <div className="">

<h1 className="text-xl text-gold flex ml-9 md:ml-24 font-bold"> Register</h1>

          <div className="relative flex justify-start rihgt-0 md:right-14"> 
                <iframe
                    className="w-screen flex justify-start mr-auto ml-0 h-screen"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfeqrmPt4ZRO-5YF8-Ca87Pvko8CbzEqDP4qWnbyegu86DXEQ/viewform?embedded=true"
                    >
                    Loading…
                </iframe>
            </div>

                    </div>
                    <SocialList />

        </Layout>
    );
}

export default Refister;
