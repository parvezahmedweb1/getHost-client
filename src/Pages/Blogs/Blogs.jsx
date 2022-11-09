import React from "react";
import useTitle from "../../Hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <section className="my-10">
      <div className="container mx-auto">
        <h2 className="text-4xl text-gray-700 font-bold mb-10">Blogs</h2>
        {/*  */}
        <div className="space-y-4">
          <details
            className="group border-l-2 border-r-2 border-link rounded-xl bg-gray-50 p-4"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-700">
                Difference between SQL and NoSQL?
              </h2>
              <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-btnHover sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45 text-hLink"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-600">
              SQL is the programming language used to interface with relational
              databases. (Relational databases model data as records in rows and
              tables with logical links between them). NoSQL is a class of DBMs
              that are non-relational and generally do not use SQL.
            </p>
          </details>
          <details className="group border-l-2 border-r-2 border-link rounded-xl bg-gray-50 p-4">
            <summary className="flex cursor-pointer items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-700">
                What is JWT?
              </h2>
              <span className="ml-1.5 flex-shrink-0 text-hLink rounded-full bg-white p-1.5 text-btnHover sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-600">
              JSON Web Token is a proposed Internet standard for creating data
              with optional signature and/or optional encryption whose payload
              holds JSON that asserts some number of claims. The tokens are
              signed either using a private secret or a public/private key.
            </p>
          </details>
          <details className="group border-l-2 border-r-2 border-link rounded-xl bg-gray-50 p-4">
            <summary className="flex cursor-pointer items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-700">
                How does JWT work?
              </h2>
              <span className="ml-1.5 flex-shrink-0 text-hLink rounded-full bg-white p-1.5 text-btnHover sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-600">
              Basically the identity provider(IdP) generates a JWT certifying
              user identity and Resource server decodes and verifies the
              authenticity of the token using secret salt / public key.
            </p>
            <ul>
              <li>
                1.User sign-in using username and password or google/facebook.
              </li>
              <li>
                2.Authentication server verifies the credentials and issues a
                jwt signed using either a secret salt or a private key.
              </li>
              <li>
                3.User's Client uses the JWT to access protected resources by
                passing the JWT in HTTP Authorization header.
              </li>
              <li>
                4.Resource server then verifies the authenticity of the token
                using the secret salt/ public key.
              </li>
            </ul>
          </details>
          <details className="group border-l-2 border-r-2 border-link rounded-xl bg-gray-50 p-4">
            <summary className="flex cursor-pointer items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-700">
                What is the difference between javascript and NodeJS?
              </h2>
              <span className="ml-1.5 flex-shrink-0 text-hLink rounded-full bg-white p-1.5 text-btnHover sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-600">
              JavaScript is a simple programming language that can be used with
              any browser that has the JavaScript Engine installed. Node. js, on
              the other hand, is an interpreter or execution environment for the
              JavaScript programming language. Javascript is a programming
              language that is used for writing scripts on the website. NodeJS
              is a Javascript runtime environment. Javascript can only be run in
              the browsers. We can run Javascript outside the browser with the
              help of NodeJS. <br /> It is basically used on the client-side.{" "}
              <br />
              It is mostly used on the server-side.
            </p>
          </details>
          <details className="group border-l-2 border-r-2 border-link rounded-xl bg-gray-50 p-4">
            <summary className="flex cursor-pointer items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-700">
                How does NodeJS handle multiple requests at the same time?
              </h2>
              <span className="ml-1.5 flex-shrink-0 text-hLink rounded-full bg-white p-1.5 text-btnHover sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-600">
              Node.js is an open-source, cross-platform, back-end JavaScript
              runtime environment that runs on a JavaScript Engine and executes
              JavaScript code outside a web browser, which was designed to build
              scalable network applications. NodeJS receives multiple client
              requests and places them into EventQueue. NodeJS is built with the
              concept of event-driven architecture. NodeJS has its own EventLoop
              which is an infinite loop that receives requests and processes
              them. NodeJS receives multiple client requests and places them
              into EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them. EventLoop is the
              listener for the EventQueue. <br />
              If NodeJS can process the request without I/O blocking then the
              event loop would itself process the request and sends the response
              back to the client by itself. But, it is possible to process
              multiple requests parallelly using the NodeJS cluster module or
              worker_threads module.
            </p>
          </details>
        </div>
        {/*  */}
      </div>
    </section>
  );
};

export default Blogs;
