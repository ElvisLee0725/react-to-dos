import React from 'react';
import ToDoList from './to_do_list';
import AddToDoForm from './add_to_do_form';
import { ListContext } from '../list_context';

const toDos = [
    {
        _id: '01',
        title: 'Wash Car'
    },
    {
        _id: '02',
        title: 'Practice React'
    },
    {
        _id: '03',
        title: 'Watch NBA'
    },
    {
        _id: '04',
        title: 'Pray for Kobe Bryant and his family'
    }
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addItem: (item) => this.addToDo(item),
            list: [],
            error: ''
        };
        this.addToDo = this.addToDo.bind(this);
    }

    componentDidMount() {
        this.getToDos();
    }

    async addToDo(item) {
        try {
            const response = await fetch('http://api.reactprototypes.com/todos?key=16012Amalfi', {
                    method: 'POST',
                    body: JSON.stringify(item)
                });
            if(response.status > 299) {
                const data = await response.json();
                throw new Error(data.error);
            }

            this.getToDos(); 
        } catch(error) {
            console.log('Add todo failed', error)
            this.setState({
                error: error.message
            });
        }
    }

    // addToDo(item) {
    //     fetch('http://api.reactprototypes.com/todos?key=16012Amalfi', {
    //         method: 'POST',
    //         body: JSON.stringify({item})
    //     }).then(resp => {
    //         return resp.json();
    //     }).then(data => {
    //         // Normally, the api will return the newly added data. This one doesn't
    //         this.getToDos();    // Call getToDos() to get data again.
    //     }).catch(error => {
    //         console.log('Caught error', error);
    //     });
    // }

    async getToDos() {
        const response = await fetch('http://api.reactprototypes.com/todos?key=16012Amalfi');
        const data = await response.json();

        this.setState({
            list: data.todos,
            error: ''
        });
    }
    // getToDos() {
    //     fetch('http://api.reactprototypes.com/todos?key=16012Amalfi').then(resp => {
    //         return resp.json();
    //     }).then(data => {
    //         console.log('Data', data.todos);
    //         this.setState({
    //             list: data.todos
    //         });
    //     });
    // }

    render() {
        return (
            <ListContext.Provider value={this.state}>
                <div className="container">
                    <h1 className="text-center my-4">To Do List</h1>
                    <div className="row">
                        <div className="col-md-8">
                            <ToDoList />
                        </div>
                        <div className="col-md-4">
                            <AddToDoForm />
                        </div>
                    </div>
                </div>
            </ListContext.Provider>
        );
    }
}

export default App;