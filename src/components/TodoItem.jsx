
function TodoItem(props) {
    return (
        <div className="Todoitem">
            <div className="Todoitem__content">
                <p>{props.content}</p>
            </div>
            <div className="Todoitem__button">
                {!props.isDone ? <button className="Todoitem__button--V">V</button> : null}
                {/* {!props.isDone && <button className="Todoitem__button--V">V</button>} */}
                <button className="Todoitem__button--X">X</button>
            </div>
        </div>
    );
}

export default TodoItem;