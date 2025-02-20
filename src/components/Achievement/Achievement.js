import React from "react";
import "./AchievementCSS.css";

const Achievement = () => {
  const achievementsData = [
    {
      text: "Won First Prize in Ideathon 2k24 in the Emerging Technologies category.",
      link: "https://drive.google.com/file/d/1SUuXvTVdsOlECC2N8K_KsVASk_rUjYWT/view?usp=sharing",
    },
    {
      text: "Top Performer in the Design Rush UI/UX bootcamp for exceptional Figma skills.",
      link: "https://drive.google.com/file/d/14BEpJgTeMTXmm7VBbB23vpBAUFSQ5pr2/view?usp=sharing",
    },
    // {
    //   text: "Solved 1,100+ DSA problems on LeetCode, GFG, Codeforces, and CodeChef.",
    //   link: "/",
    // },
  ];

  return (
    <>
      <div id="Achievement" className="achievements-section">
        <h2>
          <i className="fa-solid fa-medal section-icon"></i> Achievements
        </h2>
        <div className="achievements-container">
          {achievementsData.map((achievement, index) => (
            <div key={index} className="achievement-item">
              <i className="fa-solid fa-award achievement-icon"></i>
              <p className="achievement-text">
                {achievement.text}
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="achievement-link"
                >
                  [Link]
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Achievement;
