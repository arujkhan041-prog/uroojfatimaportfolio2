// Web3Forms public access key — safe for client-side use (per Web3Forms docs)
// Override via NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in Vercel if you rotate the key
export const web3formsAccessKey =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  "ce73e510-fa5e-4bbd-932c-8c8454f63354";
