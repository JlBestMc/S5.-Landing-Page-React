interface LogoProps {  
    src: string;
    styles?: string;
}

export default function Logo({src ,styles=""}:LogoProps) {
    const baseClasses = "";
    return (
    <img className={`${baseClasses} ${styles}`} src={src}></img>
    );
}
