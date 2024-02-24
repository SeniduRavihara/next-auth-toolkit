const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full text-white flex items-center justify-center bg-gradient-to-r from-fuchsia-500 to-cyan-500">
      {children}
    </div>
  );
};
export default layout;
