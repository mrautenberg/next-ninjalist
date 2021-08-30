import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

// User for data fetching
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // Return the data as ninjas
  return {
    props: { ninjas: data },
  };
};

// Get the ninjas props from prev. fetch request
const Ninjas = ({ ninjas }) => {
  return (
    <div>
      {ninjas.map((ninja) => (
        <Link href={"/ninjas/" + ninja.id} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
