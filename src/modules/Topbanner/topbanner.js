import logobanner from './logobanner';
import React, { Component } from 'react';


class topbanner extends Component{
    constructor(props){
        super(props);
        this.state = {
            title_logo: this.props.title_page + "test xem sao",
            count: 1,
            interval: null,
            search: ''
        };
    }

    updateCount(){
        this.setState({
            count: this.state.count + 1
        });
    }

    componentDidMount(){
        setInterval(() => {
            this.updateCount();
        }, 1000);
    }

    handleChangeInput = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    handleSearchFunction = () => {
        console.log(this.state.search);
    }

    componentDidUpdate(){
        console.log("đang did update");
        if(this.state.count == 3){
            this.props.delete_me();
        }
    }

    componentWillUnmount(){
        console.log("đang bắt đầu cho component remove")
    }

    render(){
        console.log(this.state.count);
        return(
            <div className="top-banner">
                <div className="header">
                    <div className="container">
                        <div className="headr-left">
                        <div className="social">
                            <a href="#"><i className="facebook"></i></a>
                            <a href="#"><i className="twitter"></i></a>
                            <a href="#"><i className="gplus"></i></a>
                            <a href="#"><i className="pin"></i></a>
                            <a href="#"><i className="youtube"></i></a>
                        </div>
                        <div className="search">
                            <form>
                            <input type="button" class="button_submit" onClick={this.handleSearchFunction} />
                            <input type="text" value={this.state.search} onChange={this.handleChangeInput} defaultValue="" placeholder="Search..." />
                            </form>
                        </div>
                        <div className="clearfix"></div>
                        </div>
                        <div className="headr-right">
                        <div className="details">
                            <ul>
                            <li><a href="mailto@example.com"><span className="glyphicon glyphicon-envelope"
                                    aria-hidden="true"></span>info(at)example.com</a></li>
                            <li><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span>(+84)0908 246 357
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <div className="banner-info">
                    <div className="container">
                        <logobanner title_logo={this.state.title_logo} />
                        <div className="top-menu">
                        <span className="menu"></span>
                        <ul className="nav1">
                            <li className="active"><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="reviews.html">Reviews</a></li>
                            <li><a href="typo.html">News</a></li>
                            <li><a href="gallery.html">Gallery</a></li>
                            <li><a href="contact.html">Mail</a></li>
                        </ul>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default topbanner;