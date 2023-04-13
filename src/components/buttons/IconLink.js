export default function IconLink({ link, linkText, icon }) {
  return (
    <a
      className={"linkIcon"}
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={linkText}
    >
      {icon}
    </a>
  );
}
