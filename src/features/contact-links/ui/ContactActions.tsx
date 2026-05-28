import { ArrowUpRight, Camera, Send } from "lucide-react";

import { siteConfig } from "@/shared/config/site";
import { ButtonLink } from "@/shared/ui/ButtonLink";

type ContactActionsProps = {
  compact?: boolean;
};

export function ContactActions({ compact = false }: ContactActionsProps) {
  return (
    <div className={`contact-actions ${compact ? "contact-actions--compact" : ""}`}>
      <ButtonLink
        href={siteConfig.social.telegram}
        icon={compact ? ArrowUpRight : Send}
        external
        ariaLabel="Написать Алине в Telegram"
      >
        {compact ? "TG" : "Написать в TG"}
      </ButtonLink>
      <ButtonLink
        href={siteConfig.social.instagram}
        icon={Camera}
        variant="secondary"
        external
        ariaLabel="Открыть Instagram Алины"
      >
        Instagram
      </ButtonLink>
    </div>
  );
}
