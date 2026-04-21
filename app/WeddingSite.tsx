"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useState } from "react";

type WeddingSiteProps = {
  showReception?: boolean;
  ceremonyTitle?: string;
};

const palette = {
  blue: "#9EB3BD",
  teal: "#7BACB3",
  paper: "#F5F5F3",
  linen: "#F0EEE9",
  white: "#FFFFFF",
};

function MapPinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M20 10c0 5-5.5 10.2-7.4 11.8a1 1 0 0 1-1.2 0C9.5 20.2 4 15 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CarIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3A2.7 2.7 0 0 0 12 7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function MessageIcon({ size = 36 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function CloseIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function ArrowRightIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function YearMark() {
  return (
    <svg
      className="year-mark"
      aria-hidden="true"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 57 112"
    >
      <g clipPath="url(#year-clip)" opacity="0.43">
        <path
          d="M9.39008 9.37399V31.646C9.39008 33.133 8.71411 34.17 7.22607 34.17H5.87408V34.756H22.7311V34.17H20.5681C19.5761 34.17 18.2691 33.178 18.2691 31.105V-0.00100708C16.7371 2.02698 8.75909 6.08398 5.8291 6.08398V6.57999H7.09106C8.35309 6.57999 9.39008 7.25598 9.39008 9.37399Z"
          fill="currentColor"
        />
        <path
          d="M27.4511 55.4645C27.4511 45.1885 21.3211 36.8046 13.7491 36.8046C6.17712 36.8046 0.0471191 45.1436 0.0471191 55.4196C0.0471191 64.8846 5.2951 72.7245 12.0761 73.8456C5.02515 74.4856 1.89514 79.2476 1.89514 83.2336C1.89514 86.3885 3.78815 89.1385 7.0791 89.1385C10.2341 89.1385 12.2171 87.0196 12.2171 84.4506C12.2171 82.0165 10.5042 79.6736 7.61914 79.6736C5.8161 79.6736 4.55414 80.8456 4.28412 80.8456C4.05914 80.8456 4.0141 80.6195 4.0141 80.1685C4.0141 77.5995 7.93512 74.7155 11.0001 74.7155C14.0651 74.7155 16.6341 76.7885 16.6341 82.8286C16.6341 92.1585 9.42212 94.5465 7.43915 95.6285C4.23914 97.4315 0.453125 101.173 0.453125 107.122C0.453125 109.15 0.678101 110.412 0.949097 110.728H1.6701C1.58014 110.548 1.49011 110.187 1.49011 109.331C1.49011 107.212 3.51813 105.59 5.41113 105.59C10.2791 105.59 11.0001 111.9 17.7151 111.9C24.2061 111.9 27.0001 105.319 27.0001 97.6115L26.6401 97.6566C26.6401 100.136 24.9271 102.39 21.0061 102.39C17.4901 102.39 16.4531 101.759 11.9011 101.759C3.7431 101.759 1.35413 107.212 1.30914 107.663C1.17413 107.663 1.17413 107.528 1.17413 107.348V106.987C1.17413 101.533 4.96014 96.6205 11.6311 94.6815C14.6511 93.7805 26.4141 92.3835 26.4141 83.4596C26.4141 78.2996 22.1051 74.4156 15.4151 73.8485C22.2001 72.7365 27.4511 64.9336 27.4511 55.4645Z"
          fill="currentColor"
        />
        <path
          d="M46.245 88.1016C42.324 88.1016 39.98 89.8146 38.853 93.2396C38.943 80.1696 41.558 74.3546 46.516 74.3546C48.814 74.3546 50.842 75.5266 50.842 76.8786C50.842 76.9686 50.797 77.0136 50.707 77.0136C50.437 77.0136 49.941 76.7886 49.175 76.7886C46.786 76.7886 44.893 78.8166 44.893 81.1606C44.893 83.4146 46.741 85.5776 49.625 85.5776C52.645 85.5776 54.358 83.4596 54.358 81.0256C54.358 77.8286 51.685 74.0716 46.781 73.9596C52.807 72.7356 56.927 67.1646 56.927 61.5496C56.927 55.2396 52.78 50.8676 46.605 50.8676C42.684 50.8676 40.34 52.5796 39.214 56.0056C39.304 42.9346 41.918 37.1206 46.876 37.1206C49.174 37.1206 51.203 38.2926 51.203 39.6446C51.203 39.7346 51.158 39.7796 51.067 39.7796C50.797 39.7796 50.301 39.5546 49.535 39.5546C47.146 39.5546 45.253 41.5826 45.253 43.9266C45.253 46.1796 47.101 48.3436 49.986 48.3436C53.005 48.3436 54.718 46.2246 54.718 43.7906C54.718 40.5456 51.969 36.7146 46.921 36.7146C46.003 36.7146 45.093 36.8106 44.197 36.9866C48.673 35.1866 51.937 31.6236 51.937 26.8516C51.937 21.0376 45.852 18.2886 42.111 17.2066V16.9816C43.824 16.4856 49.368 13.6456 49.368 8.86862C49.368 4.13562 44.229 0.394623 37.243 0.394623C30.167 0.394623 27.192 4.49661 27.192 8.1026C27.192 10.8516 28.95 13.2856 32.015 13.2856C34.674 13.2856 36.703 11.2116 36.703 8.5076C36.703 6.02863 34.9 4.09061 32.601 4.09061C31.79 4.09061 31.114 4.40662 30.798 4.40662C30.528 4.40662 30.483 4.1806 30.483 3.91061C30.483 2.91861 33.322 1.0256 35.801 1.0256C38.731 1.0256 40.353 3.73062 40.353 8.77863C40.353 15.0436 39.497 17.1166 36.162 17.1166C34.81 17.1166 34.584 16.8916 33.998 16.8916C33.728 16.8916 33.638 17.0716 33.638 17.2966C33.638 17.5676 33.773 17.8376 33.953 17.8376C34.224 17.8376 35.125 17.6126 36.072 17.6126C39.046 17.6126 42.201 18.9196 42.201 27.7086C42.201 36.1366 40.038 37.6236 35.621 37.6236C30.708 37.6236 27.733 34.5146 27.733 32.5766C27.733 32.2156 27.868 32.1706 28.004 32.1706C28.139 32.1706 29.221 32.9366 30.753 32.9366C33.593 32.9366 35.486 30.7736 35.486 27.9786C35.486 25.4546 33.502 23.1566 30.708 23.1566C22.415 23.1566 22.234 38.3006 37.243 38.3006C38.631 38.3006 39.999 38.1496 41.311 37.8676C34.852 40.5866 29.794 47.9256 29.794 57.8086C29.794 67.8316 36.777 74.0006 43.957 74.1956C36.134 75.6656 29.433 83.6686 29.433 95.0426C29.433 105.229 36.645 111.449 43.946 111.449C51.293 111.449 56.566 105.139 56.566 98.7836C56.566 92.4736 52.42 88.1016 46.245 88.1016Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="year-clip">
          <rect width="56.9" height="111.9" fill="white" transform="matrix(1 0 0 -1 0 111.9)" />
        </clipPath>
      </defs>
    </svg>
  );
}

function DirectionsLink({ href }: { href: string }) {
  return (
    <a className="event-link" href={href} target="_blank" rel="noopener noreferrer">
      <MapPinIcon size={14} />
      <span>Indicazioni</span>
    </a>
  );
}

function ParkingModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="event-link event-button" type="button" onClick={() => setIsOpen(true)}>
        <CarIcon size={14} />
        <span>Parcheggio</span>
      </button>
      {isOpen ? (
        <div className="modal-backdrop" onClick={() => setIsOpen(false)}>
          <div className="parking-modal" role="dialog" aria-modal="true" aria-label="Informazioni parcheggio" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" aria-label="Chiudi" onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </button>
            <CarIcon size={24} />
            <p>Sarà possibile parcheggiare all&apos;interno dell&apos;oratorio, in Via Ananian, 1, Trieste</p>
            <DirectionsLink href="https://maps.app.goo.gl/vebZNFMBRiQbm4xY9" />
          </div>
        </div>
      ) : null}
    </>
  );
}

function TimelineDivider() {
  return (
    <div className="timeline-divider" aria-hidden="true">
      <span />
      <i />
      <span />
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content fade-up">
        <p className="eyebrow">Chiara &amp; Nicolò</p>
        <div className="year-wrap">
          <YearMark />
        </div>
        <div className="vertical-rule" aria-hidden="true" />
        <p className="hero-quote">&quot;Chiaretta ha detto sì&quot;</p>
      </div>
    </section>
  );
}

function Program({
  showReception,
  ceremonyTitle,
}: {
  showReception: boolean;
  ceremonyTitle: string;
}) {
  return (
    <section className="program-section">
      <div className="paper-stripes" aria-hidden="true" />
      <div className="timeline fade-in">
        <article className="timeline-item">
          <h2>{ceremonyTitle}</h2>
          <time>15:00</time>
          <p>
            Parrocchia di San Vincenzo de&apos; Paoli
            <br />
            Via Vittorino da Feltre, 11 - Trieste
          </p>
          <DirectionsLink href="https://maps.app.goo.gl/D3m82LJMrTVGKr7v5" />
          <ParkingModal />
        </article>

        <TimelineDivider />

        <article className="timeline-item">
          <h2>Brindisi</h2>
          <p>Al termine della cerimonia, fuori dalla chiesa, brinderemo insieme all&apos;inizio di questo nuovo viaggio.</p>
        </article>

        {showReception ? (
          <>
            <TimelineDivider />
            <article className="timeline-item">
              <h2>Ricevimento</h2>
              <p>
                Borgo Garzolini
                <br />
                Via Fermi, 2 - Buttrio (UD)
              </p>
              <DirectionsLink href="https://maps.app.goo.gl/71fp2GcdKWbK5gdH8" />
            </article>
          </>
        ) : null}
      </div>
    </section>
  );
}

function GiftRegistry() {
  return (
    <section className="registry-section">
      <div className="registry-inner">
        <p className="section-kicker">Lista nozze</p>
        <div className="registry-copy">
          <p>Organizzare il matrimonio non ci bastava: abbiamo voluto anche ristrutturare casa. Ora abbiamo le pareti, le finestre e un tetto. Non resta che riempirli.</p>
          <p>Se volete farci un regalo, potete aiutarci a dare forma e colore alla nostra casa.</p>
        </div>
        <div className="registry-grid">
          <div className="registry-item">
            <article className="registry-card registry-card-cream">
              <div className="registry-logo icon-design-logo">
                <Image src="/assets/icon-design.png" alt="Icon Design" width={269} height={55} />
              </div>
              <p>Via Economo, 5/A</p>
              <p>34123 - Trieste (TS)</p>
              <p>040 307028</p>
              <a href="https://www.icondesignsolution.com/" target="_blank" rel="noopener noreferrer">
                www.icondesignsolution.com
              </a>
            </article>
            <div className="registry-bottom-rect registry-bottom-rect-feature">
              <p className="registry-bottom-copy">Vuoi regalarci un pezzo di divano?</p>
              <a
                className="registry-couch-photo"
                href="https://buy.stripe.com/dRm7sMafVbGAgzXaaU6kg00"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Apri pagamento Stripe per il divano"
              >
                <Image src="/assets/registry-couch.jpeg" alt="Divano angolare" width={882} height={478} />
              </a>
              <a
                className="registry-bottom-button"
                href="https://buy.stripe.com/dRm7sMafVbGAgzXaaU6kg00"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Apri pagamento Stripe"
              >
                <ArrowRightIcon />
              </a>
            </div>
          </div>

          <div className="registry-item">
            <article className="registry-card registry-card-white">
              <div className="registry-logo">
                <Image src="/assets/gonnelli.jpg" alt="Gonnelli" width={300} height={176} />
              </div>
              <p>Via Mazzini, 30</p>
              <p>34121 - Trieste (TS)</p>
              <p>040 638638</p>
              <a href="https://www.gonnelli.biz/" target="_blank" rel="noopener noreferrer">
                www.gonnelli.biz
              </a>
            </article>
            <div className="registry-bottom-rect registry-bottom-rect-complete">
              <p className="registry-bottom-copy registry-bottom-copy-complete">Conclusa!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Rsvp() {
  return (
    <section className="rsvp-section">
      <div className="rsvp-inner">
        <p className="section-kicker section-kicker-blue">RSVP</p>
        <p className="rsvp-copy">Sarai dei nostri? Scrivici un messaggio</p>
        <div className="rsvp-links">
          <a className="rsvp-person" href="https://wa.me/393311660369" target="_blank" rel="noopener noreferrer">
            <span className="message-bubble">
              <MessageIcon />
            </span>
            <span>Chiara</span>
          </a>
          <a className="rsvp-person" href="https://wa.me/393454593929" target="_blank" rel="noopener noreferrer">
            <span className="message-bubble">
              <MessageIcon />
            </span>
            <span>Nicolò</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function CouplePhoto() {
  return (
    <section className="photo-section">
      <div className="photo-frame">
        <Image src="/assets/chiara-nicolo.jpg" alt="Chiara e Nicolò" fill sizes="(max-width: 640px) calc(100vw - 48px), 448px" priority={false} />
        <div className="photo-overlay" aria-hidden="true" />
      </div>
    </section>
  );
}

export default function WeddingSite({
  showReception = true,
  ceremonyTitle = "Cerimonia",
}: WeddingSiteProps) {
  return (
    <main
      className="wedding-site"
      style={
        {
          "--wedding-blue": palette.blue,
          "--wedding-teal": palette.teal,
          "--wedding-paper": palette.paper,
          "--wedding-linen": palette.linen,
          "--wedding-white": palette.white,
        } as CSSProperties
      }
    >
      <Hero />
      <Program showReception={showReception} ceremonyTitle={ceremonyTitle} />
      <GiftRegistry />
      <Rsvp />
      <CouplePhoto />
    </main>
  );
}
