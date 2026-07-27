"use client";

export default function MonitorFrame({ media, projectName }) {
  return (
    <div className="card-panel overflow-hidden shadow-panel">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-surface2">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#F2A93B]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#3DDC97]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        </div>
        <div className="font-mono text-[11px] text-muted truncate max-w-[60%]">
          preview://{projectName.toLowerCase().replace(/\s+/g, "-")}
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-ok">
          <span className="h-1.5 w-1.5 rounded-full bg-ok animate-blink" />
          live
        </div>
      </div>

      <div className="relative aspect-video bg-bg">
        {media.type === "video" && !media.src && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted px-6 text-center">
            <span className="font-mono text-xs">
            </span>
            <span className="h-px w-24 bg-border" />
          </div>
        )}

        {media.type === "video" && media.src && (
          <iframe
            src={media.src}
            title={`Protótipo de ${projectName}`}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}

        {media.type === "image" && (
          <img
            src={media.src}
            alt={`Protótipo de ${projectName}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {media.type === "none" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted">
            <span className="font-mono text-xs">// protótipo indisponível no momento</span>
            <span className="h-px w-24 bg-border" />
          </div>
        )}
      </div>
    </div>
  );
}
