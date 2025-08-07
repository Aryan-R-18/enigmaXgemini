// app/page.js
import { redirect } from 'next/navigation';

export default async function Home() {
  redirect('/activities');
}
