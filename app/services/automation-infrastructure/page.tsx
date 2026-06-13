import { BranchPage } from "@/components/BranchPage";
import { automationBranch } from "@/content/catalogue";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Automation & Infrastructure",
  description:
    "AI voice receptionist, chatbots, CRM, workflow automation, booking, AEO, digital clones, web/app dev, and managed services.",
  path: "/services/automation-infrastructure",
});

export default function Page() {
  return <BranchPage branch={automationBranch} />;
}
