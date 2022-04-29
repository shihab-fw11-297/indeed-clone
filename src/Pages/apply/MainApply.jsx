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
const MainApply = () => {
    const user = "shihab";
    const [right, setRight] = useState(true)

    return (
        <>
            <div>
                {user ? <Header1 /> : <Header />}
            </div>
            <MainApplyDiv>
                <LeftApplyDiv>
                          <ApplyForm setRight={setRight} />
                </LeftApplyDiv>
            </MainApplyDiv>
        </>
    )
}

export default MainApply