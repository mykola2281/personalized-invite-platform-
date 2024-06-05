'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './styles.module.css';
import { createNote } from '@/api/services';
const CreateNote = () => {
  const route = useRouter();
  const [isEmail, setIsEmail] = useState(true);
  const [data, setData] = useState({
    title: '',
    inputValue: '',
    details: '',
    date: '',
  });
  console.log(data, 'DATA');

  const toggleInputType = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsEmail(!isEmail);
    setData((prevData) => ({
      ...prevData,
      inputValue: '',
    }));
  };

  async function CreateNoteSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await createNote({
      title: data.title,
      description: data.details,
      phone: data.inputValue,
      date: new Date(data.date).toISOString()
    })
    console.log(data, 'on submit');
    setData((prevData) => ({
      ...prevData,
      title: '',
      inputValue: '',
      details: '',
      date: '',
    }));
    // route.push('/');
  }
  return (
    <div className={styles.main}>
      <form onSubmit={CreateNoteSubmit} className={styles.form}>
        <h1 className={styles.formTitle}>Create invitation</h1>
        <input
          className={styles.formInput}
          type="text"
          placeholder="title of invitation"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <div className={styles.changeableInputArea}>
          <button onClick={toggleInputType} className={styles.button}>
            {isEmail ? 'Switch to Phone' : 'Switch to Email'}
          </button>
          <input
            className={styles.formInput}
            type={isEmail ? 'email' : 'phone'}
            placeholder={isEmail ? 'Email' : 'Phone'}
            value={data.inputValue}
            onChange={(e) => setData({ ...data, inputValue: e.target.value })}
          />
        </div>
        <textarea
          className={styles.formInput}
          placeholder="enter event details"
          cols={40}
          rows={10}
          value={data.details}
          onChange={(e) => setData({ ...data, details: e.target.value })}
        />
        <input
          className={styles.formInput}
          type="date"
          value={data.date}
          onChange={(e) => setData({ ...data, date: e.target.value })}
        />
        <button type="submit" className={styles.button}>
          Create invitation
        </button>
        <button onClick={() => route.push('/')} className={styles.button}>
          Go back
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
