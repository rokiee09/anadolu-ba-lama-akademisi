"use client";

import { useEffect, useState } from "react";
import { listBrowserDemoLeads, type DemoLeadRecord } from "@/lib/browser-demo";

export function LeadsListClient() {
  const [leads, setLeads] = useState<DemoLeadRecord[]>([]);

  useEffect(() => {
    setLeads(listBrowserDemoLeads());
  }, []);

  return (
    <div className="mt-6 grid gap-4">
      {leads.length === 0 ? (
        <div className="card-surface p-8">
          <p className="text-[#6B584D]">Henuz kaydedilmis demo basvuru yok.</p>
        </div>
      ) : (
        leads.map((lead) => (
          <article key={lead.id} className="card-surface p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-[#2B1B12]">{lead.full_name}</h2>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-amber-300">
                  {lead.level} • {lead.interest}
                </p>
              </div>
              <p className="text-sm text-[#7A665A]">
                {new Date(lead.created_at).toLocaleString("tr-TR")}
              </p>
            </div>

            <div className="mt-6 grid gap-2 text-[#6B584D]">
              <p>{lead.phone}</p>
              <p>{lead.email}</p>
              <p>{lead.message}</p>
            </div>
          </article>
        ))
      )}
    </div>
  );
}
