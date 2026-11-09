"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar, Clock, Phone, Mail, User, ShieldCheck, CheckCircle2, MessageSquare, AlertCircle } from "lucide-react";
import { CLINIC_CONTACT } from "@/data/website-data";

const appointmentSchema = z.object({
  fullName: z.string().min(2, "Full name is required (minimum 2 letters)"),
  phone: z.string().min(7, "Valid phone number is required"),
  email: z.string().email("Please provide a valid email address"),
  treatment: z.string().min(1, "Please select a preferred procedure"),
  preferredDate: z.string().min(1, "Please select your preferred date"),
  preferredTime: z.string().min(1, "Please pick an appointment time"),
  message: z.string().optional(),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

export default function AppointmentForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [successDetails, setSuccessDetails] = useState<AppointmentFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      treatment: "Cosmetic Veneers & Smile Makeover",
      preferredTime: "Morning (09:00 AM - 12:00 PM)",
    },
  });

  const onSubmit = async (data: AppointmentFormData) => {
    setSubmitStatus("loading");
    try {
      // Simulate real verification / backend API latency
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccessDetails(data);
      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <section id="appointment" className="py-14 sm:py-20 bg-[#EFF4FF]/70">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl md:rounded-[28px] border border-[#E3ECF7] p-6 sm:p-10 lg:p-12 shadow-sm">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-[#F0F4FA] gap-4">
            <div>
              <span className="text-[11px] font-bold text-[#FF751C] uppercase tracking-wider">
                READY TO GET STARTED?
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#111C35] tracking-tight mt-1 mb-2">
                Ready for your best smile?
              </h2>
              <p className="text-[14px] text-[#596579] max-w-xl">
                Request an appointment. Our clinical coordinator will confirm your preferred timing within 15 minutes.
              </p>
            </div>

            {/* Direct Phone / WhatsApp Quick Contact */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${CLINIC_CONTACT.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#EFF4FF] text-[#0861A8] hover:bg-[#E0ECFC] text-xs font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{CLINIC_CONTACT.phone}</span>
              </a>
              <a
                href={`https://wa.me/${CLINIC_CONTACT.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#E6F7F0] text-[#16A36A] hover:bg-[#D4F2E5] text-xs font-semibold transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Direct WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Form */}
          {submitStatus === "success" && successDetails ? (
            <div className="bg-[#EFF8F3] border border-[#BCE7CF] rounded-2xl p-6 sm:p-8 text-center animate-in fade-in duration-300">
              <div className="w-14 h-14 bg-[#16A36A] text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#111C35] mb-2">
                Appointment Request Confirmed!
              </h3>
              <p className="text-sm text-[#465368] max-w-lg mx-auto mb-4">
                Thank you, <strong>{successDetails.fullName}</strong>. Our clinical coordinator has reserved your requested window for <strong>{successDetails.treatment}</strong> on <strong>{successDetails.preferredDate} ({successDetails.preferredTime})</strong>.
              </p>
              <div className="inline-flex items-center gap-2 text-xs text-[#16A36A] font-semibold bg-white px-4 py-2 rounded-full border border-[#BCE7CF]">
                Confirmation SMS &amp; WhatsApp sent to {successDetails.phone}
              </div>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => setSubmitStatus("idle")}
                  className="px-6 py-2.5 rounded-full bg-[#0861A8] text-white text-xs font-bold hover:bg-[#075390] transition-colors"
                >
                  Book Another Appointment
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-[#111C35] uppercase tracking-wider mb-2">
                    Full Name <span className="text-[#FF751C]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. Dr. Mansoor Al Qasimi"
                      {...register("fullName")}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#111C35] bg-[#FBFDFF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0861A8] transition-all ${
                        errors.fullName ? "border-red-400 focus:ring-red-400" : "border-[#E1E8F2]"
                      }`}
                    />
                    <User className="absolute right-3.5 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  {errors.fullName && (
                    <p className="text-red-500 text-[11px] mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-[#111C35] uppercase tracking-wider mb-2">
                    Phone Number <span className="text-[#FF751C]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="+971 50 000 0000"
                      {...register("phone")}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#111C35] bg-[#FBFDFF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0861A8] transition-all ${
                        errors.phone ? "border-red-400 focus:ring-red-400" : "border-[#E1E8F2]"
                      }`}
                    />
                    <Phone className="absolute right-3.5 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-[11px] mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-[#111C35] uppercase tracking-wider mb-2">
                    Email Address <span className="text-[#FF751C]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="patient@example.com"
                      {...register("email")}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#111C35] bg-[#FBFDFF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0861A8] transition-all ${
                        errors.email ? "border-red-400 focus:ring-red-400" : "border-[#E1E8F2]"
                      }`}
                    />
                    <Mail className="absolute right-3.5 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-[11px] mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Preferred Treatment */}
                <div>
                  <label className="block text-xs font-bold text-[#111C35] uppercase tracking-wider mb-2">
                    Preferred Treatment <span className="text-[#FF751C]">*</span>
                  </label>
                  <select
                    {...register("treatment")}
                    className="w-full px-4 py-3 rounded-xl border border-[#E1E8F2] text-sm text-[#111C35] bg-[#FBFDFF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0861A8] transition-all"
                  >
                    <option value="Cosmetic Veneers & Smile Makeover">Cosmetic Veneers &amp; Smile Makeover</option>
                    <option value="Dental Implants & Zirconia Crown">Dental Implants &amp; Zirconia Crown</option>
                    <option value="Damon Orthodontics & Invisalign">Damon Orthodontics &amp; Invisalign</option>
                    <option value="Laser Teeth Whitening (Zoom)">Laser Teeth Whitening (Zoom)</option>
                    <option value="Microscopic Root Canal Therapy">Microscopic Root Canal Therapy</option>
                    <option value="Routine Hygiene & Checkup">Routine Hygiene &amp; Comprehensive Checkup</option>
                    <option value="Emergency Dental Consultation">Emergency Dental Consultation</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-bold text-[#111C35] uppercase tracking-wider mb-2">
                    Preferred Date <span className="text-[#FF751C]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      {...register("preferredDate")}
                      defaultValue="2026-11-15"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#111C35] bg-[#FBFDFF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0861A8] transition-all ${
                        errors.preferredDate ? "border-red-400 focus:ring-red-400" : "border-[#E1E8F2]"
                      }`}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="text-red-500 text-[11px] mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.preferredDate.message}
                    </p>
                  )}
                </div>

                {/* Preferred Time */}
                <div>
                  <label className="block text-xs font-bold text-[#111C35] uppercase tracking-wider mb-2">
                    Preferred Time Window <span className="text-[#FF751C]">*</span>
                  </label>
                  <select
                    {...register("preferredTime")}
                    className="w-full px-4 py-3 rounded-xl border border-[#E1E8F2] text-sm text-[#111C35] bg-[#FBFDFF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0861A8] transition-all"
                  >
                    <option value="Morning (09:00 AM - 12:00 PM)">Morning (09:00 AM – 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM – 04:00 PM)</option>
                    <option value="Evening (04:00 PM - 09:00 PM)">Evening (04:00 PM – 09:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-[#111C35] uppercase tracking-wider mb-2">
                  Additional Notes or Symptoms (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Share any specific requests, past dental history, or questions for Dr. Riyaz..."
                  {...register("message")}
                  className="w-full px-4 py-3 rounded-xl border border-[#E1E8F2] text-sm text-[#111C35] bg-[#FBFDFF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0861A8] transition-all resize-none"
                />
              </div>

              {/* Submission row */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#596579]">
                  <ShieldCheck className="w-4 h-4 text-[#16A36A]" />
                  <span>Your medical details remain strictly confidential under UAE Health Data Law.</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-[14px] font-bold text-white bg-[#FF751C] hover:bg-[#E8640E] shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting Request..." : "Request Appointment"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
