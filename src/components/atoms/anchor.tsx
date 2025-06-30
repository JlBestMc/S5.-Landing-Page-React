interface AnchorProps {
  ref: string;
  styles?: string;
  children: React.ReactNode;
}

export default function Anchor({ ref, styles = "", children }: AnchorProps) {
  return (
    <a className={`${styles}`} href={ref}>
      {children}
    </a>
  );
}
