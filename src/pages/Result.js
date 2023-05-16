import React from 'react';

import styled from 'styled-components';
import PangImage from '../assets/catimage.jpeg';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { ResultData } from '../assets/data/resultdata';

const Result = () =>{
    const navigate =useNavigate();

    return(
        <Wrapper>
            <Header>에비집사 판별기</Header>
            <Contents>
                <Title>결과보기</Title>
                <LogoImage>
                    <img src={ResultData[0].image} className ="rounded-circle" width ={350} height ={350}></img>
                </LogoImage>
                <Desc>예비 집사님과 찰떡궁합인 고양이는 {ResultData[0].name}입니다.</Desc>
                <Button onClick={()=>navigate("/")}>테스트 다시하기</Button>
            </Contents>
        </Wrapper>

    )
}

export default Result; //다른 화면에서 사용하기 위해 적는 코드

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;

`

const Header = styled.div`
    font-size: 40pt;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Title = styled.div`
    font-size : 30pt;
    margin-top : 40px;   
`//위에 공백

const LogoImage = styled.div`
    margin-top : 10px;
`

const Desc = styled.div`
    font-size: 20pt;
    margin-top: 20px;
`
  
const Contents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;  
`
//flex-direction: colum은 세로로 정렬이 되게 하는것