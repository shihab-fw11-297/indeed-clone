import Header from '../../Components/Header/Header';
import{ Filters }from '../../Components/filter/Filters';
import {Header1} from '../../Components/Header/Header1';
import styles from "./result.moule.css";
import {jobs }from '../../jobs' 

export const SearchResults = () => {
    const user="Shihab";

    return (
        <>
           <div className={styles.head}>
             {  user ? <Header1 /> : <Header/>}
            <Filters/>

            </div>
        </>
    );
};