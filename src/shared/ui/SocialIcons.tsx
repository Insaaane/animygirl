import type { SVGProps } from "react";

export const socialIcons = {
  telegram: {
    label: "Telegram",
    viewBox: "0 0 24 24",
    paths: [
      "M21.9 4.2 18.7 20c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.2L6.1 13.5l-5-1.6c-1.1-.3-1.1-1.1.2-1.6L20.8 2.8c.9-.3 1.7.2 1.1 1.4Z"
    ]
  },
  instagram: {
    label: "Instagram",
    viewBox: "0 0 24 24",
    paths: [
      "M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Z",
      "M12 7.2A4.8 4.8 0 1 1 12 16.8 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2Z",
      "M17.1 6.6a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"
    ]
  }
} as const;

type SocialIconProps = SVGProps<SVGSVGElement>;

export function TelegramIcon(props: SocialIconProps) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox={socialIcons.telegram.viewBox} {...props}>
      {socialIcons.telegram.paths.map((path) => (
        <path d={path} fill="currentColor" key={path} />
      ))}
    </svg>
  );
}

export function InstagramIcon(props: SocialIconProps) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox={socialIcons.instagram.viewBox} {...props}>
      {socialIcons.instagram.paths.map((path) => (
        <path d={path} fill="currentColor" key={path} />
      ))}
    </svg>
  );
}
