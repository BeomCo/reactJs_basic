//04_component.js

//Component는 재사용 가능한 코드 조각
//Component는 항상 대문자로 시작. 소문자로 시작을 하면 태그로 분류
console.log(React.Component);
/*
ƒ Component(props, context, updater) {
    this.props = props;
    this.context = context; // If a component has string refs, we will assign a different object later.

    this.refs = emptyObject; // W…
*/

//DOM으로 접근 가능한 문서의 위치를 지정
const root = document.querySelector("#root");

//1. Class로 Component 구성하기
class Hello1 extends React.Component {
    render(){
        const userName = 'BTS';
        return <h3>Hello, {userName}</h3>;
    }
}
//let who = new Hello1();
//console.log(who);  //Hello1 {props: undefined, context: undefined, refs: {…}, updater: {…}}


//2. Hooks(함수형)로 Component 구성하기
const Hello2 = () => {
    const userName = '아이유';
    return <h3>Hello, {userName}</h3>;
}

const el = (
    <div>
       <Hello1 /> 
       <Hello2 />
    </div>
);
ReactDOM.render(el, root);