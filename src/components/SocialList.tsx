import React from "react";
import Twitter from "../assets/twitter-alt.svg";
import GitHub from "../assets/github-alt.svg";
import Facebook from "../assets/facebook-alt.svg";
import LinkedIn from "../assets/linkedIn-alt.svg";
import config from "../lib/config";

export function SocialList({}) {
  return (
    <div className="w-full my-1">   
    <hr className="my-2"/>
      <footer className="mb-10"> 
      <div>

<div role="number"> Direct call: 077384 97337 </div>       

<div role="number">Landline: 020360 96772 </div>
  <div>Email :<a href="mailto:hege@example.com">james.ponderseast@outlook.com</a></div>
  </div>
</footer>

    <div className="flex justify-between w-full">
        <div>   

      <a
        title="Twitter"
        href={`https://twitter.com/${config.twitter_account}`}
        target="_blank"
        rel="noopener"
        >
        <Twitter width={28} height={28} fill={"#222"} />
      </a>
      <a
        title="LinkedIn"
        href={`https://www.linkedin.com/company/ponderseast`}
        target="_blank"
        rel="noopener"
        >
        <LinkedIn width={27} height={27}  />
      </a>
      <div className="-m-5 -ml-1 inline">

      <a
      title="Facebook"
      href={`https://Facebook.com/${config.facebook_account}`}
      target="_blank"
      rel="noopener"
      style={{margin:"0", padding:"0", position:"relative", top:"2.5spx", left:"2px"}}
      >
        <Facebook width={31} height={31}
         style={{margin:0, padding:0}} fill={"#222"} />

      </a>
         </div>
         </div>
      © 2021 PondersEast 
         </div>
      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
      `}</style>
    </div>
  );
}
