import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>

            <Image
              src="/img-192.png"
              alt="MAP"
              className={styles.vercelLogo}
              width={1726}
              height={1080}
              priority
            />

    </main>
  );
}
