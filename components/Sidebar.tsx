"use client";

import Link from "next/link";

export default function Sidebar() {
  // بعداً می‌تونی این دیتا رو از وردپرس بگیری
  const recentPosts = [
    { title: "پست نمونه ۱", slug: "sample-post-1" },
    { title: "پست نمونه ۲", slug: "sample-post-2" },
    { title: "پست نمونه ۳", slug: "sample-post-3" },
  ];

  return (
    <div className="p-4 border rounded-lg shadow-sm space-y-6">
      {/* بخش آخرین نوشته‌ها */}
      <div>
        <h3 className="font-bold mb-2">آخرین نوشته‌ها</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/posts/${post.slug}`}
                className="hover:underline hover:text-blue-600"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* بخش دسته‌بندی‌ها (نمونه) */}
      <div>
        <h3 className="font-bold mb-2">دسته‌بندی‌ها</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li><Link href="/category/react">ری‌اکت</Link></li>
          <li><Link href="/category/nextjs">نکست‌جی‌اس</Link></li>
          <li><Link href="/category/dev">برنامه‌نویسی</Link></li>
        </ul>
      </div>
    </div>
  );
}
