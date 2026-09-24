import React from "react";

function Timeline() {
  return (
    <>
      <style>{`
        .custom-about {
          width: 100%;
          padding: 100px 0;
          position: relative;
          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(80, 0, 202, 0.12),
              transparent 30%
            ),
            radial-gradient(
              circle at 85% 80%,
              rgba(80, 0, 202, 0.08),
              transparent 30%
            );
        }

        .custom-about-content {
          width: 80%;
          max-width: 1000px;
          margin: auto;
          padding: 50px;
          position: relative;
          box-sizing: border-box;

          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 24px;

          background: rgba(255, 255, 255, 0.035);

          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);

          box-shadow:
            0 25px 60px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);

          transition: all 0.4s ease;
        }

        .custom-about-content:hover {
          transform: translateY(-6px);

          box-shadow:
            0 35px 80px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.12);
        }

        .custom-about-label {
          display: inline-block;
          padding: 7px 14px;
          margin-bottom: 20px;

          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 20px;

          font-size: 12px;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.65);

          background: rgba(255, 255, 255, 0.04);
        }

        .custom-about-content h2 {
          font-size: 42px;
          font-weight: 600;
          margin: 0 0 30px 0;
          line-height: 1.2;
        }

        .custom-about-content h2::after {
          content: "";
          display: block;
          width: 65px;
          height: 3px;
          margin-top: 15px;
          background: #5000ca;
          border-radius: 5px;
        }

        .custom-about-content p {
          max-width: 850px;
          font-size: 16px;
          line-height: 1.8;
          opacity: 0.85;
          margin: 0 0 20px 0;
        }

        .custom-about-content .custom-about-intro {
          font-size: 18px;
          opacity: 0.95;
        }

        .custom-about-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 45px;
        }

        .custom-about-card {
          position: relative;
          padding: 28px;
          min-height: 170px;
          box-sizing: border-box;

          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.1);

          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.07),
              rgba(255, 255, 255, 0.015)
            );

          box-shadow:
            0 15px 35px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);

          transition: all 0.35s ease;
          overflow: hidden;
        }

        .custom-about-card::before {
          content: "";
          position: absolute;

          width: 100px;
          height: 100px;

          top: -50px;
          right: -50px;

          border-radius: 50%;

          background: rgba(80, 0, 202, 0.15);
          filter: blur(15px);

          transition: all 0.4s ease;
        }

        .custom-about-card:hover {
          transform: translateY(-10px) rotateX(2deg);

          border-color: rgba(80, 0, 202, 0.45);

          box-shadow:
            0 25px 50px rgba(0, 0, 0, 0.35),
            0 0 25px rgba(80, 0, 202, 0.08);
        }

        .custom-about-card:hover::before {
          width: 150px;
          height: 150px;
        }

        .custom-about-number {
          font-size: 12px;
          letter-spacing: 2px;
          color: #5000ca;
          margin-bottom: 15px;
        }

        .custom-about-card h3 {
          font-size: 19px;
          margin: 0 0 12px 0;
        }

        .custom-about-card p {
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
          opacity: 0.7;
        }

        .light-mode .custom-about-content {
          background: rgba(255, 255, 255, 0.7);
          border-color: rgba(0, 0, 0, 0.08);

          box-shadow:
            0 20px 50px rgba(0, 0, 0, 0.08);
        }

        .light-mode .custom-about-card {
          background: rgba(255, 255, 255, 0.75);
          border-color: rgba(0, 0, 0, 0.08);

          box-shadow:
            0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .light-mode .custom-about-label {
          color: #0d1116;
          border-color: rgba(0, 0, 0, 0.12);
          background: rgba(0, 0, 0, 0.03);
        }

        @media screen and (max-width: 900px) {
          .custom-about-content {
            width: 88%;
            padding: 35px;
          }

          .custom-about-cards {
            grid-template-columns: 1fr;
          }
        }

        @media screen and (max-width: 600px) {
          .custom-about {
            padding: 70px 0;
          }

          .custom-about-content {
            width: 90%;
            padding: 28px;
            border-radius: 18px;
          }

          .custom-about-content h2 {
            font-size: 32px;
          }

          .custom-about-content .custom-about-intro {
            font-size: 16px;
          }

          .custom-about-content p {
            font-size: 15px;
          }

          .custom-about-card {
            padding: 24px;
          }
        }
      `}</style>

      <div className="container" id="about">
        <div className="custom-about">
          <div className="custom-about-content">

            <div className="custom-about-label">
              ABOUT ME
            </div>

            {/* <h2>Java Developer</h2> */}

            <p className="custom-about-intro">
              I am a Computer Engineering graduate focused on building
              practical and scalable web applications using Java and modern
              full-stack technologies.
            </p>

            <p>
              My main focus is backend development with Java, Spring Boot,
              Spring Security, REST APIs, JWT and JPA/Hibernate. I also work
              with React and JavaScript to create complete full-stack
              applications.
            </p>

            <p>
              I enjoy turning real-world problems into simple, secure and
              maintainable software. Along with development, I have solved
              <strong> 200+ Data Structures and Algorithms problems</strong>
              to improve my problem-solving skills.
            </p>

            <div className="custom-about-cards">

              <div className="custom-about-card">
                <div className="custom-about-number">01</div>

                <h3>Backend Development</h3>

                <p>
                  Java, Spring Boot, Spring Security, REST APIs and JWT.
                </p>
              </div>

              <div className="custom-about-card">
                <div className="custom-about-number">02</div>

                <h3>Full Stack</h3>

                <p>
                  React, JavaScript, MySQL, MongoDB and modern web
                  technologies.
                </p>
              </div>

              <div className="custom-about-card">
                <div className="custom-about-number">03</div>

                <h3>Problem Solving</h3>

                <p>
                  200+ DSA problems solved with a focus on logical thinking.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Timeline;