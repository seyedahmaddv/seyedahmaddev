// Craft Imports
import { Section, Container, Prose } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Next.js Imports
import Link from "next/link";

// Icons
import { File, Pen, Tag, Diamond, User, Folder } from "lucide-react";
import { WordPressIcon } from "@/components/icons/wordpress";
import { NextJsIcon } from "@/components/icons/nextjs";

// این صفحه از کامپوننت craft.tsx و سیستم طراحی استفاده می‌کند
export default function Home() {
  return (
    <Section>
      <Container>
        <ToDelete />
      </Container>
    </Section>
  );
}

// نمونه‌ای از TSX با متن فارسی
const ToDelete = () => {
  return (
    <main className="space-y-6">
      <Prose>
        <h1>
          <Balancer>وردپرس بدون سر با Next.js</Balancer>
        </h1>

        <p>
          این پروژه <a href="https://github.com/9d8dev/next-wp">next-wp</a> است،
          که به شما امکان می‌دهد سایت‌های وردپرس را با Next.js به سرعت بسازید.
          این استارتر با استفاده از <a href="https://ui.shadcn.com">shadcn/ui</a>،{" "}
          <a href="https://craft-ds.com">craft-ds</a> و Tailwind CSS طراحی شده است.
          همچنین می‌توانید از <a href="https://components.work">brijr/components</a> 
          برای استفاده از کامپوننت‌های آماده بهره ببرید. دریافت داده‌ها و
          تایپ‌سیف بودن آن‌ها در <code>lib/wordpress.ts</code> و{" "}
          <code>lib/wordpress.d.ts</code> مدیریت می‌شود.
        </p>
      </Prose>

      <div className="flex justify-between items-center gap-4">
        {/* استارتر کلون Vercel */}
        <div className="flex items-center gap-3">
          <a
            className="h-auto block"
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F9d8dev%2Fnext-wp&env=WORDPRESS_URL,WORDPRESS_HOSTNAME&envDescription=Add%20WordPress%20URL%20with%20Rest%20API%20enabled%20(ie.%20https%3A%2F%2Fwp.example.com)%20abd%20the%20hostname%20for%20Image%20rendering%20in%20Next%20JS%20(ie.%20wp.example.com)&project-name=next-wp&repository-name=next-wp&demo-title=Next%20JS%20and%20WordPress%20Starter&demo-url=https%3A%2F%2Fwp.9d8.dev"
          >
            <img
              className="not-prose my-4"
              src="https://vercel.com/button"
              alt="Deploy with Vercel"
              width={105}
              height={32.62}
            />
          </a>
          <p className="!text-sm sr-only sm:not-sr-only text-muted-foreground">
            استقرار با Vercel در چند ثانیه.
          </p>
        </div>

        <div className="flex gap-2 items-center">
          <WordPressIcon className="text-foreground" width={32} height={32} />
          <NextJsIcon className="text-foreground" width={32} height={32} />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/posts"
        >
          <Pen size={32} />
          <span>
            نوشته‌ها{" "}
            <span className="block text-sm text-muted-foreground">
              همه نوشته‌های وردپرس شما
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/pages"
        >
          <File size={32} />
          <span>
            صفحات{" "}
            <span className="block text-sm text-muted-foreground">
              صفحات سفارشی وردپرس شما
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/posts/authors"
        >
          <User size={32} />
          <span>
            نویسندگان{" "}
            <span className="block text-sm text-muted-foreground">
              لیست نویسندگان وردپرس شما
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/posts/tags"
        >
          <Tag size={32} />
          <span>
            برچسب‌ها{" "}
            <span className="block text-sm text-muted-foreground">
              محتوا بر اساس برچسب‌ها
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/posts/categories"
        >
          <Diamond size={32} />
          <span>
            دسته‌بندی‌ها{" "}
            <span className="block text-sm text-muted-foreground">
              دسته‌بندی‌های وردپرس شما
            </span>
          </span>
        </Link>
        <a
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="https://github.com/9d8dev/next-wp/blob/main/README.md"
        >
          <Folder size={32} />
          <span>
            مستندات{" "}
            <span className="block text-sm text-muted-foreground">
              نحوه استفاده از `next-wp`
            </span>
          </span>
        </a>
      </div>
    </main>
  );
};
