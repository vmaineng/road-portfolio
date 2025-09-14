import {
  FaGithub,
  FaLinkedin,
  FaTwitch,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";

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

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "github":
        return <FaGithub className="w-4 h-4" />;
      case "linkedin":
        return <FaLinkedin className="w-4 h-4" />;
      case "email":
        return <FaEnvelope className="w-4 h-4" />;
      default:
        return <FaTwitch className="w-4 h-4" />;
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="location-card-title"
    >
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-start p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex-1">
            <h1 id="location-card-title" className="text-2xl font-bold">
              {content.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              {content.subtitle}
            </p>
          </div>
          <button
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={onClose}
            aria-label="Close"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {content.image && (
            <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              <img
                src={content.image}
                alt={content.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {content.description}
            </p>
          </div>

          {content.details.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Details</h3>
              {content.details.map((detail, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          )}

          {content.skills && content.skills.length > 0 && (
            <div>
              <h3 className="font-semibold text-lg mb-3">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {content.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {content.links && content.links.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Links</h3>
              <div className="space-y-2">
                {content.links.map((link, index) => (
                  <a
                    key={index}
                    href={
                      link.type === "email" ? `mailto:${link.url}` : link.url
                    }
                    target={link.type !== "email" ? "_blank" : undefined}
                    rel={
                      link.type !== "email" ? "noopener noreferrer" : undefined
                    }
                    className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    {getIcon(link.type)}
                    <span className="ml-2">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
