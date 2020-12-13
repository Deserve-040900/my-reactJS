import React, { Component } from 'react';
import ItemGioHang from './itemgiohang';

class fromgiohang extends Component {
    constructor(props){
        super(props);
        this.state = {
            gio_hang: []
        };
        this.handleChangeSoLuongGioHang = this.handleChangeSoLuongGioHang.bind(this);
    }
    componentDidMount(){
        var string_gio_hang =  localStorage.getItem('gio_hang');
        if(typeof string_gio_hang != 'undefined' && string_gio_hang != null){
            console.log(JSON.parse(string_gio_hang));
            this.setState({
                gio_hang: JSON.parse(string_gio_hang)
            })
        }
    }

    handleChangeSoLuongGioHang(id_san_pham, gia_tri){
        console.log('run');
        var temp_arr = this.state.gio_hang;
        for(var i=0;i<temp_arr.length; i++){
            if(id_san_pham == temp_arr[i].id){
                temp_arr[i].so_luong = gia_tri;
                this.setState({
                    gio_hang: temp_arr
                });
                localStorage.setItem('gio_hang', JSON.stringify(temp_arr));
                break;
            }
        }
    }

    handleRemoveItemCart(id_san_pham){
        var temp_ar = this.state.gio_hang;
        for(var i=0;i<temp_ar.length;i++){
            if(id_san_pham ==  temp_ar[i].id){
                temp_ar[i].splice(i, 1);
                this.setState({
                    gio_hang: temp_ar
                });
                localStorage.setItem('gio_hang', JSON.stringify(temp_ar));
                break;
            }
        }
    }

    render() {
        return (
            <div>
                <div className="table-reponsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên sản phẩm</th>
                                <th>Số Lượng</th>
                                <th>Đơn giá</th>
                                <th>Thành tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.gio_hang.map(ItemGioHang =>
                                <ItemGioHang info_item = {ItemGioHang} handle_process = {this.handleChangeSoLuongGioHang}/>
                            )}
                        </tbody>
                    </table>
                    
                </div>
            </div>
        );
    }
}

export default fromgiohang;