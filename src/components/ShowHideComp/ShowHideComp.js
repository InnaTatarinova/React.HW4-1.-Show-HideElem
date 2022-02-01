import React from "react";

class ShowHideComp extends React.Component {
    
    componentDidMount() {
        alert("Component shown")
    }

    componentWillUnmount() {
        alert("Component hidden")
    }

    render() {
        return (
            <h1> Hello </h1>
        )
    }

}

export default ShowHideComp;