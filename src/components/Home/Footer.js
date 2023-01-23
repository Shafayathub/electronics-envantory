import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content max-w-screen-xl mx-auto">
        <div className="items-center grid-flow-col">
          <img
            className="w-16"
            src="https://i.ibb.co/ZMtMX5Q/pexels-pixabay-159220.jpg"
            alt="Electronics"
          />
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            href="https://www.linkedin.com/in/md-shafayat-islam-97000110b/"
            target="_blank"
            rel="noreferrer">
            <img
              className="w-6"
              src="https://i.ibb.co/q7NCpfj/174857.png"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://www.facebook.com/MSI.NAHIN"
            target="_blank"
            rel="noreferrer">
            <img
              className="w-6"
              src="https://i.ibb.co/vmQmBfn/fb-icon-325x325.png"
              alt="Facebook_Id"
            />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
