import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import socketIOClient from 'socket.io-client';
import { SaveMessages } from '../Utils/ReduxMiddleware';

export const Notifications = () => {
    const dispatch = useDispatch()
    const msgs = useSelector((state) => state.msgs)
    useEffect(() => {
        const socket = socketIOClient('http://localhost:8080/');
        socket.on('notification', async (notification) => {
            await dispatch(SaveMessages(notification))
        });
        socket.on('connect_error', (error) => {
            console.error('Socket.io connection error:', error);
        });
        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div className='notifications-container'>
            <h2>Notifications</h2>
            <ul>
                {msgs.map((msg, idx) => {
                    return (
                        <li key={idx}>{msg.message}</li>)
                })}
            </ul>
        </div>
    );
};
