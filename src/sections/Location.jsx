import { HiOutlineLocationMarker } from "react-icons/hi";
import SectionHeading from "../components/SectionHeading";
import FadeIn from "../components/FadeIn";
import { locationContent } from "../data/location";
import { company } from "../data/site";

export default function Location() {
  const { eyebrow, title, description, address, directions, mapEmbedUrl } =
    locationContent;

  return (
    <section id="location" className="scroll-mt-20 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </FadeIn>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* 주소 및 교통 안내 */}
          <FadeIn>
            <div className="flex items-start gap-4 rounded-sm border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <HiOutlineLocationMarker
                className="mt-1 shrink-0 text-sky-600"
                size={24}
              />
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {address.label}
                </p>
                <p className="mt-2 text-lg font-semibold leading-relaxed text-slate-900">
                  {address.value || company.address}
                </p>
                <a
                  href={address.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center text-sm font-medium text-sky-600 transition-colors hover:text-sky-500"
                >
                  네이버 지도에서 보기 →
                </a>
              </div>
            </div>

            <dl className="mt-8 space-y-6">
              {directions.map((item) => (
                <div key={item.label}>
                  <dt className="text-sm font-semibold text-slate-900">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeIn>

          {/* 지도 */}
          <FadeIn>
            <div className="overflow-hidden rounded-sm border border-slate-200">
              {mapEmbedUrl ? (
                <iframe
                  title="크레타테크(CREATOR TECH) 위치 지도"
                  src={mapEmbedUrl}
                  className="aspect-[4/3] w-full border-0 sm:aspect-video"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <div className="flex aspect-[4/3] flex-col items-center justify-center bg-slate-100 sm:aspect-video">
                  <HiOutlineLocationMarker
                    className="text-slate-400"
                    size={48}
                  />
                  <p className="mt-4 px-6 text-center text-sm text-slate-500">
                    지도 embed URL을{" "}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-xs">
                      src/data/location.js
                    </code>
                    의 mapEmbedUrl에 입력하세요.
                  </p>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
