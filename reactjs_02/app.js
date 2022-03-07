/*
[createElement()]
#1. 첫번째 파라메터 => 태그명으로 변경
#2. 두번째 파라메터 => 태그의 속성명으로 변경
#3. 세번째 파라메터 => 모두 자식 노드로 변경

*/
//[createElement() API로 작성방법]
/*
const title = React.createElement(
    'h1',
    {title:'txtTitle'},
    'My Title'
);
const content = React.createElement(
    'p',
    null,
    '콘텐츠 공간입니다.'
);
const box = React.createElement(
    'div',
    {class:'col-4 card bg-dark text-white p-4'},
    title, content
);
ReactDOM.render(box, document.querySelector("#root"));
*/

//[createElement() ==> JSX로 수정]
//class => className, for => htmlFor 으로 변경
//javascript expression => {}
//반드시 닫는 태그가 있어야 한다.

/*

const title = <h1 title='txtTitle'>My Title</h1>;
console.log(title);
const content = <p>콘텐츠 공간입니다.</p>;

// const box = React.createElement(
//     'div',
//     {class:'col-4 card bg-dark text-white p-4'},
//     title, content
// );

const box = (<div className="col-4 card bg-dark text-white p-4">{[title, content]}</div>);  //jsx expression을 사용하여 배열에 선언된 변수를 넣어줌

ReactDOM.render(box, document.querySelector("#root"));
*/


//자식 노드가 존재하는 경우 변수를 별도로 만들기 보다는 부모 아래 자식 노드를 JSX로 변경
/*
const box = (<div className="col-4 card bg-dark text-white p-4">
    <h1 title='txtTitle'>My Title</h1>
    <p>콘텐츠 공간입니다.</p>
</div>);
ReactDOM.render(box, document.querySelector("#root"));
*/

//[JSX expression를 활용한 동적 표현 방식 적용 : JSX를 좀 더 동적으로 만들기 위해서는 태그 내부에 자바스크립트 변수를 {}로 감싸서 삽입]
const strTitle = 'txtTitle active';

const strText = '리액트 재미있습니다.';

const box = (<div className="col-4 card bg-dark text-white p-4">
    <h1 title={strTitle}>My Title</h1>
    <p>{strText}</p>
</div>);

ReactDOM.render(box, document.querySelector("#root"));



