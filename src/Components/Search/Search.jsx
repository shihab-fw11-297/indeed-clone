import { BsSearch } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import { jobs } from '../../jobs'
import styles from "./search.module.css";

const Search = ({ query, setQuery, setUsers }) => {

    const [search, setSearch] = useState([]);
    const options = useRef();
    const buttref = useRef();

    const showdata = (e) => {
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

    const filter = () => {
        let fData = jobs.filter((el) => (el.job === options.current.value))
        setUsers(fData)

    }

    return (
        <>
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
                                            {search.filter((asd) =>
                                                asd.job.toLowerCase().includes(query)
                                            ).map((el, i) => (
                                                <div key={i} className={styles.autocompleteItems}>
                                                    <span onClick={manage}>{el.job}</span>
                                                </div>
                                            ))}
                                        </div>
                                    ) : setQuery("")}
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
                    <button className={styles.btn} onClick={filter}><Link className="link" to="/results">Find jobs</Link></button>
                </div>
            </div>

        </>
    )
}

export default Search;