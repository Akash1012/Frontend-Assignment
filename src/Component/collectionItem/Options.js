import React from 'react'

class Options extends React.Component {

    render() {
        return (
            <div>
                {this.props.toogleValue ? (
                    <div>
                        <span style={{ 'color': 'grey' }}>Sizes: </span>
                        {
                            this.props.newData.map(item => {
                                return (
                                    <span key={Math.random()} style={{ 'color': 'grey' }}> {" "}{item.value}{" "}</span>
                                )
                            })
                        }
                    </div>
                ) : ''}
            </div>
        )
    }
}

export default Options