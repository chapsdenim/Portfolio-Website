import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import JobHistoryPage from '../components/JobHistoryPage'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home Page</title>
        <style>
        @import url(&lsquohttps://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&display=swap&rsquo);
        </style>

      </Head>

      <main >
        
      {/* <Link href="/posts/JobHistoryPage">
            <a>Home Page</a> 
        </Link> */}
        
        <div className= "cardContainer" >
          <img src="images/ProfilePhoto.jpg" className="profilePic"/>
          <h2 className="name">Gabriel Villegas</h2>
          <p className="curJobTitle">Web Developer</p>
          <p className="website">gvfullstack.com</p>
          <h3 className="about">About</h3>
          <p className="aboutDesc">I completed my undergrad studies with a focus in Accounting and Information Systems.  Initially I branched into an Accounting focused career.  I worked in that field for about 15 years, passed the CPA, CMA and CIA exams, and became a pretty well rounded accountant.  Although I enjoyed that journey, the part of the job I enjoyed most was developing tools in excel and access and participating in deploying enterprise software.  That is why I decided to branch into a Web Developer focused career.  The stack I am currently learning is JavaScript, React, Next.JS, Node.JS, Express, PostgreSQL, and MongoDB.  I am also learning Solidity, so I can explore the innerworkings of blockchain and smart contracts.</p>
    
       <div className = "cardFooterRow">

          <div className="cardFooterColumn">
              <a href="https://github.com/chapsdenim" >
              <img src="images/GitHub-Mark-Light-32px.png" />
              </a>
          </div>

          <div className="cardFooterColumn">
              <a href="https://www.linkedin.com/in/gabriel-villegas-cma-cia-4bbbb831/" >
              <img src="images/linkedin-32.ico" />
              </a>
          </div>

          <div className="cardFooterColumn">
              <a  >
              <img />
              </a>
          </div>

          <div className="cardFooterColumn">
              <a >
              <img />
              </a>
          </div>
            
        </div>
        
      </div>

        <h2 className="about"> Prior Work History</h2>
        <JobHistoryPage/>
      </main>

      <footer title="This is my footer">
        This site was crated using Next.js, JS, NodeJS, and React
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background:#1A1B21
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
       
        .profilePic {
          height: auto;
          margin-left:0px;
          margin-right:0px;
          border-radius: 10px 10px 0px 0px;
        }
      
        .name{
          color:white;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 700;
          font-size: 25px;
          line-height: 30px;
          text-align: center;
          padding:15px 15px 5px 15px;
          margin:0;
        }
        .curJobTitle{
          color: #F3BF99;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-size: 12.8px;
          line-height: 15px;
          text-align: center;
          padding: 0px;
          margin:0;

        }
        .website{
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-size: 10.24px;
          line-height: 150%;
          text-align: center;
          color: #F5F5F5;
          padding: 0px;
          margin: 0;
        }
        .about{
          text-align: left;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 150%;      
          color: #F5F5F5;
          padding:0px 0px 0px 15px
        
        }
        .aboutDesc{
          text-align: justify;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-size: 11px;
          line-height: 150%;
          color: #DCDCDC;
          width: 300;
          padding:1px 15px 40px 15px

        }
        .cardContainer {
          margin: 1rem;
          flex-basis: 45%;
          padding: 0rem;
          text-align: center;
          color: inherit;
          text-decoration: none;
          border: 1px solid black;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          background:#1A1B21;
          width: 369px;

          
        }

        .cardFooterRow{
          border-radius: 0px 0px 10px 10px;
          border-color:white;
          display: flex;
          background-color: black;
          padding: 0px 0px 0px 0px;
          margin:0px;

 
        }
        .cardFooterColumn{
          flex: 50%;
          padding: 25px;
          margin:0px;

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
