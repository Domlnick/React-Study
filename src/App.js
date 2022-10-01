/* eslint-disable */
import './App.css';
import React, { useState } from 'react';

function App() {

  let [title, setTitle] = useState(['React 기본 다루기', 'useState() 다루기', 'Components 다루기']);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [titleNo, setTitleNo] = useState(0);
  let [input_value, setInput_value] = useState('');

  const date = new Date();

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'beige', fontsize: '16px'}}>React Blog</h4>
      </div>

      {/* <button onClick={() => {
        let copy = [...title];
        copy.sort();
        setTitle(copy);
      }}>정렬버튼</button>

      <button onClick={() => { 
        let copy = [...title];
        copy[0] = '여자코트 추천';
        setTitle(copy);
      }}>글수정</button> */}
      {/* <div className='list'>
        <h4> {title[0]}  <span onClick={ () => { setLike(like + 1) }}>👍
        </span> {like}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4> { title[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={() => { setModal(!modal) }}>{ title[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}
      <Modal2></Modal2>
      {
        title.map(function (a, i){
          return (
            <div className='list' key ={i}>
               <h4 onClick={() => { setModal(!modal); setTitleNo(i) }}> {title[i]}  
                  <span onClick={ (e) => {
                    e.stopPropagation();
                    let newlike = [...like];
                    newlike[i] += 1;
                    setLike(newlike);
                  }}>👍  {like[i]}
                  </span> 
                </h4>
              <p>발행일자 : {date.toLocaleString()}</p>
              <button onClick={() => {
                let copy = [...title];
                copy.splice(i, 1);
                setTitle(copy);
              }}>삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e) => {
        setInput_value(e.target.value);
      }}/>
      <button onClick={() => {
        let copy = [...title];
        {input_value.length == 0 ? alert("title을 입력해주세요."): copy.unshift(input_value)}
        setTitle(copy);

        let copy2 = [...like];
        copy2.unshift(0);
        setLike(copy2);

      }}>글발행</button>
        
      {
        // 조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드
        // <자식컴포넌트 작명 = {State 이름}>
        modal == true ?  <Modal color={'gray'} 새로운글 = {input_value} titleNo = {titleNo} title ={title} setTitle={setTitle}/> : null
      }
      
    </div>
  );
}



function Modal(props){
  return (
    <>
      <div className='modal' style={{background: props.color}}>
        <h4>{props.title[props.titleNo]} </h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
    </>
  );
}

class Modal2 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name : 'Lee',
      age : 20
    }
  }
  render(){
    return(
      <div>안녕 {"\t"}{this.state.name}
        <button onClick={() => {
          this.setState({name : 'Lee Dongkyu'})
        }}>버튼</button>
      </div>
    )
  
  }
}

export default App;
