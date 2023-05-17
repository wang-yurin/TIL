import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import SubLayout from '../components/SubLayout';
import Layout from '../components/Layout';

export default function CSR() {
  const [time, setTime] = useState();

  useEffect(() => {
    console.log('client (CSR)');
    setTime(new Date().toISOString());
  }, []);

  return (
    <>
      <h1 className={styles.title}>{time}</h1>
    </>
  );
}

CSR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
