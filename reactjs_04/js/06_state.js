//06_state.js

//state는 컴포넌트 본인이 가지고 있는 값
//변화가 필요한 경우 setState() 함수를 통해 값을 변경할 수 있음

const root = document.querySelector("#root");

class Counter extends React.Component {
    //상품 페이지의 최초 수량을 설정한다.
    state = {
        number : 1
    };

    //우선자 설정
    plus = () => {
        console.log(this.state.number);
        this.setState({
            number: this.state.number + 1
        });
    }

    //우선자 설정
    minus = () => {
        console.log(this.state.number);
        if(this.state.number < 2){
            this.setState({
                number: this.state.number
            });
            alert("최소 수량은 1입니다.");
        }else{
            this.setState({
                number: this.state.number - 1
            });
        }
    }
    
    render() {
        const {number} = this.state;
        console.log(number);  //1
        return(
            <div className="col-lg-4 d-flex justify-content-center align-items-center py-4 mx-auto">
                <div className="form-control form-text text-center">
                    <label className="my-4">상품 수량</label>
                    <div className="input-group form-text d-flex justify-content-center">
                        <button className="btn btn-primary" onClick={this.plus}>＋</button>
                        <input type="number" className="input-group-text" value={number} />
                        <button className="btn btn-primary" onClick={this.minus}>-</button>
                    </div>
                </div>
            </div>
        )
    }

}
class App extends React.Component{
    render() {
        return <Counter />
    }
}

ReactDOM.render(<App />, root);