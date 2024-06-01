
type Props = {
  text: string
  onSelected: (text: string) => void
  isNew: boolean
}


function DropItem({ onSelected, text, isNew }: Props) {
  const newItem = ["drop__btn", "drop__btn--selected"]

  if (!isNew) {
    newItem.pop()
  }

  return <div
    onClick={() => onSelected(text)}
    className={newItem.join(" ")}
  >{text}</div>
}

export default DropItem