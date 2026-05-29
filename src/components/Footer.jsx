import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'
import { company, footerLinks } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Company */}
          <div>
            <p className="text-xl font-bold uppercase tracking-[0.08em] text-white sm:text-2xl">
              {company.name}
            </p>
            <p className="mt-1 text-sm text-brand-muted">{company.fullName}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-500">
              {company.tagline}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              {company.footerDescription}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              바로가기
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm text-slate-400 transition-colors hover:text-sky-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              연락처
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <HiOutlinePhone className="mt-0.5 shrink-0 text-sky-400" size={18} />
                <span>{company.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <HiOutlineMail className="mt-0.5 shrink-0 text-sky-400" size={18} />
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-sky-400"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <HiOutlineLocationMarker
                  className="mt-0.5 shrink-0 text-sky-400"
                  size={18}
                />
                <span>{company.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-slate-700/80 pt-8 text-center text-xs text-slate-500 sm:text-left">
          <p>
            © {year} {company.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
