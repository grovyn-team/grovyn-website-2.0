"use client";

import WebServiceContent from "@/components/WebServiceContent";
import MobileServiceContent from "@/components/MobileServiceContent";
import CustomSoftwareContent from "@/components/CustomSoftwareContent";

type ServiceSlug = "web" | "mobile" | "custom-software";

export default function ServiceDetailContent({ slug }: { slug: ServiceSlug }) {
  switch (slug) {
    case "web":
      return <WebServiceContent />;
    case "mobile":
      return <MobileServiceContent />;
    case "custom-software":
      return <CustomSoftwareContent />;
    default:
      return null;
  }
}
