import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {ProgressBar, Button} from 'react-bootstrap';
import { QuestionData } from '../assets/data/questiondata';



const Question = () =>{
    const [questionNO, setQuestionNo] = React.useState(0);
    //useState(0)은 questionNo라는 변수를 선언하고, 초기값을 0으로 설정하는 구문임.
    //setQuestionNo를 호출하면 questionNO 변수에 새로운 값을 업데이트 하는 것임.
    const [totalScore, setTotalScore] = React.useState([
        {id: "EI", score:0},
        {id: "SN", score:0},
        {id: "TF", score:0},
        {id: "JP", score:0},
    ])
    const navigate = useNavigate();

    console.log('totalscore',totalScore);

    const handleClickButton =(no, type) =>{
        const newScore = totalScore.map((s) =>
            s.id === type ? {id : s.id, score: s.score +no} : s
        );

        setTotalScore(newScore);
        //다음 문제로 문제수 증가
        if(QuestionData.length !== questionNO +1){
            setQuestionNo(questionNO + 1);
        }
        else{
        //결과 페이지 이동
            navigate("/result");
        }
        
        /*
        if(type == "EI"){

        // 기존 스코어에 더할 값을 계산(기존의값 + 배점)
        const addScore = totalScore[0].score + no;
        // 새로운 객체
        const newObject = {id : "EI", score: addScore};
        // splice 통해 새로운 객체를 해당객체 자리에 넣어줌
        totalScore.splice(0,1,newObject);
        }

        else if (type == 'SN'){
        const addScore = totalScore[1].score + no;
        const newObject = {id : "SN", score: addScore};
        totalScore.splice(1,1,newObject);
        }

        else if (type == 'TF'){
        const addScore = totalScore[2].score + no;
        const newObject = {id : "TF", score: addScore};
        totalScore.splice(2,1,newObject);    
        }

        else{
        const addScore = totalScore[3].score + no;
        const newObject = {id : "JP", score: addScore};
        totalScore.splice(3,1,newObject);
        }
        
        
        */
    }
    /*
    const handleClickButtonB =(no) =>{
        if(type == "EI"){

        // 기존 스코어에 더할 값을 계산(기존의값 + 배점)
        const addScore = totalScore[0].score + no;
        // 새로운 객체
        const newObject = {id : "EI", score: addScore};
         // splice 통해 새로운 객체를 해당객체 자리에 넣어줌
        totalScore.splice(0,1,newObject);
        }
    
        else if (type == 'SN'){
        const addScore = totalScore[1].score + no;
        const newObject = {id : "SN", score: addScore};
        totalScore.splice(1,1,newObject);
        }
    
        else if (type == 'TF'){
        const addScore = totalScore[2].score + no;
        const newObject = {id : "TF", score: addScore};
        totalScore.splice(2,1,newObject);    
        }
    
        else{
        const addScore = totalScore[3].score + no;
        const newObject = {id : "JP", score: addScore};
        totalScore.splice(3,1,newObject);
        }
        setQuestionNo(questionNO+1);
    }
    */

    return (
    <Wrapper>
        <ProgressBar striped variant="danger" now={(questionNO /QuestionData.length)*100} style={{marginTop: '20px'}}/>
        <Title>{QuestionData[questionNO].title}</Title>
        <ButtonGroup>
            <Button onClick = {() =>handleClickButton(1, QuestionData[questionNO].type)}style={{width:'40%', minHeight: "200px", fontSize: '15pt'}}>{QuestionData[questionNO].answera}</Button>
            <Button onClick = {() =>handleClickButton(0, QuestionData[questionNO].type)}style={{width:'40%', minHeight: "200px", fontSize: '15pt', marginLeft: '20px'}}>{QuestionData[questionNO].answerb}</Button>
        </ButtonGroup>
    </Wrapper>
    )
    
}

export default Question; //다른 화면에서 사용하기 위해 적는 코드

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;

`

const Title = styled.div`
    font-size : 30pt;
    text-align: center;

`

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;  
    align-items: center;
    justify-content: center;

`

//row는 옆으로