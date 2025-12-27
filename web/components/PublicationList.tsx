import { PUBLICATIONS } from "@/data/publications";
import { SectionTitle } from "@/components/SectionTitle";
import { FileText, ExternalLink } from "lucide-react";

export function PublicationList() {
  return (
    <section id="publications" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle>Selected Publications</SectionTitle>

        <div className="space-y-6">
          {PUBLICATIONS.map((pub) => (
            <div 
              key={pub.id}
              className="bg-white p-6 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-4 md:items-start"
            >
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-sm font-semibold text-blue-600">{pub.conference}</span>
                  <span className="text-sm text-slate-400">• {pub.year}</span>
                  {pub.highlight && (
                    <span className="px-2 py-0.5 text-xs font-medium bg-amber-100 text-amber-700 rounded-full">
                      Highlight
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {pub.title}
                </h3>
                <p className="text-slate-600 text-sm mb-3">{pub.authors}</p>
                <div className="flex gap-2">
                  {pub.tags?.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-500 text-xs rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {pub.link && (
                <a 
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors mt-2 md:mt-0"
                >
                  <FileText size={16} />
                  <span>PDF</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
