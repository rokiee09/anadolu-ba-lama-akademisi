export type DemoLeadRecord = {
  id: string;
  full_name: string;
  phone: string;
  email: string;
  level: string;
  interest: string;
  message: string;
  created_at: string;
};

const leadsKey = "aba_demo_leads";
const sessionKey = "aba_demo_session";

function canUseStorage() {
  return typeof window !== "undefined";
}

export function listBrowserDemoLeads() {
  if (!canUseStorage()) {
    return [] as DemoLeadRecord[];
  }

  try {
    const raw = window.localStorage.getItem(leadsKey);

    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw) as DemoLeadRecord[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveBrowserDemoLead(
  payload: Omit<DemoLeadRecord, "id" | "created_at">,
) {
  if (!canUseStorage()) {
    return null;
  }

  const nextRecord: DemoLeadRecord = {
    ...payload,
    id: crypto.randomUUID(),
    created_at: new Date().toISOString(),
  };

  const current = listBrowserDemoLeads();
  current.unshift(nextRecord);
  window.localStorage.setItem(leadsKey, JSON.stringify(current));

  return nextRecord;
}

export function setBrowserDemoSession(email: string) {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.setItem(sessionKey, email);
}

export function getBrowserDemoSession() {
  if (!canUseStorage()) {
    return null;
  }

  return window.localStorage.getItem(sessionKey);
}

export function clearBrowserDemoSession() {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.removeItem(sessionKey);
}
