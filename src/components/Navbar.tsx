import { useState } from "react"
import { JellyBee, HoneyMelt } from "./SharedUI"

export type NavbarProps = {
  meltToColor: string
  onLogoClick: () => void
  onBack?: () => void
}

export default function Navbar({ meltToColor, onLogoClick, onBack }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = ["Học", "Luyện tập", "Tổ ong", "Giới thiệu"]

  return (
    <header className="relative z-50">
      <div className="bg-ink text-cream">
        {/* Increased padding for thicker navbar (py-5 sm:py-6 instead of py-3) */}
        <div className="flex items-center justify-between gap-4 px-5 py-5 sm:px-10 sm:py-6">
          
          <div className="flex items-center gap-4 sm:gap-6">
            {onBack && (
              <button
                onClick={onBack}
                className="flex items-center justify-center rounded-full border-[2px] border-cream/20 bg-white/10 px-3 py-1.5 font-display text-sm font-bold text-cream transition-all hover:bg-white/20 active:scale-95 sm:px-4 sm:text-base"
                title="Quay lại"
              >
                ← Quay lại
              </button>
            )}

            <button onClick={onLogoClick} className="flex items-center gap-2.5 transition-transform hover:scale-105 active:scale-95 text-left">
              <div className="h-11 w-11 shrink-0 sm:h-12 sm:w-12">
                <JellyBee className="h-full w-full" />
              </div>
              <span className="font-display text-2xl font-extrabold tracking-tight text-cream">
                Ja<span className="text-honey">bee</span>nese
              </span>
            </button>
          </div>

          <nav className="hidden items-center gap-2 font-display text-base font-bold md:flex">
            {links.map((l) => (
              <a
                key={l}
                href="#"
                className="rounded-full px-5 py-2 text-cream/85 transition-all hover:bg-white/10 hover:text-honey"
              >
                {l}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Menu"
              onClick={() => setMenuOpen((o) => !o)}
              className="grid h-11 w-11 place-items-center rounded-full border-[3px] border-honey bg-ink md:hidden"
            >
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-5 bg-cream transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-5 bg-cream transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-5 bg-cream transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-cream/20 px-5 py-4 md:hidden">
            <nav className="flex flex-col gap-1 font-display text-xl font-bold text-cream">
              {links.map((l) => (
                <a key={l} href="#" onClick={() => setMenuOpen(false)} className="rounded-2xl px-3 py-2 transition-colors hover:bg-white/10">{l}</a>
              ))}
            </nav>
          </div>
        )}
      </div>

      <HoneyMelt from="#1c1a17" to={meltToColor} />
    </header>
  )
}
