import { notFound } from "next/navigation";

import { services } from "@/data/services";
import ServiceHeader from "@/components/web-development/service/ServiceHeader";
import ServiceHero from "@/components/web-development/service/ServiceHero";
import StickyBottom from "@/components/web-development/service/StickyBottom";
import ContactCTA from "@/components/web-development/service/ContactCTA";
import Pricing from "@/components/web-development/service/Pricing";
import Technology from "@/components/web-development/service/Technology";
import Features from "@/components/web-development/service/Features";
import ServiceOverview from "@/components/web-development/service/ServiceOverview";


interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: Props) {

  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {

    notFound();

  }

  return (

    <main className="min-h-screen bg-[#050B14] flex justify-center">

      <div className="w-full max-w-[430px] pb-28">

        <ServiceHeader />

        <ServiceHero service={service} />

        <ServiceOverview service={service} />

        <Features service={service} />

        <Technology service={service} />

        <Pricing service={service} />

        {/* <ContactCTA service={service} /> */}

        <StickyBottom />

      </div>

    </main>

  );

}