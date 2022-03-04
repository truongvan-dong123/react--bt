import { useState } from 'react'

function Header({ AddOnChange }) {
    // let [count, setCount] = useState(0)
    const [valueInput, setValueInput] = useState('')
    return (
        <div className="header" >
            <h3 className="header__title">TO DO LIST APPLICATION</h3>

            <div className="header__input" >
                <input value={valueInput} onChange={(e) => setValueInput(e.target.value)} />
                <button className="header__input--btn"
                    // onClick={() => {
                    //     setCount(count + 1)
                    // }}
                    onClick={() => AddOnChange(valueInput)}
                > + </button>
            </div>
        </div>
    )
}

export default Header;