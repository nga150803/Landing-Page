import React, { FunctionComponent, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

type ContainerProps = {
    children?: React.ReactNode;
};

export const Container: FunctionComponent<ContainerProps> = ({ children }) => {
    return <React.Fragment>{children}
    <ToastContainer />
    </React.Fragment>;
};