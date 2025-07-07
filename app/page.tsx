import { redirect } from "next/navigation";

import { pagesInfo } from "@/constants";

export default function Home() {
  redirect(pagesInfo.authPage.path);
}
