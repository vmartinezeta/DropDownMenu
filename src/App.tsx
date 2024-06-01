import DropIcon from "./components/DropIcon"
import DropItems from "./components/DropItems"
import DropItemSelected from "./components/DropItemSelected"
import { DropProvider } from "./context/DropState"
import "./main.scss"

const items = [
	"Lenovo",
	"Dell",
	"Vaio",
	"Hp",
	"Apple",
	"Samsung"
]


function App() {
	return <DropProvider items={items} defaultSelected="Lenovo">
		<div className="main">
			<h1 className="main__title">DropDownMenu</h1>
			<div className="drop">
				<DropIcon />
				<DropItemSelected name="laptop" />
				<DropItems />
			</div>
		</div>
	</DropProvider>
}

export default App