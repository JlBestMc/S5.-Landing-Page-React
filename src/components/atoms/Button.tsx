interface propsType {
  styles: string;
  content: string;
}
function Button({ styles, content }: propsType) {
  return <div className={styles}>{content}</div>;
}
export default Button;
