import React, { Component } from "react";

class fromContact extends Component{
    constructor(props){
        super(props);
        this.state = { hoten='',sdt='',email='',noidung='', };
        this.handleChangeInput = this.handleChangeInput.bind(this);
    }

    handleChangeInput = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){
        return(            
            <form className="form-horizontal">
                    <div className="form-group">
                        <div className="col-sm-12">                            
                            <input type="text" name="hoten" onChange={this.handleChangeInput} class="form-control" value={this.state.hoten} placeholder={"Họ Tên"} />           
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-12">                            
                            <input type="text" name="sdt" onChange={this.handleChangeInput} class="form-control" value={this.state.sdt} placeholder={"Số Điện Thoại"} />          
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-12">                            
                            <input type="email" name="email" onChange={this.handleChangeInput} class="form-control" value={this.state.email} placeholder={"Email"} />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-12">                            
                            <textarea name="noidung" onChange={this.handleChangeInput} class="form-control" value={this.state.noidung} placeholder={"Bạn muốn đặt câu hỏi cho chúng tôi ..."} ></textarea>           
                        </div>
                    </div>
            
                    <div className="form-group">
                        <div className="col-sm-10 col-sm-offset-2">
                            <button type="submit" className="btn btn-primary">Gửi thông tin liên hệ</button>
                        </div>
                    </div>
            </form>            
        );
    }
}
export default fromContact;
