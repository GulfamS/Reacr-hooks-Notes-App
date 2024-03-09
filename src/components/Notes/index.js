import {useState} from 'react'
import {v4} from 'uuid'
import NoteItem from '../NoteItem'

import {
  Container,
  Heading,
  NotesFormCard,
  NotesCardTitleInput,
  TextArea,
  AddButton,
  NotesContainer,
  NoNotesImage,
  NoNotesHeading,
  NoNotesDescription,
  ListContainer,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeDescription = event => {
    setNote(event.target.value)
  }

  const onClickAdd = event => {
    event.preventDefault()
    const newNote = {
      id: v4,
      title,
      note,
    }
    setNotesList(prevNotes => [...prevNotes, newNote])
    setTitle('')
    setNote('')
  }

  return (
    <Container>
      <Heading>Notes</Heading>
      <NotesFormCard onSubmit={onClickAdd}>
        <NotesCardTitleInput
          type="text"
          placeholder="Title"
          onChange={onChangeTitle}
          value={title}
        />
        <TextArea
          type="text"
          placeholder="Take a Note..."
          onChange={onChangeDescription}
          value={note}
        />
        <AddButton type="submit">Add</AddButton>
      </NotesFormCard>
      {notesList.length < 1 ? (
        <NotesContainer>
          <NoNotesImage
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <NoNotesHeading>No Notes Yet</NoNotesHeading>
          <NoNotesDescription>
            Notes you add will appear here
          </NoNotesDescription>
        </NotesContainer>
      ) : (
        <ListContainer>
          {notesList.map(eachNote => (
            <NoteItem key={eachNote.id} noteItemDetails={eachNote} />
          ))}
        </ListContainer>
      )}
    </Container>
  )
}

export default Notes
