import React from "react"
import styled from "styled-components"

class Home extends React.Component {
    render() {
        return (
            <HomeView {...this.props}>
                Home Here
            </HomeView>
        )
    }
}

const HomeView = styled.div``

export default Home
