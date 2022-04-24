import Header from '../Components/Header';
import {Footer} from '../Components/Footer';
import { Optioncard } from "../Components/Optioncard";
import styles from "./landing.module.css";
import {ResumeUpload} from '../Components/ResumeUpload';

import { BsSearch } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { useCallback, useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import {jobs }from '../jobs' 

const Landing = () => {
    const [search, setSearch] = useState([]);
    const [query, setQuery] = useState("");
    const options = useRef();
    const buttref = useRef();

    const showdata = (e) =>{
        setQuery(e.target.value.toLowerCase())
         setSearch(jobs)
    }

    const manage = (e) => {
        let searchQuery = e.target.innerText
        localStorage.setItem("searchQuery", searchQuery)

       options.current.value = e.target.innerText
       buttref.current.style.height = "50px"
       buttref.current.style.overflowY = "none"
    }
    
    return (
        <div className="sd">
            <div className={styles.head}>
                <Header />
            </div>

            <div
                style={{
                    paddingTop: "70px",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                }}
            >
                <div style={{ display: "flex" }}>
                    <div className={styles.area}>
                        <form className={styles.forms} action="">
                        
                        <div ref={buttref} className={styles.deb}>
                                <div className={styles.search}>
                                    <div className={styles.lab}>What</div>
                                    <div className={styles.inp}>
                                        <input
                                            type="text"
                                            ref={options}
                                            placeholder="Job title, keywords, or company"
                                            className={styles.inpu}
                                            onChange={showdata}

                                        />
                                    </div>
                                    <div style={{ paddingRight: "0rem", paddingTop: '3px' }}>
                                        <BsSearch style={{ width: 15 }} />{" "}
                                    </div>
                                </div>
                                <div>
                                {
                                query?.length > 1 ? (
                                    <div className={styles.autocomplete}>
                                        { search.filter((asd) =>
                                            asd.job.toLowerCase().includes(query)
                                         ).map((el, i) => (
                                            <div key={i} className={styles.autocompleteItems}>
                                                <span onClick={manage}>{el.job}</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : ""}
                                </div>
                            </div>

                            <div className={styles.deb2}>
                                <div className={styles.search2}>
                                    <div className={styles.lab2}>Where</div>
                                    <div className={styles.inp2}>
                                        <input
                                            type="text"
                                            placeholder="City,state,or pin code"
                                            className={styles.inpu2}
                                        />
                                    </div>
                                    <div style={{ paddingRight: "0rem", paddingTop: '3px' }}>
                                        <MdLocationOn style={{ width: '20px' }} />{" "}
                                    </div>
                                </div>
                            </div>
                        </form>
                        <button className={styles.btn} ><Link className="link" to="/results">Find jobs</Link></button>
                    </div>
                </div>

                <div className={styles.contain}>
                    <div className={styles.post}>
                        <span className={styles.highlight}>Post your resume -</span>
                        <span className={styles.para}> It only takes a few seconds</span>
                    </div>
                </div>

                <div className={styles.empty1}></div>

                <div className={styles.searchTitle}>
                    <h2>Popular searches</h2>
                    <div className={styles.options}>
                        <Optioncard title="Government" />
                        <Optioncard title="Online Typing" />
                        <Optioncard title="Work From Home" />
                        <Optioncard title="Bank" />
                        <Optioncard title="Delivery Executive" />
                        <Optioncard title="Healthcare" />
                        <Optioncard title="Online Tutoring" />
                        <Optioncard title="Police" />
                        <Optioncard title="Nursing" />
                        <Optioncard title="NGO" />
                    </div>
                    <div className={styles.empty2}></div>
                </div>

                <div className={styles.contain2}>
                    <div className={styles.post2}>
                        <span className={styles.para2}> For jobs in the United States, visit <span className={styles.links}>www.indeed.com </span></span>
                        <span className={styles.para2}>Indeed  <span className={styles.links}>हिंदी </span>में भी ऑफ़र करता है</span>
                    </div>
                </div>
            </div>

            <div className={styles.footDiv}>
                <Footer></Footer>
            </div>

            <div className={styles.resume}>
                <ResumeUpload></ResumeUpload>
            </div>

        </div>
    )
}

export default Landing