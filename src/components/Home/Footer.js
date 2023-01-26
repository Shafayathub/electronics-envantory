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
              src="https://farm66.staticflickr.com/65535/52647338087_7178752269_m.jpg"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://www.facebook.com/MSI.NAHIN"
            target="_blank"
            rel="noreferrer">
            <img
              className="w-6"
              src="https://farm66.staticflickr.com/65535/52647338077_1251b1af0f_m.jpg"
              alt="Facebook_Id"
            />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
