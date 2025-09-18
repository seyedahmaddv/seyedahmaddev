// app/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { Section, Container, Prose } from "@/components/craft";
import { File, Pen, Tag, Diamond, User, Folder, Briefcase, Mail } from "lucide-react";

// 📌 SEO Metadata
export const metadata: Metadata = {
  title: "سید احمد غلامی | طراح سایت و توسعه‌دهنده React و Next.js",
  description:
    "طراحی و توسعه وب‌سایت‌های مدرن، بهینه برای سئو، سریع و واکنش‌گرا با React، Next.js، TypeScript و Tailwind CSS. خدمات طراحی سایت حرفه‌ای توسط سید احمد غلامی.",
  keywords: [
    "طراحی سایت",
    "توسعه وب",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "سید احمد غلامی",
    "طراح سایت",
  ],
  openGraph: {
    title: "سید احمد غلامی | طراح سایت و توسعه‌دهنده React و Next.js",
    description:
      "طراحی سایت حرفه‌ای و توسعه وب با React، Next.js و TypeScript توسط سید احمد غلامی.",
    url: "https://seyedahmaddev.ir",
    siteName: "سید احمد غلامی",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "سید احمد غلامی – طراح سایت و توسعه‌دهنده React و Next.js",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
};

export default function Home() {
  return (
    <Section>
      <Container>
        <main className="space-y-12">
          {/* Hero */}
          <Prose>
            <h1>سید احمد غلامی – طراح سایت و توسعه‌دهنده ری اکت و نکست</h1>
            <h2>
              طراحی و توسعه وب‌سایت‌های مدرن، سریع، واکنش‌گرا و بهینه برای سئو
            </h2>
            <p>
              من <strong>سید احمد غلامی</strong> هستم، توسعه‌دهنده فرانت‌اند با
              تخصص در <strong>ری‌اکت، نکست و تایپ اسکریپت</strong>. هدف من
              ساخت وب‌سایت‌های سریع، مدرن و سئو شده است تا برند شما در فضای
              آنلاین بدرخشد.
            </p>
          </Prose>

          {/* کارت‌های شخصی */}
          {/* <div className="grid md:grid-cols-4 gap-6">
            <Link
              href="/projects"
              className="border h-40 bg-accent/50 rounded-xl p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
            >
              <Briefcase size={28} />
              <span>
                پروژه‌ها
                <span className="block text-sm text-muted-foreground">
                  نمونه‌کارهای من
                </span>
              </span>
            </Link>

            <Link
              href="/about"
              className="border h-40 bg-accent/50 rounded-xl p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
            >
              <User size={28} />
              <span>
                درباره من
                <span className="block text-sm text-muted-foreground">
                  بیوگرافی و مسیر کاری
                </span>
              </span>
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              className="border h-40 bg-accent/50 rounded-xl p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
            >
              <File size={28} />
              <span>
                رزومه
                <span className="block text-sm text-muted-foreground">
                  دانلود رزومه PDF
                </span>
              </span>
            </a>

            <a
              href="mailto:seyedahmaddv@gmail.com"
              className="border h-40 bg-accent/50 rounded-xl p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
            >
              <Mail size={28} />
              <span>
                تماس
                <span className="block text-sm text-muted-foreground">
                  ارتباط مستقیم با من
                </span>
              </span>
            </a>
          </div> */}

          {/* کارت‌های وبلاگ وردپرسی */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Link
              href="/posts"
              className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
            >
              <Pen size={32} />
              <span>
                نوشته‌ها
                <span className="block text-sm text-muted-foreground">
                  همه مقالات وردپرس شما
                </span>
              </span>
            </Link>

            <Link
              href="/pages"
              className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
            >
              <File size={32} />
              <span>
                صفحات
                <span className="block text-sm text-muted-foreground">
                  صفحات سفارشی وردپرس
                </span>
              </span>
            </Link>

            <Link
              href="/posts/authors"
              className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
            >
              <User size={32} />
              <span>
                نویسندگان
                <span className="block text-sm text-muted-foreground">
                  لیست نویسندگان وردپرس
                </span>
              </span>
            </Link>

            <Link
              href="/posts/tags"
              className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
            >
              <Tag size={32} />
              <span>
                برچسب‌ها
                <span className="block text-sm text-muted-foreground">
                  محتوای دسته‌بندی شده بر اساس تگ
                </span>
              </span>
            </Link>

            <Link
              href="/posts/categories"
              className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
            >
              <Diamond size={32} />
              <span>
                دسته‌بندی‌ها
                <span className="block text-sm text-muted-foreground">
                  موضوعات وبلاگ وردپرس شما
                </span>
              </span>
            </Link>

            <a
              href="https://github.com/seyedahmaddv"
              target="_blank"
              className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
            >
              <Folder size={32} />
              <span>
                مستندات
                <span className="block text-sm text-muted-foreground">
                  نحوه استفاده از پروژه‌ها و وبلاگ
                </span>
              </span>
            </a>
          </div>
        </main>
      </Container>
    </Section>
  );
}
