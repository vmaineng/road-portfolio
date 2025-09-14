import { LocationContent } from "./types";

export interface SectionProps {
  content: LocationContent;
}

const Contact: React.FC<SectionProps> = ({ content }) => {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold">{content.title}</h2>
        <p className="text-gray-600">{content.subtitle}</p>
        <p className="mt-2">{content.description}</p>

        <ul className="list-disc list-inside mt-4">
          {content.details?.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>
        {content.skills && (
          <div className="mt-4">
            <h3 className="font-semibold">Skills:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {content.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-gray-200 rounded-md text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    // <section id="contact" className="py-16 bg-gray-800">
    //   <div className="container mx-auto px-4">
    //     <h2 className="text-3xl font-bold text-white mb-8 text-center">
    //       Get In Touch
    //     </h2>
    //     <div className="md:grid md:grid-cols-2 md:gap-8">
    //       <div>
    //         <p className="text-lg text-white mb-6">
    //           I&apos;m always open to new opportunities and collaborations. Feel
    //           free to reach out via my social media handles to discuss more.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Contact;
