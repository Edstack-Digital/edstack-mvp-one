import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const { login, signup, user} = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    
    try {
      if (isSignUp) {
        await signup(formData);
        navigate("/profile");
      } else {
        await login({ email: formData.email, password: formData.password });
      }
      navigate("/");
    } catch (err) {
      console.error("Auth Error:", err.message);
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#a3a3a3]">
      <div className="w-full max-w-md rounded-lg bg-white p-8 font-[Satoshi] shadow-md">
        <div>
          <img
            src="/ed.png"
            alt="edstack logo"
            className="mb-2 h-10 opacity-50"
            />
        </div>
        <h1 className="mb-2 text-left text-2xl font-bold">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        <p className="mb-6 text-left">
          {isSignUp
            ? "Create an account and start your learning journey"
            : "Welcome back! Please enter your details"}
        </p>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-black">First Name</label>
              <input
                type="text"
                name="firstname" // Fixed name attribute
                value={formData.firstname}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring"
                required
                />
              <label className="block text-black">Last Name</label>
              <input
                type="text"
                name="lastname" // Fixed name attribute
                value={formData.lastname}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring"
                required
                />
            </div>
          )}
          <div>
            <label className="block text-black">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring"
              required
              />
          </div>
          <div>
            <label className="block text-black">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring"
              required
            />
          </div>
          <Link>
            <p className="mt-2 text-right text-[#91c4e9]">
              {isSignUp ? "" : "Forgot Password!?"}
            </p>
          </Link>
          <button
            type="submit"
            className="w-full rounded-lg bg-[#0077CC] py-3 text-white hover:bg-blue-600"
            >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
          <button
            type="submit"
            className="w-full rounded-lg border py-3 text-black"
            >
            {isSignUp ? "Sign up with Google" : "Sign in with Google"}
          </button>
        </form>

        <p className="mt-4 text-left">
          {isSignUp ? "Already have an account?" : "Dont have an account? "}
          <button
            className="text-[#0077CC]"
            onClick={() => setIsSignUp(!isSignUp)}
            >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Auth;








// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// function Auth() {
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState(null);

//   const { login, signup } = useAuth(); 
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     try {
//       if (isSignUp) {
//         await signup(formData); 
//       } else {
//         await login({ email: formData.email, password: formData.password }); 
//       }
//       navigate("/profile"); 
//     } catch (err) {
//       setError(err.message || "Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-[#a3a3a3]">
//       <div className="w-full max-w-md rounded-lg bg-white p-8 font-[Satoshi] shadow-md">
//         <div>
//           <img
//             src="/ed.png"
//             alt="edstack logo"
//             className="mb-2 h-10 opacity-50"
//           />
//         </div>
//         <h1 className="mb-2 text-left text-2xl font-bold">
//           {isSignUp ? "Sign Up" : "Sign In"}
//         </h1>
//         <p className="mb-6 text-left">
//           {isSignUp
//             ? "Create an account and start your learning journey"
//             : "Welcome back! Please enter your details"}
//         </p>
//         {error && <p className="text-red-500">{error}</p>}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {isSignUp && (
//             <div>
//               <label className="block text-black">First Name</label>
//               <input
//                 type="text"
//                 name="first_name"
//                 value={formData.first_name}
//                 onChange={handleInputChange}
//                 className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring"
//                 required
//               />
//               <label className="block text-black">Last Name</label>
//               <input
//                 type="text"
//                 name="last_name"
//                 value={formData.last_name}
//                 onChange={handleInputChange}
//                 className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring"
//                 required
//               />
//             </div>
//           )}
//           <div>
//             <label className="block text-black">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-black">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring"
//               required
//             />
//           </div>
//           <Link>
//             <p className="mt-2 text-right text-[#91c4e9]">
//               {isSignUp ? "" : "Forgot Password!?"}
//             </p>
//           </Link>
//           <button
//             type="submit"
//             className="w-full rounded-lg bg-[#0077CC] py-3 text-white hover:bg-blue-600"
//           >
//             {isSignUp ? "Sign Up" : "Sign In"}
//           </button>
//           <button
//             type="submit"
//             className="w-full rounded-lg border py-3 text-black"
//           >
//             {isSignUp ? "Sign up with Google" : "Sign in with Google"}
//           </button>
//         </form>

//         <p className="mt-4 text-left">
//           {isSignUp ? "Already have an account?" : "Dont have an account? "}
//           <button
//             className="text-[#0077CC]"
//             onClick={() => setIsSignUp(!isSignUp)}
//           >
//             {isSignUp ? "Sign In" : "Sign Up"}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Auth;





// src/components/Auth.js