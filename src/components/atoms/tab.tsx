interface TabProps {
  content: string;
  onSelect: () => void;
  isSelected: boolean;
}

export default function Tab({ content, onSelect, isSelected }: TabProps) {
  const selectedTab =
    "tracking-wider text-3xl text-center py-10 px-10 w-full border-2 border-transparent border-b-red-400 cursor-[url('./assets/cursor.cur'),_auto]";
  const unselectedTab =
    "tracking-wider text-3xl text-center py-10 px-10 w-full border-2 border-transparent cursor-[url('./assets/cursor.cur'),_auto]";

  return (
    <button
      className={isSelected ? selectedTab : unselectedTab}
      onClick={onSelect}
    >
      {content}
    </button>
  );
}
