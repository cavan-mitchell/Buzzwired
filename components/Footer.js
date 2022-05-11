import React from "react";
import Link from "next/link";

function Footer() {
  return (
    //  footer-container
    <div className="">
      <div className="flex flex-col p-4 items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-500">
        <p className="text-2xl font-bold">
          The First Decentralized Charity Platform
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            {/* <Button buttonStyle="btn--outline">Subscribe</Button> */}
          </form>
        </div>
      </div>

      <div className="grid grid-cols-2 bg-black text-white pl-10 py-4 gap-4 sm:grid sm:grid-cols-4 sm:pt-4 sm:bg-black sm:text-white sm:justify-items-center">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">About Us</h1>
          <Link href="/">
            <a>Charity Store</a>
          </Link>
          <Link href="/news">
            <a>News</a>
          </Link>

          <Link href="/litepaper">
            <a>LitePaper</a>
          </Link>
          <Link href="/donate">
            <a>Donate</a>
          </Link>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-bold">Contact Us</h2>
          <Link href="/">
            <a>Contact</a>
          </Link>
          <Link href="/">
            <a>Support</a>
          </Link>
          <Link href="/">
            <a>Terms of Service</a>
          </Link>
        </div>

        <div className="flex flex-col">
          <h2 className="text-lg font-bold">Resources</h2>
          <Link href="/">
            <a>Submit Scam Case </a>
          </Link>
          <Link href="/">
            <a>Get Help </a>
          </Link>
          <Link href="/">
            <a>Community Board</a>
          </Link>
        </div>

        <div className="flex flex-col">
          <h2 className="text-lg font-bold">Social Media</h2>
          <Link href="/">
            <a>Instagram</a>
          </Link>
          <Link href="/">
            <a>Facebook</a>
          </Link>
          <Link href="/">
            <a>Youtube</a>
          </Link>
          <Link href="/">
            <a>Twitter</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
