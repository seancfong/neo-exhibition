import { FaGithub, FaLinkedin, FaNewspaper } from "react-icons/fa6";

type IconProps = {
  icon: string;
  library: "Fa" | string;
  color?: string;
  size?: string;
  className?: string;
  fallback?: JSX.Element | null;
};

const DynamicIcon = ({
  icon,
  library,
  className,
  fallback,
}: IconProps): JSX.Element => {
  switch (library) {
    case "Fa": {
      switch (icon) {
        case "FaGithub":
          return <FaGithub className={className} />;
        case "FaNewspaper":
          return <FaNewspaper className={className} />;
        case "FaLinkedin":
          return <FaLinkedin className={className} />;
      }
    }
  }
  return fallback ?? <></>;
};

export default DynamicIcon;
