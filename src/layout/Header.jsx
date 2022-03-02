
function Header() {
    return (
        <div className="header">
            <h3 className="header__title">TO DO LIST APPLICATION</h3>
            <div className="header__input" >
                <input type="text" />
                <button className="header__input--btn" > + </button>
            </div>
        </div>
    )
}

export default Header;