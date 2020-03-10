class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options:[]
        }
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options:[]
            }
        })
    }
    handlePick() {
        const random = Math.floor(Math.random() *
        this.state.options.length);
        const option = this.state.options[random];
        alert(option);
    }
    handleAddOption(option) {
        if(!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })
    }
    componentDidUpdate(prevProps,prevState){
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json)
        }
    }
            
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => {
                    return { options }
                })
            }
        } catch (e) {
        console.log(e);
        }
    }

    render() {
        const title = 'Todo App';
        const subtitle = 'Organize schedule';
    
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                handlePick={this.handlePick}
                hasOptions ={this.state.options.length > 0}
                />
                <Options
                 options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}

                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
                
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


class Action extends React.Component { 
    
    render() {
        return (
            <div>
                <button onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}>
                    What should I do?
                    </button>
            </div>
        )
    }
    
    }


class Options extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {this.props.options.map((option) => {
                return (
                    <Option key={option} optionText={option}  />
                );
                  })}
                    </div>
        )
    }
}
const Option = (props) => (
    <div>
        {props.optionText}
        <button>remove</button>
        </div>
)



class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error:undefined
        }

    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => {
            return  { error } 
        })

        e.target.elements.option.value = ''
    }
    render (){
        return(
        <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
        )

    }
}
ReactDOM.render(<TodoApp />,document.getElementById('app'));