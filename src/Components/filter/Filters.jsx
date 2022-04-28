import './Filter.css'
import { Buttons } from "../button/Buttons";
import Search from '../Search/Search';
import Button from "@material-ui/core/Button";
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDownSharp';

export const Filters = ({ setUsers, jobs,query,setQuery }) => {
console.log(setUsers);
    const filters = [
        "Date Posted",
        "Remote",
        "Education level",
        "Company",
        "Job Language",
        "Job Type"
    ];
    const dateItems = [
        "Last 10 days",
        "Last 15 days",
        "Last 8 days",
        "Last 4 days",
        "Last 3 days",
    ];
    const jtype = ["Part Time(5)",
        "Fill Time(15)", "Fresher(4)", "InternShip(10)"
    ]
    const remote = ["Work from home", "On site"];
    const education = [
        "Bachelor's Degree(12)",
        "12th Pass(2)",
        "Master's Degree(1)",
        "10th Pass(2)",
    ];
    const company = ["Aivee", "Trilia", "Fadeo", "Zoomzone", "Mita", "Yodel", "Feedfish", "Dazzlesphere", "Twitterbridge", "Yadel", "Gigashots", "Tazzy", "Flashspan", "Devpulse", "Devbug", "Topicstorm", "Skyndu", "Talane", "Tekfly", "Dabfeed", "Skinder", "Bubblebox", "Kazio", "Fiveclub", "Twitternation", "Mynte", "Einti", "Oyope", "Twitterbeat", "Jabberbean", "Blogspan", "Wikizz", "Linktype", "Buzzdog", "Eazzy", "Oyoba", "Feedbug", "Photolist", "Tanoodle", "InnoZ", "Kare", "Skyba", "Fivespan", "Tagpad", "Babbleblab", "Mydo", "Buzzster", "Yotz"];
    const language = ["English", "Hindi", "Marathi"];

    return (
        <div className="upper-part">
            <div className="wrapper">
               
                   <Search query={query} setQuery={setQuery} setUsers={setUsers}/>
              
                 {/* Filter Dropdowns */}
                 <div className="filter-div">
                    <Buttons setUsers={setUsers} jobs={jobs} tag={filters[0]} filters={dateItems} />
                    <Buttons setUsers={setUsers} jobs={jobs} tag={filters[1]} filters={remote} />
                    <Buttons setUsers={setUsers} jobs={jobs} tag={filters[2]} filters={education} />
                    <Buttons setUsers={setUsers} jobs={jobs} tag={filters[3]} filters={company} />
                    <Buttons setUsers={setUsers} jobs={jobs} tag={filters[4]} filters={language} />
                    <Buttons setUsers={setUsers} jobs={jobs} tag={filters[5]} filters={jtype} />

                    <div id="parentDiv"  >
                        <Button classes={{ root: 'button', label: 'button-label' }} variant="contained">
                            Salary Estimate <ArrowDropDownSharpIcon />{" "}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}