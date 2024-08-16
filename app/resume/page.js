"use client";
import Accordion from "@/components/accordion/accordion";
import styles from "./page.module.css";
import Image from "next/image";
import { FaSuitcase } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { TiStarburst } from "react-icons/ti";
import { GrCertificate } from "react-icons/gr";

export default function Page() {
  const [open, setOpen] = useState([true, true, false, false, false, false]);
  const handleClick = (index) => {
    const newOpen = [...open];
    newOpen[index] = !newOpen[index];
    setOpen(newOpen);
  };

  return (
    <main className={styles.main}>
      <div className={styles["left-container"]}>
        <Image
          src="/assets/light-image.jpg"
          className={styles.responsiveImage}
          width={400}
          height={400}
          max-width={400}
          max-height={400}
        />
        <div className={styles.iconContainer}>
          <FaSuitcase className={styles.calenderIcon} />
          <p>Full-Stack Developer</p>
        </div>
        <div className={styles.iconContainer}>
          <FaHome className={styles.calenderIcon} />
          <p>Alaşehir / Manisa</p>
        </div>
        <div className={styles.iconContainer}>
          <IoIosMail className={styles.calenderIcon} />
          <p>husnu.cemre@gmail.com</p>
        </div>
        <div className={styles.iconContainer}>
          <FaPhoneAlt className={styles.calenderIcon} />
          <p>0 534 418 1168</p>
        </div>
      </div>
      <div className={styles["right-container"]}>
        <div className={styles.rightTopContainer}>
          <div className={styles.headerContainer}>
            <FaSuitcase size={30} className={styles.calenderIcon} />
            <h1 className={styles.header}>Work Experience</h1>
          </div>

          <div className={styles.experienceContainer}>
            <div
              className={styles.jobTitleContainer}
              onClick={() => handleClick(0)}
            >
              <h3 key={"firstButton"} className={styles.jobTitle}>
                React-Native Developer / Freelance
              </h3>
              {!open[0] ? <FaChevronDown /> : <FaChevronUp />}
            </div>
            <Accordion open={open[0]} key={"firstaccordion"}>
              <div className={styles.calenderContainer}>
                <SlCalender size={20} className={styles.calenderIcon} />
                <p className={styles.calenderText}>MAR 2023 - MAY 2024</p>
              </div>
              <div className={styles.jobDesc}>
                <p className={styles.jobDescHeader}>Android/IOS App</p>
                <p className={styles.bulletPointText}>
                  • Technologies: React-Native CLI, Redux Toolkit, REST,
                  Mapview, VisionCamera
                </p>
                <p className={styles.bulletPointText}>
                  • Mobile application for finding parking places near selected
                  location from map. User can book the parking place if there is
                  an empty place or park immediately. Payment is made by
                  predefined credit card.
                </p>
                <p className={styles.bulletPointText}>
                  • Dark/light mode option as well as language options
                </p>
                <p className={styles.bulletPointText}>
                  • 2-Step Authentication with SMS verification
                </p>
                <p className={styles.bulletPointText}>
                  • User can add profile photo from newly taken photo or gallery
                </p>
                <p className={styles.bulletPointText}>
                  • User can get direction to the selected parking place
                </p>
                <p className={styles.bulletPointText}>
                  • Parking places reloads according to current view of map
                </p>
                <p className={styles.bulletPointText}>
                  • Search bar option on map to find places easily
                </p>
              </div>
            </Accordion>
          </div>
          <div className={styles.experienceContainer}>
            <div
              className={styles.jobTitleContainer}
              onClick={() => handleClick(1)}
            >
              <h3 key={"secondButton"} className={styles.jobTitle}>
                Full-Stack Developer / Freelance
              </h3>
              {!open[1] ? <FaChevronDown /> : <FaChevronUp />}
            </div>
            <Accordion open={open[1]} key={"secondaccordion"}>
              <div className={styles.calenderContainer}>
                <SlCalender size={20} className={styles.calenderIcon} />
                <p className={styles.calenderText}>AUG 2023 - JAN 2024</p>
              </div>
              <div className={styles.jobDesc}>
                <p className={styles.jobDescHeader}>Android App</p>
                <p className={styles.bulletPointText}>
                  • Technologies: React-Native CLI, .NET Web API 2.2, RESTFULL
                  API, Entity Framework, MSSQL, Fluent Validation, Custom JWT
                  Authentication, React-Native Paper(MD3 Design)
                </p>
                <p className={styles.bulletPointText}>
                  • Android application for monitoring hourly employees’
                  accounting including overall pay roll with payment deductions
                  e.g. allimony, claims, social security payments, personal
                  files, allocated vacation schedules, assignments in various
                  locations, customizable and dynamic features with respect to
                  each employee’s access rights.
                </p>
                <p className={styles.bulletPointText}>
                  • 2-Step Authentication with SMS verification Back-end and
                  Front-end
                </p>
                <p className={styles.bulletPointText}>• Authorization</p>
                <p className={styles.bulletPointText}>• Responsive Design</p>
              </div>
            </Accordion>
          </div>
          <div className={styles.experienceContainer}>
            <div
              className={styles.jobTitleContainer}
              onClick={() => handleClick(2)}
            >
              <h3 className={styles.jobTitle}>
                Electrical Engineer / Sarıkız Yapı Denetim
              </h3>
              {!open[2] ? <FaChevronDown /> : <FaChevronUp />}
            </div>
            <Accordion open={open[2]} key={"thirdaccordion"}>
              <div className={styles.calenderContainer}>
                <SlCalender size={20} className={styles.calenderIcon} />
                <p className={styles.calenderText}>DEC 2021 - JAN 2023</p>
              </div>
              <div className={styles.jobDesc}>
                <p className={styles.bulletPointText}>
                  • Controlling worksite with respect to construction projects
                  and regulations.
                </p>
              </div>
            </Accordion>
          </div>
          <div className={styles.experienceContainer}>
            <div
              className={styles.jobTitleContainer}
              onClick={() => handleClick(3)}
            >
              <h3 className={styles.jobTitle}>
                Electrical Engineer / Tariş Sirke Pekmez İşletmesi
              </h3>
              {!open[3] ? <FaChevronDown /> : <FaChevronUp />}
            </div>
            <Accordion open={open[3]} key={"fourthaccordion"}>
              <div className={styles.calenderContainer}>
                <SlCalender size={20} className={styles.calenderIcon} />
                <p className={styles.calenderText}>MAY - OCT 2021</p>
              </div>
              <div className={styles.jobDesc}>
                <p className={styles.bulletPointText}>
                  • Responsibility of all electrical devices
                </p>
                <p className={styles.bulletPointText}>
                  • Maintenance of generators, UPS, HVAC
                </p>
                <p className={styles.bulletPointText}>
                  • Electrical design of the new office
                </p>
              </div>
            </Accordion>
          </div>
          <div className={styles.experienceContainer}>
            <div
              className={styles.jobTitleContainer}
              onClick={() => handleClick(4)}
            >
              <h3 className={styles.jobTitle}>
                Embedded Software Developer Intern / Teknik Grup
              </h3>
              {!open[4] ? <FaChevronDown /> : <FaChevronUp />}
            </div>
            <Accordion open={open[4]} key={"fifthaccordion"}>
              <div className={styles.calenderContainer}>
                <SlCalender size={20} className={styles.calenderIcon} />
                <p className={styles.calenderText}>AUG - SEP 2015</p>
              </div>
              <div className={styles.jobDesc}>
                <p className={styles.bulletPointText}>
                  • STM32E407 project using C
                </p>
                <p className={styles.bulletPointText}>
                  • Running FreeRTOS (Real Time Operating System) on STM32E407
                </p>
                <p className={styles.bulletPointText}>
                  • Communication via UART
                </p>
                <p className={styles.bulletPointText}>
                  • Configuring TCP/IP protocol
                </p>
              </div>
            </Accordion>
          </div>
          <div className={styles.experienceContainer}>
            <div
              className={styles.jobTitleContainer}
              onClick={() => handleClick(5)}
            >
              <h3 className={styles.jobTitle}>
                Embedded Software Developer Intern / Gate Elektronik
              </h3>
              {!open[5] ? <FaChevronDown /> : <FaChevronUp />}
            </div>
            <Accordion open={open[5]} key={"sixthaccordion"}>
              <div className={styles.calenderContainer}>
                <SlCalender size={20} className={styles.calenderIcon} />
                <p className={styles.calenderText}>AUG - SEP 2014</p>
              </div>
              <div className={styles.jobDesc}>
                <p className={styles.bulletPointText}>
                  • PIC16F877a project using C
                </p>
                <p className={styles.bulletPointText}>
                  • Exhaust system to clean the air inside of a small cube,
                  activated by the gas sensor
                </p>
              </div>
            </Accordion>
          </div>
        </div>
        <div className={styles.rightBottomContainer}>
          <div className={styles.headerContainer}>
            <TiStarburst size={30} className={styles.calenderIcon} />
            <h1 className={styles.header}>Education</h1>
          </div>
          <div className={styles.experienceContainer}>
            <div className={styles.jobTitleContainer}>
              <h3 className={styles.jobTitle}>
                Bachelor of Science in Electrical and Electronics Engineering
              </h3>
            </div>
            <div className={styles.calenderContainer}>
              <SlCalender size={20} className={styles.calenderIcon} />
              <p className={styles.calenderText}>2011 - 2017</p>
            </div>
            <div className={styles.jobDesc}>
              <p className={styles.bulletPointText}>
                • Graduated from Bilkent University, Ankara, Türkiye
              </p>
              <p className={styles.bulletPointText}>• 2.69/4.00 GPA</p>
            </div>
          </div>
        </div>
        <div className={styles.rightBottomContainer}>
          <div className={styles.headerContainer}>
            <GrCertificate size={30} className={styles.calenderIcon} />
            <h1 className={styles.header}>Certificates</h1>
          </div>
          <div className={styles.experienceContainer}>
            <div className={styles.jobDesc}>
              <p className={styles.bulletPointText}>• ALES: 81/100</p>
              <p className={styles.bulletPointText}>• IELTS: 6.5/9</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
