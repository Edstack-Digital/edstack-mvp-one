import { useState } from "react";
import Header from "../components/common/Header";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { user } = useAuth(); // Fetch logged-in user details
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    password: user?.password || "",
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
      <div className="p-8 font-[Satoshi]">
        <div className="mb-6 flex flex-col">
          {/* Avatar */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
              {avatar ? (
                <img
                  src={avatar}
                  alt="User Avatar"
                  className="h-24 w-24 rounded-full object-cover"
                />
              ) : (
                `${user.name.split(" ")[0][0]}${user.name.split(" ")[1][0]}`
              )}
            </div>
            {/* Change Picture Button */}
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
              <button
                className="rounded bg-gray-400 px-4 py-2 text-white"
                onClick={handleAvatarDelete}
              >
                Delete Image
              </button>
            </div>
          </div>
        </div>

        {/* Editable Form */}
        <form className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              First name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 p-3"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Last name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 p-3"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Phone Number
            </label>
            <input
              type="tel"
              name="tel"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 p-3"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Matric Number
            </label>
            <input
              type="number"
              name="number"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 p-3"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              University
            </label>
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 p-3"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Department
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 p-3"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Department
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 p-3"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Level
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 p-3"
            />
          </div>
          <button
            type="submit"
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
          >
            Save Changes
          </button>
        </form>
        {/* </div> */}
      </div>
    </>
  );
}

export default Profile;
