import styled from 'styled-components'

export const NoteItemCard = styled.li`
    min-width: 40%;
    border: 1px solid #aab8c8;
    padding: 12px;
    border-radius: 6px;
    margin: 10px;
    list-style-type: none;
    @media screen and (min-width: 768px){
        min-width: 40%;
    }
`
export const NoteItemTitle = styled.h1`
    font-family: 'Roboto';
    color: #334155;
    font-size: 18px;
    font-weight: 500;
    text-align: left;
`
export const NoteItemDescription = styled.p`
    font-family: 'Roboto';
    color: #475569;
    font-size: 15px;
`
