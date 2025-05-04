import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="md:flex md:items-center md:justify-around">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden mx-auto md:mx-0 shadow-lg">
              <Image
                src="/profilePic.png"
                alt="Your Profile Picture"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Hi, I&apos;m Mai! 👋
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              I&apos;m a passionate web developer with a love for crafting
              clean, user-friendly, and efficient digital experiences. My
              journey into the world of code began with a fascination for how
              websites are built, and I&apos;ve been hooked ever since.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              I specialize in front-end development using technologies like
              React, Next.js, and of course, the styling magic of Tailwind CSS.
              I&apos;m also constantly exploring new tools and techniques to
              expand my skillset and stay at the forefront of web development
              trends.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Beyond the code, I&apos;m a [Your Hobby/Interest] and I believe
              that creativity and problem-solving skills extend beyond the
              digital realm.
            </p>
            <p className="text-lg text-gray-700">
              Thanks for stopping by on my portfolio road trip! I&apos;m excited
              to share my projects with you. Click &apos;Next Stop&apos; to see
              what I&apos;ve been working on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
