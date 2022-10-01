# React-Study

> HTML, CSS, javaScript의 기본 주요 문법은 전에 학습한 내용을 토대로 공부한 자료 입니다.

## useState()
* useState 기본 문법
  > let [var, setVar] = useState(initial_value);
* 이후 코드에서 var 변수 변경 시 
  > setVar(변경 값);
  
## Component
* 기본 Component
```javascript
// function 이용
function 함수명 (){
// -> let 함수명 = () => { 와 동일
  // 필요시 변수 선언
  const 글작성일 = "2022-10-01";
  
  return(
    <div className = "함수명">
      <h4>제목</h4>
      <p>내용</p>
      <p>{ 글작성일 }</p>
      <button>버튼</button>
    </div>
  )
}

// 이후 필요 한 곳에서
<함수명></함수명> //또는
</함수명> //으로 사용
```
## Props
> 부모 : \<App\> \
> 자식 : \<Components/\>
```javascript
function App (){
  let date = new Date();
  let today = date.toLocaleString();
  
  return (
    <div>
      <p>{ today }</p>
      // <자식 Component 변수명 = { 넘겨줄 변수 } />
      <Child today = {today}/>
    </div>
  )
}

function Child(props){
  return (
    <div className="child">
      <p>{ props.today }</p>
    </div>
  )
}

```
## 사용자 입력 데이터 다루기
> input value -\> input tag의 onChange()를 이용하여 변수에 담아 사용

```javascript

function App() {
  let [input, setInput] = useState('');
  
  return (
    <input onChange = { (e) => {
      setInput(e.target.value)
      console.log(input)
      alert(input) // 기타 등등
    }} />
  )
}


```
