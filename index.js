const nodemailer = require("nodemailer");

const emailData = [
  {
    company: 'Eben Telecom',
    emails: ['hrmailer@ebentelecom.com'],
  },
  {
    company: 'Mozilor',
    emails: ['aadilhabeeb@mozilor.com', 'careers@mozilor.com'],
  },
  {
    company: 'Computacenter',
    emails: ['guru.prasad@computacenter.com'],
  },
  {
    company: 'Cardinal Health',
    emails: ['maithili.kavala@cardinalhealth.com'],
  },
  {
    company: 'Unisys',
    emails: ['meena.mv@unisyshr.com'],
  },
  {
    company: 'Alp Consulting',
    emails: ['sathish.k@alpconsulting.in'],
  },
  {
    company: 'Prodian',
    emails: ['hr@prodian.co.in'],
  },
  {
    company: 'Hyperblox',
    emails: ['admin@hyperblox.io'],
  },
  {
    company: 'Amiti Software Technologies',
    emails: ['jagadeesh.kasula@amititech.com'],
  },
  {
    company: 'KODEVA',
    emails: ['kevin.nelaturi@kodeva.com'],
  },
  {
    company: 'Chiselone Technologies',
    emails: ['drishyar@chiselontechnologies.com'],
  },
  {
    company: 'Indusitc',
    emails: ['suryasingh@indusitc.com', 'indushr@indusitc.com'],
  },
  {
    company: 'Epam',
    emails: ['cristina_padilla@epam.com'],
  },
  {
    company: 'VFISLK',
    emails: ['saniyasemon@vfislk.com', 'mahalakshmi.r@vfislk.com'],
  },
  {
    company: 'Chengus InfoTech',
    emails: ['hr@chegusinfotech.com'],
  },
  {
    company: 'Kasetti Technologies Pvt Ltd',
    emails: ['anil@techkasetti.com', 'gajjala.visvanath.reddy@techkasetti.com'],
  },
  {
    company: 'Tensaw Technologies',
    emails: ['hr@tensaw.email'],
  },
  {
    company: 'GreenBay',
    emails: ['krishnendu@greenbayit.com'],
  },
  {
    company: 'Intelliswift',
    emails: ['tejpal.kaur@intelliswift.com'],
  },
  {
    company: 'Deloitte',
    emails: ['inghosh@deloitte.com'],
  },
  {
    company: 'LogiCoy',
    emails: ['hr@logicoy.com', 'vijayarani.t@logicoy.com'],
  },
  {
    company: 'Adsomia',
    emails: ['careers@adsomia.com'],
  },
  {
    company: 'Techversant Infotech',
    emails: ['careers@techversantinfotech.com'],
  },
  {
    company: 'Altera Digital Health',
    emails: ['HR.Recruiting@AlteraHealth.com'],
  },
];



// Create a transporter object using your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
  service: "Gmail", // Example: 'Gmail'
  auth: {
    user: "midlajnew@gmail.com",
    pass: "",
  },
});

// Function to send emails
async function sendEmail(company, emails) {
  for (const email of emails) {
    try {
      // Check if the email is not "nill"
      if (email !== "nill") {
        // Define email content
        const mailOptions = {
          from: "midlajnew@gmail.com",
          to: email,
          subject: "Application for Java Developer Position - Muhammed Midlaj",
          text: `Dear Hiring Manager,

I am writing to express my interest in the Java Developer vacancy that you have advertised${company !== "nill" ? " at " + company : ""}. I was excited to come across the job posting and am eager to contribute my skills and passion for software development to your team.
          
Over the past several months, I have undergone rigorous training in web development, gaining valuable hands-on experience through two live projects. This program not only honed my technical skills but also instilled in me the importance of teamwork, adaptability, and problem-solving in a dynamic environment.
          
What sets me apart is my dedication to continuous improvement and my commitment to excellence. Despite the challenging nature of the training program, I completed it successfully, demonstrating my resilience and determination.
          
I am also enthusiastic about showcasing my abilities through a specialized machine test tailored for professionals with 2 years of experience. This would provide me with an opportunity to demonstrate my practical understanding and commitment to the field.
          
I have enclosed my resume for your consideration.
          
Thank you for taking the time to read this email, I look forward to hearing from you soon.
          
Regards,
Muhammed Midlaj`,

          attachments: [
            {
              filename: "Muhammed Midlaj.pdf", // Change the filename as needed
              path: "./Muhammed Midlaj.pdf", // Specify the path to your PDF file
            },
            {
              filename: "Muhammed Midlaj_Coverletter.pdf", // Change the filename as needed
              path: "./Coverletter.pdf", // Specify the path to your PDF file
            },
          ],
        };

        // Send the email
        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${company}: ${email}`);
      } else {
        console.log(
          `Skipped sending email to ${company} because the email address is "nill".`
        );
      }
    } catch (error) {
      console.error(`Error sending email to ${company}: ${email}`);
      console.error(error);
    }
  }
}

// Loop through the email data and send emails
async function sendEmails() {
  for (const { company, emails } of emailData) {
    await sendEmail(company, emails);
  }
}

// Start sending emails
sendEmails();
