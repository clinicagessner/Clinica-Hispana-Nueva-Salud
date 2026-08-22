import type { ServiceFaq } from "@/types";

/**
 * FAQs por servicio (clave = slug). Bilingüe. Se usan en la página de
 * detalle del servicio y para el JSON-LD FAQPage.
 */
export const SERVICE_FAQS: Record<string, ServiceFaq[]> = {
  "condiciones-cronicas": [
    {
      question: "¿Cada cuánto debo hacerme exámenes de control?",
      answer: "Depende de tu condición; por lo general cada 3 a 6 meses para diabetes, presión o colesterol. Te damos un plan de seguimiento personalizado.",
      questionEn: "How often should I get control labs?",
      answerEn: "It depends on your condition; usually every 3 to 6 months for diabetes, blood pressure or cholesterol. We give you a personalized follow-up plan.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "tiroides": [
    {
      question: "¿Qué prueba se usa para revisar la tiroides?",
      answer: "Usamos principalmente la TSH y, si es necesario, T3 y T4 para evaluar cómo funciona tu tiroides.",
      questionEn: "What test is used to check the thyroid?",
      answerEn: "We mainly use TSH and, if needed, T3 and T4 to evaluate how your thyroid is working.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "alergias": [
    {
      question: "¿Tratan alergias en la piel y respiratorias?",
      answer: "Sí, evaluamos y tratamos alergias respiratorias (rinitis, congestión) y de la piel (ronchas, comezón).",
      questionEn: "Do you treat both skin and respiratory allergies?",
      answerEn: "Yes, we evaluate and treat respiratory allergies (rhinitis, congestion) and skin allergies (hives, itching).",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "enfermedades-respiratorias": [
    {
      question: "¿Hacen prueba de flu y de COVID el mismo día?",
      answer: "Sí, hacemos pruebas rápidas de influenza y COVID y te damos el resultado y el tratamiento el mismo día.",
      questionEn: "Do you test for flu and COVID the same day?",
      answerEn: "Yes, we run rapid flu and COVID tests and give you the result and treatment the same day.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "examen-fisico-escolar": [
    {
      question: "¿Llenan el formulario de la escuela o el equipo?",
      answer: "Sí, trae el formulario de tu escuela o equipo deportivo y lo completamos durante la visita.",
      questionEn: "Do you fill out the school or team form?",
      answerEn: "Yes, bring your school or sports-team form and we complete it during the visit.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "ginecologia": [
    {
      question: "¿Necesito cita para el papanicolaou?",
      answer: "No es obligatorio, atendemos sin cita; pero puedes llamarnos para reservar un horario cómodo.",
      questionEn: "Do I need an appointment for a Pap smear?",
      answerEn: "It's not required, we welcome walk-ins; but you can call us to reserve a convenient time.",
    },
    {
      question: "¿Cada cuánto debo hacerme el Papanicolaou?",
      answer: "En general, desde los 21 años y cada 3 años si el resultado es normal. Si nunca te lo has hecho o tuviste un resultado anormal, conviene hacerlo cuanto antes.",
      questionEn: "How often should I get a Pap smear?",
      answerEn: "Generally from age 21 and every 3 years if the result is normal. If you've never had one or had an abnormal result, it's best to get it done soon.",
    },
    {
      question: "¿Cómo me preparo para el Papanicolaou?",
      answer: "Procura no estar en tu periodo y evita relaciones, duchas vaginales, óvulos o cremas 48 horas antes. Así el resultado es más confiable.",
      questionEn: "How do I prepare for a Pap smear?",
      answerEn: "Try not to be on your period and avoid intercourse, douching, suppositories or creams for 48 hours before. That makes the result more reliable.",
    },
    {
      question: "¿Cuánto tardan los resultados?",
      answer: "El Papanicolaou y los cultivos se procesan en laboratorio; te avisamos en cuanto estén listos y te explicamos el resultado. Si hay una infección evidente, el tratamiento se inicia el mismo día.",
      questionEn: "How long do results take?",
      answerEn: "Pap smears and cultures are processed at the lab; we notify you as soon as they're ready and explain the result. If there's an obvious infection, treatment starts the same day.",
    },
    {
      question: "¿Me atiende una mujer?",
      answer: "Entendemos que es importante para ti. Llámanos antes de tu visita y te decimos quién está atendiendo ese día para que te sientas cómoda.",
      questionEn: "Will I be seen by a woman?",
      answerEn: "We understand that matters to you. Call us before your visit and we'll let you know who is seeing patients that day so you feel comfortable.",
    },
    {
      question: "¿Tratan infecciones vaginales el mismo día?",
      answer: "Sí. Si los síntomas son claros, sales con tu tratamiento ese mismo día; si es necesario, tomamos un cultivo para confirmar la causa y ajustar el medicamento.",
      questionEn: "Do you treat vaginal infections the same day?",
      answerEn: "Yes. If symptoms are clear, you leave with treatment that same day; if needed, we take a culture to confirm the cause and adjust the medication.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "prueba-embarazo": [
    {
      question: "¿Qué tan confiable es la prueba de embarazo?",
      answer: "Nuestras pruebas son confiables y las confirma personal médico; también podemos orientarte sobre los siguientes pasos.",
      questionEn: "How reliable is the pregnancy test?",
      answerEn: "Our tests are reliable and confirmed by medical staff; we can also guide you on next steps.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "anticonceptivos": [
    {
      question: "¿Qué métodos anticonceptivos ofrecen?",
      answer: "Ofrecemos orientación, pastillas anticonceptivas e inyección, y te ayudamos a elegir el método adecuado para ti.",
      questionEn: "What contraceptive methods do you offer?",
      answerEn: "We offer guidance, birth control pills and the injection, and help you choose the right method for you.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "extraccion-implantes": [
    {
      question: "¿Duele la extracción del implante?",
      answer: "Se realiza con anestesia local, por lo que las molestias son mínimas. El procedimiento toma pocos minutos.",
      questionEn: "Does implant removal hurt?",
      answerEn: "It's done with local anesthesia, so discomfort is minimal. The procedure takes just a few minutes.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "salud-hombre": [
    {
      question: "¿Qué incluye el examen del hombre?",
      answer: "Antígeno prostático (PSA), nivel de testosterona, chequeo general de signos vitales y evaluación de síntomas urinarios o de energía.",
      questionEn: "What does the men's exam include?",
      answerEn: "Prostate-specific antigen (PSA), testosterone level, a general vital-signs check and evaluation of urinary or energy symptoms.",
    },
    {
      question: "¿A qué edad debo hacerme el PSA?",
      answer: "En general desde los 50 años, o desde los 40-45 si tu padre o hermano tuvieron cáncer de próstata. Se repite cada 1 a 2 años según el resultado.",
      questionEn: "At what age should I get a PSA test?",
      answerEn: "Generally from age 50, or from 40-45 if your father or brother had prostate cancer. It's repeated every 1 to 2 years depending on the result.",
    },
    {
      question: "¿El examen de próstata es con tacto?",
      answer: "El PSA es un examen de sangre; no requiere tacto rectal. El personal médico te indicará si tu caso necesita alguna evaluación adicional.",
      questionEn: "Is the prostate exam a rectal exam?",
      answerEn: "PSA is a blood test; it doesn't require a rectal exam. The medical staff will tell you if your case needs any additional evaluation.",
    },
    {
      question: "¿Necesito preparación para el PSA o la testosterona?",
      answer: "Para el PSA evita relaciones, bicicleta y ejercicio intenso 48 horas antes. La testosterona se mide por la mañana, idealmente antes de las 10 AM.",
      questionEn: "Do I need to prepare for PSA or testosterone tests?",
      answerEn: "For PSA, avoid sex, cycling and intense exercise for 48 hours before. Testosterone is measured in the morning, ideally before 10 AM.",
    },
    {
      question: "¿Cuáles son los síntomas de testosterona baja?",
      answer: "Cansancio constante, poco deseo sexual, dificultad para mantener una erección, ánimo bajo, pérdida de músculo o aumento de grasa abdominal.",
      questionEn: "What are the symptoms of low testosterone?",
      answerEn: "Constant tiredness, low sex drive, difficulty keeping an erection, low mood, muscle loss or increased belly fat.",
    },
    {
      question: "¿Cuánto tardan los resultados?",
      answer: "Las muestras se procesan en laboratorio; te avisamos cuando estén listas y te explicamos los resultados en español.",
      questionEn: "How long do results take?",
      answerEn: "Samples are processed at the lab; we let you know when they're ready and explain the results in Spanish.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "examenes-sangre": [
    {
      question: "¿En cuánto tiempo entregan los resultados?",
      answer: "En la mayoría de los casos los resultados están listos el mismo día o muy pronto, y te los explicamos en español.",
      questionEn: "How soon are results ready?",
      answerEn: "In most cases results are ready the same day or very soon, and we explain them to you in Spanish.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "infecciones-urinarias": [
    {
      question: "¿Puedo recibir tratamiento el mismo día?",
      answer: "Sí, hacemos el examen de orina en la clínica y, si hay infección, iniciamos el tratamiento el mismo día. También tenemos farmacia dentro de la clínica.",
      questionEn: "Can I get treatment the same day?",
      answerEn: "Yes, we run the urine test in-clinic and, if there's an infection, we start treatment the same day. We also have a pharmacy inside the clinic.",
    },
    {
      question: "¿Cómo sé si tengo infección urinaria?",
      answer: "Los síntomas típicos son ardor al orinar, ganas constantes de ir al baño, orina turbia o con mal olor y dolor en la parte baja del abdomen. Un examen de orina lo confirma en minutos.",
      questionEn: "How do I know if I have a UTI?",
      answerEn: "Typical symptoms are burning when urinating, a constant urge to go, cloudy or foul-smelling urine and lower-abdominal pain. A urine test confirms it in minutes.",
    },
    {
      question: "¿Necesito ayunar o prepararme para el examen de orina?",
      answer: "No necesitas ayuno. Lo ideal es no haber orinado en la última hora para que la muestra sea adecuada. Te damos las instrucciones en la clínica.",
      questionEn: "Do I need to fast or prepare for the urine test?",
      answerEn: "No fasting needed. Ideally, don't urinate during the hour before so the sample is adequate. We give you instructions at the clinic.",
    },
    {
      question: "¿Qué pasa si no trato la infección?",
      answer: "Puede subir a los riñones y causar fiebre, escalofríos y dolor de espalda. Si ya tienes esos síntomas, acude el mismo día.",
      questionEn: "What happens if I don't treat the infection?",
      answerEn: "It can reach the kidneys and cause fever, chills and back pain. If you already have those symptoms, come in the same day.",
    },
    {
      question: "Me da infección urinaria muy seguido, ¿qué hago?",
      answer: "Las infecciones repetidas tienen causa y solución. Hacemos un urocultivo para identificar la bacteria y revisamos factores como diabetes, hidratación o infecciones vaginales.",
      questionEn: "I get UTIs very often, what should I do?",
      answerEn: "Recurring infections have a cause and a solution. We run a urine culture to identify the bacteria and review factors like diabetes, hydration or vaginal infections.",
    },
    {
      question: "¿Atienden infecciones urinarias en hombres y niños?",
      answer: "Sí, atendemos a toda la familia. En hombres y niños es especialmente importante evaluar la causa, así que no lo dejes pasar.",
      questionEn: "Do you treat UTIs in men and children?",
      answerEn: "Yes, we care for the whole family. In men and children it's especially important to evaluate the cause, so don't put it off.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "examen-heces": [
    {
      question: "¿Cómo se toma la muestra de heces?",
      answer: "Te entregamos un recipiente e instrucciones claras para recolectar la muestra en casa y traerla a la clínica.",
      questionEn: "How is the stool sample collected?",
      answerEn: "We give you a container and clear instructions to collect the sample at home and bring it to the clinic.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "prueba-strep": [
    {
      question: "¿Cuánto tarda el resultado del strep test?",
      answer: "La prueba rápida de estreptococo da resultado en pocos minutos durante tu visita.",
      questionEn: "How long does the strep test take?",
      answerEn: "The rapid strep test gives a result in just a few minutes during your visit.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "prueba-tuberculosis": [
    {
      question: "¿Tengo que regresar para leer la prueba de TB?",
      answer: "Sí, la prueba cutánea (PPD) se lee entre 48 y 72 horas después de aplicarla; te damos la cita de lectura.",
      questionEn: "Do I have to come back to read the TB test?",
      answerEn: "Yes, the skin test (PPD) is read 48 to 72 hours after it's placed; we schedule your reading appointment.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "enfermedades-transmision-sexual": [
    {
      question: "¿Las pruebas son confidenciales?",
      answer: "Totalmente. Tus resultados son solo tuyos y el personal te atiende con respeto y sin juicios.",
      questionEn: "Is testing confidential?",
      answerEn: "Completely. Your results are yours alone and the staff treats you with respect and without judgment.",
    },
    {
      question: "¿Qué infecciones detectan?",
      answer: "Las más comunes: clamidia, gonorrea, sífilis, VIH, herpes, tricomonas y hepatitis, según tu caso y tus síntomas.",
      questionEn: "Which infections do you test for?",
      answerEn: "The most common ones: chlamydia, gonorrhea, syphilis, HIV, herpes, trichomonas and hepatitis, depending on your case and symptoms.",
    },
    {
      question: "¿Cuánto tiempo después del contacto puedo hacerme la prueba?",
      answer: "Depende de la infección: clamidia y gonorrea desde 1-2 semanas; VIH y sífilis pueden necesitar algunas semanas más. Te indicamos cuándo hacer o repetir la prueba.",
      questionEn: "How soon after exposure can I get tested?",
      answerEn: "It depends on the infection: chlamydia and gonorrhea from 1-2 weeks; HIV and syphilis may need a few more weeks. We'll tell you when to test or retest.",
    },
    {
      question: "¿Debo hacerme la prueba si no tengo síntomas?",
      answer: "Sí. Muchas ETS no dan síntomas y aun así pueden causar daño o contagiarse. Si tuviste contacto de riesgo o una pareja nueva, conviene revisarte.",
      questionEn: "Should I get tested if I have no symptoms?",
      answerEn: "Yes. Many STDs cause no symptoms yet can still cause harm or spread. If you had a risky exposure or a new partner, it's worth getting checked.",
    },
    {
      question: "¿Dan tratamiento el mismo día?",
      answer: "Si hay síntomas claros, puedes iniciar tratamiento el mismo día. En otros casos, esperamos el resultado de laboratorio para dar el medicamento correcto.",
      questionEn: "Do you provide same-day treatment?",
      answerEn: "If symptoms are clear, you can start treatment the same day. In other cases, we wait for the lab result to give the right medication.",
    },
    {
      question: "¿Mi pareja también debe tratarse?",
      answer: "Sí, en la mayoría de los casos. Si no, es muy probable que se vuelvan a contagiar. Te orientamos sobre cómo hablarlo y cómo tratarse los dos.",
      questionEn: "Should my partner also get treated?",
      answerEn: "Yes, in most cases. Otherwise, you're very likely to reinfect each other. We'll guide you on how to talk about it and get treated together.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "examen-alcohol-drogas": [
    {
      question: "¿Entregan documentación para el trabajo?",
      answer: "Sí, te entregamos la documentación del resultado para tu empleador o trámite.",
      questionEn: "Do you provide documentation for work?",
      answerEn: "Yes, we give you documentation of the result for your employer or paperwork.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "electrocardiograma": [
    {
      question: "¿El electrocardiograma duele?",
      answer: "No, es un estudio rápido y sin dolor; solo se colocan electrodos en la piel por unos minutos.",
      questionEn: "Does the EKG hurt?",
      answerEn: "No, it's a fast, painless test; electrodes are simply placed on the skin for a few minutes.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "ultrasonido": [
    {
      question: "¿El ultrasonido tiene radiación?",
      answer: "No. El ultrasonido usa ondas de sonido, no radiación, por lo que es seguro incluso durante el embarazo y se puede repetir las veces necesarias.",
      questionEn: "Does ultrasound use radiation?",
      answerEn: "No. Ultrasound uses sound waves, not radiation, so it's safe even during pregnancy and can be repeated as needed.",
    },
    {
      question: "¿Qué tipos de ultrasonido hacen?",
      answer: "Abdominal (hígado, vesícula, riñones), pélvico, de embarazo y de tiroides o tejidos blandos. Si necesitas otro tipo, llámanos y te orientamos.",
      questionEn: "What types of ultrasound do you perform?",
      answerEn: "Abdominal (liver, gallbladder, kidneys), pelvic, pregnancy, and thyroid or soft tissue. If you need another type, call us and we'll guide you.",
    },
    {
      question: "¿Necesito ayuno o preparación?",
      answer: "Depende del estudio: abdominal requiere 6-8 horas de ayuno; pélvico y de embarazo temprano, vejiga llena; tiroides no requiere preparación.",
      questionEn: "Do I need to fast or prepare?",
      answerEn: "It depends on the exam: abdominal requires 6-8 hours of fasting; pelvic and early pregnancy, a full bladder; thyroid needs no preparation.",
    },
    {
      question: "¿Cuánto dura el ultrasonido?",
      answer: "Entre 15 y 30 minutos, según el tipo de estudio. Es indoloro; solo sentirás el gel y una ligera presión.",
      questionEn: "How long does the ultrasound take?",
      answerEn: "Between 15 and 30 minutes, depending on the type of exam. It's painless; you'll only feel the gel and light pressure.",
    },
    {
      question: "¿Me explican el resultado el mismo día?",
      answer: "El personal médico te explica los hallazgos en español durante la visita y, si se requiere, te indica los siguientes pasos o una referencia a especialista.",
      questionEn: "Will you explain the result the same day?",
      answerEn: "The medical staff explains the findings in Spanish during the visit and, if needed, tells you the next steps or refers you to a specialist.",
    },
    {
      question: "¿Hacen ultrasonido de embarazo sin cita?",
      answer: "Sí. Puedes venir sin cita para confirmar o dar seguimiento a tu embarazo. Para las primeras semanas, ven con la vejiga llena.",
      questionEn: "Do you do pregnancy ultrasounds without an appointment?",
      answerEn: "Yes. You can walk in to confirm or follow up on your pregnancy. For the first weeks, come with a full bladder.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "examen-dot": [
    {
      question: "¿Me entregan el certificado DOT el mismo día?",
      answer: "Sí, al terminar el examen físico DOT te entregamos tu certificado el mismo día.",
      questionEn: "Do I get the DOT certificate the same day?",
      answerEn: "Yes, after the DOT physical we give you your certificate the same day.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "examenes-inmigracion": [
    {
      question: "¿El médico está autorizado por USCIS?",
      answer: "Sí, el examen lo realiza un médico autorizado (civil surgeon) y te entregamos el Formulario I-693 sellado.",
      questionEn: "Is the doctor authorized by USCIS?",
      answerEn: "Yes, the exam is performed by an authorized civil surgeon and we give you the sealed Form I-693.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "vacunas": [
    {
      question: "¿Qué vacunas aplican?",
      answer: "Aplicamos la vacuna contra la influenza (flu) y el toxoide tetánico. Si necesitas otra vacuna, pregúntanos y te orientamos sobre dónde obtenerla.",
      questionEn: "Which vaccines do you offer?",
      answerEn: "We offer the flu (influenza) vaccine and the tetanus toxoid. If you need another vaccine, ask us and we'll guide you on where to get it.",
    },
    {
      question: "¿Cuándo es mejor ponerse la vacuna de la flu?",
      answer: "Idealmente entre septiembre y noviembre, antes de la temporada de gripe, pero sirve en cualquier momento de la temporada. Se aplica una vez al año.",
      questionEn: "When is the best time to get the flu shot?",
      answerEn: "Ideally between September and November, before flu season, but it helps at any point in the season. It's given once a year.",
    },
    {
      question: "¿La vacuna de la flu me puede dar gripe?",
      answer: "No. Contiene virus inactivados y no causa gripe. Es normal sentir el brazo adolorido o un poco de cansancio uno o dos días.",
      questionEn: "Can the flu shot give me the flu?",
      answerEn: "No. It contains inactivated virus and can't cause the flu. A sore arm or mild tiredness for a day or two is normal.",
    },
    {
      question: "¿Cada cuánto necesito el refuerzo del tétanos?",
      answer: "Cada 10 años, o antes si tienes una herida sucia o profunda y no recuerdas tu última dosis.",
      questionEn: "How often do I need a tetanus booster?",
      answerEn: "Every 10 years, or sooner if you have a dirty or deep wound and don't remember your last dose.",
    },
    {
      question: "¿Me dan comprobante de vacunación?",
      answer: "Sí. Te entregamos un comprobante para trabajo, escuela o tus registros personales.",
      questionEn: "Do you provide a vaccination record?",
      answerEn: "Yes. We give you a record for work, school or your personal files.",
    },
    {
      question: "¿Vacunan a niños?",
      answer: "Aplicamos la vacuna de la flu y el tétanos a toda la familia según la edad indicada. Llámanos para confirmar la edad de tu hijo o hija.",
      questionEn: "Do you vaccinate children?",
      answerEn: "We give the flu and tetanus vaccines to the whole family according to the indicated age. Call us to confirm your child's age.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "sueros-vitaminados": [
    {
      question: "¿Quién aplica el suero vitaminado?",
      answer: "Siempre personal médico, después de una evaluación breve y con monitoreo durante toda la sesión.",
      questionEn: "Who administers the vitamin drip?",
      answerEn: "Always medical staff, after a brief evaluation and with monitoring throughout the session.",
    },
    {
      question: "¿Cuánto dura la sesión?",
      answer: "Entre 30 y 60 minutos, según el suero. Puedes descansar cómodamente mientras pasa.",
      questionEn: "How long does the session take?",
      answerEn: "Between 30 and 60 minutes, depending on the drip. You can rest comfortably while it runs.",
    },
    {
      question: "¿Para qué sirve un suero vitaminado?",
      answer: "Ayuda a rehidratarte y reponer vitaminas y minerales cuando hay cansancio, deshidratación, recuperación de una gripe o malestar, o jornadas de trabajo intensas.",
      questionEn: "What is a vitamin drip for?",
      answerEn: "It helps rehydrate you and replenish vitamins and minerals when you're tired, dehydrated, recovering from the flu or feeling unwell, or after intense workdays.",
    },
    {
      question: "¿Es seguro? ¿Tiene efectos secundarios?",
      answer: "Es seguro cuando lo aplica personal médico tras evaluarte. Los efectos más comunes son leves: molestia en el sitio del pinchazo o sensación de frescura en el brazo.",
      questionEn: "Is it safe? Are there side effects?",
      answerEn: "It's safe when administered by medical staff after an evaluation. The most common effects are mild: discomfort at the needle site or a cool feeling in the arm.",
    },
    {
      question: "¿Puedo ponerme un suero si estoy embarazada o tengo una enfermedad?",
      answer: "Depende de tu caso. Antes de la sesión revisamos embarazo, alergias y condiciones como problemas renales o cardíacos para decidir si es adecuado.",
      questionEn: "Can I get a drip if I'm pregnant or have a medical condition?",
      answerEn: "It depends on your case. Before the session we check for pregnancy, allergies and conditions like kidney or heart problems to decide if it's appropriate.",
    },
    {
      question: "¿Necesito ayuno?",
      answer: "No. De hecho, conviene que hayas comido algo ligero antes de la sesión.",
      questionEn: "Do I need to fast?",
      answerEn: "No. In fact, it's better to have eaten something light before the session.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "suturas-heridas": [
    {
      question: "¿Atienden heridas sin cita?",
      answer: "Sí, atendemos cortes y heridas sin cita previa; entre más pronto, menor el riesgo de infección.",
      questionEn: "Do you treat wounds without an appointment?",
      answerEn: "Yes, we treat cuts and wounds on a walk-in basis; the sooner, the lower the risk of infection.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "curacion-heridas": [
    {
      question: "¿Hacen cambios de vendaje y seguimiento?",
      answer: "Sí, limpiamos, curamos y cambiamos los vendajes, y damos seguimiento hasta que la herida cicatrice.",
      questionEn: "Do you do dressing changes and follow-up?",
      answerEn: "Yes, we clean, treat and change the dressings, and follow up until the wound heals.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "cirugias-menores": [
    {
      question: "¿Qué cirugías menores realizan?",
      answer: "Realizamos extracción de lunares, quistes y lipomas, entre otros procedimientos ambulatorios con anestesia local.",
      questionEn: "What minor surgeries do you perform?",
      answerEn: "We perform removal of moles, cysts and lipomas, among other outpatient procedures with local anesthesia.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "drenaje-abscesos": [
    {
      question: "¿El drenaje de un absceso duele?",
      answer: "Se realiza con anestesia local para reducir las molestias y aliviar el dolor del absceso rápidamente.",
      questionEn: "Does abscess drainage hurt?",
      answerEn: "It's done with local anesthesia to reduce discomfort and quickly relieve the abscess pain.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "unas-encarnadas": [
    {
      question: "¿Cómo tratan la uña encarnada?",
      answer: "Con un procedimiento sencillo y anestesia local retiramos la porción encarnada para aliviar el dolor el mismo día.",
      questionEn: "How do you treat an ingrown toenail?",
      answerEn: "With a simple procedure and local anesthesia we remove the ingrown portion to relieve pain the same day.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "farmacia": [
    {
      question: "¿Puedo surtir mi receta en la clínica?",
      answer: "Sí, al terminar tu consulta surtimos tu receta en nuestra farmacia, sin tener que ir a otro lugar.",
      questionEn: "Can I fill my prescription at the clinic?",
      answerEn: "Yes, after your visit we fill your prescription at our pharmacy, with no need to go elsewhere.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
};

/** FAQs de un servicio por slug (vacío si no tiene). */
export function getServiceFaqs(slug: string): ServiceFaq[] {
  return SERVICE_FAQS[slug] ?? [];
}
