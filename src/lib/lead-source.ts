/** Where the visitor came from (UTM tags, landing page), kept for the visit and sent with enquiries. */
const KEY = "jde-lead-source";

export function captureLeadSource() {
  try {
    if (sessionStorage.getItem(KEY)) return;
    const params = new URLSearchParams(window.location.search);
    const data: Record<string, string> = { "Landing page": window.location.href };
    if (document.referrer) data["Referrer"] = document.referrer;
    for (const k of [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "gclid",
      "fbclid",
    ]) {
      const v = params.get(k);
      if (v) data[k] = v;
    }
    sessionStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    /* storage blocked: nothing to record */
  }
}

export function getLeadSource(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}
