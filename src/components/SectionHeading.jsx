export default function SectionHeading({ eyebrow, title, description, dark = false }) {
  return (
    <div className="max-w-3xl">
      <p
        className={`text-xs font-semibold uppercase tracking-[0.2em] ${
          dark ? 'text-sky-400' : 'text-sky-600'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            dark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
