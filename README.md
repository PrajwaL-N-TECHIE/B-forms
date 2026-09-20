# B-Forms • Google Forms Clone & Feedback Engine

A lightweight, mobile-optimized, real-time survey and feedback application built with React, Vite, Tailwind CSS, and Firebase Firestore. Engineered with Buildicy's signature dark purple aesthetic.

## 🚀 Features

- **Host Management Studio (`/`)**:
  - **Form Builder**: Custom titles, descriptions, and cover image upload (direct device file upload with preview or image URL).
  - **Flexible Question Types**: Short Text, Paragraph / Multiline, Multiple Choice (Radio), Checkboxes, and 1–5 Star Rating.
  - **Required Toggles**: Mark any question as `Required *` or `Optional`.
  - **Shareable Links**: One-click copy link for public distribution (`/:id`).
  - **Live Responses Dashboard**: Real-time Firestore sync of incoming submissions with count metrics.
  - **Analytics & Visualizations**: Choice distribution percentage bars and star rating averages.
  - **Data Export**:
    - 📥 **Download CSV**: RFC-4180 standard spreadsheet with questions as columns.
    - 📄 **Download PDF**: Executive summary report with Buildicy branding.

- **Public Respondent Form (`/:id`)**:
  - Distraction-free, mobile-optimized layout.
  - Client-side validation with smooth scroll to missing required questions.
  - Celebratory confetti on submission.
  - Anonymous or named submission support.

## 📦 Deployment (Custom Subdomain Setup)

### Deploying to Vercel:
1. Import this repository (`https://github.com/PrajwaL-N-TECHIE/B-forms`) on [Vercel](https://vercel.com).
2. Framework Preset: **Vite**.
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Under **Settings > Domains**, add your custom subdomain (e.g. `forms.buildicy.com` or `b-forms.buildicy.com`).
6. Point the CNAME DNS record as directed by Vercel.

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build production bundle
npm run build
```

---
Engineered by **Buildicy Studio**.
