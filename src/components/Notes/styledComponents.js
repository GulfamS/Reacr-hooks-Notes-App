import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 50%;
    @media screen and (min-width: 768px){
        width: 100%;
    }
`
export const Heading = styled.h1`
    font-family: 'Bree Serif';
    color: #4c63b6;
    font-size: 24px;
`
export const NotesFormCard = styled.form`
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 16px #aab8c8;
    padding: 20px;
    width: 90%;
    margin: 20px;
`
export const NotesCardTitleInput = styled.input`
    font-family: 'Roboto';
    color: #475569;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    border: none;
    outline: none;
    margin-bottom: 24px;
`
export const TextArea = styled.textArea`
    font-family: 'Roboto';
    color: #475569;
    font-size: 16px;
    font-weight: normal;
    text-align: left;
    border: none;
    outline: none;
    margin-bottom: 30px;
`
export const AddButton = styled.button`
    background-color: #4c63b6;
    padding: 10px;
    align-self: flex-end;
    border: none;
    outline: none;
    cursor: pointer;
    color: #ffffff;
    font-family: 'Roboto';
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    padding-left: 15px;
    padding-right: 15px;
`
export const NotesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const NoNotesImage = styled.img`
    width: 130px;
    margin-top: 80px;
`
export const NoNotesHeading = styled.h1`
    font-family: 'Roboto';
    color: #475569;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 0px;
`
export const NoNotesDescription = styled.p`
    font-family: 'Roboto';
    color: #475569;
    font-size: 18px;
    font-weight: normal;
    text-align: center;
`
export const ListContainer = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 0px;
    padding-right: 0px;
`
