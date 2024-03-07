interface ContainerProps {
  children: React.ReactNode;
}
function Container(props: ContainerProps): JSX.Element {
  const { children } = props;
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[500px] p-4">{children}</div>
    </div>
  );
}

export default Container;
