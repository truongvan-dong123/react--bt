import TodoItem from "../components/TodoItem";



function Body({ todoArray }) {

    const renderArray = () => {
        return todoArray.map(
            (item, index) => {
                // return <TodoItem key={index} content={item.content} isDone={item.isDone} />
                return <TodoItem key={index} {...item} />
            }
        )

    }
    return <div className="body">{renderArray()}</div>
}

export default Body;