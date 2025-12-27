import { RESEARCH_AREAS } from "@/data/research";
import { SectionTitle } from "@/components/SectionTitle";
import { Brain, TrendingUp, ShieldCheck, Users } from "lucide-react";

const IconMap = {
  Brain: Brain,
  TrendingUp: TrendingUp,
  ShieldCheck: ShieldCheck,
  Users: Users,
};

export function ResearchGrid() {
  return (
    <section id="research" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle>Research Areas</SectionTitle>
        
        <div className="grid md:grid-cols-2 gap-8">
          {RESEARCH_AREAS.map((area, index) => {
            const Icon = IconMap[area.iconName];
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{area.title}</h3>
                <p className="text-slate-600 leading-relaxed">{area.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
