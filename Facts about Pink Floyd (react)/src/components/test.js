import React, { Component } from "react";
import Slider from "react-slick";

class AppendDots extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,

        };
        return (
            <div className='slider'>
                <Slider{...settings}>
                    <div>
                        <img src={this.props.photo[0]}/>
                    </div>
                    <div>
                        <img src={this.props.photo[1]}/>
                    </div>
                    <div>
                        <img src={this.props.photo[2]}/>
                    </div>
                    <div>
                        <img src={this.props.photo[3]}/>
                    </div>
                    <div>
                        <img src={this.props.photo[4]}/>
                    </div>
                    <div>
                        <img src={this.props.photo[5]}/>
                    </div>
                    <div>
                        <img src={this.props.photo[6]}/>
                    </div>
                    <div>
                        <img src={this.props.photo[7]}/>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default AppendDots;