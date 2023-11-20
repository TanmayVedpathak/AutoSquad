import React from 'react'

const Button = (props) => {
    const { content } = props
    return (
        <>
            <button type="button" className=" py-2 px-4 text-md bg-blue-700 text-white rounded-3xl">{content}</button>
        </>
    )
}

export default Button