"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const message = formData.get("message")?.toString().trim() ?? "";

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    if (name.length > 200 || email.length > 254 || message.length > 5000) {
      setStatus("error");
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "YOUR_ACCESS_KEY";
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 rounded-2xl p-12 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <Icon icon="lucide:check" className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-heading font-semibold text-xl text-dark mb-2">{t("successTitle")}</h3>
        <p className="text-text-gray">{t("successDesc")}</p>
        <button onClick={() => setStatus("idle")} className="mt-6 text-primary text-sm font-medium hover:underline">
          {t("sendAnother")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">{t("name")}</label>
          <input type="text" id="name" name="name" required maxLength={200} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder={t("namePlaceholder")} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">{t("emailLabel")}</label>
          <input type="email" id="email" name="email" required maxLength={254} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder={t("emailPlaceholder")} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="business" className="block text-sm font-medium text-dark mb-2">{t("business")}</label>
          <input type="text" id="business" name="business" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder={t("businessPlaceholder")} />
        </div>
        <div>
          <label htmlFor="project-type" className="block text-sm font-medium text-dark mb-2">{t("projectType")}</label>
          <select id="project-type" name="project_type" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white">
            <option value="">{t("selectType")}</option>
            <option value="business-website">{t("types.business")}</option>
            <option value="website-redesign">{t("types.redesign")}</option>
            <option value="landing-page">{t("types.landing")}</option>
            <option value="speed-optimization">{t("types.speed")}</option>
            <option value="seo-setup">{t("types.seo")}</option>
            <option value="website-maintenance">{t("types.maintenance")}</option>
            <option value="other">{t("types.other")}</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">{t("message")}</label>
        <textarea id="message" name="message" required rows={6} maxLength={5000} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none" placeholder={t("messagePlaceholder")} />
      </div>

      {status === "error" && (
        <div className="bg-red-50 text-red-600 text-sm p-4 rounded-xl">{t("error")}</div>
      )}

      <button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto px-8 py-3 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
        {status === "submitting" ? t("submitting") : t("submit")}
      </button>
    </form>
  );
}
