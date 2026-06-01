import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlinePrinter,
} from 'react-icons/hi'
import SectionHeading from '../components/SectionHeading'
import FadeIn from '../components/FadeIn'
import { contactContent } from '../data/contact'
import { company, toTelLink } from '../data/site'

const iconMap = {
  phone: HiOutlinePhone,
  email: HiOutlineMail,
  fax: HiOutlinePrinter,
}

function getChannelValue(channel) {
  return company[channel.valueKey]
}

function getChannelHref(channel) {
  const value = getChannelValue(channel)
  if (channel.hrefType === 'tel') return toTelLink(value)
  if (channel.hrefType === 'mailto') return `mailto:${value}`
  return null
}

function ContactChannel({ channel }) {
  const Icon = iconMap[channel.id] || HiOutlinePhone
  const value = getChannelValue(channel)
  const href = getChannelHref(channel)

  return (
    <div className="rounded-sm border border-slate-200 bg-white p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-slate-900 text-sky-400">
          <Icon size={22} />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500">{channel.label}</p>
          {href ? (
            <a
            href={href}
            className="mt-1 block break-all text-lg font-bold text-slate-900 transition-colors hover:text-sky-600 sm:text-xl"
          >
            {value}
          </a>
          ) : (
            <p className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
              {value}
            </p>
          )}
          <p className="mt-2 text-sm text-slate-500">{channel.description}</p>
        </div>
      </div>
    </div>
  )
}

export default function Contact() {
  const { eyebrow, title, description, notice, channels } = contactContent

  return (
    <section id="contact" className="scroll-mt-20 bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </FadeIn>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {channels.map((channel) => (
            <FadeIn key={channel.id}>
              <ContactChannel channel={channel} />
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12">
          <div className="rounded-sm border border-slate-200 bg-white p-6 sm:p-10">
            <h3 className="text-lg font-bold text-slate-900">{notice.title}</h3>
            <ul className="mt-5 space-y-3">
              {notice.items.map((item) => (
                <li
                  key={item.slice(0, 24)}
                  className="flex gap-3 text-sm leading-relaxed text-slate-600"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky-500" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={toTelLink(company.phone)}
                className="inline-flex items-center justify-center rounded-sm bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
              >
                전화 문의하기
              </a>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center justify-center rounded-sm border border-slate-300 px-8 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:border-sky-500 hover:text-sky-600"
              >
                이메일 문의하기
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
