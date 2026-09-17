export type FloatingCardKind = 'notification' | 'activity' | 'comment' | 'team';

export interface FloatingCardData {
  id: string;
  kind: FloatingCardKind;
  title: string;
  subtitle?: string;
  position: string;
  delay: string;
}
export interface FloatingCardProps {
  card: FloatingCardData;
}
