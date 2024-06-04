import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css';

const List_of_Invitations = () => {
  interface IInvitation {
    title: string;
    inputValue: string | number;
    details: string;
    date: string;
  }
  const Invitations: IInvitation[] = [
    {
      title: 'Test',
      inputValue: 'test@gmail.com',
      details: 'Urugvai 20th street',
      date: '20.05.2024',
    },
    {
      title: 'Test1',
      inputValue: 12312421554142,
      details: 'Urugvai 22th street',
      date: '30.05.2024',
    },
    {
      title: 'Test2',
      inputValue: 'test2@gmail.com',
      details: 'Urugvai 20th street',
      date: '20.05.2024',
    },
    {
      title: 'Test3',
      inputValue: 11454341324,
      details: 'Urugvai 25th street',
      date: '25.05.2024',
    },
    {
      title: 'Test1',
      inputValue: 12312421554142,
      details: 'Urugvai 22th street',
      date: '30.05.2024',
    },
    {
      title: 'Test2',
      inputValue: 'test2@gmail.com',
      details: 'Urugvai 20th street',
      date: '20.05.2024',
    },
    {
      title: 'Test3',
      inputValue: 11454341324,
      details: 'Urugvai 25th street',
      date: '25.05.2024',
    },
    {
      title: 'Test1',
      inputValue: 12312421554142,
      details: 'Urugvai 22th street',
      date: '30.05.2024',
    },
    {
      title: 'Test2',
      inputValue: 'test2@gmail.com',
      details: 'Urugvai 20th street',
      date: '20.05.2024',
    },
    {
      title: 'Test3',
      inputValue: 11454341324,
      details: 'Urugvai 25th street',
      date: '25.05.2024',
    },
    {
      title: 'Test1',
      inputValue: 12312421554142,
      details: 'Urugvai 22th street',
      date: '30.05.2024',
    },
    {
      title: 'Test2',
      inputValue: 'test2@gmail.com',
      details: 'Urugvai 20th street',
      date: '20.05.2024',
    },
    {
      title: 'Test3',
      inputValue: 11454341324,
      details: 'Urugvai 25th street',
      date: '25.05.2024',
    },
  ];
  return (
    <div className={styles.main}>
      {Invitations.map((invitation: IInvitation, index: number) => (
        <div key={index} className={styles.invitationCard}>
          <div className={styles.invitationInfo}>
            <h1 className={styles.invitationTitle}>{invitation.title}</h1>
            <div className={styles.invitationSubTitle}>
              <p className={styles.invitationContact}>
                contact recipients : {invitation.inputValue}
              </p>
              <p>created at {invitation.date}</p>
            </div>
            <Link className={styles.linkInvitationId} href={'/invitation/id'}>
              read more
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List_of_Invitations;
