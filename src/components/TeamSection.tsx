{/* Enhanced Contact Card */}
<div className="bg-white rounded-2xl p-6 shadow-xl border border-[#D4B78F]/20 hover:border-[#D4B78F]/50 transition-all duration-300 group/contact relative overflow-hidden">
  {/* Decorative background element */}
  <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4B78F]/5 rounded-full -mr-16 -mt-16 transition-transform group-hover/contact:scale-110 duration-700" />
  
  <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
    {/* Phone Icon Hub */}
    <div className="flex-shrink-0">
      <div className="bg-gradient-to-br from-[#D4B78F] to-[#E6CCAF] p-4 rounded-2xl shadow-lg shadow-[#D4B78F]/20 group-hover/contact:rotate-12 transition-transform duration-300">
        <Phone className="w-7 h-7 text-white" />
      </div>
    </div>

    {/* Contact Details */}
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#D4B78F]">
          Gemensam Bokning
        </span>
        <div className="h-[1px] flex-1 bg-[#D4B78F]/20"></div>
      </div>
      
      <h4 className="text-xl font-light text-neutral-800 mb-2">
        Ring oss för tidsbokning
      </h4>

      <a
        href={`tel:${salon.phone.replace(/\s/g, '')}`}
        className="text-3xl font-bold text-neutral-900 hover:text-[#D4B78F] transition-colors duration-300 flex items-center gap-3"
      >
        {salon.phone}
      </a>

      {/* Location Badges */}
      <div className="flex items-center gap-3 mt-4">
        <div className="flex items-center gap-1.5 py-1 px-3 bg-neutral-50 border border-neutral-100 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4B78F] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4B78F]"></span>
          </span>
          <span className="text-xs font-medium text-neutral-600">Solna</span>
        </div>
        
        <div className="flex items-center gap-1.5 py-1 px-3 bg-neutral-50 border border-neutral-100 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4B78F] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4B78F]"></span>
          </span>
          <span className="text-xs font-medium text-neutral-600">Södermalm</span>
        </div>
      </div>
    </div>

    {/* Secondary Info */}
    <div className="md:text-right border-t md:border-t-0 md:border-l border-neutral-100 pt-4 md:pt-0 md:pl-6">
      <p className="text-sm text-neutral-500 italic">
        "Vi svarar i mån av tid under <br className="hidden md:block" /> våra öppettider."
      </p>
    </div>
  </div>
</div>
