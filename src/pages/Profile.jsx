import { useState } from "react";
import Header from "../components/common/Header";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { user } = useAuth(); // Fetch logged-in user details
  const [formData, setFormData] = useState({
    firstName: user?.name?.split(" ")[0] || "",
    lastName: user?.name?.split(" ")[1] || "",
    phone: "",
    matricNumber: "",
    university: "",
    department: "",
    level: "",
  });

  const [avatar, setAvatar] = useState(null); // To handle avatar upload

  // Handle input changes for the editable form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle avatar upload
  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  // Handle avatar deletion
  const handleAvatarDelete = () => {
    setAvatar(null);
  };

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold">No user logged in.</h1>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="p-11 font-[Satoshi] dark:bg-black bg-gray-100">
        <div className="mb-16   flex flex-col justify-center items-center">
          
          <div className="flex flex-col  items-center">
            <div className="flex h-24 w-24 items-center mb-8 justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
              {avatar ? (
                <img
                  src={avatar}
                  alt="User Avatar"
                  className="h-24 w-24  rounded-full object-cover"
                />
              ) : (
                `${user.name.split(" ")[0][0]}${user.name.split(" ")[1][0]}`
              )}
            </div>
            
            <div className="mt-2 flex space-x-4">
              <label className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white">
                Change Picture
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleAvatarUpload}
                />
              </label>
              {avatar && (
                <button
                  className="rounded bg-gray-400 px-4 py-2 text-white"
                  onClick={handleAvatarDelete}
                >
                  Delete Image
                </button>
              )}
            </div>
          </div>
        </div>

        <form className="grid grid-cols-2 gap-11">
          <div>
            <label className="block text-base mb-3 font-medium text-gray-600">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full rounded-lg border dark:bg-black dark:text-white border-gray-300 p-3"
            />
          </div>
          <div>
            <label className="block text-base mb-3 font-medium text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full rounded-lg border dark:bg-black  dark:text-white border-gray-300 p-3"
            />
          </div>
          <div>
            <label className="block text-base mb-3 font-medium text-gray-600">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full rounded-lg border dark:bg-black  dark:text-white border-gray-300 p-3"
            />
          </div>
          <div>
            <label className="block text-base mb-3 font-medium text-gray-600">
              Matric Number
            </label>
            <input
              type="text"
              name="matricNumber"
              value={formData.matricNumber}
              onChange={handleInputChange}
              className="w-full rounded-lg border dark:bg-black  dark:text-white border-gray-300 p-3"
            />
          </div>
          <div>
            <label className="block text-base mb-3 font-medium text-gray-600">
              University
            </label>
            <input
              type="text"
              name="university"
              value={formData.university}
              onChange={handleInputChange}
              className="w-full rounded-lg border dark:bg-black  dark:text-white border-gray-300 p-3"
            />
          </div>
          <div>
            <label className="block text-base mb-3 font-medium text-gray-600">
              Department
            </label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className="w-full rounded-lg border dark:bg-black  dark:text-white border-gray-300 p-3"
            />
          </div>
          <div>
            <label className="block text-base mb-3 font-medium text-gray-600">
              Level
            </label>
            <input
              type="text"
              name="level"
              value={formData.level}
              onChange={handleInputChange}
              className="w-full rounded-lg border dark:bg-black  dark:text-white border-gray-300 p-3"
            />
          </div>
          {/* <button
            type="button"
            className="col-span-2 mt-4 w-full rounded bg-blue-500 px-4 py-2 text-white"
          >
            Save Changes
          </button> */}
        </form>
      </div>
    </>
  );
}

export default Profile;
