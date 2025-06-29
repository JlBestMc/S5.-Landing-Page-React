interface AnchorProps {
  ref: string;
  styles?: string;
  content: string;
}

export default function Anchor({ ref, styles = "", content }: AnchorProps) {
    const baseClasses ="hover:text-red-400 tracking-widest text-sm font-semibold text-[#353541] cursor-[url('./assets/cursor.cur'),_auto] transition duration-300 ease-in-out";
    return (
    <a className={`${baseClasses}${styles}`} href={ref} >
      {content}
    </a>
  );
}
