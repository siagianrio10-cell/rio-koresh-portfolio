import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function createCV() {
  const pdfDoc = await PDFDocument.create();
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const margin = 40;
  const pageWidth = 595.28; // A4
  const pageHeight = 841.89; // A4
  const contentWidth = pageWidth - margin * 2;

  // Helper to wrap text into lines that fit maxWidth
  function wrapText(text, font, size, maxWidth) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = font.widthOfTextAtSize(testLine, size);
      if (testWidth > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) {
      lines.push(currentLine);
    }
    return lines;
  }

  // --- PAGE 1 ---
  let page = pdfDoc.addPage([pageWidth, pageHeight]);
  let y = pageHeight - margin;

  // Name Header
  page.drawText('RIO KORESH YEREMIA', {
    x: margin,
    y: y - 16,
    size: 18,
    font: fontBold,
    color: rgb(0.1, 0.1, 0.1),
  });
  y -= 32;

  // Contact line
  const contactText = '081377305983  |  siagianrio10@gmail.com  |  https://www.linkedin.com/in/riokoreshyeremia/  |  Denpasar';
  page.drawText(contactText, {
    x: margin,
    y,
    size: 8.5,
    font: fontRegular,
    color: rgb(0.3, 0.3, 0.3),
  });
  y -= 14;

  // Summary Paragraph
  const summary = 'Psychology graduate with hands-on experience across Talent Management, Recruitment, HR Operations, Psychological Assessment, and Learning & Development. Experienced in supporting talent identification, internal mobility, employee development, recruitment, and people-related decision making across multi-site operations. Combines a people-oriented approach with data and assessment-based analysis to support practical HR decisions, process improvement, and organizational effectiveness.';
  const summaryLines = wrapText(summary, fontRegular, 8.5, contentWidth);
  for (const line of summaryLines) {
    page.drawText(line, { x: margin, y, size: 8.5, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
    y -= 11.5;
  }
  y -= 8;

  // Helper for Section Header
  function drawSectionHeader(title) {
    page.drawText(title, {
      x: margin,
      y,
      size: 11,
      font: fontBold,
      color: rgb(0.1, 0.1, 0.1),
    });
    y -= 4;
    page.drawLine({
      start: { x: margin, y },
      end: { x: pageWidth - margin, y },
      thickness: 1,
      color: rgb(0.2, 0.2, 0.2),
    });
    y -= 12;
  }

  drawSectionHeader('Work Experience');

  // Job 1: Pepito
  page.drawText('Pepito Supermarket - Kuta', { x: margin, y, size: 9.5, font: fontBold });
  const p1Period = 'Nov 2025 - Sekarang';
  const p1Width = fontRegular.widthOfTextAtSize(p1Period, 9);
  page.drawText(p1Period, { x: pageWidth - margin - p1Width, y, size: 9, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });
  y -= 11;

  page.drawText('Talent Management', { x: margin, y, size: 9, font: fontOblique, color: rgb(0.2, 0.2, 0.2) });
  y -= 11;

  const pepitoCompanyDesc = 'Pepito Supermarket is a premium supermarket brand founded in 2001 in Bali, now operating 43 stores across Bali and Lombok with 2,500+ employees. Guided by the motto "Freshness, Quality, Customer Satisfaction," Pepito delivers high-quality local and imported products with world-class service.';
  for (const line of wrapText(pepitoCompanyDesc, fontRegular, 8, contentWidth)) {
    page.drawText(line, { x: margin, y, size: 8, font: fontRegular, color: rgb(0.4, 0.4, 0.4) });
    y -= 10;
  }
  y -= 4;

  const pepitoBullets = [
    'Managed talent and internal mobility processes for 15-25 promotion candidates monthly, covering talent identification, psychological and technical assessment, readiness evaluation, acting programs, and panel-based evaluation for supervisory and managerial positions.',
    'Supported the development of the leadership pipeline and talent pool across multiple organizational levels by assessing employee readiness, competency gaps, and development needs.',
    'Conducted and interpreted psychological assessments for internal promotion candidates and external managerial-level candidates, providing assessment insights to support talent and selection decisions.',
    'Conducted Training Needs Analysis (TNA) and developed Individual Development Plans (IDPs) based on assessment results, performance gaps, and identified development needs.',
    'Coached employees in preparing KPI-driven business improvement projects and supported their presentation and panel evaluation as part of the promotion process.',
    'Developed HR dashboards and data visualizations using Excel, Lark, and Power BI to monitor workforce, talent, training, and employee metrics.',
    'Maintained talent program documentation and employee tracking to support accurate, structured, and data-informed talent decisions.'
  ];

  for (const bullet of pepitoBullets) {
    const bLines = wrapText(bullet, fontRegular, 8.2, contentWidth - 12);
    page.drawText('•', { x: margin + 2, y, size: 8.2, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
    for (let i = 0; i < bLines.length; i++) {
      page.drawText(bLines[i], { x: margin + 12, y, size: 8.2, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
      y -= 10.5;
    }
    y -= 2;
  }
  y -= 6;

  // Job 2: DNI SKIN CENTRE
  page.drawText('DNI SKIN CENTRE INDONESIA - Denpasar', { x: margin, y, size: 9.5, font: fontBold });
  const dniPeriod = 'Aug 2025 - Nov 2025';
  const dniWidth = fontRegular.widthOfTextAtSize(dniPeriod, 9);
  page.drawText(dniPeriod, { x: pageWidth - margin - dniWidth, y, size: 9, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });
  y -= 11;

  page.drawText('HR Generalist', { x: margin, y, size: 9, font: fontOblique, color: rgb(0.2, 0.2, 0.2) });
  y -= 11;

  const dniCompanyDesc = 'DNI Clinic is a dermatology and aesthetic clinic network based in Indonesia, providing professional skin, beauty, and wellness treatments. The company operates 13 branches across several cities and focuses on delivering dermatologist-supervised aesthetic services with modern technology and quality skincare standards.';
  for (const line of wrapText(dniCompanyDesc, fontRegular, 8, contentWidth)) {
    page.drawText(line, { x: margin, y, size: 8, font: fontRegular, color: rgb(0.4, 0.4, 0.4) });
    y -= 10;
  }
  y -= 4;

  const dniBullets = [
    'Managed end-to-end recruitment for 10-15 positions monthly across 13 branches, including job posting, candidate screening, interviewing, selection, and onboarding, maintaining an average one-week hiring turnaround.',
    'Managed HR administration and monthly payroll for 70+ employees, including attendance, leave, BPJS Kesehatan, and BPJS Ketenagakerjaan administration, maintaining zero payroll discrepancies.',
    'Utilized HRIS to manage employee attendance, leave, and time records, improving data accuracy and reducing manual processing time by 40%.',
    'Supported performance management through weekly KPI evaluations, performance reporting, employee recognition initiatives, and monitoring of employee compliance with company regulations and SOPs.',
    'Organized and coordinated 10+ employee training sessions covering product knowledge, SOP refreshers, and advanced clinical procedures for doctors and therapists.',
    'Managed operational permits including NIB, WLKP, SIP, SIPA, and SIA across 13 branches, ensuring regulatory compliance.',
    'Coordinated facility maintenance, cleanliness audits, and vendor relations across branches, contributing to a 30% reduction in service downtime through proactive issue handling.',
    'Compiled HR and operational reports covering attendance, payroll, compliance, and maintenance to support management decision-making.'
  ];

  for (const bullet of dniBullets) {
    const bLines = wrapText(bullet, fontRegular, 8.2, contentWidth - 12);
    page.drawText('•', { x: margin + 2, y, size: 8.2, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
    for (let i = 0; i < bLines.length; i++) {
      page.drawText(bLines[i], { x: margin + 12, y, size: 8.2, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
      y -= 10.5;
    }
    y -= 2;
  }
  y -= 6;

  // Job 3: CreKids (top of job 3 on page 1)
  page.drawText('CreKids - Semarang', { x: margin, y, size: 9.5, font: fontBold });
  const crePeriod = 'Aug 2024 - Jul 2025';
  const creWidth = fontRegular.widthOfTextAtSize(crePeriod, 9);
  page.drawText(crePeriod, { x: pageWidth - margin - creWidth, y, size: 9, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });
  y -= 11;

  page.drawText('Trainer', { x: margin, y, size: 9, font: fontOblique, color: rgb(0.2, 0.2, 0.2) });
  y -= 11;

  const creDesc = 'Crekids is an educational institution specializing in creative training programs for children, particularly those in kindergarten and elementary school. One of its flagship programs, C-Robo, focuses on introducing basic robotics to enhance creativity, problem-solving, fine motor skills, and concentration, while also fostering positive attitudes and social behavior.';
  for (const line of wrapText(creDesc, fontRegular, 8, contentWidth)) {
    page.drawText(line, { x: margin, y, size: 8, font: fontRegular, color: rgb(0.4, 0.4, 0.4) });
    y -= 10;
  }
  y -= 3;

  const creBulletsP1 = [
    'Designed and delivered robotics-based learning programs for 70 students weekly across 10 schools in Semarang, implementing a learning-through-play approach to enhance engagement and development.',
    'Developed age-appropriate curricula and instructional materials that fostered creativity, problem-solving, and fine motor skills among early learners.'
  ];
  for (const bullet of creBulletsP1) {
    const bLines = wrapText(bullet, fontRegular, 8.2, contentWidth - 12);
    page.drawText('•', { x: margin + 2, y, size: 8.2, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
    for (let i = 0; i < bLines.length; i++) {
      page.drawText(bLines[i], { x: margin + 12, y, size: 8.2, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
      y -= 10.5;
    }
    y -= 2;
  }

  // --- PAGE 2 ---
  page = pdfDoc.addPage([pageWidth, pageHeight]);
  y = pageHeight - margin;

  const creBulletsP2 = [
    'Organized and facilitated monthly robotics workshops and inter-school competitions involving 50-70 participants from 10-15 schools, coordinating event logistics and managing participant engagement.',
    'Collaborated with school management to design learning initiatives aligned with institutional goals, demonstrating early exposure to strategic planning and stakeholder coordination.',
    'Conducted learning evaluations and feedback sessions to continuously improve teaching delivery — reflecting skills in process improvement and performance monitoring.'
  ];
  for (const bullet of creBulletsP2) {
    const bLines = wrapText(bullet, fontRegular, 8.2, contentWidth - 12);
    page.drawText('•', { x: margin + 2, y, size: 8.2, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
    for (let i = 0; i < bLines.length; i++) {
      page.drawText(bLines[i], { x: margin + 12, y, size: 8.2, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
      y -= 10.5;
    }
    y -= 2;
  }
  y -= 8;

  // Job 4: HR Publik
  page.drawText('HR Publik - Semarang', { x: margin, y, size: 9.5, font: fontBold });
  const hrPubPeriod = 'Oct 2024 - Dec 2024';
  const hrPubWidth = fontRegular.widthOfTextAtSize(hrPubPeriod, 9);
  page.drawText(hrPubPeriod, { x: pageWidth - margin - hrPubWidth, y, size: 9, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });
  y -= 11;

  page.drawText('Trainer (Project Based)', { x: margin, y, size: 9, font: fontOblique, color: rgb(0.2, 0.2, 0.2) });
  y -= 11;

  const hrPubDesc = 'HR Publik Indonesia is a human resource development and organizational management company that provides psychological assessment, training, and people development programs. The company focuses on enhancing individual, team, and organizational capabilities through strategic and evidence-based HR solutions.';
  for (const line of wrapText(hrPubDesc, fontRegular, 8, contentWidth)) {
    page.drawText(line, { x: margin, y, size: 8, font: fontRegular, color: rgb(0.4, 0.4, 0.4) });
    y -= 10;
  }
  y -= 3;

  const hrPubBullets = [
    'Designed and facilitated a one-day institutional training program for 100+ academic and administrative staff at STIKes Telogorejo, focusing on strengthening organizational core values through experiential learning.',
    'Developed interactive training modules and outbound-based activities to enhance teamwork, communication, and alignment with institutional culture.',
    'Collaborated with the organizing committee to ensure smooth event execution, including logistics coordination, participant management, and time flow monitoring.',
    'Delivered post-training reflections and evaluations to measure participant engagement and identify key areas for continuous development.',
    'Contributed to fostering a positive learning atmosphere that encouraged collaboration and strengthened staff commitment to institutional goals.'
  ];
  for (const bullet of hrPubBullets) {
    const bLines = wrapText(bullet, fontRegular, 8.2, contentWidth - 12);
    page.drawText('•', { x: margin + 2, y, size: 8.2, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
    for (let i = 0; i < bLines.length; i++) {
      page.drawText(bLines[i], { x: margin + 12, y, size: 8.2, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
      y -= 10.5;
    }
    y -= 2;
  }
  y -= 8;

  // Job 5: LPT Indonesia
  page.drawText('LPT (Lembaga Psikologi Terapan) Indonesia - Semarang', { x: margin, y, size: 9.5, font: fontBold });
  const lptPeriod = 'Feb 2024 - Jul 2024';
  const lptWidth = fontRegular.widthOfTextAtSize(lptPeriod, 9);
  page.drawText(lptPeriod, { x: pageWidth - margin - lptWidth, y, size: 9, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });
  y -= 11;

  page.drawText('HR Consultant & Assistant Psychologist', { x: margin, y, size: 9, font: fontOblique, color: rgb(0.2, 0.2, 0.2) });
  y -= 11;

  const lptDesc = 'LPT (Lembaga Psikologi Terapan) Indonesia is a professional psychological consulting institution that provides comprehensive services in psychological assessment, counseling, and human resource development. The organization collaborates with individuals, educational institutions, and companies to support personal growth, career development, and organizational effectiveness across Indonesia.';
  for (const line of wrapText(lptDesc, fontRegular, 8, contentWidth)) {
    page.drawText(line, { x: margin, y, size: 8, font: fontRegular, color: rgb(0.4, 0.4, 0.4) });
    y -= 10;
  }
  y -= 3;

  const lptBullets = [
    'Supported end-to-end recruitment and selection processes for multiple client organizations, including job posting, CV screening, psychological assessment, behavioral interviews, and onboarding.',
    'Conducted 3-5 psychological assessment and interview sessions daily, administering, scoring, and interpreting psychological instruments to support candidate profiling and recruitment decisions.',
    'Administered, scored, and interpreted various psychological assessments, including WISC, BINET, PAPI Kostick, DISC, IST/TIKI-T, Pauli, Kraepelin, MSDT, KUDER, RMIB, NST, and WPPSI, ensuring accurate and structured candidate evaluation.',
    'Facilitated large-scale selection projects involving 200+ participants, including Bank Indonesia scholarship selection and Trans Jateng/Trans Jatim recruitment, coordinating assessment sessions, collaborating with senior psychologists, and compiling evaluation reports.',
    'Served as tester and scorer for PPLOP athlete psychometric evaluations involving 150+ participants, maintaining assessment accuracy and confidentiality throughout the process.',
    'Supported onboarding and orientation for newly recruited candidates, contributing to a smooth transition from selection to employee integration.',
    'Co-led two psychoeducation programs reaching 100 participants, supporting program delivery, participant engagement, and post-program evaluation.',
    'Supported process improvement in recruitment and assessment workflows through procedure documentation and coordination between HR and psychology teams.'
  ];
  for (const bullet of lptBullets) {
    const bLines = wrapText(bullet, fontRegular, 8.2, contentWidth - 12);
    page.drawText('•', { x: margin + 2, y, size: 8.2, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
    for (let i = 0; i < bLines.length; i++) {
      page.drawText(bLines[i], { x: margin + 12, y, size: 8.2, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
      y -= 10.5;
    }
    y -= 2;
  }
  y -= 8;

  // Job 6: Rumah Konsul Indonesia
  page.drawText('Rumah Konsul Indonesia - Yogyakarta', { x: margin, y, size: 9.5, font: fontBold });
  const rkPeriod = 'Nov 2022 - Jan 2023';
  const rkWidth = fontRegular.widthOfTextAtSize(rkPeriod, 9);
  page.drawText(rkPeriod, { x: pageWidth - margin - rkWidth, y, size: 9, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });
  y -= 11;

  page.drawText('OJT HR Recruitment', { x: margin, y, size: 9, font: fontOblique, color: rgb(0.2, 0.2, 0.2) });
  y -= 11;

  const rkDesc = 'PT Rumah Konsul Indonesia is a psychological consulting and development company that provides counseling services, psychological assessments, and self-development programs to support individual well-being and organizational growth.';
  for (const line of wrapText(rkDesc, fontRegular, 8, contentWidth)) {
    page.drawText(line, { x: margin, y, size: 8, font: fontRegular, color: rgb(0.4, 0.4, 0.4) });
    y -= 10;
  }
  y -= 3;

  const rkBullets = [
    'Assisted in end-to-end recruitment activities, including drafting and posting job descriptions, reviewing applications, conducting preliminary screenings, and coordinating interview schedules.',
    'Conducted comprehensive CV screening to evaluate candidates\' qualifications, experience, and role suitability in alignment with organizational requirements.',
    'Collaborated with the HR team to design selection tools and assessment criteria, ensuring objective and competency-based hiring decisions.',
    'Compiled detailed candidate assessment reports and maintained organized recruitment documentation for internal records and management review.'
  ];
  for (const bullet of rkBullets) {
    const bLines = wrapText(bullet, fontRegular, 8.2, contentWidth - 12);
    page.drawText('•', { x: margin + 2, y, size: 8.2, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
    for (let i = 0; i < bLines.length; i++) {
      page.drawText(bLines[i], { x: margin + 12, y, size: 8.2, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
      y -= 10.5;
    }
    y -= 2;
  }
  y -= 10;

  // Education on Page 2 bottom
  drawSectionHeader('Education');
  page.drawText('Universitas Negeri Semarang - Semarang, Central Java', { x: margin, y, size: 9.5, font: fontBold });
  const eduPeriod = 'Aug 2021 - Aug 2025';
  const eduWidth = fontRegular.widthOfTextAtSize(eduPeriod, 9);
  page.drawText(eduPeriod, { x: pageWidth - margin - eduWidth, y, size: 9, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });
  y -= 11;
  page.drawText('Bachelor of Psychology, 3.35/4.00', { x: margin, y, size: 9, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });

  // --- PAGE 3 ---
  page = pdfDoc.addPage([pageWidth, pageHeight]);
  y = pageHeight - margin;

  // Organization Experience
  drawSectionHeader('Organization Experience');

  // Org 1: PEGASUS
  page.drawText('UKM Futsal Psikologi (PEGASUS) - Semarang', { x: margin, y, size: 9.5, font: fontBold });
  const pegPeriod = 'Aug 2023 - Aug 2024';
  const pegWidth = fontRegular.widthOfTextAtSize(pegPeriod, 9);
  page.drawText(pegPeriod, { x: pageWidth - margin - pegWidth, y, size: 9, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });
  y -= 11;

  page.drawText('Vice President', { x: margin, y, size: 9, font: fontOblique, color: rgb(0.2, 0.2, 0.2) });
  y -= 11;

  const pegBullets = [
    'Collaborated with the President and executive team in strategic planning and organizational decision-making, while assuming leadership responsibilities in the President\'s absence.',
    'Coordinated futsal tournaments, friendly matches, intercollegiate competitions, and skill development workshops in collaboration with coaching staff.'
  ];
  for (const bullet of pegBullets) {
    const bLines = wrapText(bullet, fontRegular, 8.2, contentWidth - 12);
    page.drawText('•', { x: margin + 2, y, size: 8.2, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
    for (let i = 0; i < bLines.length; i++) {
      page.drawText(bLines[i], { x: margin + 12, y, size: 8.2, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
      y -= 10.5;
    }
    y -= 2;
  }
  y -= 8;

  // Org 2: FIPPHORIA
  page.drawText('FIPPHORIA - Semarang', { x: margin, y, size: 9.5, font: fontBold });
  const fipPeriod = 'Sep 2023 - Oct 2023';
  const fipWidth = fontRegular.widthOfTextAtSize(fipPeriod, 9);
  page.drawText(fipPeriod, { x: pageWidth - margin - fipWidth, y, size: 9, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });
  y -= 11;

  page.drawText('Stage Production', { x: margin, y, size: 9, font: fontOblique, color: rgb(0.2, 0.2, 0.2) });
  y -= 11;

  const fipBullets = [
    'Supported stage management and event logistics, coordinating with technical teams and performers to ensure smooth execution according to the event rundown.',
    'Monitored on-site technical operations and assisted in resolving issues related to sound, lighting, and performer readiness.'
  ];
  for (const bullet of fipBullets) {
    const bLines = wrapText(bullet, fontRegular, 8.2, contentWidth - 12);
    page.drawText('•', { x: margin + 2, y, size: 8.2, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
    for (let i = 0; i < bLines.length; i++) {
      page.drawText(bLines[i], { x: margin + 12, y, size: 8.2, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
      y -= 10.5;
    }
    y -= 2;
  }
  y -= 8;

  // Org 3: INTUISI
  page.drawText('INTUISI - Semarang', { x: margin, y, size: 9.5, font: fontBold });
  const intPeriod = 'Jul 2022 - Oct 2022';
  const intWidth = fontRegular.widthOfTextAtSize(intPeriod, 9);
  page.drawText(intPeriod, { x: pageWidth - margin - intWidth, y, size: 9, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });
  y -= 11;

  page.drawText('Field Coordinator', { x: margin, y, size: 9, font: fontOblique, color: rgb(0.2, 0.2, 0.2) });
  y -= 11;

  const intBullets = [
    'Coordinated on-site event operations and cross-functional teams to ensure activities followed the planned rundown, timeline, and procedures.',
    'Monitored real-time operations, resolved emerging issues, and coordinated with Program and Logistics teams to ensure readiness of people, materials, and facilities.'
  ];
  for (const bullet of intBullets) {
    const bLines = wrapText(bullet, fontRegular, 8.2, contentWidth - 12);
    page.drawText('•', { x: margin + 2, y, size: 8.2, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
    for (let i = 0; i < bLines.length; i++) {
      page.drawText(bLines[i], { x: margin + 12, y, size: 8.2, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
      y -= 10.5;
    }
    y -= 2;
  }
  y -= 12;

  // Key Skills
  drawSectionHeader('Key Skills');

  const skillsList = [
    {
      cat: 'Talent Management',
      items: 'Talent Management, Talent Pooling, Competency Management, Leadership Development, Training Needs Analysis (TNA), Individual Development Plans (IDP), Psychological Assessment, Performance Management'
    },
    {
      cat: 'Recruitment and Selection',
      items: 'End-to-End Recruitment, Recruitment & Selection, Candidate Screening, Behavioral Interview, Mass Hiring, Onboarding, Candidate Assessment'
    },
    {
      cat: 'HR Operations',
      items: 'HR Administration, Payroll & BPJS, HRIS, Employee Data Management, Employee Relations, Regulatory Compliance'
    },
    {
      cat: 'Data & Analytics',
      items: 'Data Analysis, HR Metrics & Analytics, Reporting, Dashboard Development, Microsoft Excel, Google Sheets, Power BI, SPSS'
    },
    {
      cat: 'Operations & Project',
      items: 'Project Coordination, Process Coordination, Stakeholder Management, Documentation, Process Improvement'
    },
    {
      cat: 'Core Competencies',
      items: 'Problem Solving, Communication, Decision Making, Adaptability, Collaboration'
    }
  ];

  for (const s of skillsList) {
    page.drawText('•', { x: margin + 2, y, size: 8.2, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
    const catPrefix = `${s.cat}: `;
    const catWidth = fontBold.widthOfTextAtSize(catPrefix, 8.2);
    page.drawText(catPrefix, { x: margin + 12, y, size: 8.2, font: fontBold, color: rgb(0.1, 0.1, 0.1) });

    const sLines = wrapText(s.items, fontRegular, 8.2, contentWidth - 12 - catWidth);
    page.drawText(sLines[0], { x: margin + 12 + catWidth, y, size: 8.2, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
    y -= 10.5;

    for (let i = 1; i < sLines.length; i++) {
      page.drawText(sLines[i], { x: margin + 12, y, size: 8.2, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
      y -= 10.5;
    }
    y -= 2;
  }

  const pdfBytes = await pdfDoc.save();
  const outDir = path.resolve('public');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  const outFile1 = path.join(outDir, 'Rio_Koresh_Yeremia_CV.pdf');
  const outFile2 = path.join(outDir, 'cv.pdf');
  fs.writeFileSync(outFile1, pdfBytes);
  fs.writeFileSync(outFile2, pdfBytes);
  console.log('Saved PDF CV to:', outFile1, 'and', outFile2);
}

createCV().catch(console.error);
