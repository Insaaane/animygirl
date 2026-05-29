import { siteConfig } from "@/shared/config/site";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { InstagramIcon, TelegramIcon } from "@/shared/ui/SocialIcons";

type ContactActionsProps = {
  compact?: boolean;
};

export function ContactActions({ compact = false }: ContactActionsProps) {
  return (
    <div className={`contact-actions ${compact ? "contact-actions--compact" : ""}`}>
      <ButtonLink
        href={siteConfig.social.telegram}
        icon={TelegramIcon}
        external
        ariaLabel="Написать Алине в Telegram"
      >
        {compact ? "TG" : "Написать в TG"}
      </ButtonLink>
      <ButtonLink
        href={siteConfig.social.instagram}
        icon={InstagramIcon}
        variant="secondary"
        external
        ariaLabel="Открыть Instagram Алины"
      >
        Instagram
      </ButtonLink>
    </div>
  );
}
