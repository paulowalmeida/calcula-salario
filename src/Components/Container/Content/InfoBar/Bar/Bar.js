import React, {Component} from 'react';

export default class Bar extends Component {
    render() {
        const {value = 100, color = "black", title} = this.props;

        return (
            <div title={title}
                style={{
                    marginTop: "20px",
                    marginBottom: "20px",
                    width: value + "%",
                    height: "20px",
                    backgroundColor: color
                }}
            />
        );
    }
}

