//01_jsx.js

const root = document.querySelector("#root");

//****** #1. createElement ******//
//const el = React.createElement('태그명', {속성(들)}, 'value 또는 자식요소');
const el1 = React.createElement(
    'h3',
    {className : 'title1', title : 'titleText'},
    'Hello, React1'
);
//ReactDOM.render(el1, root);

//****** #2. jsx ******//
//ReactDOM.render(<h3 className="title2">Hello, React2</h3>, root);

//****** #3. jsx + 변수 ******//
let username = '안재욱';
const el3 = (
    <h3 className="title3">
        Hello, {username}
    </h3>
);
ReactDOM.render(el3, root);
