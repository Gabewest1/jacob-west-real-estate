import React from "react"
import styled from "styled-components"

const SquareFeet = props => (
    <SquareFeetView {...props}>
        <p>Square Feet:</p>
        <input type="number" name="squareFeetMin" placeholder="min" min={0} />
        <input type="number" name="squareFeetMax" placeholder="max" min={0} />
    </SquareFeetView>
)

const SquareFeetView = styled.div``

export default SquareFeet
