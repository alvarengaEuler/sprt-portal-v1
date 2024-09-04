import { RESUME_DATA } from "@/data/resume-data";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("IndexPage");

  return (
    <div>
      <h1 className="text-4xl mb-4 font-semibold">euler</h1>
      <p>{t("description")}</p>
      <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
        {RESUME_DATA.about}
      </p>
    </div>
  );
}
