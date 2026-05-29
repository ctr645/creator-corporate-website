import { heroContent, heroImages } from '../data/hero'


function HeroImagePanel({ image }) {
  return (
    // <div className="relative h-full min-h-[40vh] flex-1 overflow-hidden lg:min-h-0">
    <div className="relative min-h-[50vh] flex-1 overflow-hidden">
      {/* 배경 이미지 — 흑백 + 어두운 오버레이 */}
      {/* className="absolute inset-0 bg-cover bg-center grayscale" */}
      <div
        className="absolute inset-0 bg-cover bg-center grayscale opacity-60"
        style={{ backgroundImage: `url(${image.src})` }}
        role="img"
        aria-label={image.alt}
      />
      {/* <div className="absolute inset-0 bg-slate-950/65" /> */}
      {/* 이미지 미등록 시 대체 패턴 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 opacity-10 [background-image:linear-gradient(135deg,rgba(56,189,248,0.08)_0%,transparent_50%)]" />
    </div>
  )
}

export default function Hero() {
  const { eyebrow, title, subtitle, ctaPrimary, ctaSecondary } = heroContent

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col bg-brand-dark pt-16 sm:pt-[72px]"
      >
      {/* 이미지 영역 — 2분할 */}
      {/* <div className="flex flex-1 flex-col lg:flex-row"> */}
      <div className="flex min-h-screen flex-col lg:flex-row">
        {heroImages.map((image) => (
          <HeroImagePanel key={image.src} image={image} />
        ))}
      </div>

      {/* 텍스트 오버레이 */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950/30 pt-16 sm:pt-[72px]">
        <div className="pointer-events-auto mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="mb-4 text-xs font-semibold tracking-[0.35em] text-sky-400 sm:text-sm">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl">
            {subtitle}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={ctaPrimary.href}
              className="w-full rounded-sm bg-sky-500 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-sky-400 sm:w-auto"
            >
              {ctaPrimary.label}
            </a>
            <a
              href={ctaSecondary.href}
              className="w-full rounded-sm border border-slate-500 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-sky-400 hover:text-sky-400 sm:w-auto"
            >
              {ctaSecondary.label}
            </a>
          </div>
        </div>
      </div>

      {/* 스크롤 안내 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-xs text-slate-400 transition-colors hover:text-sky-400"
          aria-label="회사소개 섹션으로 이동"
        >
          <span className="tracking-widest">SCROLL</span>
          <span className="block h-8 w-px animate-pulse bg-slate-500" />
        </a>
      </div>
    </section>
  )
}
