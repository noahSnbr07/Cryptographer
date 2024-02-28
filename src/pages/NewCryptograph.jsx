import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import '../styles/newcryptograph.css';

export default function NewCryptograph() {
    const [isFunctionEncrypted, setFunctionISEncrypt] = useState(true);
    const [inputText, setInputText] = useState('');
    const [validationText, setValidationText] = useState('');

    const navigate = useNavigate();

    const changeFunction = (newFunc) => {
        setFunctionISEncrypt(newFunc);
    }

    const handleChangeForText = (e) => {
        const inputValue = e.target.value;
        const onlyLetters = /^[a-zA-Z ]+$/;

        if (onlyLetters.test(inputValue) || inputValue === '') {
            setValidationText(inputValue);
        }
    }

    const handleChangeForKey = (e) => {
        const inputValue = e.target.value;
        const onlyNumbers = /^[0-9]*$/;

        if (onlyNumbers.test(inputValue) || inputValue === '') {
            setInputText(inputValue);
        }
    }
    return (
        <div className='newcryptograph-page'>
            <div className='form'>
                <button
                    style={{
                        border: isFunctionEncrypted ? '5px solid var(--accent)' : 'none',
                        color: isFunctionEncrypted ? 'var(--accent)' : 'white'
                    }}
                    onClick={() => changeFunction(true)}
                    className='form-chose-func-1'> Encrypt </button>
                <button
                    style={{
                        border: !isFunctionEncrypted ? '5px solid var(--accent)' : 'none',
                        color: !isFunctionEncrypted ? 'var(--accent)' : 'white'
                    }}
                    onClick={() => changeFunction(false)}
                    className='form-chose-func-2'> Decrypt </button>
                <input
                    type='text'
                    spellCheck={false}
                    onChange={(e) => { handleChangeForKey(e) }}
                    value={inputText}
                    className='form-key'
                    placeholder='Enter the Access Key' />
                <button
                    onClick={() => {
                        navigate(`/output?f=${isFunctionEncrypted ? 'encrypt' : 'decrypt'}&s=${encodeURIComponent(validationText)}&k=${encodeURIComponent(inputText)}`)
                    }}
                    className='form-submit'> Submit </button>
            </div>
            <textarea
                value={validationText}
                onChange={(e) => { handleChangeForText(e) }}
                spellCheck={false}
                placeholder={`Enter ${isFunctionEncrypted ? 'Text to Encrypt it' : 'Encrypted Text'}`}
                className='textarea'>
            </textarea>
        </div>
    );
}
