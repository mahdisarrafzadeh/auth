import Link from "next/link";

import { TEXTS, pagesInfo } from "@/constants";
import { Button } from "@/app/components/ui";

import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>404</h1>
        <h2>{TEXTS.notFound.title}</h2>
        <p>{TEXTS.notFound.description}</p>
        <Link href={pagesInfo.authPage.href()}>
          <Button>{TEXTS.notFound.buttonText}</Button>
        </Link>
      </div>
    </div>
  );
}
