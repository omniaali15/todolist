import React from 'react';
import './Todoitem.scss'

const TodoItems = (props) => {
    const {items , deleteItem} = props;
    const ListItems = items.map(item => {
            return (
                <div key={item.id}>
                    <span className="name">{item.name}</span>
                    <span className="age">{item.age}</span>
                    <span className="action icon" onClick={() => deleteItem(item.id)}>&times;</span>
                </div>
            )
        })

    return (
        <div className = "ListItems">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>
            {ListItems}
        </div>
    )
}

export default TodoItems