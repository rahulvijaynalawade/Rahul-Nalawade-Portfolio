import React from "react";

function Expertise() {
  return (
    <>
      <style>{`
        .custom-skills {
          width: 100%;
          padding: 100px 0;

          position: relative;

          background:
            radial-gradient(
              circle at 85% 20%,
              rgba(80, 0, 202, 0.1),
              transparent 30%
            );
        }

        .custom-skills-content {
          width: 80%;
          max-width: 1000px;
          margin: auto;
        }

        .custom-skills-label {
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

        .custom-skills h2 {
          font-size: 42px;
          font-weight: 600;

          margin: 0 0 25px 0;
        }

        .custom-skills h2::after {
          content: "";

          display: block;

          width: 65px;
          height: 3px;

          margin-top: 15px;

          background: #5000ca;

          border-radius: 5px;
        }

        .custom-skills-intro {
          max-width: 750px;

          font-size: 17px;

          line-height: 1.8;

          opacity: 0.8;

          margin-bottom: 50px;
        }

        .custom-skills-grid {
          display: grid;

          grid-template-columns: repeat(2, 1fr);

          gap: 25px;
        }

        .custom-skill-card {
          position: relative;

          padding: 30px;

          min-height: 190px;

          box-sizing: border-box;

          border-radius: 20px;

          border: 1px solid rgba(255, 255, 255, 0.1);

          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.065),
              rgba(255, 255, 255, 0.015)
            );

          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);

          box-shadow:
            0 18px 40px rgba(0, 0, 0, 0.22),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;

          overflow: hidden;
        }

        .custom-skill-card::before {
          content: "";

          position: absolute;

          width: 140px;
          height: 140px;

          top: -80px;
          right: -80px;

          border-radius: 50%;

          background: rgba(80, 0, 202, 0.15);

          filter: blur(20px);

          transition: all 0.4s ease;
        }

        .custom-skill-card:hover {
          transform:
            translateY(-10px)
            rotateX(2deg)
            rotateY(-2deg);

          border-color: rgba(80, 0, 202, 0.4);

          box-shadow:
            0 30px 60px rgba(0, 0, 0, 0.32),
            0 0 30px rgba(80, 0, 202, 0.08);
        }

        .custom-skill-card:hover::before {
          width: 190px;
          height: 190px;
        }

        .custom-skill-number {
          display: block;

          font-size: 11px;

          letter-spacing: 2px;

          color: #5000ca;

          margin-bottom: 12px;
        }

        .custom-skill-card h3 {
          font-size: 21px;

          margin: 0 0 20px 0;
        }

        .custom-skill-list {
          display: flex;

          flex-wrap: wrap;

          gap: 9px;
        }

        .custom-skill-list span {
          display: inline-block;

          padding: 8px 14px;

          border-radius: 20px;

          font-size: 13px;

           color: #ffffff;

           border: 1px solid rgba(255, 255, 255, 0.16);

           background: rgba(255, 255, 255, 0.07);

          transition: all 0.25s ease;
        }

        .custom-skill-list span:hover {
          transform: translateY(-3px);

          color: #ffffff;

          border-color: #5000ca;

          background: rgba(80, 0, 202, 0.2);

          box-shadow: 0 5px 15px rgba(80, 0, 202, 0.2);
        }

        .light-mode .custom-skill-card {
          background: rgba(255, 255, 255, 0.75);

          border-color: rgba(0, 0, 0, 0.08);

          box-shadow:
            0 15px 35px rgba(0, 0, 0, 0.08);
        }

        .light-mode .custom-skill-list span {
  color: #0d1116;

  background: rgba(0, 0, 0, 0.035);

  border-color: rgba(0, 0, 0, 0.12);

  transition:
    transform 0.25s ease,
    color 0.25s ease,
    background 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.light-mode .custom-skill-list span:hover {
  transform: translateY(-3px);

  color: #5000ca;

  background: rgba(80, 0, 202, 0.08);

  border-color: rgba(80, 0, 202, 0.45);

  box-shadow:
    0 6px 15px rgba(80, 0, 202, 0.12);
}
     

.custom-skill-list span:hover {
  transform: translateY(-3px);

  color: #ffffff;

  border-color: #5000ca;

  background: rgba(80, 0, 202, 0.16);

  box-shadow:
    0 6px 18px rgba(80, 0, 202, 0.18);
}

.light-mode .custom-skills-label {
          color: #0d1116;

          border-color: rgba(0, 0, 0, 0.12);

          background: rgba(0, 0, 0, 0.03);
        }

        @media screen and (max-width: 900px) {
          .custom-skills-content {
            width: 88%;
          }

          .custom-skills-grid {
            grid-template-columns: 1fr;
          }
        }

        @media screen and (max-width: 600px) {
          .custom-skills {
            padding: 70px 0;
          }

          .custom-skills-content {
            width: 90%;
          }

          .custom-skills h2 {
            font-size: 32px;
          }

          .custom-skills-intro {
            font-size: 16px;
          }

          .custom-skill-card {
            padding: 25px;
          }
        }
      `}</style>

      <div className="container" id="skills">
        <div className="custom-skills">

          <div className="custom-skills-content">

            <div className="custom-skills-label">
              MY SKILLS
            </div>

            <h2>Technologies I Work With</h2>

            <p className="custom-skills-intro">
              A practical technology stack focused on Java backend development
              and full-stack web application development.
            </p>

            <div className="custom-skills-grid">

              <div className="custom-skill-card">

                <span className="custom-skill-number">
                  01
                </span>

                <h3>Backend</h3>

                <div className="custom-skill-list">
                  <span>Java</span>
                  <span>Spring Boot</span>
                  <span>Spring Security</span>
                  <span>REST APIs</span>
                  <span>JWT</span>
                  <span>JPA / Hibernate</span>
                </div>

              </div>


              <div className="custom-skill-card">

                <span className="custom-skill-number">
                  02
                </span>

                <h3>Frontend</h3>

                <div className="custom-skill-list">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>HTML</span>
                  <span>CSS</span>
                </div>

              </div>


              <div className="custom-skill-card">

                <span className="custom-skill-number">
                  03
                </span>

                <h3>Database</h3>

                <div className="custom-skill-list">
                  <span>MySQL</span>
                  <span>MongoDB</span>
                </div>

              </div>


              <div className="custom-skill-card">

                <span className="custom-skill-number">
                  04
                </span>

                <h3>Tools</h3>

                <div className="custom-skill-list">
                  <span>Git</span>
                  <span>GitHub</span>
                  <span>Postman</span>
                  <span>Maven</span>
                  <span>IntelliJ IDEA</span>
                  <span>VS Code</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Expertise;