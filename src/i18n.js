import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      "Approach": "Approach",
      "Overall": "Overall",
      "Works": "Works",
      "Case Study": "Case Study",
      "View Our Works": "View Our Works",
      "Clients": "Clients",
      "All Client": "All Client",
      "Think": "Thoughts",
      "Thinking":"Thinking",
      "View Our Thoughts": "View Our Thoughts",
      "client_menu": "clients",
      "culture": "culture",
      "services": "Services",
      "careers": "Careers",
      "contact": "contact",
      "title_footer": "Starting a new project or <br> want to collaborate with us?",
      "Keep in touch": "Keep in touch",
      "location_footer": "SUFFIX",
      "Address": "Address",
      "Email": "Email",
      "Telephone": "Telephone",
      "Social": "Social",
      "Term of use": "Term of use",
      "Privacy": "Privacy",
      "Sitemap": "Sitemap",
      "title_works": "Explore our case studies to see how we can bring a fresh solution to your business.",
      "title_workinfo": "Client",
      "Industry": "Industry",
      "Expertise": "Expertise",
      "Objective": "Objective",
      "Process": "Process",
      "Team": "Team",
      "Client List": "Client List",
      "title_Culture": "Culture",
      "How we work": "How we work",
      "About": "About",
      "culture_Expertise": "Expertise",
      "Position": "Position",
      "Why this role important for SUFFIX": "Why this role important for SUFFIX",
      "role": "Why this role important for SUFFIX",
      "offer": "What does SUFFIX offer you?",
      "Responsibilities": "What will you be doing? (Responsibilities)",
      "mindset": "Relevant experience and mindset",
      "Application": "Application Stack",
      "Apply": "Apply",
      "Privacy Policy": "Privacy Policy",
      "THOUGHTS": "THOUGHTS",
      "Get in touch": "Get in touch",
      "Enquiry": "Enquiry",
      "sub_enquiry": "What services are you looking for",
      "Digital Strategy: Marketing & Communication": "Digital Strategy: Marketing & Communication",
      "Digital Executiion: Website & Application": "Digital Execution: Website & Application",
      "Name":"Name",
      "Email":"Email",
      "Phone":"Phone",
      "Please tell us a little more about your inquiry.":"Please tell us a little more about your enquiry.",
      "note": "Add a note here",
      "submit":"Submit",
      "Location" :"Location",
      "Address" : "Address",
      "Telephone" : "Telephone",
      "View More" : "View More",
    }
  },
  th: {
    translation: {
      "Approach": "บริการ",
      "Overall": "โปรเจคและประเภทงานที่ผ่านมา",
      "Works": "ผลงาน",
      "Case Study": "กรณีศึกษา",
      "View Our Works": "ดูผลงานเพิ่มเติม",
      "Clients": "ลูกค้าของเรา",
      "All Client": "ดูลูกค้าทั้งหมด",
      "Think": "วิธีคิด",
      "THOUGHTS": "วิธีคิด",
      "View Our Thoughts": "อ่านทั้งหมด",
      "client_menu": "ลูกค้า",
      "culture": "วัฒนธรรม",
      "services": "บริการ",
      "careers": "ร่วมงานกับเรา",
      "contact": "ติดต่อ",
      "title_footer": "เริ่มต้นโปรเจคใหม่?  <br> หรือพัฒนาโปรเจคของคุณ",
      "Keep in touch": "ติดต่อเรา",
      "location_footer": "ซัฟฟิกซ์",
      "Address": "ที่อยู่",
      "Email": "อีเมลล์",
      "Telephone": "โทรศัพท์",
      "Social": "โซเชียลมีเดีย",
      "Term of use": "ข้อกำหนดการใช้บริการ",
      "Privacy": "ความเป็นส่วนตัว",
      "Sitemap": "แผนผังเว็บไซต์",
      "title_works": "สำรวจผลงานที่ผ่านมาของเรา เพื่อดูว่าเราสามารถนำเสนอวิธีการแก้ปัญหาใหม่ๆโครงการของคุณได้อย่างไร",
      "title_workinfo": "โปรเจค",
      "Industry": "อุตสาหกรรม",
      "Expertise": "ประเภทงาน",
      "Objective": "จุดประสงค์",
      "Process": "รายละเอียดโปรเจค",
      "Team": "ทีมงาน",
      "Client List": "รายชื่อลูกค้า",
      "title_Culture": "วัฒนธรรมการทำงาน",
      "How we work": "แนวทางการทำงาน",
      "About": "เกี่ยวกับเรา",
      "culture_Expertise": "ความเชียวชาญ",
      "Position": "ตำแหน่ง",
      "Why this role important for SUFFIX": "Why this role important for SUFFIX",
      "role": "งานตำแหน่งนี้มีความสำคัญกับซัฟฟิกซ์อย่างไร",
      "offer": "ข้อเสนอจากซัฟฟิกซ์",
      "Responsibilities": "ความรับผิดชอบและหน้าที่ของตำแหน่งนี้",
      "mindset": "ประสบการณ์และวิธีคิด",
      "Application": "แอพพลิเคชั่นต่างๆที่ต้องใช้งาน",
      "Apply": "สมัคร",
      "Privacy Policy": "ข้อกำหนดการใช้บริการ",
      "Get in touch": "ติดต่อเรา",
      "Enquiry": "รายละเอียด",
      "sub_enquiry": "คุณกำลังมองหาบริการแบบไหน?",
      "Digital Strategy: Marketing & Communication": "บริการวางกลยุทธ์ และการตลาดดิจิตอล",
      "Digital Executiion: Website & Application": "บริการออกแบบและพัฒนาเว็บไซต์ และแอพพลิเคชั่น",
      "Name":"ชื่อ",
      "Email":"อีเมลล์",
      "Phone":"เบอร์โทรศัพท์",
      "Please tell us a little more about your inquiry.":"รายละเอียดโปรเจค",
      "note": "รายละเอียด",
      "submit":"ส่ง",
      "Location" :"แผนที่",
      "Address" : "ที่อยู่",
      "Telephone" : "เบอร์โทรศัพท์",
      "View More" : "ดูเพิ่มเติม",
      "Thinking":"แนวคิด",
    }
  }
};

i18n
  // .use(detector)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next

  .init({
    resources,
    lng: 'en',
    fallbackLng: 'th',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;