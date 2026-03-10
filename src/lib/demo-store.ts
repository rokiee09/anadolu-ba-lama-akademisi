import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

type DemoLeadInsert = {
  full_name: string;
  phone: string;
  email: string;
  level: string;
  interest: string;
  message: string;
};

export type DemoLeadRecord = DemoLeadInsert & {
  id: string;
  created_at: string;
};

const dataDirectory = path.join(process.cwd(), ".demo");
const leadsFile = path.join(dataDirectory, "course-leads.json");

async function ensureDemoDirectory() {
  await mkdir(dataDirectory, { recursive: true });
}

async function readLeadFile() {
  try {
    const content = await readFile(leadsFile, "utf-8");
    const parsed = JSON.parse(content) as DemoLeadRecord[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function insertDemoLead(payload: DemoLeadInsert) {
  await ensureDemoDirectory();

  const existing = await readLeadFile();
  const nextRecord: DemoLeadRecord = {
    ...payload,
    id: crypto.randomUUID(),
    created_at: new Date().toISOString(),
  };

  existing.unshift(nextRecord);
  await writeFile(leadsFile, JSON.stringify(existing, null, 2), "utf-8");

  return nextRecord;
}

export async function listDemoLeads() {
  await ensureDemoDirectory();
  return readLeadFile();
}
