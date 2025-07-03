import React, { useEffect, useState } from 'react';

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://d703122b-9954-4101-98a9-a3f2e4f0edcb-00-3st06cvlopl7m.sisko.replit.dev/portfolio')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Gagal mengambil data portfolio:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Portofolio Proyek
        </h2>

        {loading ? (
          <p className="text-center text-gray-600">Memuat proyek...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="bg-gray-50 border border-gray-100 shadow-sm rounded-xl overflow-hidden flex flex-col h-[420px] transition hover:shadow-md hover:-translate-y-1"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-sky-600 transition">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 flex-1 line-clamp-4">
                    {project.description}
                  </p>
                  <div className="mt-4">
                    <span className="text-sm text-sky-600 hover:underline">
                      Lihat Detail →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
