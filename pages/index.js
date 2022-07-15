import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import JobHistoryPage from "../components/JobHistoryPage";
import { IconContext } from "react-icons/lib";
import { padding } from "@mui/system";
import CSProgrammingCourses from "../components/CSProgrammingCourses";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home Page</title>
      </Head>

      <main>
        {/* <Link href="/posts/JobHistoryPage">
            <a>Home Page</a> 
        </Link> */}

        <div className="cardContainer">
          <img src="images/ProfilePhoto.jpg" className="profilePic" />
          <h2 className="name">Gabriel Villegas</h2>
          <p className="curJobTitle">Web Developer</p>
          <p className="website">gvfullstack.com</p>
          <h3 className="about">About</h3>
          <p className="aboutDesc">
            I completed my undergrad studies with a focus in Accounting and
            Information Systems. Initially I branched into an Accounting focused
            career and worked in that field for about 15 years. Although I
            enjoyed that journey, the part of the job I enjoyed most was
            developing tools (mainly in excel and access) and participating in
            deploying enterprise software. That is why in 2021 I finaly decided
            to branch into Web Development. The stack I am currently learning is
            JavaScript, React, Next.JS, Node.JS, Express, PostgreSQL, and
            MongoDB. I am also learning Solidity, so I can explore the
            innerworkings of blockchain and smart contracts.
          </p>

          <div className="cardFooterRow">
            <div className="cardFooterColumn">
              <a href="https://github.com/chapsdenim">
                <img src="images/GitHub-Mark-Light-32px.png" />
              </a>
            </div>

            <div className="cardFooterColumn">
              <a href="https://www.linkedin.com/in/gabriel-villegas-cma-cia-4bbbb831/">
                <img className="linksIcons" src="images/linkedin-32.ico" />
              </a>
            </div>

            <div className="cardFooterColumn">
              <a>
                <img />
              </a>
            </div>

            <div className="cardFooterColumn">
              <a>
                <img />
              </a>
            </div>
          </div>
        </div>
        <h2 className="about"> Programming Education</h2>
        <CSProgrammingCourses />
        <h2 className="about"> Prior Work History</h2>
        <JobHistoryPage />
      </main>

      <footer title="This is my footer">
        This site was crated using Next.js, JS, NodeJS, and React
      </footer>
    </div>
  );
}
