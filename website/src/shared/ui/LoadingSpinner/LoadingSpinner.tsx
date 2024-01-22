import React from 'react';
import cls from './LoadingSpinner.module.scss';

const LoadingSpinner = () => {

    return (
        <div className={cls.wrapper}>
            <div className={cls.ldsRing}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default LoadingSpinner;