
type Props = {
  text: string
  onSelected: (text: string) => void
  isNew: boolean
}


function DropItem({ onSelected, text, isNew}: Props) {
  return <div
    onClick={() => onSelected(text)}
    className={`drop__btn ${isNew ? "drop__btn--selected" : undefined}`}
  >{text}</div>
}

export default DropItem