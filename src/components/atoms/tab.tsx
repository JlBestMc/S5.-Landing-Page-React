interface TabProps {
  content: string;
  onSelect: () => void;
  isSelected: boolean;
}

export default function Tab({ content, onSelect, isSelected }: TabProps) {
  const selectedTab =
    "tracking-wider text-lg text-center py-4 md:py-6 md:px-10 w-full border-4 border-transparent border-b-red-400 cursor-[url('./assets/cursor.cur'),_auto]";
  const unselectedTab =
    "tracking-wider text-lg text-center py-4 md:py-6 md:px-10 w-full border-4 border-transparent cursor-[url('./assets/cursor.cur'),_auto]";

  return (
    <button
      className={isSelected ? selectedTab : unselectedTab}
      onClick={onSelect}
    >
      {content}
    </button>
  );
}
