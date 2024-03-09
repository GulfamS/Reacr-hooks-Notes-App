import {
  NoteItemCard,
  NoteItemTitle,
  NoteItemDescription,
} from './styledComponents'

const NoteItem = props => {
  const {noteItemDetails} = props
  const {title, note} = noteItemDetails

  return (
    <NoteItemCard>
      <NoteItemTitle>{title}</NoteItemTitle>
      <NoteItemDescription>{note}</NoteItemDescription>
    </NoteItemCard>
  )
}
export default NoteItem
