import React, { useState, useEffect } from 'react';
import axios from 'axios';
import leetCodeLogo from '../assets/images/leetcode_logo.png';
import Card3DTilt from './Card3DTilt';
import { FaUser, FaSearch, FaCode, FaChartBar, FaPercent } from 'react-icons/fa';

const LeetCodeFetcher = () => {
  const [myLeetCodeData, setMyLeetCodeData] = useState(null);
  const [leetCodeData, setLeetCodeData] = useState(null);
  const [inputUsername, setInputUsername] = useState('');
  const [username] = useState('Abhishek_kumar_Sharma_08');
  const [loading, setLoading] = useState(false);
  const [compareLoading, setCompareLoading] = useState(false);
  const [error, setError] = useState('');
  const [compareError, setCompareError] = useState('');

  const fetchLeetCodeData = async (user) => {
    try {
      const response = await axios.get(`https://leetcode-stats-api.herokuapp.com/${user}`);
      if (response.data && response.data.status === 'success') {
        return response.data;
      }
      return null;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  useEffect(() => {
    const fetchMyData = async () => {
      setLoading(true);
      setError('');
      const data = await fetchLeetCodeData(username);
      if (data) {
        setMyLeetCodeData(data);
      } else {
        setError('Could not retrieve LeetCode stats. Please try again later.');
      }
      setLoading(false);
    };
    fetchMyData();
  }, [username]);

  const handleCompare = async (e) => {
    e.preventDefault();
    if (!inputUsername.trim()) return;
    setCompareLoading(true);
    setCompareError('');
    setLeetCodeData(null);
    const data = await fetchLeetCodeData(inputUsername);
    if (data) {
      setLeetCodeData(data);
    } else {
      setCompareError('User not found or API limits exceeded.');
    }
    setCompareLoading(false);
  };

  const renderStats = (data, userTitle) => {
    if (!data) return null;

    const {
      totalSolved = 0,
      totalQuestions = 1,
      easySolved = 0,
      totalEasy = 100,
      mediumSolved = 0,
      totalMedium = 100,
      hardSolved = 0,
      totalHard = 100,
      acceptanceRate = 0,
    } = data;

    // SVG parameters
    const size = 120;
    const strokeWidth = 10;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const totalPercentage = Math.round((totalSolved / totalQuestions) * 100) || 0;
    const strokeDashoffset = circumference - (totalPercentage / 100) * circumference;

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b border-white/5 pb-4">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <FaUser className="text-sm" />
          </div>
          <div>
            <h4 className="font-extrabold text-white text-base tracking-wide">{userTitle}</h4>
            <p className="text-[10px] text-white/40 font-mono tracking-wider">Acceptance: {acceptanceRate}%</p>
          </div>
        </div>

        {/* Circular Progress (Total Solved) */}
        <div className="flex items-center justify-around gap-4 py-2 bg-white/5 rounded-2xl p-4 border border-white/5">
          <div className="relative" style={{ width: size, height: size }}>
            <svg width={size} height={size} className="transform -rotate-90">
              {/* Back Ring */}
              <circle
                className="text-white/10"
                strokeWidth={strokeWidth}
                stroke="currentColor"
                fill="transparent"
                r={radius}
                cx={size / 2}
                cy={size / 2}
              />
              {/* Active Ring */}
              <circle
                className="text-primary transition-all duration-1000 ease-out"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r={radius}
                cx={size / 2}
                cy={size / 2}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-black text-white">{totalSolved}</span>
              <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Solved</span>
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="text-xs text-white/60">
              Total Questions: <span className="font-bold text-white">{totalQuestions}</span>
            </div>
            <div className="text-xs text-white/60">
              Solve Rate: <span className="font-bold text-primary">{totalPercentage}%</span>
            </div>
          </div>
        </div>

        {/* Linear Progress Blocks */}
        <div className="space-y-4 pt-2">
          {/* Easy */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-emerald-400">Easy</span>
              <span className="text-white/80">{easySolved} <span className="text-white/30">/ {totalEasy}</span></span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-1000"
                style={{ width: `${(easySolved / totalEasy) * 100}%` }}
              />
            </div>
          </div>

          {/* Medium */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-amber-400">Medium</span>
              <span className="text-white/80">{mediumSolved} <span className="text-white/30">/ {totalMedium}</span></span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
              <div
                className="h-full bg-amber-500 rounded-full transition-all duration-1000"
                style={{ width: `${(mediumSolved / totalMedium) * 100}%` }}
              />
            </div>
          </div>

          {/* Hard */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-rose-400">Hard</span>
              <span className="text-white/80">{hardSolved} <span className="text-white/30">/ {totalHard}</span></span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
              <div
                className="h-full bg-rose-500 rounded-full transition-all duration-1000"
                style={{ width: `${(hardSolved / totalHard) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 relative px-6 overflow-hidden">
      {/* Decorative Aura */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] -z-10" />

      <div className="container mx-auto max-w-5xl">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-2">
            <img src={leetCodeLogo} alt="LeetCode Logo" className="w-10 h-10 object-contain animate-bounce" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">LeetCode Analytics</h2>
          </div>
          <p className="text-white/50 text-sm max-w-md mx-auto">
            Compare problem-solving metrics and algorithm analytics live.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* My Stats Box (Takes 7 cols on large) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <Card3DTilt className="h-full p-8 border border-white/10 flex flex-col justify-between" maxRotation={6}>
              {loading ? (
                <div className="flex flex-col items-center justify-center py-20 gap-4">
                  <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                  <span className="text-sm font-bold text-white/50">Querying profile metrics...</span>
                </div>
              ) : error ? (
                <div className="text-center py-20 text-rose-400 font-bold">{error}</div>
              ) : (
                renderStats(myLeetCodeData, `Me (${username})`)
              )}
            </Card3DTilt>
          </div>

          {/* Comparison Panel (Takes 5 cols on large) */}
          <div className="lg:col-span-6">
            <Card3DTilt className="h-full p-8 border border-white/10 flex flex-col justify-between" maxRotation={6}>
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <div className="p-2 bg-secondary/15 rounded-lg text-secondary">
                    <FaChartBar className="text-base" />
                  </div>
                  <h4 className="font-extrabold text-white text-base tracking-wide">Compare Profiles</h4>
                </div>

                {/* Search Input */}
                <form onSubmit={handleCompare} className="relative">
                  <input
                    type="text"
                    placeholder="Enter LeetCode username..."
                    value={inputUsername}
                    onChange={(e) => setInputUsername(e.target.value)}
                    className="w-full pl-4 pr-12 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-semibold"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-2 p-2 rounded-lg bg-primary hover:bg-primary/90 text-white transition-colors"
                    aria-label="Search User"
                    disabled={compareLoading}
                  >
                    {compareLoading ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <FaSearch className="text-xs" />
                    )}
                  </button>
                </form>

                {compareError && (
                  <div className="text-center py-8 text-rose-400 text-xs font-bold bg-rose-500/10 border border-rose-500/20 rounded-xl">
                    {compareError}
                  </div>
                )}

                {leetCodeData ? (
                  renderStats(leetCodeData, `Compare: ${inputUsername}`)
                ) : (
                  !compareError && (
                    <div className="flex flex-col items-center justify-center py-16 text-center space-y-3">
                      <FaCode className="text-4xl text-white/10" />
                      <p className="text-xs text-white/40 max-w-xs font-semibold leading-relaxed">
                        Input a LeetCode handle to analyze algorithms stats compared side-by-side.
                      </p>
                    </div>
                  )
                )}
              </div>
            </Card3DTilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeetCodeFetcher;
