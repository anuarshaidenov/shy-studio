import { HeroSection } from "@/components/hero-section";
import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export const generateMetadata = async () => {
  const t = await getTranslations();

  const metadata: Metadata = {
    title: t("hello"),
    description: t("hello"),
    openGraph: {
      title: t("hello"),
      description: t("hello"),
    },
  };

  return metadata;
};

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <HeroSection />
    </>
  );
}
