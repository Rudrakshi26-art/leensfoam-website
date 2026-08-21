const BRANDS = [
  { name: 'RTC — Regional Training Center', src: '/assets/brands/rtc.png' },
  { name: 'Pacific Holidays', src: '/assets/brands/pacific-holidays.png' },
  { name: "Vlad's Hair Studio", src: '/assets/brands/vlads.png' },
  { name: 'Emercury', src: '/assets/brands/emercury.png' },
  { name: 'Admailr', src: '/assets/brands/admailr.png' },
];

export default function BrandCarousel() {
  return (
    <section className="brands-strip">

      <span className="section-eyebrow" style={{ display: 'flex', justifyContent: 'center' }}>
        TRUSTED BY
      </span>

      <h2 className="brands-heading">
        Brands we've empowered
      </h2>

      <div className="brands-track-wrap">

        <div className="brands-track">

          {/* Doubled list for a seamless infinite loop */}
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <div className="brand-item" key={`${brand.name}-${i}`}>
              <img src={brand.src} alt={brand.name} loading="lazy" />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}