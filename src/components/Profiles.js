import React from 'react'
import "./profile.css";
export default function Profiles() {
  return (
    <div id="profiles" className="profiles-section">
    <div className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">Profiles</div>
    <div className="profile-links">
      <a
        href="https://leetcode.com/u/Chayan_Rai/"
        target="_blank"
        rel="noopener noreferrer"
        className="profile-card"
      >
        <img src={require("../images/leetcode-logo.png")} alt="LeetCode" />
        <div className="profile-content">
          <p>LeetCode</p>
          <ul>
            <li>Rank: 65,165</li>
            <li>Total Problems Solved: 653</li>
            <li>Contest Rating: 1,525</li>
          </ul>
        </div>
      </a>
      <a
        href="https://www.codechef.com/users/chayanrai107"
        target="_blank"
        rel="noopener noreferrer"
        className="profile-card"
      >
        <img src={require("../images/codechef-logo.jpg")} alt="CodeChef" />
        <div className="profile-content">
          <p>CodeChef</p>
          <ul>
            <li>2★ Rating: 1,473</li>
            <li>Global Rank: 34,582</li>
            <li>Problems Solved: 92</li>
          </ul>
        </div>
      </a>
    </div>
  </div>
    
  );
}
