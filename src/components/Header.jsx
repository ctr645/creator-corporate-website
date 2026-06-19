import { useState } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { company, navLinks } from "../data/site";

function NavLink({ link, onClick }) {
  return (
    <a
      href={`#${link.id}`}
      onClick={onClick}
      className="text-sm font-medium text-slate-700 transition-colors hover:text-sky-600 lg:text-[15px]"
    >
      {link.label}
    </a>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [equipmentOpen, setEquipmentOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const [mobileEquipmentOpen, setMobileEquipmentOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:px-8">
        <a href="#" className="flex flex-col leading-tight" onClick={closeMenu}>
          <span className="text-base font-bold uppercase tracking-[0.1em] text-slate-900 sm:text-lg">
            {company.name}
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.18em] text-slate-500 sm:block">
            {company.tagline}
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="주 메뉴">
          {navLinks.map((link) =>
            link.id === "equipment" ? (
              <div
                key={link.id}
                className="relative"
                onMouseEnter={() => setEquipmentOpen(true)}
                onMouseLeave={() => setEquipmentOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-sky-600">
                  설비
                  <HiChevronDown size={16} />
                </button>

                {equipmentOpen && (
                  <div className="absolute left-0 top-full w-52 overflow-hidden rounded-sm border border-slate-200 bg-white shadow-lg">
                    <a
                      href="#equipment-edm"
                      className="block px-4 py-3 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-sky-600"
                    >
                      방전기
                    </a>

                    <a
                      href="#equipment-superdrill"
                      className="block px-4 py-3 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-sky-600"
                    >
                      슈퍼드릴
                    </a>

                    <a
                      href="#equipment-wire"
                      className="block px-4 py-3 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-sky-600"
                    >
                      와이어
                    </a>

                    <a
                      href="#equipment-measurement"
                      className="block px-4 py-3 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-sky-600"
                    >
                      측정기
                    </a>
                  </div>
                )}
              </div>
            ) : link.id === "products" ? (
              <div
                key={link.id}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-sky-600">
                  제품소개
                  <HiChevronDown size={16} />
                </button>

                {productsOpen && (
                  <div className="absolute left-0 top-full w-52 overflow-hidden rounded-sm border border-slate-200 bg-white shadow-lg">
                    <a
                      href="#product-edm"
                      className="block px-4 py-3 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-sky-600"
                    >
                      방전가공
                    </a>

                    <a
                      href="#product-wire"
                      className="block px-4 py-3 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-sky-600"
                    >
                      와이어 가공
                    </a>

                    <a
                      href="#product-shape"
                      className="block px-4 py-3 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-sky-600"
                    >
                      이형상 가공
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <NavLink key={link.id} link={link} />
            ),
          )}
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
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      {/* Mobile navigation */}
      <nav
        id="mobile-nav"
        className={`border-t border-slate-200 bg-white lg:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
        aria-label="모바일 메뉴"
      >
        <ul className="flex flex-col px-4 py-4">
          <li>
            <a
              href="#about"
              className="block border-b border-slate-100 py-3.5 text-base font-medium text-slate-800"
              onClick={closeMenu}
            >
              회사소개
            </a>
          </li>

          <li className="border-b border-slate-100">
            <button
              type="button"
              onClick={() => setMobileEquipmentOpen(!mobileEquipmentOpen)}
              className="flex w-full items-center justify-between py-3.5 text-base font-medium text-slate-800"
            >
              설비
              <HiChevronDown
                className={`transition-transform ${
                  mobileEquipmentOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileEquipmentOpen && (
              <div className="pb-3 pl-4 flex flex-col gap-2 text-sm text-slate-600">
                <a href="#equipment-edm" onClick={closeMenu}>
                  방전기
                </a>
                <a href="#equipment-superdrill" onClick={closeMenu}>
                  슈퍼드릴
                </a>
                <a href="#equipment-wire" onClick={closeMenu}>
                  와이어
                </a>
                <a href="#equipment-measurement" onClick={closeMenu}>
                  측정기
                </a>
              </div>
            )}
          </li>

          <li className="border-b border-slate-100">
            <button
              type="button"
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="flex w-full items-center justify-between py-3.5 text-base font-medium text-slate-800"
            >
              제품소개
              <HiChevronDown
                className={`transition-transform ${
                  mobileProductsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileProductsOpen && (
              <div className="pb-3 pl-4 flex flex-col gap-2 text-sm text-slate-600">
                <a href="#product-edm" onClick={closeMenu}>
                  방전가공
                </a>
                <a href="#product-wire" onClick={closeMenu}>
                  와이어 가공
                </a>
                <a href="#product-shape" onClick={closeMenu}>
                  이형상 가공
                </a>
              </div>
            )}
          </li>

          <li>
            <a
              href="#history"
              className="block border-b border-slate-100 py-3.5 text-base font-medium text-slate-800"
              onClick={closeMenu}
            >
              회사 연혁
            </a>
          </li>

          <li>
            <a
              href="#partners"
              className="block border-b border-slate-100 py-3.5 text-base font-medium text-slate-800"
              onClick={closeMenu}
            >
              협력업체
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="block border-b border-slate-100 py-3.5 text-base font-medium text-slate-800"
              onClick={closeMenu}
            >
              문의사항
            </a>
          </li>

          <li>
            <a
              href="#location"
              className="block border-b border-slate-100 py-3.5 text-base font-medium text-slate-800"
              onClick={closeMenu}
            >
              찾아오는길
            </a>
          </li>

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
  );
}
