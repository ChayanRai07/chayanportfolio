import React, { useState, useEffect } from 'react';
import "./profile.css";
import { motion } from 'framer-motion';

export default function Profiles() {
  const [leetcodeStats, setLeetcodeStats] = useState({
    ranking: '1525',
    totalSolved: '92',
    contestRating: '1525'
  });

  const [codechefStats, setCodechefStats] = useState({
    rating: '1525',
    globalRank: '92',
    problemsSolved: '92'
  });

  useEffect(() => {
    // LeetCode API
    fetch('https://leetcode-api-faisalshohag.vercel.app/Chayan_Rai')
      .then(response => response.json())
      .then(data => {
        setLeetcodeStats({
          ranking: data.ranking || '1525',
          totalSolved: data.totalSolved || '92',
          contestRating: data.contestRating || '1525'
        });
      })
      .catch(error => console.error('Error fetching LeetCode stats:', error));

    // Alternative CodeChef API
    fetch('https://codechef-api.vercel.app/chayanrai107')
      .then(response => response.json())
      .then(data => {
        setCodechefStats({
          rating: data.currentRating || '1525',
          globalRank: data.globalRank || '92',
          problemsSolved: data.totalSolved || '92'
        });
      })
      .catch(error => {
        // Fallback to another API if first one fails
        fetch('https://cp-api.vercel.app/api/codechef/chayanrai107')
          .then(response => response.json())
          .then(data => {
            setCodechefStats({
              rating: data.rating || '1525',
              globalRank: data.rank || '92',
              problemsSolved: data.solved || '92'
            });
          })
          .catch(err => console.error('Error fetching CodeChef stats:', err));
      });
  }, []);

  return (
    <div id="profiles" className="w-full py-20">
      <div className="max-w-[1000px] mx-auto px-2">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-16 pb-4 md:pb-10 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Coding Profiles
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center justify-center h-auto w-full shadow-[0_0_15px_rgba(255,255,255,0.3)] rounded-xl p-3 md:p-4 group hover:bg-gradient-to-r from-pink-500 to-purple-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]"
          >
            <div className="group-hover:opacity-10 w-full">
              <div className="flex justify-center mb-2 md:mb-4">
                <img 
                  src={require("../images/leetcode-logo.png")} 
                  alt="LeetCode"
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl text-center font-bold mb-2 md:mb-4">LeetCode</h3>
              <div className="space-y-1 md:space-y-2">
                <p className="text-sm md:text-base text-center">
                  <span className="font-bold">Rank:</span> {leetcodeStats.ranking}
                </p>
                <p className="text-sm md:text-base text-center">
                  <span className="font-bold">Problems Solved:</span> {leetcodeStats.totalSolved}
                </p>
                <p className="text-sm md:text-base text-center">
                  <span className="font-bold">Contest Rating:</span> {leetcodeStats.contestRating}
                </p>
              </div>
            </div>

            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-wider text-center">
                LeetCode Profile
              </h3>
              <p className="pb-2 md:pb-4 pt-1 md:pt-2 text-sm md:text-base text-white text-center">View Stats</p>
              <a href="https://leetcode.com/u/Chayan_Rai/" target="_blank" rel="noopener noreferrer">
                <p className="text-center py-2 md:p-3 rounded-lg bg-white text-gray-700 text-sm md:text-base font-bold cursor-pointer">
                  View Profile
                </p>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center h-auto w-full shadow-[0_0_15px_rgba(255,255,255,0.3)] rounded-xl p-3 md:p-4 group hover:bg-gradient-to-r from-pink-500 to-purple-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]"
          >
            <div className="group-hover:opacity-10 w-full">
              <div className="flex justify-center mb-2 md:mb-4">
                <img 
                  src={require("../images/codechef-logo.jpg")} 
                  alt="CodeChef"
                  className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-full"
                />
              </div>
              <h3 className="text-xl md:text-2xl text-center font-bold mb-2 md:mb-4">CodeChef</h3>
              <div className="space-y-1 md:space-y-2">
                <p className="text-sm md:text-base text-center">
                  <span className="font-bold">Rating:</span> {codechefStats.rating}
                </p>
                <p className="text-sm md:text-base text-center">
                  <span className="font-bold">Global Rank:</span> {codechefStats.globalRank}
                </p>
                <p className="text-sm md:text-base text-center">
                  <span className="font-bold">Problems Solved:</span> {codechefStats.problemsSolved}
                </p>
              </div>
            </div>

            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-wider text-center">
                CodeChef Profile
              </h3>
              <p className="pb-2 md:pb-4 pt-1 md:pt-2 text-sm md:text-base text-white text-center">View Stats</p>
              <a href="https://www.codechef.com/users/chayanrai107" target="_blank" rel="noopener noreferrer">
                <p className="text-center py-2 md:p-3 rounded-lg bg-white text-gray-700 text-sm md:text-base font-bold cursor-pointer">
                  View Profile
                </p>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
