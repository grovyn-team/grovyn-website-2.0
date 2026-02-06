"use client";

import WebServiceContent from "@/components/WebServiceContent";
import MobileServiceContent from "@/components/MobileServiceContent";
import PlatformServiceContent from "@/components/PlatformServiceContent";

type ServiceSlug = "web" | "mobile" | "platform";

export default function ServiceDetailContent({ slug }: { slug: ServiceSlug }) {
  switch (slug) {
    case "web":
      return <WebServiceContent />;
    case "mobile":
      return <MobileServiceContent />;
    case "platform":
      return <PlatformServiceContent />;
    default:
      return null;
  }
}
