export type IndicatorColor = "green" | "blue" | "whatsapp";

export interface PortalCardProps {
  indicator: IndicatorColor;
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
  delay?: number;
}
