import Image from "next/image";

export default function Home() {
  const galleryImages = [
    {
      src: '/images/startupvillage.jpeg',
      alt: 'Tim at tech conference',
      caption: 'Speaking at Startup Village'
    },
    {
      src: '/images/hackathonwin.jpeg',
      alt: 'Team celebration',
      caption: 'Celebrating hackathon win with SprintIQ team'
    },
    {
      src: '/images/pairprogramming.JPG',
      alt: 'Coding session',
      caption: 'Pair programming with colleagues at Parity Finance'
    },
    {
      src: '/images/rustworkshop.jpeg',
      alt: 'Community event',
      caption: 'Leading a Rust workshop'
    },
    {
      src: '/images/receivingaward.jpeg',
      alt: 'Award ceremony',
      caption: 'Receiving Sollet competition award'
    },
    {
      src: "/images/casual.jpeg",
      alt: "Casual photo",
      caption: "Casual photo"
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 bg-[#fafafa] dark:bg-gray-950">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/10" />
        {/* Gradient Blobs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
        {/* Hero Section */}
        <header className="max-w-4xl mx-auto text-center py-16">
          <h1 className="text-4xl font-bold mb-4">Tim Adigwe</h1>
          <h2 className="text-xl text-gray-600 dark:text-gray-300 mb-6">Software Developer</h2>
          <div className="flex justify-center gap-4 mb-8">
            <SocialLink href="https://www.github.com/timadigwe" icon="/github.svg" label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/timadigwe" icon="/linkedin.svg" label="LinkedIn" />
            <SocialLink href="https://www.x.com/@AdigweTim" icon="/twitter.svg" label="Twitter" />
          </div>
          <div className="flex flex-col gap-2 items-center text-gray-600 dark:text-gray-300">
            <a href="mailto:timothyadigwe2019@gmail.com" className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Image src="/email.svg" alt="Email" width={20} height={20} className="dark:invert" />
              <span>timothyadigwe2019@gmail.com</span>
            </a>
            <a href="tel:+2348143519582" className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Image src="/phone.svg" alt="Phone" width={20} height={20} className="dark:invert" />
              <span>(+234) 8143519582</span>
            </a>
          </div>
        </header>

        {/* Content sections with glass morphism */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Skills Section */}
          <section className="backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 rounded-2xl p-8 shadow-xl border border-white/20">
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: 'Web Development', icon: '🌐' },
                { name: 'Mobile Development', icon: '📱' },
                { name: 'Blockchain Development', icon: '⛓️' },
                { name: 'TypeScript', icon: '📘' },
                { name: 'JavaScript', icon: '💛' },
                { name: 'React', icon: '⚛️' },
                { name: 'React Native', icon: '📱' },
                { name: 'Rust', icon: '⚙️' },
                { name: 'Anchor', icon: '⚓' },
                { name: 'Steel', icon: '🛠️' },
                { name: 'Android/Kotlin', icon: '🤖' }
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="group bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Photo Gallery Section */}
          <section className="backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 rounded-2xl p-8 shadow-xl border border-white/20">
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400">
              Photo Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <GalleryImage 
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  caption={image.caption}
                />
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section className="backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 rounded-2xl p-8 shadow-xl border border-white/20">
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
              Professional Experience
            </h2>
            <div className="space-y-6">
              <ExperienceCard 
                company="Parity Finance"
                position="Rust Developer / Fullstack Developer"
                period="August 2024 - January 2025"
                description="Contributed to smart contract architecture for a decentralized stablecoin protocol. Collaborated with Builderz.dev to ensure scalability and security."
                tags={['Rust', 'Smart Contracts', 'DeFi']}
              />
              <ExperienceCard 
                company="SprintIQ"
                position="Rust Developer / Fullstack Developer"
                period="April 2024 - July 2024"
                description="Led development of game smart contracts on Solana blockchain using Rust. Implemented secure and efficient code execution."
                tags={['Solana', 'Gaming', 'Blockchain']}
              />
              {/* Add more experience cards as needed */}
            </div>
          </section>

          {/* Accomplishments Section */}
          <section className="backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 rounded-2xl p-8 shadow-xl border border-white/20">
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400">
              Accomplishments
            </h2>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-bold text-xl mb-4">First Place Winner - Modernisation of Sollet Competition</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Successfully modernized and improved the Sollet wallet interface, winning first place in the competition.
              </p>
              <a 
                href="https://earn.superteam.fun/listing/modernization-of-sollet/" 
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Achievement 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
    >
      <Image 
        src={icon} 
        alt={label} 
        width={24} 
        height={24} 
        className="dark:invert" 
      />
    </a>
  );
}

function ExperienceCard({ 
  company, 
  position, 
  period, 
  description,
  tags = []
}: {
  company: string;
  position: string;
  period: string;
  description: string;
  tags?: string[];
}) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 dark:border-white/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h3 className="font-bold text-xl mb-1 text-gray-900 dark:text-white">{company}</h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{position}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{period}</p>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span 
            key={tag}
            className="px-3 py-1 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function GalleryImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-square relative overflow-hidden rounded-lg">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-300">
        {caption}
      </p>
    </div>
  );
}
