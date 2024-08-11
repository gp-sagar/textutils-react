import React, { useEffect, useState } from 'react';

export default function TextForm(props) {
    useEffect(() => {
        props.addPage('Home');
    }, [props]);
    const convertToUppercase = () => {
        let newText = text.toUpperCase();
        props.showAlert('Text Convert in UPPERCASE', 'success')
        setText(newText);
    }

    const convertToLowerCase = () => {
        let newText = text.toLowerCase();
        props.showAlert('Text Convert in lowercase', 'success')
        setText(newText);
    }

    const ClearMessage = () => {
        let newText = '';
        props.showAlert('Text is clear', 'success')
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter Text Here...');

    return (
        < div className={`container my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            <h1>{props.title}</h1>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    onChange={handleOnChange}
                    id="myText"
                    rows="8"
                    value={text}  // Use value instead of placeholder
                ></textarea>
            </div>
            <p><b>Total Words : </b>{text.split(' ').length}<br /> <b>Total Characters is : </b>{text.length}</p>
            <button
                type='button'
                onClick={convertToUppercase}
                className="btn btn-primary mx-2">
                Convert to UpperCase
            </button>
            <button
                type='button'
                onClick={convertToLowerCase}
                className="btn btn-secondary mx-2">
                Convert to LowerCase
            </button>
            <button
                type='button'
                onClick={ClearMessage}
                className="btn btn-danger mx-2">
                Message Clear
            </button>
        </div >
    )
}
