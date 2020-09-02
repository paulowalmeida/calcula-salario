import React from 'react';

export const Content = ({children, salary}) => {
    const hide = (
        salary == 0 || salary === undefined
            ? 'scale-transition scale-out'
            : 'scale-transition scale-in'
    );

    return (
        <div className={`${hide}`}>
            {children}
        </div>
    );
}