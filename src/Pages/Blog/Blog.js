import React from "react";
import useTitle from "./../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="lg:px-20 md:px-8 px-6 my-12">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        <div className="p-6 shadow border rounded-lg">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">
            Difference between SQL and NoSQL
          </h3>
          <p>
            When it comes to choosing a database the biggest decisions is
            picking a relational SQL or non-relational NoSQL data structure.
            While both the databases are viable options still there are certain
            key differences between the two that users must keep in mind when
            making a decision. SQL databases are primarily called as Relational
            Databases RDBMS; whereas NoSQL database are primarily called as
            non-relational or distributed database.{" "}
          </p>
        </div>
        <div className="p-6 shadow border rounded-lg">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">
            What is JWT, and how does it work?
          </h3>
          <p>
            JSON Web Token JWT is an open standard RFC 7519 for securely
            transmitting information between parties as JSON object. It is
            compact, readable and digitally signed using a private key/ or a
            public key pair by the Identity Provider IdP. So the integrity and
            authenticity of the token can be verified by other parties involved.
            The purpose of using JWT is not to hide data but to ensure the
            authenticity of the data. JWT is signed and encoded, not encrypted.
            JWT is a token based stateless authentication mechanism. Since it is
            a client-side based stateless session, server doesn't have to
            completely rely on a datastore database to save session information.
          </p>
        </div>
        <div className="p-6 shadow border rounded-lg">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">
            What is the difference between javascript and NodeJS?
          </h3>
          <p>
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node.js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language. It requires libraries that can be
            conveniently accessed from JavaScript programming to be more
            helpful.
          </p>
        </div>
        <div className="p-6 shadow border rounded-lg">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">
            How does NodeJS handle multiple requests at the same time?
          </h3>
          <p>
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. If NodeJS can process the request without I/O
            blocking then the event loop would itself process the request and
            sends the response back to the client by itself. But, it is possible
            to process multiple requests parallelly using the NodeJS cluster
            module or worker_threads module.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
