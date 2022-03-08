//02_jsx.js

const root = document.querySelector('#root');

//회원명단
const member = [
    {name:'유재석', age:'46', region:'서울'},
    {name:'지석진', age:'51', region:'경기'},
    {name:'전소민', age:'30', region:'인천'},
    {name:'하하', age:'41', region:'서울'},
];
const el = (
    <div>
        {/* jsx 주석 */}
        {/* jsx의 최상위 root는 하나의 태그로만 구성된다. */}
        {/* jsx에서 표현식(삼항조건 연산자(A<B?true:false), map, filter, every, include, ...) 만 가능*/ }
        {/* jsx에서 표현식 변수선언, if, for는 작성할 수 없음*/}
        {/* 속성명 중 class ==> className*/}
        {/* 
            let $img1 = "img_01.jpg";
            <img src="./img/"+$img1 /> 
            (사용불가 - 문법에러 발생)

            let $img2 = "./img/img_01.jpg";
            <img src={$img2} />
            (사용가능) 
        */} 
        <ul>
            {member.map((v, i) => (
                <li key={i}>
                    {v.name} 
                    <span className="mx-3">|</span>
                    {v.age}세
                    <span className="mx-3">|</span>
                    {v.region}
                </li>
            ))}
        </ul>
    </div>
);
ReactDOM.render(el, root);
