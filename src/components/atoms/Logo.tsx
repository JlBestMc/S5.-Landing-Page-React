interface LogoProps {  
    src: string;
    styles?: string;
}

export default function Logo({src ,styles=""}:LogoProps) {
    const baseClasses = "w-full";
    return (
    <img className={`${baseClasses} ${src} ${styles}`}></img>
    );
}
