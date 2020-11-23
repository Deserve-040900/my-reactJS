import React, {Component} from 'react';
import fromContact from './fromContact';

class contact extends Component{
    render() {
        return (
            <div className="contact_form">
                                
                <div className="background_form_map container">

                    <div className="title_form">
                        Liên hệ
                    </div>

                    <div className="ban_do col-xs-12 col-md-6">
                        <FormContact />
                    </div>
                    
                    
                    <div className="ban_do col-xs-12 col-md-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1251208107665!2d106.71229765024903!3d10.801727892266614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a459cb43ab%3A0x6c3d29d370b52a7e!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBDw7RuZyBOZ2jhu4cgVFAuSENNIC0gSFVURUNI!5e0!3m2!1svi!2s!4v1606117204481!5m2!1svi!2s" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>

                    <div className="clearfix"></div>

                </div>

            </div>
        );
    }
}
export default contact;