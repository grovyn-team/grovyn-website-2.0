export const INFRASTRUCTURE_SLUGS = ["cloud", "network", "servers", "security", "support", "backup", "devops", "datacenter", "communication", "migration"] as const;
export type InfrastructureSlug = (typeof INFRASTRUCTURE_SLUGS)[number];
