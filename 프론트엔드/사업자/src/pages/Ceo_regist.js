import React, { Component } from 'react';
import './Ceo_regist.css';
import Noregist from './Noregist';
import { post } from 'axios';
import Postcode from '../Servicelist/kakaoAddress';
import { Dropdown } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';



class Ceo_regist extends Component {

    state = {
        category: '',
        busName: '',
        busAddress: '',
        busNo: '',

    }

    close = () => {
        window.opener.location.href = `http://localhost:3001/${this.props.match.params.uid}`;
        window.close()

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state);
    }

    hadleAddress = (e) => {
        this.setState({
            busAddress: e.target.value
        })
        console.log(this.state);
    }

    handleSubmit = (e) => {
        // e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
            })
        this.setState({
            category: '',
            busName: '',
            busAddress: '',
            busNo: '',

        })

        this.close()
        console.log(this.state);

    }

    addCustomer = () => {
        const url = `http://52.79.100.159:8080/api/store_list`
        const data = {
            userId: this.props.match.params.uid,
            store_name: this.state.busName,
            store_address: this.state.busAddress,
            storeNumber: this.state.busNo,
            category: this.state.category,

        };
        const header = {
            'Content-Type': 'application/json'
        };
        return post(url, data, header);
    }

    optionchange = (e) => {
        this.setState({
            category: e.target.value
        });

    }

    optionclick = (data) => {
        this.setState({
            category: data,
        });

    }


    address = () => {
        window.open('address', 'address', 'width=600, height=600');
    }

    addressalert = (text) => {
        alert(text);
    }

    receiveMessage = (address) => {
        this.setState({
            busAddress: address.data
        })
    }

    componentDidMount() {
        window.addEventListener("message", this.receiveMessage, false);
    }

    render() {
        console.log(this.state);
        console.log(this.props.match.params.uid);
        return (
            <div className="login_cont">
                <div className="login_cont_cont">
                    <div className="login_logo">

                        <h6>사업 등록하기</h6>

                        {/* <div className='radio'>
                            <input type="radio" value="음식점" checked={this.state.category === '음식점'} onChange={this.optionchange} />
                            <button value="음식점" onClick={this.optionchange}>음식점</button>

                            <input type="radio" value="미용실" checked={this.state.category === '미용실'} onChange={this.optionchange} />
                            <button value="미용실" onClick={this.optionchange}>미용실</button>

                            <input type="radio" value="헬스장" checked={this.state.category === '헬스장'} onChange={this.optionchange} />
                            <button value="헬스장" onClick={this.optionchange}>헬스장</button>

                            <input type="radio" value="PC방" checked={this.state.category === 'PC방'} onChange={this.optionchange} />
                            <button value="PC방" onClick={this.optionchange}>PC방</button><br></br>

                            <input type="radio" value="필라테스" checked={this.state.category === '필라테스'} onChange={this.optionchange} />
                            <button value="필라테스" onClick={this.optionchange}>필라테스</button>

                            <input type="radio" value="볼링장" checked={this.state.category === '볼링장'} onChange={this.optionchange} />
                            <button value="볼링장" onClick={this.optionchange}>볼링장</button>

                            <input type="radio" value="렌트카" checked={this.state.category === '렌트카'} onChange={this.optionchange} />
                            <button value="렌트카" onClick={this.optionchange}>렌트카</button>

                            <input type="radio" value="수영장" checked={this.state.category === '수영장'} onChange={this.optionchange} />
                            <button value="수영장" onClick={this.optionchange}>수영장</button>
                        </div> */}
                        <div className='regist_category'>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                스포츠
                            </Dropdown.Toggle>

                            <Dropdown.Menu id='dropdown-menu'>
                                <Dropdown.Item  id="dropdown-item" onClick={() => this.optionclick("볼링장")}>볼링장</Dropdown.Item>
                                <Dropdown.Item  id="dropdown-item" onClick={() => this.optionclick("헬스장")}>헬스장</Dropdown.Item>
                                <Dropdown.Item id="dropdown-item" onClick={() => this.optionclick("수영장")}>수영장</Dropdown.Item>
                                <Dropdown.Item id="dropdown-item" onClick={() => this.optionclick("필라테스")}>필라테스</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                여가
                            </Dropdown.Toggle>

                            <Dropdown.Menu id='dropdown-menu'>
                                <Dropdown.Item id="dropdown-item" onClick={() => this.optionclick("PC방")}>PC방</Dropdown.Item>
                                <Dropdown.Item id="dropdown-item" onClick={() => this.optionclick("당구장")}>당구장</Dropdown.Item>
                                <Dropdown.Item id="dropdown-item" onClick={() => this.optionclick("낚시터")}>낚시터</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                대여
                            </Dropdown.Toggle>

                            <Dropdown.Menu id='dropdown-menu'>
                                <Dropdown.Item id="dropdown-item" onClick={() => this.optionclick("스키장")}>스키장</Dropdown.Item>
                                <Dropdown.Item id="dropdown-item" onClick={() => this.optionclick("렌트카")}>렌트카</Dropdown.Item>
                                <Dropdown.Item id="dropdown-item" onClick={() => this.optionclick("배드민턴")}>배드민턴</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                먹거리
                            </Dropdown.Toggle>

                            <Dropdown.Menu id='dropdown-menu'>
                                <Dropdown.Item id="dropdown-item" onClick={() => this.optionclick("음식점")}>음식점</Dropdown.Item>
                                <Dropdown.Item id="dropdown-item" onClick={() => this.optionclick("카페")}>카페</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>



                        <div className="login_id">
                            <input className="login_id_input" placeholder="등록할 사업자명"
                                name="busName"
                                value={this.state.name}
                                onChange={this.handleChange} />
                        </div>

                        <div className="login_address">
                            <input id="login_address_input" placeholder="주소 검색"
                                name="busAddress"

                                value={this.state.address}
                                onChange={this.hadleAddress} />
                            <button onClick={this.address}>검색</button>
                        </div>

                        {/* <div>
                                <Postcode/>
                            </div> */}

                        <div className="login_pwd">
                            <input className="login_pwd_input" placeholder="사업자 등록번호"
                                name="busNo"
                                value={this.state.name}
                                onChange={this.handleChange} />

                            <button>중복</button>
                        </div>

                        <div className="login_check">
                            <button className="login_check_btn" onClick={this.handleSubmit}>
                                등록하기</button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Ceo_regist;

//<input type="text" id="receiveFromChild" value=""/>