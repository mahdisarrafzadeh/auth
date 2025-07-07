import { redirect } from "next/navigation";

import { pagesInfo } from "../constants/pagesInfo";

export default function Home() {
  redirect(pagesInfo.authPage.path);
}
