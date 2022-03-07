//React.createElement(elementName, data, child)
//elementName(요소명) : HTML 태그명 'h1'과 같은 문자열 또는 컴포넌트 객체를 넘겨줄수도 있음
//data : 속성이나 상위 컴포넌트로부터 받는 값. null이나 {name:"홍길동"}과 같은 데이터 형태
//child : 요소내부의 자식 위치에 들어올 콘텐츠(텍스트, 이미지, 미디어,...)

//모든 구성이 종료되고나서
//ReactDOM.render(선언된 공간, 선택자)  :   이 코딩을 선언함으로써 필요한 내용을 문서에 전달하는 역할 담당

/*
const start_hello = React.createElement('h2', {name : '안녕', class : 'hello'}, 'Hello React');

ReactDOM.render(header, document.getElementById('root'));
*/

/*
const logo_in = React.createElement(
    'span',
    null,
    'BRAND'
);

const logo = React.createElement(
    'a',
    {class : 'logo'},
    logo_in
);

const menu = React.createElement(
    'div',
    {class : 'menu'},
    'MENU SPACE'
);
*/

const logo_a = React.createElement(
    'a', 
    {class:'text-white fs-5 d-block', href:'#'},
    'BRAND'
);
const logo = React.createElement(
    'div',
    {class:'logo'},
    logo_a
);

const menu_a_1 = React.createElement(
    'a',
    {class:'text-secondary d-block', href:'#'},
    'ABOUT'
);
const menu_li_1 = React.createElement(
    'li',
    {class:'mx-3'},
    menu_a_1
);

const menu_a_2 = React.createElement(
    'a',
    {class:'text-secondary d-block', href:'#'},
    'PORTFOLIO'
);
const menu_li_2 = React.createElement(
    'li',
    {class:'mx-3'},
    menu_a_2
);

const menu_a_3 = React.createElement(
    'a',
    {class:'text-secondary d-block', href:'#'},
    'CONTACT'
);
const menu_li_3 = React.createElement(
    'li',
    {class:'mx-3'},
    menu_a_3
);

const menu_ul = React.createElement(
    'ul',
    {class:'d-flex'},
    menu_li_1, menu_li_2, menu_li_3
);

const wrap = React.createElement(
    'div',
    {class:'container h-100 d-flex justify-content-between align-items-center', id:'wrap'},
    logo, menu_ul
);

const header = React.createElement(
    'header',
    {class : 'container-fluid bg-dark', id:'header'},
    wrap
);

const section1 = React.createElement(
    'section',
    {id:'sec_01', class:'bg-light vh-100'},
    'section_01 space'
);

const footer = React.createElement(
    'footer',
    {class:'bg-dark text-white py-3 text-center'},
    'Copyrights'
);

const web = React.createElement(
    'div',
    {class:'total'},
    header, section1, footer
);

ReactDOM.render(web, document.getElementById('root'));


