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
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
              </div>
            </div>
            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-secondary-content text-lg title-font font-medium mb-2">
                  The Catalyzer
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
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
                  The 400 Blows
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
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
