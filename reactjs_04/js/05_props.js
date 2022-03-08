//상세 페이지에서 꼬깔콘 2봉지를 선택 후 장바구니 버튼을 클릭 했음 -장바구니로 이동-> [장바구니 페이지]에서는  꼬깔콘 2봉지가 표현되어야 함
//  ==> 서로 다른 페이지가 어떤 상태를 공유하는 중

//props의 역할은 상태 정보를 갖고 있다면 이 상태 정보를 다른 컴포넌트와 공유하고 싶을 때 전달자의 역할을 담당
//props는 위에서 아래로만 흐른다. (부모가 자식에게만 전달 가능한 데이터)
//props는 read only(읽기전용), 변경불가(setter가 존재하지 않음)

/*
const root = document.querySelector("#root");
//#2. 자식의 영역으로써 그 값들을 모두 전달 받는다.
const AjwScore = (props) => {
    console.log(props);  //{name: '안재욱', title: '시험성적', mathScore: '75', korScore: '65', engScore: '80'}
    return (
        <div>
            <h3>{props.name}의 {props.title}</h3>
            <p>{props.name} 학생의 수학 시험성적 : {props.mathScore}</p>
            <p>{props.name} 학생의 국어 시험성적 : {props.korScore}</p>
            <p>{props.name} 학생의 영어 시험성적 : {props.engScore}</p>
        </div>
    );
}
//#1. 상위 부모인 영역에 props를 등록한다. 하위인 함수형 컴포넌트인 AjwScore로 전달을 시킴 
const App = (props) => (
    <AjwScore name="안재욱" title="시험성적" mathScore="75" korScore="65" engScore="80" />
);
//#3. 돌려받은 모든 값을 지정한 장소에 넣는다.
ReactDOM.render(<App />, root);
*/

//고정형 데이터가 아닌 배열형 데이터도 넣을 수 있음
const classScores = [
    ["혜리", "45", "65", "85"],
    ["보검", "95", "75", "65"],
    ["경표", "95", "90", "95"],
    ["동휘", "25", "45", "35"],
    ["재열", "90", "95", "85"],
];

const root = document.querySelector("#root");

const StudentScore = (props) => {
    console.log(props);  
    return (
        <div>
            <h3>{props.name}의 {props.title}</h3>
            <p>{props.name} 학생의 수학 시험성적 : {props.mathScore}</p>
            <p>{props.name} 학생의 국어 시험성적 : {props.korScore}</p>
            <p>{props.name} 학생의 영어 시험성적 : {props.engScore}</p>
        </div>
    ) 
}

const App = (props) => (
    <div>
        {classScores.map( (v, i) => (
            <StudentScore name={v[0]} title="중간고사 성적" mathScore={v[1]} korScore={v[2]} engScore={v[3]} key={i} />
        ))}
    </div>
);

ReactDOM.render(<App />, root);

//리스트 화면일 경우, props 역할을 기본 베이스로 작성된다면 리액트를 활용할 수 있는 도구가 됨