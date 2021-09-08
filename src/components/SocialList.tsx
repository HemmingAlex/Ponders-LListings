import React from "react";
import Twitter from "../assets/twitter-alt.svg";
import GitHub from "../assets/github-alt.svg";
import Facebook from "../assets/facebook-alt.svg";
import config from "../lib/config";

export function SocialList({}) {
  return (
    <div>
      <a
        title="Twitter"
        href={`https://twitter.com/${config.twitter_account}`}
        target="_blank"
        rel="noopener"
      >
        <Twitter width={24} height={24} fill={"#222"} />
      </a>
      <a
        title="GitHub"
        href={`https://github.com/${config.github_account}`}
        target="_blank"
        rel="noopener"
      >
        <GitHub width={24} height={24} fill={"#222"} />
      </a>
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
      <footer>
      <div>

<div role="number"> Direct call: 077384 97337 </div>
<div role="number">Landline: 020360 96772 </div>
  <div>Email :<a href="mailto:hege@example.com">james.ponderseast@outlook.com</a></div>
  </div>
</footer>
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
