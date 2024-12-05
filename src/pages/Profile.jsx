import Header from "../components/common/Header";
import { useAuth } from "../context/AuthContext";

function Profile() {
    const { user } = useAuth();


    if (!user) {
        return (
          <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-2xl font-bold">No user logged in.</h1>
          </div>
        );
      }

  return (
    <>
    <Header />
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Password:</strong> {user.password}
        </p>
      </div>
    </div>
  </>
  )
}

export default Profile