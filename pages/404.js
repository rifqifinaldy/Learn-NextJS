import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();
    const [counter, setCounter] = useState(3);

    setInterval(() => {
        setCounter(counter-1)
    }, 1000);

    useEffect(() => {
      setTimeout(() => {
          router.push('/')
      }, 3000);
    }, [])
    

  return (
    <div>
      <h1>OOOPS........</h1>
      <h2>That Page Can't be found</h2>
      <p>
        You will be redirected to the <Link href="/">Home Page</Link> in {counter}
      </p>
    </div>
  );
};

export default NotFound;
