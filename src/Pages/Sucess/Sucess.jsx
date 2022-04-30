import React from 'react'
import { FcCheckmark } from "react-icons/fc";
import Header from '../../Components/Header/Header';
import { Header1 } from '../../Components/Header/Header1';
import styles from "./sucess.module.css";
import { Link, } from "react-router-dom";

import '../../App.css'
export const Sucess = () => {

    let user = "Shihab"
    let comp = JSON.parse(localStorage.getItem('appliedJob')).companyName

    return (
        <div>
           <div className={styles.head}>
            {user ? <Header1 /> : <Header />}
            </div>
          
           
            <div className={styles.success}>
                <img src="/Your-application.png" alt="" />
                <div className={styles.information}>
                    <div>
                        
                        <p><FcCheckmark /> You will get an email confirmation at <strong>{user.emaild}</strong></p>
                    </div>
                    <div>
                        
                        <p><FcCheckmark /> <strong>{comp}</strong> typically responds to applications within 10 days.</p>
                    </div>
                    <div className={styles.gobackk}><Link exact to="/">Return to job search</Link></div>
                </div>
            </div>
        </div>
    )
}