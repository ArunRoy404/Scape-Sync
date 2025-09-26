import SuccessfulPage from '@/pages/SuccessfulPage';
import React from 'react';

const page = () => {
    return (
        <SuccessfulPage
            title={'Account Created Successfully!'}
            subtitle={'Your account is set up! Just verify your email to get started.'}
        />
    );
};

export default page;