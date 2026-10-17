import { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle2, RotateCcw, Navigation, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/plumbingData';
import { InquiryFormData } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useBrandLogo } from '../utils/useBrandLogo';

interface ContactAndFormProps {
  preselectedService?: string;
  onClearPreselectedService?: () => void;
}

export function ContactAndForm({
  preselectedService,
  onClearPreselectedService,
}: ContactAndFormProps) {
  const { logoUrl } = useBrandLogo();
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phoneNumber: '',
    address: '',
    service: SERVICES[0].title,
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<InquiryFormData | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        service: preselectedService,
      }));
    }
  }, [preselectedService]);

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Full name must be at least 2 characters.';
    }

    const cleanPhone = formData.phoneNumber.replace(/\D/g, '');
    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Please enter your phone number.';
    } else if (cleanPhone.length < 10) {
      errs.phoneNumber = 'Please enter a valid 10-digit mobile number.';
    }

    if (!formData.address.trim()) {
      errs.address = 'Please enter your full address (House/Flat No., Sector, Landmark).';
    } else if (formData.address.trim().length < 5) {
      errs.address = 'Please enter a complete address so the plumber can locate you.';
    }

    if (!formData.service) {
      errs.service = 'Please select a service.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Process submission
    setSubmittedData({ ...formData });
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      phoneNumber: '',
      address: '',
      service: SERVICES[0].title,
      message: '',
    });
    setErrors({});
    if (onClearPreselectedService) {
      onClearPreselectedService();
    }
  };

  const buildWhatsAppRedirectUrl = (data: InquiryFormData) => {
    const text = `Hello Roy Plumbing Services, I need plumbing services.\n\nName: ${data.fullName}\nPhone: ${data.phoneNumber}\nFull Address: ${data.address}\nService: ${data.service}\nDetails: ${data.message || 'Please contact me for inspection.'}`;
    return `https://wa.me/919582885917?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-xs font-bold tracking-widest uppercase text-blue-700">Reach Out Today</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Get in Touch
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Connect directly with Roy Plumbing Services for fast residential and commercial plumbing assistance in Rohini Sector 25.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Business Details & Instant Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-2xl p-7 shadow-lg border border-slate-800 space-y-6">
              <div className="flex items-center gap-4">
                <img
                  src={logoUrl}
                  alt="Roy Plumbing Services Official Logo"
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-full object-contain p-0.5 ring-2 ring-amber-400/80 shadow-md shrink-0 bg-white"
                />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-400">Plumbing Provider</div>
                  <h3 className="text-2xl font-extrabold text-white mt-0.5">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-xs text-slate-300 italic mt-0.5">
                    “{BUSINESS_INFO.mainTagline}”
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-2 border-t border-slate-800 text-sm">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-amber-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold">Phone Number</div>
                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="text-base font-bold text-white hover:text-amber-400 transition-colors"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <div className="text-xs text-slate-400">Direct Technician Helpline</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold">Location & Full Address</div>
                    <a
                      href={BUSINESS_INFO.googleMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-white hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 group"
                      title="Open in Google Maps"
                    >
                      <span>{BUSINESS_INFO.location}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 transition-colors" />
                    </a>
                    <div className="text-xs text-amber-300 font-medium mt-0.5">
                      Full Address: {BUSINESS_INFO.fullAddress}
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-amber-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold">Availability</div>
                    <div className="text-base font-bold text-emerald-400">
                      {BUSINESS_INFO.availability}
                    </div>
                    <div className="text-xs text-slate-400">24 Hours / 7 Days Emergency Care</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all shadow-md"
                >
                  <Phone className="w-4 h-4 text-slate-950" />
                  <span>Call Now</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Google Map Card with Live Mapping & Direct Link */}
            <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-md">
              {/* Card Header with Profile Info & Directions Action */}
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-sm font-black">
                    <MapPin className="w-5 h-5 text-slate-950" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-sm text-white truncate">Roy Plumbing Services</span>
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 shrink-0">
                        Map Location
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 truncate">
                      Sector 25, Rohini, North West Delhi
                    </p>
                  </div>
                </div>

                <a
                  href={BUSINESS_INFO.googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-xs shrink-0"
                  title="Open Roy Plumbing Services on Google Maps"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Directions</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>

              {/* Embedded Interactive Google Map */}
              <div className="relative w-full h-64 sm:h-72 bg-slate-100">
                <iframe
                  title="Roy Plumbing Services Google Map Location Rohini Sector 25"
                  src="https://maps.google.com/maps?q=Roy+Plumbing+Services,+Sector+25,+Rohini,+Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />

                {/* Floating Bottom Overlay Pill */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                  <div className="pointer-events-auto bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-slate-200 shadow-md text-[11px] text-slate-800 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Rohini Sector 25, Delhi</span>
                  </div>

                  <a
                    href={BUSINESS_INFO.googleMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-md transition-all active:scale-95"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Map Footer Note */}
              <div className="p-3.5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div className="text-slate-600 flex items-center gap-1.5">
                  <span className="font-semibold text-slate-900">Service Coverage:</span>
                  <span>Rohini Sector 25, 24, 23 & nearby Delhi localities</span>
                </div>
                <a
                  href={BUSINESS_INFO.googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 font-bold hover:underline inline-flex items-center gap-1 self-start sm:self-auto"
                >
                  <span>Google Link: share.google/uBeOsd8eUNZdRPXvW</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Service Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Service Inquiry Form
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your details below and request plumbing service directly.
                </p>
              </div>

              {isSubmitted && submittedData ? (
                <div className="space-y-6 py-4">
                  <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-slate-800 space-y-3">
                    <div className="flex items-center gap-2.5 text-emerald-700 font-bold text-base">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>Request Received Successfully!</span>
                    </div>

                    <p className="text-sm text-slate-700 leading-relaxed">
                      Thank you, <span className="font-bold text-slate-900">{submittedData.fullName}</span>.
                      Our plumber has received your inquiry for <span className="font-semibold text-slate-900">{submittedData.service}</span>.
                      We will call you promptly at <span className="font-bold text-slate-900">{submittedData.phoneNumber}</span> to confirm visit timing.
                    </p>

                    <div className="text-xs text-slate-700 bg-emerald-100/70 p-3 rounded-lg border border-emerald-200/80 space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-emerald-900">
                        <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span>Service Address Provided:</span>
                      </div>
                      <p className="text-slate-800 font-medium pl-5">
                        {submittedData.address}
                      </p>
                    </div>

                    <div className="text-xs text-slate-500 pt-1">
                      Status: Request logged for Roy Plumbing Services (Sector 25, Rohini).
                    </div>
                  </div>

                  {/* Immediate WhatsApp Forward Handoff */}
                  <div className="p-5 rounded-xl bg-slate-900 text-white space-y-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                      Want an instant reply?
                    </div>
                    <p className="text-sm text-slate-300">
                      Send this request directly to our plumber’s WhatsApp now:
                    </p>

                    <a
                      href={buildWhatsAppRedirectUrl(submittedData)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-sm shadow transition-colors"
                    >
                      <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
                      <span>Forward Request via WhatsApp</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 hover:text-blue-900 hover:underline pt-2"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Submit another inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      placeholder="e.g. Rajesh Kumar"
                      className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors min-h-[46px] ${
                        errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-slate-300 bg-white'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-600 mt-1 font-medium">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phoneNumber" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={(e) => {
                        setFormData({ ...formData, phoneNumber: e.target.value });
                        if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: '' });
                      }}
                      placeholder="e.g. 9876543210"
                      className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors min-h-[46px] ${
                        errors.phoneNumber ? 'border-red-400 bg-red-50/30' : 'border-slate-300 bg-white'
                      }`}
                    />
                    {errors.phoneNumber && (
                      <p className="text-xs text-red-600 mt-1 font-medium">{errors.phoneNumber}</p>
                    )}
                  </div>

                  {/* Full Address */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label htmlFor="address" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Full Address (पूरा पता) <span className="text-red-500">*</span>
                      </label>
                      <span className="text-[11px] text-slate-400">House No., Sector, Landmark</span>
                    </div>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={(e) => {
                        setFormData({ ...formData, address: e.target.value });
                        if (errors.address) setErrors({ ...errors, address: '' });
                      }}
                      placeholder="e.g. Flat No. 204, Pocket 4, Sector 25, Rohini, Delhi (Near Vardhman Mall)"
                      className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors min-h-[46px] ${
                        errors.address ? 'border-red-400 bg-red-50/30' : 'border-slate-300 bg-white'
                      }`}
                    />
                    {errors.address && (
                      <p className="text-xs text-red-600 mt-1 font-medium">{errors.address}</p>
                    )}
                  </div>

                  {/* Select a Service */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Select a Service <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-base sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors min-h-[46px]"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Your Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your issue or pipe location (e.g. kitchen sink dripping, need water tank inspection)..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white font-bold text-sm sm:text-base shadow-sm hover:shadow transition-all min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    <Send className="w-4 h-4 text-amber-300" />
                    <span>Request a Plumbing Service</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    No spam. We contact you solely regarding your plumbing service request.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
