const { Component, createRef } = React;
const { render } = ReactDOM;
const postURL = 'https://jsonplaceholder.typicode.com/posts';
const userURL = 'https://jsonplaceholder.typicode.com/users';

class Search extends Component {
  // css
  btClose = { right: '1em', cursor: 'pointer' };

  // js
  state = {
    query: '',
  };
  queryRef = createRef();
  onChange = (e) => {
    // this.setState({ query: this.queryRef.current.value })
    this.setState({ query: e.target.value });
    this.props.changeInput(e.target.value);
  };
  onClose = (e) => {
    this.setState({ query: '' });
    this.queryRef.current.focus();
    this.props.changeInput('');
  };
  render() {
    return (
      <form className="my-4 d-flex align-items-center position-relative">
        <h3 className="mr-3 font-weight-bold flex-shrink-0">검색어: </h3>
        <input
          onChange={this.onChange}
          ref={this.queryRef}
          className="form-control"
          autoFocus
          placeholder="검색할 단어를 적어주세요"
          value={this.state.query}
        />
        {this.state.query.length ? (
          <i
            className="fa fa-times position-absolute"
            style={this.btClose}
            onClick={this.onClose}
          />
        ) : (
          ''
        )}
      </form>
    );
  }
}

class Lists extends Component {
  caret = { cursor: 'pointer' };
  state = {
    sort: 'asc',
  };
  onChangeDesc = (e) => {
    this.setState({ sort: 'desc' }); // 내 화면 바꾸기
    this.props.changeSort('desc'); // 데이터 바꾸기(APP에 전달)
  };
  onChangeAsc = (e) => {
    this.setState({ sort: 'asc' });
    this.props.changeSort('asc');
  };
  render() {
    return (
      <table className="table my-3">
        <colgroup>
          <col width="80"></col>
          <col></col>
          <col width="180"></col>
          <col></col>
        </colgroup>
        <thead>
          <tr>
            <th>
              번호
              {this.state.sort === 'asc' ? (
                <i
                  className="fa fa-caret-down"
                  style={this.caret}
                  onClick={this.onChangeDesc}
                />
              ) : (
                <i
                  className="fa fa-caret-up"
                  style={this.caret}
                  onClick={this.onChangeAsc}
                />
              )}
            </th>
            <th>제목</th>
            <th>작성자</th>
            <th>내용</th>
          </tr>
        </thead>
        <tbody>
          {this.props.posts.map((post, idx) => (
            <List post={post} key={idx} />
          ))}
        </tbody>
      </table>
    );
  }
}

class List extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.post.id}</td>
        <td>{this.props.post.title}</td>
        <td>{this.props.post.name}</td>
        <td>{this.props.post.body}</td>
      </tr>
    );
  }
}

class App extends Component {
  state = {
    allPosts: [],
    searchPosts: [],
  };
  changeInput = (value) => {
    this.setState({
      searchPosts: this.state.allPosts.filter(
        (post) => post.title.includes(value) || post.body.includes(value)
      ),
    });
  };
  changeSort = (value) => {
    this.setState({
      ...this.state,
      searchPosts:
        value === 'asc'
          ? _.sortBy(this.state.searchPosts, 'id')
          : _.sortBy(this.state.searchPosts, 'id').reverse(),
    });
  };
  async componentDidMount() {
    try {
      const { data: posts } = await axios.get(postURL);
      const { data: users } = await axios.get(userURL);
      posts.forEach((post) => {
        let [{ name }] = users.filter((user) => user.id === post.userId);
        post.name = name;
      });
      this.setState({
        ...this.state,
        allPosts: [...posts],
        searchPosts: [...posts],
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className="container">
        <Search changeInput={this.changeInput} />
        <Lists posts={this.state.searchPosts} changeSort={this.changeSort} />
      </div>
    );
  }
}

render(<App />, document.querySelector('#root'));
