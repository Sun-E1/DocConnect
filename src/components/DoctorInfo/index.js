import { Component } from "react";

import BookingDetails from "../BookingDetails";

import { useParams } from "react-router-dom";

const doctorInformation = [
  {
    id: 1,
    name: "Dr. Aisha Khan",
    specialization: "Cardiologist",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    availability: "Available Today",
    experience: "15 years",
    rating: 4.8,
    location: "Mumbai, India",
    bio: "Dr. Aisha Khan is a highly regarded cardiologist known for her patient-centered approach and innovative treatment strategies. With over 15 years of experience in the field, she specializes in treating complex cardiovascular diseases. Her research has contributed to advancements in heart failure therapies. She is passionate about preventive cardiology and community health awareness. Outside of her practice, Dr. Khan volunteers in rural medical camps and conducts free heart check-ups.",
  },
  {
    id: 2,
    name: "Dr. Samuel Patel",
    specialization: "Dermatologist",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    availability: "Fully Booked",
    experience: "12 years",
    rating: 4.6,
    location: "Ahmedabad, India",
    bio: "Dr. Samuel Patel is a board-certified dermatologist specializing in both medical and cosmetic dermatology. With 12 years of hands-on experience, he is particularly skilled in treating chronic skin conditions such as psoriasis, eczema, and acne. Dr. Patel has authored several publications on dermatological innovations and is frequently invited to speak at skin health conferences. He believes in a holistic approach to skincare, emphasizing nutrition and mental well-being. Patients appreciate his calm demeanor and thorough consultations.",
  },
  {
    id: 3,
    name: "Dr. Emily Garcia",
    specialization: "Neurologist",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    availability: "On Leave",
    experience: "18 years",
    rating: 4.9,
    location: "Bangalore, India",
    bio: "Dr. Emily Garcia has spent nearly two decades helping patients navigate complex neurological conditions. Her primary focus is on multiple sclerosis, stroke rehabilitation, and neurodegenerative disorders. She is also known for her compassionate communication style and multidisciplinary collaboration. Dr. Garcia heads a research lab studying early diagnosis of Alzheimer’s disease using AI technologies. She mentors medical students and supports women in science and medicine through outreach and workshops.",
  },
  {
    id: 4,
    name: "Dr. Rajesh Sharma",
    specialization: "Orthopedic",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    availability: "Available Today",
    experience: "20 years",
    rating: 4.7,
    location: "New Delhi, India",
    bio: "Dr. Rajesh Sharma is a senior orthopedic surgeon with expertise in joint replacements, sports injuries, and complex fracture management. With 20 years of experience, he leads the orthopedic department of a renowned hospital in Delhi. Dr. Sharma has introduced minimally invasive surgical techniques that significantly reduce patient recovery time. He is also known for his teaching, training upcoming orthopedic surgeons through fellowship programs. His hobbies include yoga and marathon running, which he uses to encourage patients toward active recovery.",
  },
  {
    id: 5,
    name: "Dr. Julia Roberts",
    specialization: "Pediatrician",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    availability: "Fully Booked",
    experience: "10 years",
    rating: 4.5,
    location: "Chennai, India",
    bio: "Dr. Julia Roberts is a well-known pediatrician with a gentle approach that wins over both children and their parents. She has 10 years of experience treating a wide range of childhood illnesses, with special interest in developmental disorders and pediatric nutrition. Dr. Roberts has been instrumental in setting up immunization drives in urban slums and rural areas. Her interactive parenting webinars are popular among new parents across India. In her free time, she writes children’s health columns in leading newspapers.",
  },
  {
    id: 6,
    name: "Dr. Ankit Mehta",
    specialization: "General Physician",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    availability: "On Leave",
    experience: "8 years",
    rating: 4.3,
    location: "Pune, India",
    bio: "Dr. Ankit Mehta is a skilled general physician with a strong commitment to holistic patient care. With 8 years of clinical practice, he excels in diagnosing and treating a broad range of common and chronic illnesses. Dr. Mehta is also active in preventive care and lifestyle counseling. His patients value his attention to detail and friendly bedside manner. He is currently pursuing advanced training in integrative medicine and mindfulness-based therapy.",
  },
  {
    id: 7,
    name: "Dr. Priya Verma",
    specialization: "Dentist",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    availability: "Available Today",
    experience: "14 years",
    rating: 4.7,
    location: "Hyderabad, India",
    bio: "Dr. Priya Verma is a cosmetic and restorative dentist known for her smile design work and gentle patient care. With 14 years in dentistry, she has helped thousands of patients regain dental confidence. She is particularly skilled in implantology and aesthetic dental procedures. Dr. Verma regularly attends international conferences and incorporates the latest technologies into her clinic. In addition to practice, she runs school-based dental awareness programs for children.",
  },
  {
    id: 8,
    name: "Dr. Michael Zhang",
    specialization: "Ophthalmologist",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    availability: "Fully Booked",
    experience: "16 years",
    rating: 4.6,
    location: "Surat, India",
    bio: "Dr. Michael Zhang is an experienced ophthalmologist with a specialization in cataract surgery and laser vision correction. With 16 years of dedicated service, he has successfully treated over 10,000 patients. Dr. Zhang also performs retinal and glaucoma surgeries and is involved in vision care initiatives for the elderly. His clinical excellence and advanced surgical techniques make him a sought-after eye specialist. He’s also passionate about creating educational videos on eye care.",
  },
  {
    id: 9,
    name: "Dr. Sofia Ahmed",
    specialization: "Gynecologist",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    availability: "Available Today",
    experience: "13 years",
    rating: 4.8,
    location: "Lucknow, India",
    bio: "Dr. Sofia Ahmed is a compassionate gynecologist with over a decade of experience in women's health. She is especially focused on high-risk pregnancies, PCOS, and reproductive health counseling. Dr. Ahmed also runs support groups for new mothers and is active in promoting menstrual health awareness in schools. Her patient-first philosophy and gentle demeanor make her a favorite among patients. She also provides teleconsultation services to remote regions.",
  },
  {
    id: 10,
    name: "Dr. John Kim",
    specialization: "ENT Specialist",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    availability: "On Leave",
    experience: "11 years",
    rating: 4.4,
    location: "Coimbatore, India",
    bio: "Dr. John Kim is an ENT specialist who treats sinus, allergy, and hearing disorders. With 11 years of experience, he employs both surgical and non-invasive therapies, catering to a wide age range of patients. Dr. Kim is known for his precise diagnosis and patient education techniques. He’s involved in research related to tinnitus treatment and regularly contributes to medical journals. His friendly approach makes clinical visits stress-free, especially for children and elderly patients.",
  },
  {
    id: 11,
    name: "Dr. Neha Kulkarni",
    specialization: "Cardiologist",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    availability: "Available Today",
    experience: "9 years",
    rating: 4.5,
    location: "Nagpur, India",
    bio: "Dr. Neha Kulkarni is a board-certified cardiologist with a strong passion for preventive heart care. Her expertise includes non-invasive cardiology, cardiac imaging, and women’s heart health. She has helped implement heart wellness programs in schools and workplaces, focusing on early risk detection. Patients describe her as deeply empathetic and informative. In addition to her clinical role, she serves as a visiting lecturer and actively promotes CPR awareness among the youth.",
  },
  {
    id: 12,
    name: "Dr. Arjun Reddy",
    specialization: "Neurologist",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    availability: "Fully Booked",
    experience: "17 years",
    rating: 4.9,
    location: "Hyderabad, India",
    bio: "Dr. Arjun Reddy is a senior neurologist renowned for his work in neurodegenerative diseases and epilepsy management. With 17 years of experience, he combines clinical acumen with research-led practice. Dr. Reddy has published extensively on early-onset dementia and is part of a global task force on brain health. He leads a multidisciplinary team and is known for spending quality time with his patients, often tailoring personalized care plans. He also runs a local neuro-awareness campaign in Telugu.",
  },
  {
    id: 13,
    name: "Dr. Lisa George",
    specialization: "Dermatologist",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
    availability: "On Leave",
    experience: "11 years",
    rating: 4.6,
    location: "Kochi, India",
    bio: "Dr. Lisa George is an experienced dermatologist with a passion for helping patients restore confidence through healthy skin. Her specialties include acne management, anti-aging therapies, and hair loss treatment. She operates a modern aesthetic clinic and frequently introduces the latest dermatologic techniques to her region. Dr. George also educates medical interns and organizes skin health camps for college students. Her calm, reassuring presence has helped her gain trust from patients across age groups.",
  },
  {
    id: 14,
    name: "Dr. Naveen Chauhan",
    specialization: "General Physician",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    availability: "Available Today",
    experience: "8 years",
    rating: 4.4,
    location: "Bhopal, India",
    bio: "Dr. Naveen Chauhan is a general physician with a keen interest in chronic disease prevention and health literacy. With 8 years of experience, he focuses on conditions like diabetes, hypertension, and lifestyle-induced disorders. He conducts weekly health talks in community centers and provides affordable care in underserved regions. Dr. Chauhan also partners with NGOs for mobile health van services. His approachable manner and quick diagnostics are frequently praised by his patients.",
  },
  {
    id: 15,
    name: "Dr. Maya Srinivasan",
    specialization: "Pediatrician",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    availability: "Fully Booked",
    experience: "13 years",
    rating: 4.7,
    location: "Chennai, India",
    bio: "Dr. Maya Srinivasan is a pediatrician known for her warm approach and deep knowledge of child development. She handles newborn care, developmental delays, and pediatric infections with confidence and kindness. For over a decade, Dr. Maya has been involved in school health programs and childhood nutrition drives. Her clinic is also a certified breastfeeding support center. Parents often commend her for making medical visits enjoyable for kids. She regularly shares health tips through local parenting forums.",
  },
  {
    id: 16,
    name: "Dr. Anjali Menon",
    specialization: "Orthopedic",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
    availability: "Available Today",
    experience: "14 years",
    rating: 4.5,
    location: "Mumbai, India",
    bio: "Dr. Anjali Menon is a highly regarded orthopedic surgeon with over 14 years of experience in joint replacement and trauma surgery. She is known for her minimally invasive procedures and rehabilitation-focused approach. Dr. Menon has helped hundreds of elderly patients regain mobility and independence. She actively contributes to orthopedic research and teaches surgical techniques to junior doctors. Her dedication and calming demeanor make her a favorite among patients and peers.",
  },
  {
    id: 17,
    name: "Dr. Devika Shah",
    specialization: "Pediatrician",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    availability: "On Leave",
    experience: "10 years",
    rating: 4.3,
    location: "Pune, India",
    bio: "Dr. Devika Shah specializes in pediatric care, focusing on preventive healthcare and child nutrition. With a decade of experience, she has been instrumental in implementing early vaccination programs and digital health records in pediatric practices. She also conducts storytelling therapy sessions for anxious children, making medical visits easier. Dr. Shah regularly collaborates with NGOs for rural immunization drives and is a trusted voice in child healthcare forums.",
  },
  {
    id: 18,
    name: "Dr. Kunal Bhatt",
    specialization: "General Physician",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    availability: "Fully Booked",
    experience: "9 years",
    rating: 4.4,
    location: "Lucknow, India",
    bio: "Dr. Kunal Bhatt is a dedicated general physician with expertise in infectious diseases and metabolic disorders. He has earned patient trust through his clear communication and thoughtful diagnosis process. Dr. Bhatt emphasizes lifestyle management and follows a holistic treatment approach. He also partners with local schools for wellness checks and provides free consultations in rural health camps. His work during monsoon-related illness outbreaks has been widely recognized.",
  },
  {
    id: 19,
    name: "Dr. Sneha Kapoor",
    specialization: "Dermatologist",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    availability: "Available Today",
    experience: "12 years",
    rating: 4.6,
    location: "Ahmedabad, India",
    bio: "Dr. Sneha Kapoor is an expert dermatologist with over 12 years of experience treating complex skin conditions and cosmetic dermatology. She runs a skin and hair wellness center and is a pioneer in using AI-driven diagnostics for skin health. Her empathetic approach and strong patient relationships have led to excellent treatment outcomes. She actively shares skincare education through workshops and digital platforms, especially targeting teenage skincare awareness.",
  },
  {
    id: 20,
    name: "Dr. Raghav Iyengar",
    specialization: "Cardiologist",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
    availability: "Available Today",
    experience: "18 years",
    rating: 4.8,
    location: "Bangalore, India",
    bio: "Dr. Raghav Iyengar is a leading interventional cardiologist specializing in complex angioplasties and cardiac device implantation. With nearly two decades of experience, he heads the cardiac unit at a top-tier hospital and frequently contributes to national heart health campaigns. He is also a mentor for medical residents and has helped implement advanced cardiac telemetry systems. Patients commend him for his calm presence and ability to simplify tough decisions in cardiac care.",
  },
  {
    id: 21,
    name: "Dr. Zara Malik",
    specialization: "Cardiologist",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    availability: "Fully Booked",
    experience: "16 years",
    rating: 4.7,
    location: "Delhi, India",
    bio: "Dr. Zara Malik is a renowned cardiologist who has successfully treated thousands of patients suffering from heart diseases. With over 16 years of experience, she is an advocate for early detection and preventive cardiology. Dr. Malik is also active in heart health awareness programs and has authored several medical papers on arrhythmia and hypertension. Her empathetic nature and clinical brilliance make her a trusted name in cardiology.",
  },
  {
    id: 22,
    name: "Dr. Ramesh Iyer",
    specialization: "Dermatologist",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    availability: "On Leave",
    experience: "11 years",
    rating: 4.4,
    location: "Mumbai, India",
    bio: "Dr. Ramesh Iyer specializes in treating chronic skin conditions such as eczema, psoriasis, and vitiligo. Known for his detailed diagnosis and evidence-based treatments, he has a loyal patient base. Dr. Iyer also runs tele-dermatology sessions and consults for international skin clinics. His practice blends modern aesthetics with traditional remedies, and he frequently speaks at dermatology conferences across India.",
  },
  {
    id: 23,
    name: "Dr. Angela Smith",
    specialization: "Neurologist",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    availability: "Available Today",
    experience: "13 years",
    rating: 4.5,
    location: "Chennai, India",
    bio: "Dr. Angela Smith is a distinguished neurologist known for her work in epilepsy and cognitive disorders. With 13 years in neurology, she leads a neuro-rehabilitation center and has pioneered mobile EEG diagnostics. Dr. Smith is passionate about patient education, especially in rural and semi-urban areas, where she conducts regular brain health camps. Her innovative care model has gained national attention.",
  },
  {
    id: 24,
    name: "Dr. Karan Sinha",
    specialization: "Orthopedic",
    image: "https://randomuser.me/api/portraits/men/24.jpg",
    availability: "Fully Booked",
    experience: "10 years",
    rating: 4.2,
    location: "Jaipur, India",
    bio: "Dr. Karan Sinha is a sports injury and orthopedic trauma specialist with 10 years of hands-on surgical experience. His minimally invasive treatments have helped many athletes recover faster and return to play. Dr. Sinha also contributes to orthopedic journals and leads weekly physiotherapy sessions in collaboration with local clinics. He believes in active recovery and preventive bone health education.",
  },
  {
    id: 25,
    name: "Dr. Tanya Reddy",
    specialization: "Pediatrician",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
    availability: "Available Today",
    experience: "8 years",
    rating: 4.3,
    location: "Hyderabad, India",
    bio: "Dr. Tanya Reddy is a dedicated pediatrician focused on early developmental milestones and vaccination programs. With 8 years of experience, she offers personalized care to children with chronic health issues and provides emotional support to parents. Dr. Reddy runs monthly workshops on child nutrition and behavior, collaborating with schools and parent support groups in her region.",
  },
  {
    id: 26,
    name: "Dr. Mohit Arora",
    specialization: "General Physician",
    image: "https://randomuser.me/api/portraits/men/26.jpg",
    availability: "On Leave",
    experience: "12 years",
    rating: 4.4,
    location: "Nagpur, India",
    bio: "Dr. Mohit Arora has built a strong general practice focused on chronic disease management and family care. With 12 years of experience, he emphasizes long-term patient relationships and holistic treatment methods. Dr. Arora is also involved in community health audits and mobile clinics. His practical and calm approach makes him a preferred physician for families and senior citizens.",
  },
  {
    id: 27,
    name: "Dr. Sneha Nair",
    specialization: "Dentist",
    image: "https://randomuser.me/api/portraits/women/27.jpg",
    availability: "Available Today",
    experience: "7 years",
    rating: 4.6,
    location: "Cochin, India",
    bio: "Dr. Sneha Nair specializes in cosmetic and pediatric dentistry. Her gentle demeanor and pain-free treatments make her highly sought after by children and anxious adults alike. Dr. Nair has introduced smile correction programs in schools and is known for her artistic dental restoration skills. She actively promotes dental hygiene awareness campaigns in urban and rural schools.",
  },
  {
    id: 28,
    name: "Dr. Kevin Das",
    specialization: "Ophthalmologist",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    availability: "Fully Booked",
    experience: "9 years",
    rating: 4.5,
    location: "Mangalore, India",
    bio: "Dr. Kevin Das is a renowned eye surgeon, known for performing complex cataract and retinal surgeries. With 9 years of experience, he has adopted cutting-edge laser vision correction procedures and heads a charitable eye camp initiative. His thorough diagnosis and post-op care are widely appreciated by patients across Karnataka.",
  },
  {
    id: 29,
    name: "Dr. Sana Qureshi",
    specialization: "Gynecologist",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    availability: "Available Today",
    experience: "14 years",
    rating: 4.7,
    location: "Noida, India",
    bio: "Dr. Sana Qureshi is a leading gynecologist known for her work in high-risk pregnancies and reproductive health. With 14 years in the field, she has led numerous maternal health programs and offers online consultations for infertility cases. Dr. Qureshi is an advocate for women's health rights and actively promotes menstrual health awareness campaigns in schools and colleges.",
  },
  {
    id: 30,
    name: "Dr. Ryan Paul",
    specialization: "ENT Specialist",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
    availability: "On Leave",
    experience: "10 years",
    rating: 4.2,
    location: "Guwahati, India",
    bio: "Dr. Ryan Paul is an ENT specialist with expertise in sinus surgery and hearing disorders. With 10 years of experience, he integrates audiology and surgical techniques to provide comprehensive care. Dr. Paul also mentors audiology interns and runs awareness programs about hearing loss in noisy urban environments. His efficient handling of allergy-related ENT issues is widely praised.",
  },
  {
    id: 31,
    name: "Dr. Leena Kapoor",
    specialization: "Cardiologist",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
    availability: "Available Today",
    experience: "17 years",
    rating: 4.8,
    location: "New Delhi, India",
    bio: "Dr. Leena Kapoor is a senior cardiologist with over 17 years of experience in interventional cardiology. She specializes in angioplasty and valve disorders, leading several successful operations each year. Dr. Kapoor also heads a heart wellness program promoting lifestyle modifications for long-term cardiac health. Her patients admire her confidence, clarity in communication, and proactive follow-up care.",
  },
  {
    id: 32,
    name: "Dr. Om Prakash",
    specialization: "Neurologist",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    availability: "Fully Booked",
    experience: "14 years",
    rating: 4.6,
    location: "Patna, India",
    bio: "Dr. Om Prakash is a widely respected neurologist who has made significant contributions to neurodegenerative disorder management. With 14 years of clinical expertise, he leads a specialized stroke care unit and teaches neurology at a regional institute. His compassionate care and focus on early intervention are instrumental in his high recovery rates and patient satisfaction.",
  },
  {
    id: 33,
    name: "Dr. Ashley Brown",
    specialization: "Dermatologist",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    availability: "On Leave",
    experience: "9 years",
    rating: 4.4,
    location: "Pune, India",
    bio: "Dr. Ashley Brown is a skilled dermatologist who treats a wide range of skin and hair conditions. With 9 years of experience, she is especially known for acne and pigmentation treatments. Dr. Brown promotes skincare education via her online blog and social media presence. She also offers cosmetic dermatology services including laser therapy and non-invasive rejuvenation procedures.",
  },
  {
    id: 34,
    name: "Dr. Rohit Singh",
    specialization: "General Physician",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    availability: "Available Today",
    experience: "11 years",
    rating: 4.5,
    location: "Lucknow, India",
    bio: "Dr. Rohit Singh is a dependable general physician known for his holistic approach to primary healthcare. With over 11 years in practice, he offers a blend of allopathic and lifestyle-based recommendations. Dr. Singh actively participates in local health drives and vaccination programs. He maintains a loyal patient base due to his dedication, follow-ups, and precise diagnosis.",
  },
  {
    id: 35,
    name: "Dr. Monica Das",
    specialization: "Pediatrician",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
    availability: "Fully Booked",
    experience: "10 years",
    rating: 4.6,
    location: "Bhubaneswar, India",
    bio: "Dr. Monica Das is a pediatrician dedicated to the growth and wellness of infants and young children. She has 10 years of experience and is known for her warm demeanor and methodical care. Dr. Das regularly conducts parenting workshops and growth monitoring camps. Her contributions to neonatal care protocols in local hospitals have received wide appreciation.",
  },
  {
    id: 36,
    name: "Dr. Amit Joshi",
    specialization: "Orthopedic",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    availability: "On Leave",
    experience: "13 years",
    rating: 4.4,
    location: "Indore, India",
    bio: "Dr. Amit Joshi is a trusted orthopedic surgeon specializing in joint replacements and fracture management. With over 13 years of experience, he has introduced robotic-assisted knee surgery techniques at his hospital. Dr. Joshi also mentors young orthopedic residents and collaborates with sports teams for injury prevention strategies. Patients value his precision and excellent post-surgical outcomes.",
  },
  {
    id: 37,
    name: "Dr. Anjali Desai",
    specialization: "Dentist",
    image: "https://randomuser.me/api/portraits/women/37.jpg",
    availability: "Available Today",
    experience: "8 years",
    rating: 4.5,
    location: "Ahmedabad, India",
    bio: "Dr. Anjali Desai is a leading cosmetic and restorative dentist who has transformed countless smiles over her 8-year career. She operates a modern dental clinic equipped with advanced diagnostics and digital dentistry. Dr. Desai is active in community dental health camps and educates patients on preventive care. Her gentle techniques and aesthetic focus set her apart in her field.",
  },
  {
    id: 38,
    name: "Dr. Rehan Khan",
    specialization: "Ophthalmologist",
    image: "https://randomuser.me/api/portraits/men/38.jpg",
    availability: "Fully Booked",
    experience: "12 years",
    rating: 4.6,
    location: "Kanpur, India",
    bio: "Dr. Rehan Khan is an accomplished ophthalmologist with over 12 years of experience in treating vision impairments. He has pioneered laser-assisted cataract surgeries in his region. Dr. Khan also leads awareness drives on diabetic eye diseases and visual hygiene. His calm demeanor and thorough examinations make him a favorite among elderly patients and children alike.",
  },
  {
    id: 39,
    name: "Dr. Kavya Jain",
    specialization: "Gynecologist",
    image: "https://randomuser.me/api/portraits/women/39.jpg",
    availability: "Available Today",
    experience: "9 years",
    rating: 4.5,
    location: "Udaipur, India",
    bio: "Dr. Kavya Jain is a compassionate gynecologist dedicated to women’s reproductive and hormonal health. She has been practicing for 9 years and has led successful maternity programs at her clinic. Dr. Jain focuses on adolescent and menopause care and advocates for destigmatizing women’s health issues. Her proactive and empowering approach makes her highly respected among her patients.",
  },
  {
    id: 40,
    name: "Dr. Dinesh Nair",
    specialization: "ENT Specialist",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    availability: "On Leave",
    experience: "15 years",
    rating: 4.3,
    location: "Trivandrum, India",
    bio: "Dr. Dinesh Nair is a senior ENT specialist renowned for his treatments in sinus, throat, and ear conditions. With 15 years in the field, he provides surgical and non-invasive solutions tailored to patients’ needs. Dr. Nair has published numerous case studies and trains residents in modern ENT surgical methods. His calming personality and precise technique earn him high trust among patients.",
  },
  {
    id: 41,
    name: "Dr. Isha Mehra",
    specialization: "Cardiologist",
    image: "https://randomuser.me/api/portraits/women/41.jpg",
    availability: "Available Today",
    experience: "16 years",
    rating: 4.7,
    location: "Chandigarh, India",
    bio: "Dr. Isha Mehra is a distinguished cardiologist with over 16 years of experience treating complex heart conditions. Known for her expertise in interventional cardiology, she leads a busy practice focused on preventive and rehabilitative heart care. Dr. Mehra regularly speaks at national cardiology conferences and works on community initiatives to raise awareness about hypertension and cholesterol control.",
  },
  {
    id: 42,
    name: "Dr. Sunil Rathi",
    specialization: "Neurologist",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    availability: "Fully Booked",
    experience: "14 years",
    rating: 4.6,
    location: "Jaipur, India",
    bio: "Dr. Sunil Rathi is an expert neurologist focusing on neurodegenerative disorders and stroke management. With 14 years of experience, he has helped pioneer early intervention protocols for epilepsy and Parkinson’s disease in his region. He’s also active in academic circles, conducting neurological awareness programs for students and rural populations.",
  },
  {
    id: 43,
    name: "Dr. Ritu Sinha",
    specialization: "Dermatologist",
    image: "https://randomuser.me/api/portraits/women/43.jpg",
    availability: "On Leave",
    experience: "10 years",
    rating: 4.4,
    location: "Ranchi, India",
    bio: "Dr. Ritu Sinha is a passionate dermatologist specializing in clinical dermatology and aesthetic procedures. Her 10 years of experience include managing chronic skin diseases and offering cosmetic solutions such as chemical peels and fillers. She is a regular contributor to skincare journals and has led awareness drives about skin health in educational institutions.",
  },
  {
    id: 44,
    name: "Dr. Prakash Kulkarni",
    specialization: "General Physician",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    availability: "Available Today",
    experience: "18 years",
    rating: 4.5,
    location: "Nagpur, India",
    bio: "Dr. Prakash Kulkarni is a senior general physician known for his diagnostic precision and compassionate care. With 18 years of clinical practice, he offers comprehensive care for chronic illnesses like diabetes and hypertension. Dr. Kulkarni frequently organizes health screening camps and is involved in training young physicians on community health delivery models.",
  },
  {
    id: 45,
    name: "Dr. Simran Kaul",
    specialization: "Pediatrician",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    availability: "Fully Booked",
    experience: "12 years",
    rating: 4.7,
    location: "Delhi NCR, India",
    bio: "Dr. Simran Kaul is a dedicated pediatrician focused on neonatal and adolescent health. With 12 years of experience, she is known for her warmth, clinical expertise, and attention to developmental milestones. Dr. Kaul regularly contributes to parenting magazines and participates in childhood nutrition advocacy. She maintains a patient-first approach in her clinic.",
  },
  {
    id: 46,
    name: "Dr. Nilesh Tiwari",
    specialization: "Orthopedic",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    availability: "Available Today",
    experience: "15 years",
    rating: 4.5,
    location: "Varanasi, India",
    bio: "Dr. Nilesh Tiwari is an orthopedic specialist with deep expertise in joint and spine disorders. With 15 years of clinical and surgical experience, he’s at the forefront of minimally invasive orthopedic techniques. Dr. Tiwari’s clinic also offers physiotherapy integration for faster recovery and patient empowerment. He is a speaker at orthopedic workshops and medical colleges.",
  },
  {
    id: 47,
    name: "Dr. Fatima Shaikh",
    specialization: "Dentist",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
    availability: "On Leave",
    experience: "11 years",
    rating: 4.6,
    location: "Hyderabad, India",
    bio: "Dr. Fatima Shaikh is a cosmetic and restorative dentist known for her minimally painful treatments and patient-centered approach. Over 11 years, she has built a large loyal clientele seeking her expertise in smile makeovers, root canals, and prosthodontics. She’s active in oral hygiene campaigns in schools and has won awards for excellence in dental community service.",
  },
  {
    id: 48,
    name: "Dr. Arvind Pillai",
    specialization: "Ophthalmologist",
    image: "https://randomuser.me/api/portraits/men/48.jpg",
    availability: "Available Today",
    experience: "13 years",
    rating: 4.7,
    location: "Kochi, India",
    bio: "Dr. Arvind Pillai is a highly respected ophthalmologist with 13 years of experience in cataract and LASIK surgeries. He runs a modern eye care center and is active in research on age-related macular degeneration. Dr. Pillai’s calm, reassuring style and accurate diagnostics have helped thousands regain clear vision. He’s also a mentor to many junior ophthalmologists.",
  },
  {
    id: 49,
    name: "Dr. Shruti Bhatt",
    specialization: "Gynecologist",
    image: "https://randomuser.me/api/portraits/women/49.jpg",
    availability: "Fully Booked",
    experience: "10 years",
    rating: 4.5,
    location: "Mumbai, India",
    bio: "Dr. Shruti Bhatt is a gynecologist with a special interest in fertility treatments and prenatal care. Over the past decade, she has helped hundreds of women through safe pregnancies and deliveries. Her clinic is equipped with the latest diagnostic tools, and she is known for her supportive guidance during high-risk pregnancies. Dr. Bhatt also promotes menstrual health education.",
  },
  {
    id: 50,
    name: "Dr. Suresh Menon",
    specialization: "ENT Specialist",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    availability: "Available Today",
    experience: "20 years",
    rating: 4.8,
    location: "Chennai, India",
    bio: "Dr. Suresh Menon is a senior ENT surgeon with 20 years of experience in sinus, laryngeal, and ear microsurgeries. He leads an advanced ENT and Audiology center and often handles referrals for complex cases. Dr. Menon is also involved in teaching surgical techniques to postgraduate students and contributes to ENT journals. Patients trust him for both his skill and ethics.",
  },
];

function withRouter(Component) {
  return function Wrapper(props) {
    const params = useParams();
    return <Component {...props} params={params} />;
  };
}

class DoctorInfo extends Component {
  state = { showBooking: false };
  bookAppointment = () => {
    this.setState({ showBooking: true });
  };

  render() {
    const { id } = this.props.params;
    const doctor = doctorInformation.find((doc) => doc.id == id);
    if (this.state.showBooking) {
      return (
        <div className="min-h-screen w-screen bg-white">
          <BookingDetails />
        </div>
      );
    }

    return (
      <ul className="h-screen flex flex-col justify-center items-center p-[25px] sm:p-[0px]">
        <div className="font-oblique san-font flex flex-row justify-center font-bold">
          <h1 className="text-[#1F2937] sm:text-[25px] md: text-[30px]">
            <span className="text-[#3AB4F2]">Doc</span>Connect
          </h1>
        </div>
        <li
          className="sm: h-[100%] rounded-[0px]
          md: rounded-[25px]
          h-[750px] w-full flex flex-col justify-around p-[25px]  rounded-[15px] bg-[linear-gradient(259deg,_rgba(238,174,233,1)_0%,_rgba(148,187,233,1)_100%)]
       
       "
        >
          <div
            className="sm:h-[120px] mb-[0px] md:
           h-[200px] flex justify-center"
          >
            <img
              src={doctor.image}
              className="h-full rounded-[25%] rounded-tr-none rounded-bl-none"
              alt={doctor.name}
            />
          </div>

          <div className="bg-[#ffffff] p-[25px] rounded-[15px] sm:mt-[15px]">
            <h1 className="sm:text-[20px] md:text-[25px] text-[38px] text-[#3AB4F2] san-font font-oblique">
              {doctor.name}
            </h1>
            <p className="sm:text-[15px] md:text-[18px] text-[23px] san-font">
              <span className="text-[#1F2937] font-bold">Specialization: </span>
              {doctor.specialization}
            </p>
            <p className=" sm:text-[15px]  md:text-[18px] text-[23px] san-font">
              <span className="text-[#1F2937] font-bold">Availability: </span>
              {doctor.availability}
            </p>

            <p className=" sm:text-[15px]  md:text-[18px] text-[23px] san-font">
              <span className="text-[#1F2937] font-bold">Experience: </span>
              {doctor.experience} years
            </p>
            <p className=" sm:text-[15px]  md:text-[18px] text-[23px] san-font">
              <span className="text-[#1F2937] font-bold">Rating: </span>
              {doctor.rating}/5
            </p>
            <p className=" sm:text-[15px]  md:text-[18px] text-[23px] san-font">
              <span className="text-[#1F2937] font-bold">Location: </span>
              {doctor.location}
            </p>
            <p className=" sm:text-[14px]  md:text-[15px] text-[20px] san-font">
              <span className="text-[#1F2937] font-bold">Bio: </span>
              {doctor.bio}
            </p>
          </div>
          <div className="flex justify-end">
            <button
              className="sm:p-[5px] text-[13px] lg:text-[20px]
              san-font font-oblique bg-[#ffffff] p-[15px] text-[23px] text-[#1F2937] rounded-[5px] font-bold hover:bg-[#4D9EFA] hover:text-[#ffffff]"
              onClick={this.bookAppointment}
            >
              Book An appointment
            </button>
          </div>
        </li>
      </ul>
    );
  }
}

export default withRouter(DoctorInfo);
