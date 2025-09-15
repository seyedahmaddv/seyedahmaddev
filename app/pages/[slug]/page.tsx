import { getPostBySlug, getAllPages } from "@/lib/wordpress";
import { Section, Container } from "@/components/craft";
import { siteConfig } from "@/site.config";
import Sidebar from "@/components/Sidebar";
import './PostContent.css'; // 👈 استایل جداگانه


import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateStaticParams() {
  const pages = await getAllPages();
  return pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPostBySlug(slug);
  if (!page) return {};

  const ogUrl = new URL(`${siteConfig.site_domain}/api/og`);
  ogUrl.searchParams.append("title", page.title.rendered);

  const description = page.excerpt?.rendered
    ? page.excerpt.rendered.replace(/<[^>]*>/g, "").trim()
    : page.content.rendered.replace(/<[^>]*>/g, "").trim().slice(0, 200) + "...";

  ogUrl.searchParams.append("description", description);

  return {
    title: page.title.rendered,
    description,
    openGraph: {
      title: page.title.rendered,
      description,
      type: "article",
      url: `${siteConfig.site_domain}/posts/${page.slug}`,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: page.title.rendered,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title.rendered,
      description,
      images: [ogUrl.toString()],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await getPostBySlug(slug);

  return (
    <Section>
      <Container className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* محتوای اصلی */}
        <div className="md:col-span-3 rtl">
          <h2 className="mb-4 text-2xl font-semibold">{page.title.rendered}</h2>
          <div className="post-content" dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        </div>

        {/* سایدبار */}
        <aside className="md:col-span-1">
          <Sidebar />
        </aside>
      </Container>
    </Section>
  );
}
