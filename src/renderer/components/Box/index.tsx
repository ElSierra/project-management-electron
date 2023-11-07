export default function Box({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`w-full ${className}`}>{children}</div>;
}
