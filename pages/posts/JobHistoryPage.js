import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { data } from "./CVDataFile"
import styles from './CVLayout.module.css' 
import Toolbar from '@mui/material/Toolbar';

export default function JobHistoryPage(){
    //to dynamically grow or shrink our job list, we import the data and assign it to a state variable
        //everytime a job is added or removed from CVDataFile, the state variable will re-render the page
    const [CVData, setCVData] = React.useState({data})

//we use the CV component, that takes in as arguments props/the jobs data, to apply formatting to each job.  
    function CV(props){

        return (
            <section className={styles.CVContainer} key = {props.id}>
                <img className={styles.logo} src={props.logoURL} width="150" height ="30"/>
                <ul className={styles.text}>
                    <li className={styles.text2}><b>Company:&nbsp;</b>{props.coName}</li>
                    <li className={styles.text2}><b>Title:&nbsp;</b>{props.title}</li>
                    <li className={styles.text2}><b>Tenure:&nbsp;</b>{props.startDate}-{props.endDate}</li>
                </ul>
            </section>
            )
        }
//we use experience variable to create an array using map, where each output array value will be the result of calling/executing 
    // the CV function and passin in as an argument each of the jobs. 
const experience = CVData.data.map((jobs) =>{
    return(
        <CV 
            id = {jobs.id}//the curly brackets indicate we are using JSX.
            coName = {jobs.coName} //inside the curly brackets we reference the data stored in our state variable 
            startDate = {jobs.startDate}
            endDate = {jobs.endDate}
            title = {jobs.title}
            jobDesc= {jobs.jobDesc}
            logoURL = {jobs.logoURL}
        />
        )
    })  
//the following retuns the actual page rendering.
//we use Link to link to another page within our app.
    return(
    <>
    <Toolbar>
        <Head>
            <title>Job History</title> 
        </Head>

        <Link href="/">
            <a>Home Page</a> 
        </Link> 
    </Toolbar>
        <section className = {styles.jobs}>
            {experience}
        </section>
    
        

    </>
    )
}