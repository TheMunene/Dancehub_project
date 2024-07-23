import React from 'react';

const FormIframe = () => {
    return (
        <div style={{ width: '100%', height: '100vh', border: 'none' }}>
            <iframe
                src="/form.html"
                title="Form"
                style={{ width: '100%', height: '100%', border: 'none' }}
            />
        </div>
    );
};

export default FormIframe;
