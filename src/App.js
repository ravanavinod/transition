import { useTransition, useState } from 'react';
import { Posts } from './Posts';
import { Home } from './Home';
import { Contact } from './Contact';

export default function App() {
  const [isPending, startTransition] = useTransition();
  const [page, setPage] = useState('home');

  function changePage(newPage) {
    console.log(`isPending = ${isPending}`)
    startTransition(() => {
      setPage(newPage);
    });
    console.log(`isPending = ${isPending}`)
  }

  return (
    <>
      <button onClick={() => changePage('home')}>Home</button>
      <button onClick={() => changePage('posts')}>Posts</button>
      <button onClick={() => changePage('contact')}>Contact</button>
      <hr />
      {console.log(`isPending = ${isPending}`)}
      {isPending && <div>Loading...</div>}
      {page === 'home' && <Home />}
      {page === 'posts' && <Posts />}
      {page === 'contact' && <Contact />}
    </>
  );
}
