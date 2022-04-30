import Header from '../../Components/Header/Header';
import { Filters } from '../../Components/filter/Filters';
import { Header1 } from '../../Components/Header/Header1';
import { JobCards } from '../../Components/JobCards/JobCards';
import { Footer } from '../../Components/Footer/Footer';
import { ResumeUpload } from '../../Components/ResumeUpload/ResumeUpload';
import { JobDetails } from '../../Components/JobDetails/JobDetails';

import styles from "./result.moule.css";
import { jobs } from '../../jobs'
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

export const SearchResults = () => {
    const [users, setUsers] = useState(jobs.slice(0, 50))
    let user = JSON.parse(localStorage.getItem('user'))
    const [pageNumber, setpageNumber] = useState(0)
    const [details, setDetails] = useState("")
    const [fa, setFa] = useState(true)
    const [crossit, setCrossit] = useState(true)
    const [sort, setSort] = useState(true)
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [pageNumber]);
    
    const usersPerPage = 5
    const pagesVisited = pageNumber * usersPerPage;
    const displayjobs = users.slice(pagesVisited, pagesVisited + usersPerPage)
    const pageCount = Math.ceil(users.length / 10)

    const changePage = ({ selected }) => {
        setpageNumber(selected)
    };
    return (
        <>
            <div className={styles.head}>
            {user ? <Header1 /> : <Header />}
            </div>
          
            <Filters setUsers={setUsers} jobs={jobs} />
            
            <div className="middle-container" >
                <div className="Left-container">
                    <div className="search-param">
                        <div className="upload">
                            <h4>
                                Upload your resume
                            </h4>
                            <h4 id="h4"> - Let employers find you</h4>
                        </div>
                        <div className="pages">
                            <p>Online Typing jobs</p>
                            <div>
                                <div className="sort">
                                    Sort by : <span className={sort ? "grey" : "blue"} onClick={() => {
                                        let x = users.sort((a, b) => {
                                            return (b.rating - a.rating)
                                        })
                                        setSort(!sort)

                                        setFa(!fa)
                                        setUsers(x)
                                    }}
                                    >Relavance</span> - <span className={sort ? "blue" : "grey"} onClick={() => {
                                        let x = users.sort((a, b) => {
                                            return (a.date - b.date)
                                        })
                                        setFa(!fa)
                                        setSort(!sort)
                                        setUsers(x)
                                    }}>Date</span>
                                </div>
                                <div>
                                    Page {pageNumber + 1} of {users.length} jobs
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="jobs-container">
                        {
                            displayjobs?.map((el) => {

                                return <JobCards crossit={crossit} setCrossit={setCrossit} key={el.id} ele={el} setDetails={setDetails} />
                            })
                        }
                    </div>

                    <div className="paginate">
                        <ReactPaginate
                            previousLabel={"<"}
                            nextLabel={">"}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={"paginateBttns"}
                            previousLinkClassName={"previousBn"}
                            nextLinkClassName={"nextBn"}
                            disabledClassName={"paginateDisabled"}
                            activeClassName={"paginateActive"}
                        />
                    </div>
                </div>
                <div className={crossit ? "hideit" : "right-container"} >
                    {details === "" ? null : <JobDetails details={details} crossit={crossit} setCrossit={setCrossit} />}
                </div>
            </div>
            <Footer />
            <ResumeUpload />
        </>
    );
};