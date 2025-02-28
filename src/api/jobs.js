export const jobList = [
  {
    id: 1,
    company: "Red Bull",
    companyId: "red-bull",
    logo: "/assets/images/redbull-logo.png",
    title: "Werkstudent Rechtsabteilung",
    location: "Vor Ort (München)",
    languages: ["/assets/icons/Language.png"], // ✅ Now only imports ONE language image
    semesterImage: "/assets/images/semester1.png",
    tags: ["Recherche", "Verträge", "Datenschutz-Management"],
  },
  {
    id: 2,
    company: "GBC Gerling",
    companyId: "gbc-gerling",
    logo: "/assets/images/gbc-logo.png",
    title: "Werkstudent (m/w/d) im Bereich Jura",
    location: "Hybrid (Hanau)",
    languages: ["/assets/icons/language-engish.png"], // ✅ Unchanged (already one image)
    semesterImage: "/assets/images/semester2.png",
    tags: ["Vertragsklauseln", "Übersetzunge"],
  },
  {
    id: 3,
    company: "Giesecke+Devrient",
    companyId: "giesecke-devrient",
    logo: "/assets/images/giesecke-logo.png",
    title: "Werkstudent Datenschutz (m/w/d)",
    location: "Hybrid (München)",
    languages: ["/assets/icons/Language.png"], // ✅ Now only imports ONE language image
    semesterImage: "/assets/images/semester3.png",
    tags: ["Unterstützung", "Datenschutz-Management-Systeme", "MS Office"],
  },
  {
    id: 4,
    company: "Medacius",
    companyId: "medacius",
    logo: "/assets/images/redbull-logo.png",
    title: "Werkstudent Contract (all genders)",
    location: "Vor Ort (München)",
    languages: ["/assets/icons/Language.png"], // ✅ Already correct (one image)
    semesterImage: "/assets/images/semester2.png",
    tags: ["Vertragsdaten", "Klassifizierung", "Dokumentation", "Prüfung"],
  }
];
