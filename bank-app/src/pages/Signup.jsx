import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setformData] = useState({});
  const [error, seterror] = useState();
  const [loading, setloading] = useState();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      const res = await fetch("api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        seterror(data.message);
        setloading(false);
        return;
      }
      setloading(false);
      seterror(null);
      navigate('/sign-in');
    } catch (error) {
      setloading(false);
      seterror(error.message);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-bold my-7 text-emerald-900">Sign Up</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg outline-none"
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg outline-none"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg outline-none"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-emerald-700 disabled:opacity-80 cursor-pointer text-white uppercase hover:opacity-95 disabled:opacity-80 p-3 rounded-lg mt-4"
        >
          {loading ? "Loading..." : "Sign up"}
        </button>
      </form>
      <div className=" mt-4">
        <p>
          Have an account?{" "}
          <span className="text-blue-700 ml-2 onChange={}00 cursor-pointer">
            {" "}
            <Link to={"/sign-in"}>Sign in</Link>
          </span>{" "}
        </p>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}

export default Signup;
