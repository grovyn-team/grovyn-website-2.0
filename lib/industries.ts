export const INDUSTRY_SLUGS = ["healthcare", "fintech", "ecommerce", "edtech", "saas", "startups", "dating", "media_content"] as const;
export type IndustrySlug = (typeof INDUSTRY_SLUGS)[number];
