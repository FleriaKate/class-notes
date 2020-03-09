class TodoApp extends React.Component {
    render() {
        const title = 'Todo App';
        const subtitle = 'Organize schedule';
        const options = ['Thing  one','Thing two','Thing three']
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        )
    }
}

const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
    </div>
)

const Action = () => (
    <div>
        <button>What should I do ?</button>
    </div>
)

const Options = (props) => (
    <div>{props.options.map((option) => {
        return (
            <Option key={option} optionText={option} />
        );
    })}</div>
)

const Option = (props) => (
    <div>{props.optionText}</div>
)

const AddOption = (props) => (
    <div>{props.optionText}</div>
)

ReactDOM.render(<TodoApp />,document.getElementById('app'));