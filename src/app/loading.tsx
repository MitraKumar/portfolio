export default function Loading() {
  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#070b18]/90 backdrop-blur-md">
      <style>{`
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-reverse {
          animation: spin-reverse 2s linear infinite;
        }
      `}</style>

      <div className="relative flex items-center justify-center">
        {/* Outer electric coral spinning ring */}
        <div className="absolute h-24 w-24 rounded-full border-t-2 border-r-2 border-primary animate-spin"></div>
        
        {/* Inner cyber neon cyan reverse-spinning ring */}
        <div className="absolute h-20 w-20 rounded-full border-b-2 border-l-2 border-secondary animate-spin-reverse opacity-80"></div>
        
        {/* Pulsing background soft glow overlay */}
        <div className="absolute h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 blur-xl animate-pulse"></div>
        
        {/* Golden center neon core indicator */}
        <div className="h-3 w-3 rounded-full bg-accent shadow-[0_0_15px_rgba(229,169,60,0.85)]"></div>
      </div>
      
      {/* Brand logo & status text */}
      <div className="mt-8 flex flex-col items-center gap-2 select-none text-center">
        <span className="font-dancing-script text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary animate-pulse tracking-wide">
          Mitra.
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground animate-pulse">
          Loading Portfolio
        </span>
      </div>
    </div>
  );
}
