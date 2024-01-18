import Head from 'next/head';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/images/profile.jpg" width={200} height={200}></img><br></br>
        <h1 className={styles.title}>
          Jan Erol M. Canilao 
        </h1>

        <h2 className={styles.description}>
          I'm Jan Erol Canilao, 22 years old, from Villa Angelina,
           Im a BSIT 3rd year student from University of the Assumption.<br></br>
      </h2>
      <h3>
        Expectations for this subject:
      </h3>
      <p>
        • To learn deeply into different functions and aspects of NEXTJS.<br></br>
        • To be efficient in coding different languages.<br></br>
        • To have more knowledge about creating web pages and the variety of it.
      </p>
      <h3>
      10 things that requires 0 talent:
      </h3>
      1.Being on Time<br></br>
      2.Work Ethic<br></br>
      3.Effort<br></br>
      4.Body Language<br></br>
      5.Energy<br></br>
      6.Attitude<br></br>
      7.Passion<br></br>
      8.Being Coachable<br></br>
      9.Doing Extra<br></br>
      10.Being Prepared<br></br>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        img {
          border-radius: 50%;,
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}