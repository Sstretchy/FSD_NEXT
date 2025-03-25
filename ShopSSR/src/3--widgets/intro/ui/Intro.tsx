import { Typography } from '@/src/6--shared/ui';

export const Intro = () => {
  return (
    <section className="min-h-[calc(100vh-60px)] flex flex-col justify-center items-center text-center px-4">
      <Typography as="h1" className="text-4xl font-extrabold text-gray-900 mb-4">
        Welcome!
      </Typography>

      <Typography as="h2" className="text-2xl font-semibold text-gray-800 mb-2">
        Test project
      </Typography>

      <Typography as="h3" className="text-lg font-medium text-gray-700 mb-6">
        Next.js + TailwindCSS + Docker
      </Typography>

      <Typography as="p" className="text-base text-gray-600 max-w-xl leading-relaxed">
        This is a small and raw project created for practicing with&nbsp;
        <span className="text-blue-600 font-medium">Next.js</span>,&nbsp;
        <span className="text-blue-600 font-medium">TailwindCSS</span>,&nbsp;
        <span className="text-blue-600 font-medium">Mongo + Express.js</span>,&nbsp;
        <span className="text-blue-600 font-medium">Redux (to understand it within FSD scope)</span>, and&nbsp;
        <span className="text-blue-600 font-medium">Docker deployment</span>.
        <br />
        It’s also meant for exploring Feature Sliced Design architecture in practice.
      </Typography>
    </section>
  );
};
