import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import '../styles/output.css';
import copyValue from '../utils/functions/copyValue';
import encrypt from '../utils/functions/encrypt.js'
import decrypt from '../utils/functions/decrypt.js'
export default function Output() {
    const [newData, setNewData] = useState();

    const [urlParams] = useSearchParams({});

    //params from the url usable
    const [localParams] = useState({
        function: urlParams.get('f'),
        string: urlParams.get('s'),
        key: urlParams.get('k'),
    });

    useEffect(() => {
        if (localParams.function === 'encrypt') {
            setNewData(encrypt(localParams.string, parseInt(localParams.key)));
        } else if (localParams.function === 'decrypt') {
            setNewData(decrypt(localParams.string, localParams.key));
        }
    }, [localParams]);

    return (
        <div className='output-page'>
            <section className='output-value'>
                <textarea readOnly={true} value={newData} />
            </section>
            <section className='output-information'>
                <div className='info-key'>
                    {localParams.key}
                </div>
                <Link className='info-link-1' to={'/new'}> Retry </Link>
                <Link className='info-link-2' to={'/'}> Home </Link>
                <button
                    className='info-copy' onClick={() => {
                        copyValue(newData);
                    }}
                > Copy </button>
            </section>
        </div>
    );
}