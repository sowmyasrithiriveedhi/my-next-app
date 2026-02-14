import Link from "next/link";

export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        <li><Link href="/blog/genai">GenAI</Link></li>
        <li><Link href="/blog/python">Python</Link></li>
        <li><Link href="/blog/data-science">Data Science</Link></li>
        <li><Link href="/blog/java">Java</Link></li>
      </ul>
    </div>
  );
}
