import { useNavigate, useParams } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Settings = () => {
  const navigate = useNavigate();
  const { username } = useParams();

  return (
    <div className="w-full h-screen bg-gray-100 p-4">
      <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <h2 className="text-xl font-bold px-6 py-4 border-b">Settings</h2>

        {/* Full-width clickable row */}
        <div
          onClick={() => navigate(`/layout/${username}/profile`)}
          className="flex items-center justify-between px-6 py-5 hover:bg-gray-100 cursor-pointer border-b transition"
        >
          <div className="flex items-center gap-4">
            <FaUserCircle size={24} className="text-blue-500" />
            <span className="text-gray-800 font-medium text-lg">Profile</span>
          </div>
          <span className="text-gray-400 text-xl">&rarr;</span>
        </div>


        
      </div>
    </div>
  );
};

export default Settings;
