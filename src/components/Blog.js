import React from 'react';

const Blog = () => {
  return (
    <>
      <main className="min-h-screen max-w-screen-lg mx-auto">
        <h1 className="text-accent-content text-center text-2xl font-semibold">
          Blogs
        </h1>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
                <img
                  className="w-16 md:w-24 h-16 md:h-24 rounded-full"
                  src="https://i.ibb.co/Kr772TZ/pexels-luis-gomes-546819.jpg"
                  alt="blog"
                />
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-secondary-content text-lg title-font font-medium mb-2">
                  Difference between JavaScript and Node.js
                </h2>
                <p className="leading-relaxed text-base">
                  JavaScript is a proper high-level programming language used to
                  create web scripts whereas Node.js is a run time environment
                  built on googles v8 engine. JavaScript is executed in the
                  browser whereas using Node.js gives us the ability to execute
                  JavaScript outside the browser. JavaScript can manipulate DOM
                  or add HTML within whereas Node.js doesnot have the capability
                  to add HTML. JavaScript is mainly used to create front end web
                  applications or develop client-side whereas Node.js is used on
                  the back end development that is server-side development
                  JavaScript follows the standard of JavaScript when writing
                  programs whereas Node.js is written in C++ while using the v8
                  engine, it runs JavaScript outside the browser. JavaScript
                  requires any running environment as it can execute on any
                  engine such as Firefoxs spider monkey, v8 engine of google
                  chrome, JavaScript core of Safari whereas Node.js runs only on
                  the v8 engine of google chrome.
                </p>
              </div>
            </div>
            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-secondary-content text-lg title-font font-medium mb-2">
                  Differences between SQL and NoSQL Database.
                </h2>
                <p className="leading-relaxed text-base">
                  SQL or relational models work better with structured data.
                  This is because structured data is easy to search and analyze,
                  much like data that is laid out in a table with columns and
                  rows. NoSQL models make sense for less structured data sets
                  because it doesnot rely on a predefined model to analyze the
                  data.
                </p>
              </div>
              <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
                <img
                  className="w-16 md:w-24 h-16 md:h-24 rounded-full"
                  src="https://i.ibb.co/Kr772TZ/pexels-luis-gomes-546819.jpg"
                  alt="blog"
                />
              </div>
            </div>
            <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
                <img
                  className="w-16 md:w-24 h-16 md:h-24 rounded-full"
                  src="https://i.ibb.co/Kr772TZ/pexels-luis-gomes-546819.jpg"
                  alt="blog"
                />
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-secondary-content text-lg title-font font-medium mb-2">
                  What is the purpose of `jwt` and how does it work?
                </h2>
                <p className="leading-relaxed text-base">
                  JSON Web Token (JWT) is an open standard (RFC 7519) that
                  defines a compact and self-contained way for securely
                  transmitting information between parties as a JSON object.
                  This information can be verified and trusted because it is
                  digitally signed. JWTs can be signed using a secret (with the
                  HMAC algorithm) or a public/private key pair using RSA or
                  ECDSA. Basically the identity provider(IdP) generates a JWT
                  certifying user identity and Resource server decodes and
                  verifies the authenticity of the token using secret salt /
                  public key.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;
