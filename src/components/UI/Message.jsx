import React from 'react';

const Message = ({ status }) => {
    return (
        <>
            {status?.type === "success" && (
                <p className="text-primary font-bold">{status.message}</p>
            )}

            {status?.type === "error" && (
                <p className="text-red-400 font-bold">{status.message}</p>
            )}

            {status?.type === "server-error" && (
                <p className="text-red-400 font-bold">Server error: {status.message}</p>
            )}
        </>
    );
};

export default Message;