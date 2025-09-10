export type Education = {
  title: string;
  institution: string;
  /**
   * Institution logo to display (takes precedence over `institutionIconName`).
   * Provide an absolute URL or a path under /public.
   */
  institutionLogoURL?: string;
  /**
   * Icon key for the institution when no `institutionLogoURL` is provided.
   * Must match a supported icon name (e.g., "university", "school", etc.).
   */
  institutionIconName?: string;
  /**
   * Graduation date in ISO format (YYYY-MM-DD). Parsed and formatted in the UI via Day.js.
   */
  graduationDate: string;
  /**
   * Degree or certificate identifier; leave empty if not applicable.
   */
  credentialID: string;
  /**
   * Public verification URL or link to the certificate document. Used as the anchor href.
   */
  credentialURL: string;
};