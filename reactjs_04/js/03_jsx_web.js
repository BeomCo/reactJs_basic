//03_jsx_web.js

//메뉴 패턴(2차배열) : ["메뉴 명칭", "URL 경로"]
const menu_arr = [
    ["About", "/about"],
    ["Project", "/project"],
    ["Portfolio", "/portfolio"],
    ["Contact", "/contact"],
];

const headerEl = (
    <header className="container-fluid bg-light border-bottom">
        <div className="container h-100 d-flex justify-content-between align-items-center">
            <div className="logo">
                <a href="#"><img src="../img/logo.png" /></a>
            </div>
            <nav>
                <ul className="d-flex">
                    {menu_arr.map((v, i) => (
                        <li className="mx-3" key={i}>
                            <a className="text-secondary" href={v[1]}>{v[0]}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </header>
);

const sec1_arr = [
    ["../img/f1.jpg", "Photo_1"],
    ["../img/f2.jpg", "Photo_2"],
    ["../img/f3.jpg", "Photo_3"],
    ["../img/f4.jpg", "Photo_4"],
    ["../img/f5.jpg", "Photo_5"],
    ["../img/f6.jpg", "Photo_6"],
    ["../img/f7.jpg", "Photo_7"],
];

const section1El = (
    <div className="pt-5">
        <div className="container">
            <h2 className="text-center text-secondary">Best Items</h2>
        </div>
        <div className="container py-5">
            <div className="row justify-content-center pt-3">
            {sec1_arr.map((v, i) => (
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={i}>
                    <img className="w-100" src={v[0]} alt={v[1]} />
                </div>
            ))}
            </div>
        </div>
    </div>
);

ReactDOM.render(headerEl, document.querySelector('#header'));
ReactDOM.render(section1El, document.querySelector('#section1'));