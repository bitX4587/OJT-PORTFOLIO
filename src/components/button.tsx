type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ className, ...props }: Props) {
  return <button className={className} {...props} />;
}

export default Button;
