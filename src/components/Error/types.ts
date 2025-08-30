export interface ErrorProps {
  errorCode: number | string;
  errorShortMessage?: string;
  errorFullMessage?: string;
  websiteUrl?: string;
  hasTime?: boolean;
}
