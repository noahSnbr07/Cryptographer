import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import '../styles/newcryptograph.css';

export default function NewCryptograph() {
    const [isFunctionEncrypted, setFunctionISEncrypt] = useState(true);
    const [inputText, setInputText] = useState('');
    const [validationText, setValidationText] = useState('');
    const [urlParams, setUrlParams] = useSearchParams({
        f: null,
        s: null,
        k: null
    });
    const navigate = useNavigate();

    const changeFunction = (newFunc) => {
        setFunctionISEncrypt(newFunc);
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
                    spellCheck={false}
                    onChange={(e) => { setInputText(e.target.value); }}
                    value={inputText}
                    className='form-key'
                    placeholder='Enter the Access Key' />
                <button
                    onClick={() => navigate(`/output?f=${isFunctionEncrypted ? 'encrypt' : 'decrypt'}&s=${encodeURIComponent(inputText)}&k=${encodeURIComponent(validationText)}`)}
                    className='form-submit'> Submit </button>
            </div>
            <textarea
                value={validationText}
                onChange={(e) => { setValidationText(e.target.value) }}
                spellCheck={false}
                placeholder={`Enter ${isFunctionEncrypted ? 'Text to Encrypt it' : 'Encrypted Text'}`}
                className='textarea'>
            </textarea>
        </div>
    );
}
