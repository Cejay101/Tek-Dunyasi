import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-light/50 to-transparent -z-10" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/50 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-light rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-sm font-medium">
              Available for new projects
            </span>
          </div>

          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-dark leading-tight mb-6">
            We build websites that{" "}
            <span className="text-primary">grow your business</span>
          </h1>

          <p className="text-text-gray text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
            Tek Dünyası creates modern, fast, and professional websites that
            help small and medium businesses establish a powerful online
            presence and attract more customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" size="lg">
              Start Your Project
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="ml-2"
              >
                <path
                  d="M4 10H16M16 10L11 5M16 10L11 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
            <div>
              <div className="font-heading font-bold text-2xl sm:text-3xl text-dark">
                50+
              </div>
              <div className="text-text-gray text-sm mt-1">
                Projects Delivered
              </div>
            </div>
            <div>
              <div className="font-heading font-bold text-2xl sm:text-3xl text-dark">
                98%
              </div>
              <div className="text-text-gray text-sm mt-1">
                Client Satisfaction
              </div>
            </div>
            <div>
              <div className="font-heading font-bold text-2xl sm:text-3xl text-dark">
                3+
              </div>
              <div className="text-text-gray text-sm mt-1">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
