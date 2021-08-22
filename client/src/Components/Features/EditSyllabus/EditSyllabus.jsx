import React, { useState } from 'react'
import './EditSyllabus.css'

export default function EditSyllabus(handle) {

    return (
        <div>
            <form>
                <input placeholder="text" ></input>
                <input placeholder="text 2"></input>
                <button onClick={()=>handle(true)} >Close</button>
            </form>
        </div>
    )
}
