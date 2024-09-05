const FormBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-full bg-auth-background bg-no-repeat bg-cover flex items-center max-lg:justify-center max-lg:p-2 lg:pl-20 overflow-hidden">
      <div className="bg-white w-[580px] p-8 rounded-lg flex flex-col gap-6 max-h-full overflow-y-auto overflow-x-hidden">
        {children}
      </div>
    </div>
  );
};

export default FormBackground;
