import Link from 'next/link';

export default function SubLayout({ children }) {
  return (
    <div>
      <Link href="/">Home으로</Link>
      {children}
    </div>
  );
}
