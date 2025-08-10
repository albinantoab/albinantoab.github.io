"use client";

export function About() {
  const currentYear = new Date().getFullYear();
  const startYear = 2016;
  const yearsOfExperience = currentYear - startYear;

  return (
    <div className="w-full max-w-2xl mx-auto px-2 sm:px-4 mt-16 sm:mt-20">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">About Me</h2>
      
      <div className="space-y-3 sm:space-y-4 text-left">
        <div className="text-xs sm:text-sm">
          <p className="mb-3 sm:mb-4">
            Hi, I&apos;m <span className="font-semibold text-primary">Albin Anto</span>, an Engineering Lead at 314e with over <span className="font-semibold text-primary">{yearsOfExperience}+ years</span> of experience in software development.
          </p>
          
          <p className="mb-3 sm:mb-4">
            I specialize in building scalable frontend applications and mobile experiences, with expertise in React, TypeScript, and modern web technologies. Throughout my career, I&apos;ve led teams, architected design systems, and delivered products that drive measurable business impact.
          </p>
          
          <p className="mb-3 sm:mb-4">
            My experience spans from early-stage startups to enterprise platforms, where I&apos;ve consistently improved development efficiency, enhanced user experiences, and mentored engineering teams. I&apos;m passionate about creating maintainable, accessible, and performant applications that solve real-world problems.
          </p>
          
          <p>
            When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, and staying updated with the latest industry trends.
          </p>
        </div>
        
        <div className="flex justify-center items-center gap-4 sm:gap-8 mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/20">
          <div className="text-center">
            <div className="text-lg sm:text-xl font-bold text-primary">{yearsOfExperience}+</div>
            <div className="text-[10px] sm:text-xs text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-xl font-bold text-primary">10+</div>
            <div className="text-[10px] sm:text-xs text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-xl font-bold text-primary">4</div>
            <div className="text-[10px] sm:text-xs text-muted-foreground">Companies</div>
          </div>
        </div>
      </div>
    </div>
  );
}
