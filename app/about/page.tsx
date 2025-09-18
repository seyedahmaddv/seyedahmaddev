// app/about/page.tsx
import { Metadata } from "next";
import { Section, Container, Prose } from "@/components/craft";

// 📌 SEO Metadata
export const metadata: Metadata = {
  title: "درباره من | سید احمد غلامی",
  description:
    "بیوگرافی، مسیر کاری و تخصص‌های سید احمد غلامی، طراح سایت و توسعه‌دهنده React و Next.js.",
  openGraph: {
    title: "درباره من | سید احمد غلامی",
    description:
      "آشنایی بیشتر با سید احمد غلامی، توسعه‌دهنده فرانت‌اند متخصص در React، Next.js و TypeScript.",
    url: "https://seyedahmaddev.ir/about",
    siteName: "سید احمد غلامی",
    locale: "fa_IR",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <Section>
      <Container>
        <main className="space-y-12">
          <Prose>
            <h1>درباره من</h1>
            <p>
              من <strong>سید احمد غلامی</strong> هستم، توسعه‌دهنده فرانت‌اند با
              تمرکز بر ساخت وب‌سایت‌های مدرن، سریع و بهینه برای موتورهای جستجو.
              تخصص اصلی من در <strong>React</strong>، <strong>Next.js</strong>،
              <strong>TypeScript</strong> و <strong>Tailwind CSS</strong> است.
            </p>
            <p>
              مسیر کاری من با علاقه به طراحی و توسعه وب آغاز شد و در طول زمان با
              یادگیری ابزارها و فریم‌ورک‌های مدرن، توانستم پروژه‌های متنوعی را
              برای کسب‌وکارها و برندهای مختلف پیاده‌سازی کنم.
            </p>
            <p>
              هدف من ایجاد تجربه‌های کاربری روان و زیباست؛ وب‌سایت‌هایی که نه
              تنها از نظر ظاهری جذاب باشند، بلکه از نظر عملکرد و سئو نیز در سطح
              بالایی قرار بگیرند.
            </p>
            <h2>مهارت‌ها</h2>
            <ul>
              <li>React و Next.js برای توسعه وب مدرن</li>
              <li>TypeScript برای کدنویسی ایمن و مقیاس‌پذیر</li>
              <li>Tailwind CSS برای طراحی رابط کاربری سریع و واکنش‌گرا</li>
              <li>بهینه‌سازی سئو و بهبود سرعت وب‌سایت</li>
            </ul>
            <h2>ارتباط با من</h2>
            <p>
              اگر به همکاری یا مشاوره در زمینه طراحی و توسعه وب علاقه‌مند هستید،
              می‌توانید از طریق ایمیل{" "}
              <a href="mailto:seyedahmaddv@gmail.com">
                seyedahmaddv@gmail.com
              </a>{" "}
              با من در تماس باشید.
            </p>
          </Prose>
        </main>
      </Container>
    </Section>
  );
}
