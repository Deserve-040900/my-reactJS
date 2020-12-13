import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class itemgiohang extends Component {
    constructor(props){
        super(props);
    }

    handleButtonClick(string_loai){
        if(string_loai == '-'){
            if(this.props.info_item.so_luong - 1 > 0){
                this.props.handle_process(this.props.info_item.id, this.props.info_item.so_luong - i);
            }
            else{
                this.props.handle_process(this.props.info_item.id, this.props.info_item.so_luong + i);
                var key = window.confirm('bạn có muốn xóa sản phẩm ' + this.props.info_item.title + ' khỏi giỏ hàng');
                console.log(key);
                if(key == true){
                    this.props.handle_remove_item(this.props.info_item.id);
                }
            }
        }
        else{
            this.props.handle_process(this.props.info_item.id, this.props.info_item.so_luong + 1);
        }
    }

    handleButtonRemoveItemCart(){
        var key = window.confirm('bạn có chắc chắn muốn xóa sản phẩm ' + this.props.info_item.title + ' khỏi giỏ hàng');
        if(key == true){
            this.props.handle_remove_item(this.props.info_item.id);
        }
    }
    ProcessRedirect(){
        var string_gio_hang = localStorage.getItem('gio_hang');
        if(typeof string_gio_hang != 'undefined' && string_gio_hang != null){
            if(JSON.parse(string_gio_hang).length > 0){
                return <></>
            }
            else{
                return <Redirect to="/"/>;
            }
        }
        else{
            
        }
    }

    render() {
        return (
            <>
            {
                (this.props.info_item) ?
                <tr>
                    <td>{this.props.info_item.id}</td>
                    <td>{this.props.info_item.title + this.props.info_item.type}</td>
                    <td className="include_action_gio_hang">
                        <button type="button" class="btn btn-default" onClick={() => {this.handleButtonClick('-')}}>-</button>
                        <input type="number" name="" readOnly="true" className="form-control number-input" value={this.props.info_item.so_luong}></input>
                        <button type="button" class="btn btn-default" onClick={() => {this.handleButtonClick('+')}}>+</button>
                    </td>
                    <td>{this.props.info_item.price}</td>
                    <td>{this.props.info_item.price + this.props.info_item.so_luong}</td>
                </tr>
            }
            </>
        );
    }
}

export default itemgiohang;