export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-2">PKU EconCS Lab</h3>
            <p className="text-sm">
              <a href="https://cfcs.pku.edu.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Center on Frontiers of Computing Studies (CFCS)
              </a><br />
              Peking University
            </p>
          </div>
          
          <div className="text-sm">
            <p>Jingyuan Courtyard 5, Peking University</p>
            <p>No. 5 Yiheyuan Road, Haidian District, Beijing</p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} PKU EconCS Lab. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://cfcs.pku.edu.cn" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              CFCS
            </a>
            <a href="https://www.pku.edu.cn" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Peking University
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
