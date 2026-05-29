import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { company, navLinks } from '../data/site'

function NavLink({ link, onClick }) {
  return (
    <a
      href={`#${link.id}`}
      onClick={onClick}
      className="text-sm font-medium text-slate-700 transition-colors hover:text-sky-600 lg:text-[15px]"
    >
      {link.label}
    </a>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:px-8">
        <a
          href="#"
          className="flex flex-col leading-tight"
          onClick={closeMenu}
        >
          <span className="text-base font-bold uppercase tracking-[0.1em] text-slate-900 sm:text-lg">
            {company.name}
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.18em] text-slate-500 sm:block">
            {company.tagline}
          </span>
        </a>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="주 메뉴"
        >
          {navLinks.map((link) => (
            <NavLink key={link.id} link={link} />
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-sm bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700 lg:inline-block"
        >
          문의하기
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      {/* Mobile navigation */}
      <nav
        id="mobile-nav"
        className={`border-t border-slate-200 bg-white lg:hidden ${
          menuOpen ? 'block' : 'hidden'
        }`}
        aria-label="모바일 메뉴"
      >
        <ul className="flex flex-col px-4 py-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="block border-b border-slate-100 py-3.5 text-base font-medium text-slate-800"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="#contact"
              className="block rounded-sm bg-slate-900 py-3 text-center text-sm font-semibold text-white"
              onClick={closeMenu}
            >
              문의하기
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
