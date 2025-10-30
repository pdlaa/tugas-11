import fs from "fs";
import path from "path";

export const metadata = {
  title: "NextBlog SSG",
};

export default async function Home() {
  // 1️⃣ Ambil data statis dari file JSON
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const posts = JSON.parse(fileData);

  // 2️⃣ Render data secara statis (SSG)
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">NextBlog (SSG)</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.content}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
