import Head from "next/head";
import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="root">
      <Head>
        <title>Ponders East</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
        <meta name="author" content="Alex Hemming"/>
        <meta name="description" content="Ponders East estate agents, a customer first experience"/>

      </Head>
      <nav>
        <Navigation />
      </nav><div>
      <main>{children}</main>
</div>

      <style jsx>
        {`
          .root {
            display: block;
            padding: 4rem 0;
            box-sizing: border-box;
            height: 100%;
            margin:0 auto;
          }
          main {
            display: flex;
            justify-content:center;
            min-height: 100%;
          }
          footer {
            display: flex;
            justify-content:center;
          }
          @media (min-width: 769px) {
            .root {
              display: flex;
              flex: 1 0 auto;
            }
            main {
              flex: 1 0 auto;
            }
          }
        `}
      </style>

    </div>
  );
}
