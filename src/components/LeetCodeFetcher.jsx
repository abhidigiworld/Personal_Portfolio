import React, { useState, useEffect } from 'react';
import axios from 'axios';
import leetCodeLogo from '../assets/images/leetcode_logo.png'

const LeetCodeFetcher = () => {
  const [leetCodeData, setLeetCodeData] = useState(null);
  const [myLeetCodeData, setMyLeetCodeData] = useState(null);
  const [inputUsername, setInputUsername] = useState(""); // For user input comparison
  const [username, setUsername] = useState("Abhishek_kumar_Sharma_08"); // Your LeetCode username
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to fetch data from LeetCode API
  const fetchLeetCodeData = async (user) => {
    try {
      const response = await axios.get(`https://leetcode-stats-api.herokuapp.com/${user}`);
      return response.data;
    } catch (err) {
      setError("Error fetching LeetCode data");
      return null;
    }
  };

  // Fetch your LeetCode stats when the component mounts
  useEffect(() => {
    const fetchMyData = async () => {
      setLoading(true);
      const data = await fetchLeetCodeData(username);
      setMyLeetCodeData(data);
      setLoading(false);
    };
    fetchMyData();
  }, [username]);

  // Fetch user input LeetCode stats for comparison
  const handleCompare = async () => {
    setLoading(true);
    const data = await fetchLeetCodeData(inputUsername);
    setLeetCodeData(data);
    setLoading(false);
  };

  if (loading) return <div className="text-center text-red-600 text-xl mt-8 animate-pulse">Loading...</div>;
  if (error) return <div className="text-center text-red-600 text-xl mt-8">{error}</div>;

  return (
   <>
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col w-full max-w-5xl rounded-lg shadow-2xl p-8">
        {/* Heading Section with Logo */}
        <div className="mb-8 flex items-center justify-center">
          <img src={leetCodeLogo} alt="LeetCode Logo" className="w-12 h-12 mr-3" /> {/* Adjust size as needed */}
          <h1 className="text-3xl font-bold text-white">LeetCode Progress: Let's Explore Together!</h1>
        </div>

        {/* Input Section for Comparison */}
        <div className="mb-8">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Enter your LeetCode Username"
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
              className="p-2 rounded-lg w-2/3 text-gray-900"
            />
            <button
              onClick={handleCompare}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Compare
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Left Side: Your LeetCode Profile */}
          <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">My LeetCode Profile</h2>
            {myLeetCodeData && (
              <div>
                <p className="text-white text-lg">
                  <span className="font-bold text-red-400">Username:</span> {username}
                </p>
                <p className="text-white text-lg">
                  <span className="font-bold text-red-400">Total Solved:</span> {myLeetCodeData.totalSolved}
                </p>
                <p className="text-white text-lg">
                  <span className="font-bold text-red-400">Easy Solved:</span> {myLeetCodeData.easySolved}
                </p>
                <p className="text-white text-lg">
                  <span className="font-bold text-red-400">Medium Solved:</span> {myLeetCodeData.mediumSolved}
                </p>
                <p className="text-white text-lg">
                  <span className="font-bold text-red-400">Hard Solved:</span> {myLeetCodeData.hardSolved}
                </p>
              </div>
            )}
          </div>

          {/* Right Side: User's LeetCode Profile */}
          <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Your LeetCode Profile</h2>
            {leetCodeData ? (
              <div>
                <p className="text-white text-lg">
                  <span className="font-bold text-red-400">Username:</span> {inputUsername}
                </p>
                <p className="text-white text-lg">
                  <span className="font-bold text-red-400">Total Solved:</span> {leetCodeData.totalSolved}
                </p>
                <p className="text-white text-lg">
                  <span className="font-bold text-red-400">Easy Solved:</span> {leetCodeData.easySolved}
                </p>
                <p className="text-white text-lg">
                  <span className="font-bold text-red-400">Medium Solved:</span> {leetCodeData.mediumSolved}
                </p>
                <p className="text-white text-lg">
                  <span className="font-bold text-red-400">Hard Solved:</span> {leetCodeData.hardSolved}
                </p>
              </div>
            ) : (
              <p className="text-white text-center">Enter Your name to compare</p>
            )}
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default LeetCodeFetcher;
