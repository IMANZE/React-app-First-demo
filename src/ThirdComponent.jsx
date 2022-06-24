import { Component } from "react";

class ThirdComponent extends Component {
    render(){
        return <h2 style={{color: this.props.customColor}}>Class component here!</h2>
    }
}

export default ThirdComponent
