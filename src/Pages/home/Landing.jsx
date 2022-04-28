import Header from '../../Components/Header/Header';
import {Footer} from '../../Components/Footer/Footer';
import { Optioncard } from "../../Components/optioncards/Optioncard";
import styles from "./landing.module.css";
import {ResumeUpload} from '../../Components/ResumeUpload/ResumeUpload';
import Search from '../../Components/Search/Search';



const Landing = () => {
   
    
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
                  <Search />
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