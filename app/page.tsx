// app/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { Section, Container, Prose } from "@/components/craft";
import { File, Pen, User, Folder } from "lucide-react";

// 📌 تنظیمات سئو
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
    url: "https://seyedahmaddev.ir", // اینو بعداً با دامنه اصلیت عوض کن
    siteName: "سید احمد غلامی",
    images: [
      {
        url: "/og-image.jpg", // تصویر سئو (در پوشه public بذار)
        width: 1200,
        height: 630,
        alt: "سید احمد غلامی – طراح سایت و توسعه‌دهنده React و Next.js",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
};

// 📌 صفحه اصلی
export default function Home() {
  return (
    <Section>
      <Container>
        <main className="space-y-8">
          <Prose>
            <h1>سید احمد غلامی – طراح سایت و توسعه‌دهنده React و Next.js</h1>
            <h2>
              طراحی و توسعه وب‌سایت‌های مدرن، سریع، واکنش‌گرا و سئو شده با
              جدیدترین تکنولوژی‌ها
            </h2>

            <p>
              من <strong>سید احمد غلامی</strong> هستم، توسعه‌دهنده فرانت‌اند با
              تخصص در <strong>React، Next.js و TypeScript</strong>. تجربه
              طراحی و پیاده‌سازی وب‌سایت‌های فروشگاهی، شرکتی و اپلیکیشن‌های تحت
              وب را دارم. هدف من ارائه‌ی خدمات{" "}
              <strong>طراحی سایت حرفه‌ای، سریع و بهینه برای سئو</strong> است تا
              برند شما در فضای آنلاین بهتر دیده شود.
            </p>
          </Prose>

          {/* کارت‌های معرفی بخش‌ها */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Link
              href="/projects"
              className="border h-40 bg-accent/50 rounded-xl p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
            >
              <File size={28} />
              <span>
                پروژه‌ها
                <span className="block text-sm text-muted-foreground">
                  نمونه‌کارها و پروژه‌های من
                </span>
              </span>
            </Link>

            <Link
              href="/blog"
              className="border h-40 bg-accent/50 rounded-xl p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
            >
              <Pen size={28} />
              <span>
                نوشته‌ها
                <span className="block text-sm text-muted-foreground">
                  مقالات و یادداشت‌ها درباره برنامه‌نویسی
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
                  آشنایی بیشتر با من و مسیر کاری
                </span>
              </span>
            </Link>

            <a
              href="https://github.com/seyedahmaddv"
              target="_blank"
              className="border h-40 bg-accent/50 rounded-xl p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
            >
              <Folder size={28} />
              <span>
                گیت‌هاب
                <span className="block text-sm text-muted-foreground">
                  کدها و نمونه‌کارهای من
                </span>
              </span>
            </a>
          </div>
        </main>
      </Container>
    </Section>
  );
}
