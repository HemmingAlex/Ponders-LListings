import React from "react";
import { SocialList } from "../../components/SocialList";
import Layout from "../../components/Layout";

function Refister() {
    return (
        <Layout>
            <div className="m2">
                <h1 className="ml-9 text-3xl font-bold text-gold">
                    Register<span className=" text-black">. </span>
                </h1>
                <iframe
                    className="overflow-hidden"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfeqrmPt4ZRO-5YF8-Ca87Pvko8CbzEqDP4qWnbyegu86DXEQ/viewform?embedded=true"
                    width="640"
                    height="2357"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                >
                    Loading…
                </iframe>
            </div>
        </Layout>
    );
}

export default Refister;
