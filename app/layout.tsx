"use client";

import GroupLeftMenu from "@/components/menu/GroupLeftMenu";
import { pageAdminTools } from "@/data/sidbarData";
import { useParams } from "next/navigation";
import avatar_13 from "/public/images/avatar-13.png";
import { ReactNode } from "react";

interface PagesLayoutProps {
  children: ReactNode;
  params: Promise<{ pageId?: string }>;
}

const PagesLayout = async ({ params, children }: PagesLayoutProps) => {
  const resolvedParams = await params;
  const { pageId } = useParams<{ pageId: string }>();

  if (resolvedParams.pageId) {
    return children;
  }

  return (
    <main className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <GroupLeftMenu
              adminTools={pageAdminTools}
              img={avatar_13}
              name="Java World"
              type="Public"
            />
          </div>
          {children}
        </div>
      </div>
    </main>
  );
};

export default PagesLayout;
