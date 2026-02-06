export const INDUSTRY_SLUGS = ["healthcare", "fintech", "ecommerce", "edtech", "saas", "startups"] as const;
export type IndustrySlug = (typeof INDUSTRY_SLUGS)[number];
