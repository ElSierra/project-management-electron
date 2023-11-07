export default function Box({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`w-full pt-[80px] p-6 ${className}`}>{children}</div>;
}
