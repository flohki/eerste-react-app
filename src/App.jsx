import MyButton from './MyButton'

export default function App() {

  const buttons = [
    {text: 'Knop 1', color: 'lightblue'},
    {text: 'Knop 2', color: 'lightblue'},
    {text: 'Knop 3', color: 'lightgreen'},
    {text: 'Knop 4', color: 'lightblue'},
    {text: 'Knop 5', color: 'lightblue'},
  ]

  const buttonList = buttons.map(button => <MyButton buttonText={button.text} color={button.color} />)

  const content = buttons.length ? buttonList : <p>Geen knoppen</p>

  // if (buttons.length === 0){
  //   return <p>Geen knoppen</p>
  // }

  return(
    <div>
      <h1>Test</h1>
      {buttons.length === 0 ? (
        <p>Geen knoppen</p>
      ) : buttonList}
      {/* {content} */}
    </div>
  )
}