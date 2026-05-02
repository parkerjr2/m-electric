/**
 * Google Maps embed bound to the M Electric GBP listing.
 *
 * The `cid=` parameter is the GBP Customer ID — this is what makes the iframe
 * a *local-SEO* citation (page ↔ specific GBP listing) rather than a generic
 * map of Tulsa.
 *
 * Used on / and /contact. The reciprocal page-listing association requires
 * the GBP "Website" field to point to the indexable page hosting this embed.
 */
export function GbpMapEmbed({ className }: { className?: string }) {
  const mapSrc =
    "https://maps.google.com/maps?cid=17120687780645413912&output=embed";

  return (
    <div className={className}>
      <div className="relative aspect-[16/10] sm:aspect-[16/9] max-w-5xl mx-auto rounded-lg overflow-hidden border border-neutral-800 bg-black">
        <iframe
          src={mapSrc}
          title="M Electric, LLC on Google Maps — Tulsa, Oklahoma electrician"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      </div>
    </div>
  );
}
