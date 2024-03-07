interface AppBarProps {
  title?: string | React.ReactNode;
  right?: React.ReactNode;
}
function AppBar(props: AppBarProps): JSX.Element {
  const { title, right } = props;
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[500px]">
        <div className="flex justify-between items-center p-4">
          <div>
            <h1 className="text-2xl font-bold">{title ?? "Todo App"}</h1>
          </div>
          <div>
           {right}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppBar;
