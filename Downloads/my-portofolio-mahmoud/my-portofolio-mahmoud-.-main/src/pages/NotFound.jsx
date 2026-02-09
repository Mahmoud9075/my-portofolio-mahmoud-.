import { Link } from "react-router-dom";
import { useLang } from "@/i18n";

export const NotFound = () => {
  const { t } = useLang();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-extrabold text-primary mb-4">404</h1>
        <p className="text-2xl font-semibold mb-2 text-foreground">
          {t("notfound.message")}
        </p>
        <p className="text-muted-foreground mb-8">
          {t("hero.subtitle")}
        </p>
        <Link
          to="/"
          className="cosmic-button inline-flex items-center justify-center px-6 py-3 text-base font-medium"
        >
          {t("notfound.goHome")}
        </Link>
      </div>
    </div>
  );
};
