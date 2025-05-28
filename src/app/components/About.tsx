import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mx-auto max-w-screen-lg">
      <section id="about" className="py-6 md:py-8 text-center">
        <div className="text-center">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg border-2 border-accent">
            <Image
              src="/profilePic.png"
              alt="Profile Picture"
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <h1 className="text-xl md:text-2xl font-bold text-primary mb-2">
          Hi, I&apos;m Mai! 👋
        </h1>
        <p className="text-lg mb-6">
          I&apos;m a software engineer who loves creating products for users of
          all. My journey stemmed from my first financial analyst job where I
          was working on automating reports.
        </p>
        <p className="text-lg mb-6">
          I specialize in{" "}
          <strong>
            implementing functionalities between front-end and back-end{" "}
          </strong>{" "}
          using technologies like React and Next.js. For example, grabbing a
          button from the UI and adding life to it so it can submit information
          to be captured in the backend. I&apos;m also constantly exploring new
          tools and techniques to expand my skillset, such as V0, Bolt, Remix,
          and so many more.
        </p>
        <p className="text-lg mb-6">
          Beyond coding, I Love eating, exploring, and trying new activities.
          One of my biggest goal is to eat through all of LA and I am sure I
          barely made a dent.
        </p>
        <p className="text-lg">
          Thanks for stopping by on my portfolio road trip! I&apos;m excited to
          share my projects with you.
        </p>
        <span className="text-[#f59e9b] font-semibold">
          Click &apos;Next Stop&apos; button to see what I&apos;ve been working
          on.
        </span>
      </section>
    </div>
  );
};

export default About;
