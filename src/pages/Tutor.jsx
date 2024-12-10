import { useState } from "react";
import { Rating } from "flowbite-react";
import Header from "../components/common/Header";
import Lower from "../components/common/Lower";
import { FiCopy } from "react-icons/fi";

function Tutor() {
  const [showDialog, setShowDialog] = useState(false);
  const [contactInfo, setContactInfo] = useState({ name: "", phone: "", email: "" });
  const [copyMessage, setCopyMessage] = useState("");

  const tutors = [
    {
      name: "Ridwanullah Adeniran",
      phone: "09065111851",
      email: "iridwanullah03@gmail.com",
      subjects: ["GEG", "MEG"],
      image: "/t1.jpeg",
      rating: 5,
    },
    {
      name: "Abiodun Mubarak",
      phone: "123-456-7890",
      email: "abiodun@example.com",
      subjects: ["Mathematics", "Industrial Maths"],
      image: "/image.png",
      rating: 5,
    },
    {
      name: "Abiodun Mubarak",
      phone: "123-456-7890",
      email: "abiodun@example.com",
      subjects: ["Mathematics", "Industrial Maths"],
      image: "/image.png",
      rating: 5,
    },
    {
      name: "Hannah Zeus",
      phone: "987-654-3210",
      email: "hannah@example.com",
      subjects: ["Geography", "Geology"],
      image: "/image1.png",
      rating: 4,
    },
    {
      name: "Hannah Zeus",
      phone: "987-654-3210",
      email: "hannah@example.com",
      subjects: ["Geography", "Geology"],
      image: "/image1.png",
      rating: 4,
    },
    {
      name: "Hannah Zeus",
      phone: "987-654-3210",
      email: "hannah@example.com",
      subjects: ["Geography", "Geology"],
      image: "/image1.png",
      rating: 4,
    },
    {
      name: "Hannah Zeus",
      phone: "987-654-3210",
      email: "hannah@example.com",
      subjects: ["Geography", "Geology"],
      image: "/image1.png",
      rating: 4,
    },
    {
      name: "Hannah Zeus",
      phone: "987-654-3210",
      email: "hannah@example.com",
      subjects: ["Geography", "Geology"],
      image: "/image1.png",
      rating: 4,
    },
    {
      name: "Hannah Zeus",
      phone: "987-654-3210",
      email: "hannah@example.com",
      subjects: ["Geography", "Geology"],
      image: "/image1.png",
      rating: 4,
    },
    {
      name: "Hannah Zeus",
      phone: "987-654-3210",
      email: "hannah@example.com",
      subjects: ["Geography", "Geology"],
      image: "/image1.png",
      rating: 4,
    },
    {
      name: "Hannah Zeus",
      phone: "987-654-3210",
      email: "hannah@example.com",
      subjects: ["Geography", "Geology"],
      image: "/image1.png",
      rating: 4,
    },
  ];

  const handleContactClick = (tutor) => {
    setContactInfo(tutor);
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyMessage("Copied to clipboard!");
      setTimeout(() => setCopyMessage(""), 2000); // Clear message after 2 seconds
    });
  };

  return (
    <>
      <Header />
      <div className="mb-11 mt-11 px-5 dark:text-white font-[Satoshi] lg:px-16">
        <div className="mb-6 text-2xl font-bold">Tutors</div>

        <div className="grid grid-cols-2 gap-3 lg:gap-8 lg:grid-cols-4">
          {tutors.map((tutor, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={tutor.image} alt={tutor.name} className="mb-4 rounded-lg " />
              <div className="mb-2 text-sm lg:text-lg font-semibold">{tutor.name}</div>
              <Rating className="mb-3">
                {[...Array(5)].map((_, i) => (
                  <Rating.Star key={i} filled={i < tutor.rating} />
                ))}
              </Rating>
              <div className="flex gap-2">
                {tutor.subjects.map((subject, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-black dark:border-white px-2 py-1 text-sm"
                  >
                    {subject}
                  </div>
                ))}
              </div>
              <button
                className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700"
                onClick={() => handleContactClick(tutor)}
              >
                Contact
              </button>
            </div>
          ))}
        </div>
      </div>

      
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-96 rounded-lg dark:bg-black dark:text-white bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-lg font-bold">{contactInfo.name} Contact Info</h3>
            <p className="mb-2 flex items-center gap-2">
              <strong>Phone:</strong> {contactInfo.phone}
              <FiCopy
                className="cursor-pointer text-blue-600 hover:text-blue-800"
                onClick={() => copyToClipboard(contactInfo.phone)}
              />
            </p>
            <p className="mb-4 flex items-center gap-2">
              <strong>Email:</strong> {contactInfo.email}
              <FiCopy
                className="cursor-pointer text-blue-600 hover:text-blue-800"
                onClick={() => copyToClipboard(contactInfo.email)}
              />
            </p>
            {copyMessage && <p className="mb-2 text-sm text-green-600">{copyMessage}</p>}
            
            <button
              className="w-full rounded-lg bg-blue-700 py-2 text-white hover:bg-red-700"
              onClick={closeDialog}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Lower />
    </>
  );
}

export default Tutor;
