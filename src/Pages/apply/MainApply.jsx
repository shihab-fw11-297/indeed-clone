import Header from '../../Components/Header/Header';
import { Header1 } from '../../Components/Header/Header1';
import styled from 'styled-components'
import ApplyForm from '../../Components/applyForm/ApplyForm';
import { useState } from 'react'

const MainApplyDiv = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`
const LeftApplyDiv = styled.div`
    width: 60%;
`
const RightApplyDiv = styled.div`
    width: 40%;
    background: rgb(250, 249, 248);
    .detailHolder{
        background-color:rgb(255,255,255);
        width:80%;
        box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px ;
        margin:auto;
        border:1px solid rgba(0,0,0,.4);
        border-radius:8px;
        padding:16px;
        margin-top:70px;
    }
    .line{
        width:100%;
        height:1px;
        background-color:rgba(0,0,0,.3);
        margin:auto;
        margin-bottom:20px;
    }
    .detailHolder p{
        font-size:12px;
        font-weight:500;
        color:rgba(0,0,0,.6)
    }
    .detailHolder ul>li{
        margin-bottom:10px;
        font-size:15px;
    }
`

const MainApply = () => {
    let user = JSON.parse(localStorage.getItem('user'))
    const [right, setRight] = useState(true)
    let appliedJob = JSON.parse(localStorage.getItem('appliedJob'))

    return (
        <>
            <div>
                {user ? <Header1 /> : <Header />}
            </div>
            <MainApplyDiv>
                <LeftApplyDiv>
                          <ApplyForm setRight={setRight} />
                </LeftApplyDiv>

                {right ? <RightApplyDiv>
                <div className="detailHolder">
                    <h4>{appliedJob.job}_Immediate Joiner only</h4>
                    <p>{appliedJob.companyName} - {appliedJob.city}, {appliedJob.state}</p>
                    <div className="line"></div>
                    <ul>
                        <li>Bachelor's degree in Computer Science, Information Technology, or a similar field.</li>
                        <li>Minimum 2 years of Experience as a React.js Developer.</li>
                        <li>In-depth knowledge of JavaScript, CSS, HTML and front-end languages.</li>
                        <li>Knowledge of REACT tools including React.js, Redux, and Flux.</li>
                        <li>Experience with user interface design.</li>
                    </ul>
                </div>
            </RightApplyDiv> : null}

            </MainApplyDiv>
        </>
    )
}

export default MainApply