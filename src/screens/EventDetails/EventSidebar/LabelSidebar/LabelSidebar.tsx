import React from 'react'
import {LabelWrapper} from './styles'

interface Props {
    viewType?: 'events' | 'incidents'
}

export const LabelSidebar = ({ viewType }: Props) => {

    if (viewType === 'events')
    return (
        <LabelWrapper>Все события</LabelWrapper>
    )
    else if (viewType === 'incidents')
    return (
        <LabelWrapper>События в инциденте</LabelWrapper>
    )
    else 
    return (
        <LabelWrapper></LabelWrapper>
    )
}