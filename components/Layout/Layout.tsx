import { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="bg-background">
      <div className="m-auto min-h-screen max-w-4xl  border border-black ">
        {children}
      </div>
    </main>
  );
};
