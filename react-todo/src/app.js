class TodoApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        )
    }
}

const Header = () => (
    <div>
        <h1>Todo App</h1>
        <h2>Organize todos</h2>
    </div>
)

const Action = () => (
    <div>
        <button>What should I do ?</button>
    </div>
)

const Options = () => (
    <div>Options component</div>
)

const AddOption = () => (
    <div>Add Option</div>
)

ReactDOM.render(<TodoApp />,document.getElementById('app'));