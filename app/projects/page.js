"use client";
import styles from "./page.module.css";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaGithub } from "react-icons/fa";
import Accordion from "../../components/accordion/accordion";
import { VscGithubProject } from "react-icons/vsc";

export default function Projects() {
  const [open, setOpen] = useState([true, true, false, false, false, false]);
  const handleClick = (index) => {
    const newOpen = [...open];
    newOpen[index] = !newOpen[index];
    setOpen(newOpen);
  };
  return (
    <main>
      <div className={styles.mainHeaderContainer}>
        <VscGithubProject size={30} color="#eaa338" />
        <h1 className={styles.mainHeader}>Projects</h1>
      </div>

      <div className={styles.main}>
        <div className={styles.leftContainer}>
          <div className={styles.experienceContainer}>
            <div
              className={styles.jobTitleContainer}
              onClick={() => handleClick(0)}
            >
              <h3 className={styles.jobTitle}>Movies Website</h3>
              <div className={styles.innerJobTitleContainer}>
                <a href="https://github.com/eyupsabri/MoviesApp">
                  <FaGithub size={20} />
                </a>
                <a href="https://github.com/eyupsabri/movies-react">
                  <FaGithub size={20} />
                </a>
                {!open[0] ? <FaChevronDown /> : <FaChevronUp />}
              </div>
            </div>
            <Accordion open={open[0]}>
              <div className={styles.jobDesc}>
                {/* <p className={styles.jobDescHeader}>Movies Website</p> */}
                <p className={styles.bulletPointText}>
                  • Used Technologies: ASP.NET Web API, Entity Framework, React,
                  Material UI, Redux Toolkit
                </p>
                <p className={styles.bulletPointText}>
                  • Movie web-site using ASP.NET Web API as backend and React as
                  frontend
                </p>
                <p className={styles.bulletPointText}>
                  • Code first migration ve n-tier architecture
                </p>
                <p className={styles.bulletPointText}>
                  • Movie review can be made by authenticated users
                </p>
                <p className={styles.bulletPointText}>
                  • Filtering movies by name, IMDB rating, user rating, category
                  and release date.
                </p>
                <p className={styles.bulletPointText}>
                  • New movies can be added by admin using a third part movies
                  API.
                </p>
                <p className={styles.bulletPointText}>• Responsive design</p>
                <p className={styles.bulletPointText}>
                  <a href="https://mymoviess.azurewebsites.net/">
                    • https://mymoviess.azurewebsites.net/
                  </a>
                </p>
              </div>
            </Accordion>
          </div>
          <div className={styles.experienceContainer}>
            <div
              className={styles.jobTitleContainer}
              onClick={() => handleClick(2)}
            >
              <h3 className={styles.jobTitle}>
                Digital Controller for Coal Burner
              </h3>
              <div className={styles.innerJobTitleContainer}>
                {!open[2] ? <FaChevronDown /> : <FaChevronUp />}
              </div>
            </div>
            <Accordion open={open[2]}>
              <div className={styles.jobDesc}>
                {/* <p className={styles.jobDescHeader}>Movies Website</p> */}
                <p className={styles.bulletPointText}>
                  • Used Technologies: Arduino, PIC 16F877A, Digital and Analog
                  System Design
                </p>
                <p className={styles.bulletPointText}>
                  • Turning the analog controller of the existing coal based
                  burner used in house heating system to a digital controller.
                </p>
                <p className={styles.bulletPointText}>
                  • Namely first Arduino then PIC 16F877a for cheaper
                  production.
                </p>
                <p className={styles.bulletPointText}>
                  • User friendly interface on LCD screen
                </p>
                <p className={styles.bulletPointText}>• Easy time management</p>
              </div>
            </Accordion>
          </div>
          <div className={styles.experienceContainer}>
            <div
              className={styles.jobTitleContainer}
              onClick={() => handleClick(4)}
            >
              <h3 className={styles.jobTitle}>Radar Target Simulator</h3>
              <div className={styles.innerJobTitleContainer}>
                {!open[4] ? <FaChevronDown /> : <FaChevronUp />}
              </div>
            </div>
            <Accordion open={open[4]}>
              <div className={styles.jobDesc}>
                {/* <p className={styles.jobDescHeader}>Movies Website</p> */}
                <p className={styles.bulletPointText}>
                  • Used Technologies: VHDL, MATLAB, CANBUS, Mixer, Low-Noise
                  Amplifier
                </p>
                <p className={styles.bulletPointText}>
                  • Deceiving the radar on a mounted car as if there is a car in
                  front of it to test the radar without using balloon targets.
                </p>
                <p className={styles.bulletPointText}>
                  • By multiplying the incoming radar signal with the calculated
                  frequencies and sending the signal back via the antenna, the
                  shifted version of the radar signal is generated, causing a
                  speed difference for the radar to interpret as a moving
                  object.
                </p>
              </div>
            </Accordion>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.experienceContainer}>
            <div
              className={styles.jobTitleContainer}
              onClick={() => handleClick(1)}
            >
              <h3 className={styles.jobTitle}>E-Commerce WebSite</h3>
              <div className={styles.innerJobTitleContainer}>
                <a href="https://github.com/eyupsabri/better-e-commerce">
                  <FaGithub size={20} />
                </a>

                {!open[1] ? <FaChevronDown /> : <FaChevronUp />}
              </div>
            </div>
            <Accordion open={open[1]}>
              <div className={styles.jobDesc}>
                {/* <p className={styles.jobDescHeader}>Movies Website</p> */}
                <p className={styles.bulletPointText}>
                  • Used Technologies: ASP.NET MVC, Entity Framework, JQuery,
                  MSSQL, Bootstrap
                </p>
                <p className={styles.bulletPointText}>• N-tier architecture</p>
                <p className={styles.bulletPointText}>
                  • Entity Framework Code First Approach
                </p>
                <p className={styles.bulletPointText}>
                  • Filtering, sorting and purchasing functions for customers
                </p>
                <p className={styles.bulletPointText}>
                  • Admin page design in Bootstrap
                </p>
                <p className={styles.bulletPointText}>
                  • Listing the orders and filtering function
                </p>
                <p className={styles.bulletPointText}>
                  • Product update, removal, addition and categorization
                </p>
                <p className={styles.bulletPointText}>
                  <a href="https://e-commercecustomer.azurewebsites.net/">
                    • https://e-commercecustomer.azurewebsites.net/
                  </a>
                </p>
                <p className={styles.bulletPointText}>
                  <a href="https://e-commerceadmin.azurewebsites.net/">
                    • https://e-commerceadmin.azurewebsites.net/
                  </a>
                </p>
              </div>
            </Accordion>
          </div>
          <div className={styles.experienceContainer}>
            <div
              className={styles.jobTitleContainer}
              onClick={() => handleClick(3)}
            >
              <h3 className={styles.jobTitle}>Food Dispenser for Dogs</h3>
              <div className={styles.innerJobTitleContainer}>
                {!open[3] ? <FaChevronDown /> : <FaChevronUp />}
              </div>
            </div>
            <Accordion open={open[3]}>
              <div className={styles.jobDesc}>
                {/* <p className={styles.jobDescHeader}>Movies Website</p> */}
                <p className={styles.bulletPointText}>
                  • Used Technologies: Arduino, GSM Shield, Stepper Motor,
                  Distance Sensor
                </p>
                <p className={styles.bulletPointText}>
                  • Food dispenser for dogs with activation by SMS or given
                  schedule.
                </p>
              </div>
            </Accordion>
          </div>
          <div className={styles.experienceContainer}>
            <div
              className={styles.jobTitleContainer}
              onClick={() => handleClick(5)}
            >
              <h3 className={styles.jobTitle}>Ping Pong Game</h3>
              <div className={styles.innerJobTitleContainer}>
                {!open[5] ? <FaChevronDown /> : <FaChevronUp />}
              </div>
            </div>
            <Accordion open={open[5]}>
              <div className={styles.jobDesc}>
                {/* <p className={styles.jobDescHeader}>Movies Website</p> */}
                <p className={styles.bulletPointText}>
                  • Used Technologies: FPGA, VHDL, VGA
                </p>
                <p className={styles.bulletPointText}>
                  • 2D Ping-Pong game for a single player inside square
                  boundaries with each hit to the user board fastening the ball.
                </p>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </main>
  );
}
