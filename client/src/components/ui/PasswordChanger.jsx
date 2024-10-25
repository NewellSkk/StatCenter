import React, { useState } from 'react';
import styles from './PasswordChanger.module.css';

const PasswordChanger = ({ onSubmit, onCancel }) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(currentPassword, newPassword, confirmNewPassword);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
                <label htmlFor="currentPassword">Current Password</label>
                <input
                    type="password"
                    id="currentPassword"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                />
            </div>
            <div className={styles.field}>
                <label htmlFor="newPassword">New Password</label>
                <input
                    type="password"
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
            </div>
            <div className={styles.field}>
                <label htmlFor="confirmNewPassword">Confirm New Password</label>
                <input
                    type="password"
                    id="confirmNewPassword"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    required
                />
            </div>
            <div className={styles.actions}>
                <button type="submit">Change Password</button>
            </div>
        </form>
    );
};

export default PasswordChanger;
