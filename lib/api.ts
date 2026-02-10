/**
 * API client for grovyn-backend.
 * Set NEXT_PUBLIC_API_URL in .env.local (e.g. http://localhost:3000 when backend runs on 3000).
 */

const getBaseUrl = (): string => {
  if (typeof window !== "undefined") {
    return process.env.NEXT_PUBLIC_API_URL ?? "";
  }
  return process.env.NEXT_PUBLIC_API_URL ?? "";
};

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message: string;
};

export type ContactResponse =
  | { success: true; message: string; data?: { contactId?: string; submittedAt?: string } }
  | { success: false; message: string };

export async function submitContact(payload: ContactPayload): Promise<ContactResponse> {
  const base = getBaseUrl();
  if (!base) {
    return { success: false, message: "API URL not configured. Set NEXT_PUBLIC_API_URL." };
  }
  const res = await fetch(`${base.replace(/\/$/, "")}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    return { success: false, message: (data as { message?: string }).message || "Failed to submit." };
  }
  return data as ContactResponse;
}

export type CareerApplicationPayload = {
  name: string;
  email: string;
  phone?: string;
  position: string;
  message?: string;
  resume: File;
};

export type CareerApplicationResponse =
  | { success: true; message: string; data?: { applicationId?: string; submittedAt?: string } }
  | { success: false; message: string };

export async function submitCareerApplication(
  payload: CareerApplicationPayload
): Promise<CareerApplicationResponse> {
  const base = getBaseUrl();
  if (!base) {
    return { success: false, message: "API URL not configured. Set NEXT_PUBLIC_API_URL." };
  }
  const form = new FormData();
  form.append("name", payload.name);
  form.append("email", payload.email);
  if (payload.phone) form.append("phone", payload.phone);
  form.append("position", payload.position);
  if (payload.message) form.append("message", payload.message);
  form.append("resume", payload.resume);

  const res = await fetch(`${base.replace(/\/$/, "")}/careers/apply`, {
    method: "POST",
    body: form,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    return { success: false, message: (data as { message?: string }).message || "Failed to submit application." };
  }
  return data as CareerApplicationResponse;
}
