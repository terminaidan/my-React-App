import React from 'react'
import styled from 'styled-components'

const SectionGroup = styled.div `
    background: black;
    height: 720px;
`

const Section = props => (
    <SectionGroup image={props.image}>
        <SectionLogo src={props.logo}/>
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
    </SectionGroup>
)

export default Section