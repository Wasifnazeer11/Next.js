import Link from "next/link"
import Image from 'next/image';
import Head from 'next/head'
import Layout from '';
import Script from 'next/script'
export default function first(){
    return(
        <main>
            <Head>
            <title>First-post</title>
            </Head>
            <Script
            src="https://connect.facebook.net/en_US/sdk.js"
             strategy="lazyOnload"
             onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
                                
        }
      />
            <div>
                <h1>Welcome to this page</h1>
            
            </div>

            <div>
                
                <h2> <Link href="/"> back to Home </Link> </h2>
            </div>
                    <div>
                    <YourComponent/>

                    </div>

                <div className="flex">
                <div>Ansar</div>
                <div>Wasif</div>
                <div>Shayan</div>
                <div>Irtaza</div>
                <div>Amjad</div>
                </div>

        </main>
     );
    

} 
const YourComponent = () => (
    <Image
      src="/images/logo.png" // Route of the image file
      height={144} // Desired size with correct aspect ratio
      width={144} // Desired size with correct aspect ratio
      alt="Your Name"
    />
  );