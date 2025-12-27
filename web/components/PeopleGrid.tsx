import { PI, PHD_STUDENTS } from "@/data/people";
import { SectionTitle } from "@/components/SectionTitle";
import Image from "next/image"; // Note: User needs to configure domains in next.config.js for external images
import { Globe } from "lucide-react";

export function PeopleGrid() {
  // Separate students and alumni
  const currentStudents = PHD_STUDENTS.filter(s => !s.alumni);
  const alumni = PHD_STUDENTS.filter(s => s.alumni);

  return (
    <section id="people" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle>Our Team</SectionTitle>

        {/* PI Section */}
        <div className="mb-20">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 flex flex-col md:flex-row gap-10 items-center md:items-start">
            <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 overflow-hidden rounded-2xl shadow-xl">
              <img 
                src={PI.image} 
                alt={PI.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-bold text-slate-900 mb-2">{PI.name}</h3>
              <p className="text-blue-600 font-medium mb-4">{PI.role}</p>
              <p className="text-slate-600 leading-relaxed mb-6 max-w-2xl">
                {PI.description}
              </p>
              
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8">
                {PI.interests?.map(interest => (
                  <span key={interest} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm text-slate-600">
                    {interest}
                  </span>
                ))}
              </div>

              {PI.website && (
                <a 
                  href={PI.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-900 font-medium hover:text-blue-600 transition-colors"
                >
                  <Globe size={18} />
                  Personal Website
                </a>
              )}
            </div>
          </div>
        </div>

        {/* PhD Students */}
        <h3 className="text-2xl font-bold text-slate-900 mb-8">PhD Students</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {currentStudents.map((person, idx) => (
            <div key={idx} className="group bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-all duration-300">
              <div className="aspect-square overflow-hidden bg-slate-100 relative">
                {person.image ? (
                   <img 
                   src={person.image} 
                   alt={person.name}
                   className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                 />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-300">No Image</div>
                )}
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-slate-900">{person.name}</h4>
                    <p className="text-xs text-slate-500">{person.year} PhD Student</p>
                  </div>
                  {person.website && (
                    <a href={person.website} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600">
                      <Globe size={16} />
                    </a>
                  )}
                </div>
                <div className="flex flex-wrap gap-1 mt-3">
                  {person.interests?.slice(0, 2).map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-1 bg-slate-50 text-slate-500 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Alumni */}
        {alumni.length > 0 && (
          <>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Alumni</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {alumni.map((person, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 flex-shrink-0">
                     <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{person.name}</h4>
                    <p className="text-xs text-slate-500">Graduated {person.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
