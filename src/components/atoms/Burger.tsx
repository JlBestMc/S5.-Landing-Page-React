interface BurgerProps {
  isOpen: boolean;
  burgerIconSrc: string;
  closeIconSrc: string;
};

export default function Burger({isOpen, burgerIconSrc, closeIconSrc}: BurgerProps) {
  const src = isOpen ? closeIconSrc : burgerIconSrc;

  return <img src={src} alt={isOpen ? 'Open navbar' : 'Close Navbar'} />;
}
