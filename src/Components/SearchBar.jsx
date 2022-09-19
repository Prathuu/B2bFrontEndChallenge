import React, { useRef } from 'react'
import "../Sass/app.css"

export default function SearchBar({ setfocused, focused, handleSearch, setvalue }) {

    const ref = useRef(null);

    const clearInput = () => {
        console.log("Input Cleared");
        setfocused(false)
        ref.current.value = ""
    }

    return (
        <div className='searchbar-body d-flex'>
            {
                focused
                    ? <button onClick={clearInput}>
                        <i class="bi bi-x-lg"></i>
                    </button>
                    : <label htmlFor="inp" >
                        <i className="bi bi-search"></i>
                    </label>
            }
            <input
                autoComplete='off'
                ref={ref} onFocus={e => setfocused(true)}
                // onBlur={e => {
                //     clearInput()
                //     setfocused(!focused)
                // }}
                type="text"
                onChange={e => {
                    setvalue(e.target.value)
                    handleSearch(ref)
                }}
                placeholder='Search by account name or website' name="q" id="inp" />
        </div >
    )
}
