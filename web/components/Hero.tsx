import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-slate-50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
        <div className="absolute right-0 bottom-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className="container relative z-10 px-6 text-center pt-24 pb-12">
        <Link 
          href="https://cfcs.pku.edu.cn/" 
          target="_blank"
          className="inline-block px-3 py-1 mb-6 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full border border-blue-100 hover:bg-blue-100 transition-colors"
        >
          Center on Frontiers of Computing Studies (CFCS) @ PKU
        </Link>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto">
          Eliciting Truth in the <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Information Age
          </span>
        </h1>
        
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          We explore the intersection of Theoretical Computer Science and Economics (EconCS), 
          designing mechanisms to aggregate information and benchmark intelligence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="#research"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
          >
            Our Research
          </Link>
          <Link 
            href="#publications"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors group"
          >
            Latest Publications
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
