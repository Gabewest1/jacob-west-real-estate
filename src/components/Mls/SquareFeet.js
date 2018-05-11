import React from "react"
import styled from "styled-components"

const SquareFeet = props => (
    <SquareFeetView {...props}>
        <input type="text" name="squareFeetMin" placeholder="min" />
        <input type="text" name="squareFeetMax" placeholder="max" />
    </SquareFeetView>
)

const SquareFeetView = styled.div``

export default SquareFeet
