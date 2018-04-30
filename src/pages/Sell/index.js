import React from "react"
import styled from "styled-components"

class Sell extends React.Component {
    render() {
        return (
            <SellView {...this.props}>
                Sell Here
            </SellView>
        )
    }
}

const SellView = styled.div`
    background: white;
`

export default Sell
