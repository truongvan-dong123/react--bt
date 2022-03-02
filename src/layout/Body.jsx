import TodoItem from "../components/TodoItem";



function Body() {
    const todoArray = [
        {
            content: "Dùng create-react-app tạo app",
            isDone: true
        },
        {
            content: "Dùng create-react-app tạo app",
            isDone: false
        },
        {
            content: "Dùng create-react-app tạo app",
            isDone: true
        },
        {
            content: "Dùng create-react-app tạo app",
            isDone: false
        },
        {
            content: "Dùng create-react-app tạo app",
            isDone: false
        },

        {
            content: "Dùng create-react-app tạo app",
            isDone: false
        }
    ]
    const renderArray = () => {
        return todoArray.map(
            (item, index) => {
                return <TodoItem key={index} content={item.content} isDone={item.isDone} />
            }
        )

    }
    return <div className="body">{renderArray()}</div>
}

export default Body;