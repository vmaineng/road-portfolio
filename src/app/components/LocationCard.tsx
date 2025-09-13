import { FaGithub, FaLinkedin, FaTwitch } from "react-icons/fa";

interface LocationContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  links?: Array<{
    label: string;
    url: string;
    type: "external" | "github" | "linkedin" | "email";
  }>;
  skills?: string[];
  image?: string;
}

interface LocationCardProps {
  content: LocationContent;
  isVisible: boolean;
  onClose: () => void;
}

export function LocationCard({
  content,
  isVisible,
  onClose,
}: LocationCardProps) {
  if (!isVisible) return null;

  const getIcon = (type: string) => {
    switch (type) {
      case "github":
        return <FaGithub className="w-4 h-4" />;
      case "linkedin":
        return <FaLinkedin className="w-4 h-4" />;
      default:
        return <FaTwitch className="w-4 h-4" />;
    }
  };
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"></div>
  );
}
