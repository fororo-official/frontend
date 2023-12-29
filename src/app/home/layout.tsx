import React from "react";

function MyPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-16 mb-8 min-h-full h-fit">
      {/* w-10/12, md: w-full */}
      <div className="flex flex-col items-center">{children}</div>
    </div>
  );
}

export default MyPageLayout;
