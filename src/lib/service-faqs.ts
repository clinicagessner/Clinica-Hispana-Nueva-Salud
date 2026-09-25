import type { ServiceFaq } from "@/types";

/**
 * FAQs por servicio (clave = slug). Bilingüe. Se usan en la página de
 * detalle del servicio y para el JSON-LD FAQPage.
 */
export const SERVICE_FAQS: Record<string, ServiceFaq[]> = {
  "condiciones-cronicas": [
    {
      question: "¿Cada cuánto tengo que venir a control?",
      answer: "Mientras se ajusta el tratamiento, cada pocas semanas. Cuando tus números ya están en meta, lo habitual es cada tres a seis meses; te damos la fecha en cada visita.",
      questionEn: "How often do I need to come in?",
      answerEn: "Every few weeks while treatment is being adjusted. Once your numbers are on target, every three to six months is typical; we give you the date at each visit.",
    },
    {
      question: "¿Puedo dejar las pastillas si ya me siento bien?",
      answer: "No las suspendas por tu cuenta. Sentirte bien suele ser señal de que el tratamiento funciona. Si quieres reducirlo, lo hablamos y lo hacemos con tus análisis.",
      questionEn: "Can I stop my pills if I feel fine?",
      answerEn: "Don't stop them on your own. Feeling fine is usually a sign the treatment is working. If you'd like to cut back, we talk it over and do it guided by your lab results.",
    },
    {
      question: "¿Qué traigo a la consulta?",
      answer: "Tus medicamentos o sus cajas, tus lecturas de presión o azúcar de casa y cualquier análisis reciente, aunque sea de otro lugar.",
      questionEn: "What should I bring to the visit?",
      answerEn: "Your medications or their boxes, your home blood pressure or sugar readings and any recent lab results, even from somewhere else.",
    },
  ],
  "tiroides": [
    {
      question: "¿Tengo que ir en ayunas para la prueba de tiroides?",
      answer: "Para la TSH no hace falta ayunar. Si tomas biotina o multivitamínicos para cabello y uñas, avísanos: la FDA advierte que en dosis altas puede alterar el resultado.",
      questionEn: "Should I skip breakfast before a thyroid test?",
      answerEn: "You don't need to fast for a TSH. If you take biotin or hair-and-nail multivitamins, let us know: the FDA warns that high doses can throw off the result.",
    },
    {
      question: "¿Cómo debo tomar la levotiroxina?",
      answer: "Con el estómago vacío y un vaso de agua, media hora a una hora antes de desayunar, y separada del calcio, el hierro y los antiácidos. Tomarla siempre igual ayuda a que la dosis se mantenga estable.",
      questionEn: "How should I take levothyroxine?",
      answerEn: "With an empty stomach and a glass of water, half an hour to an hour before breakfast, and spaced away from calcium, iron and antacids. Taking it the same way every day keeps the dose steady.",
    },
    {
      question: "¿Es importante revisar la tiroides en el embarazo?",
      answer: "Sí. Si ya tomas tratamiento para la tiroides y te embarazas, avísanos pronto: la dosis suele necesitar ajuste desde las primeras semanas.",
      questionEn: "Does the thyroid matter during pregnancy?",
      answerEn: "Yes. If you're already on thyroid treatment and become pregnant, tell us early: the dose often needs adjusting from the first weeks.",
    },
  ],
  "alergias": [
    {
      question: "¿Alergia o resfriado: cómo los distingo?",
      answer: "El resfriado suele durar una o dos semanas y puede dar fiebre o dolor de cuerpo. La alergia no da fiebre, dura mientras estás expuesto y muchas veces se repite en la misma época del año, con picazón de ojos y nariz.",
      questionEn: "How can I tell an allergy from a cold?",
      answerEn: "A cold usually lasts one or two weeks and may cause fever or body aches. An allergy doesn't cause fever, lasts as long as you're exposed and often comes back at the same time each year, with itchy eyes and nose.",
    },
    {
      question: "¿Hacen pruebas cutáneas de alergia?",
      answer: "En la clínica hacemos la evaluación y el tratamiento. Las pruebas cutáneas y las vacunas de alergia las realiza un alergólogo; si las necesitas, te orientamos para la referencia.",
      questionEn: "Do you do allergy skin testing?",
      answerEn: "At the clinic we handle the evaluation and treatment. Skin testing and allergy shots are done by an allergist; if you need them, we guide you through the referral.",
    },
    {
      question: "¿Los medicamentos para la alergia dan sueño?",
      answer: "Algunos antihistamínicos antiguos sí. Hay opciones que casi no causan somnolencia; te recomendamos la adecuada según tu trabajo, si manejas y los otros medicamentos que tomas.",
      questionEn: "Do allergy medications make you drowsy?",
      answerEn: "Some older antihistamines do. There are options that cause little or no drowsiness; we recommend the right one based on your job, whether you drive and the other medications you take.",
    },
  ],
  "enfermedades-respiratorias": [
    {
      question: "¿En cuánto tiempo sé si es flu o COVID?",
      answer: "Son pruebas rápidas: el resultado está en minutos, durante la misma visita.",
      questionEn: "How soon will I know if it's flu or COVID?",
      answerEn: "They're rapid tests: results are ready in minutes, during the same visit.",
    },
    {
      question: "¿Qué diferencia hay entre flu, COVID y resfriado?",
      answer: "Los síntomas se parecen, pero la flu suele empezar de golpe con fiebre alta y dolor de cuerpo; el COVID puede quitar el olfato; el resfriado es más leve. La prueba rápida lo confirma.",
      questionEn: "What's the difference between the flu, COVID and a cold?",
      answerEn: "Symptoms look alike, but the flu usually starts suddenly with high fever and body aches; COVID may cause loss of smell; a cold is milder. The rapid test confirms it.",
    },
    {
      question: "¿Dan tratamiento el mismo día?",
      answer: "Sí. Si la prueba y la revisión lo confirman, sales con tu diagnóstico y tu receta ese mismo día.",
      questionEn: "Do you provide same-day treatment?",
      answerEn: "Yes. If the test and exam confirm it, you leave with your diagnosis and prescription that same day.",
    },
    {
      question: "Si falto al trabajo o a clases, ¿me dan un comprobante de la consulta?",
      answer: "Sí, te lo entregamos en la misma visita si tu condición lo requiere.",
      questionEn: "Can I get a note for my job or school?",
      answerEn: "Yes, we provide it during the same visit if your condition requires it.",
    },
    {
      question: "¿Cuándo debo ir a emergencias en lugar de la clínica?",
      answer: "Si tienes dificultad para respirar, labios morados, confusión o dolor fuerte en el pecho, acude de inmediato a una sala de emergencias.",
      questionEn: "When is it the ER and not the clinic?",
      answerEn: "If you have trouble breathing, blue lips, confusion or severe chest pain, go to an emergency room immediately.",
    },
    {
      question: "¿Atienden a niños con gripe o tos?",
      answer: "Sí, atendemos a toda la familia. Los niños con fiebre alta, tos persistente o dificultad para respirar deben evaluarse pronto.",
      questionEn: "Do you see children with the flu or a cough?",
      answerEn: "Yes, we care for the whole family. Children with high fever, persistent cough or trouble breathing should be evaluated promptly.",
    },
  ],
  "examen-fisico-escolar": [
    {
      question: "¿Qué debo traer al examen físico escolar?",
      answer: "El formulario de la escuela o el equipo (si lo tienes), la cartilla de vacunación y la lista de medicamentos o alergias. Un adulto debe acompañar al menor.",
      questionEn: "What should I bring to the school physical?",
      answerEn: "The school or team form (if you have it), the vaccination record and a list of medications or allergies. An adult must accompany the minor.",
    },
    {
      question: "¿Hacen exámenes deportivos (sports physical)?",
      answer: "Sí. Revisamos corazón, pulmones, columna y articulaciones y llenamos el formulario de la liga o la escuela.",
      questionEn: "Do you do sports physicals?",
      answerEn: "Yes. We check heart, lungs, spine and joints and complete the league or school form.",
    },
    {
      question: "¿Cuánto tarda?",
      answer: "Por lo general entre 20 y 30 minutos, incluyendo el llenado del formulario.",
      questionEn: "How long does it take?",
      answerEn: "Usually 20 to 30 minutes, including completing the form.",
    },
    {
      question: "¿Necesita ayuno mi hijo?",
      answer: "No. Puede comer con normalidad antes del examen.",
      questionEn: "Does my child need to fast?",
      answerEn: "No. They can eat normally before the exam.",
    },
    {
      question: "¿Pueden aplicar vacunas o la prueba de tuberculosis el mismo día?",
      answer: "Sí. Si la escuela lo requiere, aplicamos la vacuna de la flu o el tétanos y hacemos la prueba de TB en la misma visita.",
      questionEn: "Can you give vaccines or the TB test the same day?",
      answerEn: "Yes. If the school requires it, we give the flu or tetanus vaccine and do the TB test during the same visit.",
    },
    {
      question: "¿Aceptan formularios de cualquier distrito escolar?",
      answer: "Sí. Llenamos el formulario de tu escuela, distrito (HISD, Pasadena ISD y otros) o liga deportiva; si no tienes uno, usamos el formato estándar.",
      questionEn: "Do you accept forms from any school district?",
      answerEn: "Yes. We complete the form from your school, district (HISD, Pasadena ISD and others) or sports league; if you don't have one, we use the standard format.",
    },
  ],
  "ginecologia": [
    {
      question: "¿Necesito cita para el papanicolaou?",
      answer: "No hace falta cita. Si prefieres llegar a una hora concreta, escríbenos antes por WhatsApp.",
      questionEn: "Can I just walk in for a Pap smear?",
      answerEn: "Yes, no appointment needed. If you'd like to come at a set time, message us on WhatsApp first.",
    },
    {
      question: "¿Cada cuánto debo hacerme el Papanicolaou?",
      answer: "En general, desde los 21 años y cada 3 años si el resultado es normal. Si nunca te lo has hecho o tuviste un resultado anormal, conviene hacerlo cuanto antes.",
      questionEn: "How many years apart should my Pap smears be?",
      answerEn: "Generally from age 21 and every 3 years if the result is normal. If you've never had one or had an abnormal result, it's best to get it done soon.",
    },
    {
      question: "¿Cómo me preparo para el Papanicolaou?",
      answer: "Procura no estar en tu periodo y evita relaciones, duchas vaginales, óvulos o cremas 48 horas antes. Así el resultado es más confiable.",
      questionEn: "Is there anything to do before a Pap smear?",
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
      questionEn: "Can a vaginal infection be treated at the same visit?",
      answerEn: "Yes. If symptoms are clear, you leave with treatment that same day; if needed, we take a culture to confirm the cause and adjust the medication.",
    },
  ],
  "prueba-embarazo": [
    {
      question: "¿Puedo fiarme del resultado?",
      answer: "La prueba de sangre (hCG) es la más precisa y detecta el embarazo desde 7 a 10 días después de la concepción. La de orina ya es fiable desde el día en que te debía bajar la regla.",
      questionEn: "How reliable is the pregnancy test?",
      answerEn: "The blood test (hCG) is the most precise and detects pregnancy 7 to 10 days after conception. The urine test can be trusted starting the day your period was due.",
    },
    {
      question: "¿Cuándo me puedo hacer la prueba de sangre?",
      answer: "Desde 7 a 10 días después de la relación sin protección, aun antes de que falte el periodo.",
      questionEn: "When can I take the blood test?",
      answerEn: "From 7 to 10 days after unprotected sex, even before a missed period.",
    },
    {
      question: "¿En cuánto tiempo me dan el resultado?",
      answer: "El resultado en orina está en unos minutos, antes de que te vayas. La de sangre la procesa el laboratorio y te avisamos en cuanto esté lista.",
      questionEn: "How soon do I get the result?",
      answerEn: "The urine test is read in minutes, in the same visit. The blood test is processed by the lab and we let you know as soon as it's ready.",
    },
    {
      question: "Mi prueba casera salió negativa pero no me baja, ¿qué hago?",
      answer: "Ven a hacerte la prueba en sangre, que es más sensible. Si sigue negativa, evaluamos otras causas del retraso como tiroides, estrés o anticonceptivos.",
      questionEn: "My home test was negative but my period hasn't come, what should I do?",
      answerEn: "Come in for the blood test, which is more sensitive. If it's still negative, we look at other causes of the delay such as thyroid, stress or birth control.",
    },
    {
      question: "Si salgo positiva, ¿qué sigue?",
      answer: "Te confirmamos las semanas aproximadas, te indicamos vitaminas prenatales y cuidados iniciales, y te damos la referencia para tu control prenatal. Si lo necesitas, hacemos un ultrasonido.",
      questionEn: "If I'm positive, what's next?",
      answerEn: "We estimate the weeks, recommend prenatal vitamins and early precautions, and give you the referral for your prenatal care. If needed, we do an ultrasound.",
    },
    {
      question: "¿Es confidencial?",
      answer: "Sí. El resultado se entrega solo a ti, en un ambiente privado y sin juicios.",
      questionEn: "Is it confidential?",
      answerEn: "Yes. The result is given only to you, in a private setting and without judgment.",
    },
  ],
  "anticonceptivos": [
    {
      question: "¿Qué métodos anticonceptivos ofrecen?",
      answer: "Pastillas anticonceptivas e inyección anticonceptiva, con orientación para elegir. Si prefieres DIU o implante, te referimos; también retiramos implantes subdérmicos.",
      questionEn: "Which birth control methods do you offer?",
      answerEn: "Birth control pills and the contraceptive injection, with counseling to choose. If you prefer an IUD or implant, we refer you; we also remove subdermal implants.",
    },
    {
      question: "¿Necesito hacerme un examen antes de empezar?",
      answer: "Revisamos tu presión arterial y tu historial de salud. Por lo general no se requiere examen ginecológico para iniciar pastillas o inyección, salvo que tengas síntomas.",
      questionEn: "Do I need an exam before starting?",
      answerEn: "We check your blood pressure and health history. A gynecological exam usually isn't required to start pills or the injection, unless you have symptoms.",
    },
    {
      question: "¿Cada cuánto se pone la inyección anticonceptiva?",
      answer: "Cada 3 meses (aproximadamente cada 12-13 semanas). Te anotamos la fecha de tu siguiente dosis.",
      questionEn: "How often is the contraceptive injection given?",
      answerEn: "Every 3 months (about every 12-13 weeks). We note the date of your next dose.",
    },
    {
      question: "¿Qué hago si olvidé una pastilla?",
      answer: "Tómala en cuanto te acuerdes y continúa con normalidad; si olvidaste dos o más, usa condón 7 días y llámanos para orientarte.",
      questionEn: "What do I do if I missed a pill?",
      answerEn: "Take it as soon as you remember and continue as usual; if you missed two or more, use condoms for 7 days and call us for guidance.",
    },
    {
      question: "¿Los anticonceptivos engordan o afectan la fertilidad?",
      answer: "Los cambios de peso son poco frecuentes y leves. Al suspender pastillas la fertilidad regresa pronto; con la inyección puede tardar algunos meses. Ninguno causa infertilidad.",
      questionEn: "Does birth control cause weight gain or affect fertility?",
      answerEn: "Weight changes are uncommon and mild. After stopping pills, fertility returns soon; with the injection it may take a few months. Neither causes infertility.",
    },
    {
      question: "¿Atienden a menores de edad?",
      answer: "Sí, con acompañamiento de un padre, madre o tutor. La consulta es confidencial y respetuosa.",
      questionEn: "Do you see minors?",
      answerEn: "Yes, accompanied by a parent or guardian. The visit is confidential and respectful.",
    },
  ],
  "extraccion-implantes": [
    {
      question: "¿Duele la extracción del implante?",
      answer: "No. Se aplica anestesia local y solo sientes el pinchazo inicial. Después puede haber sensibilidad leve o un moretón por unos días.",
      questionEn: "Does implant removal hurt?",
      answerEn: "No. Local anesthesia is applied and you only feel the initial pinch. Afterwards there may be mild tenderness or a bruise for a few days.",
    },
    {
      question: "¿Cuánto tarda el procedimiento?",
      answer: "Entre 10 y 20 minutos, incluyendo la anestesia y el vendaje. Te vas por tu propio pie y sigues con tus actividades.",
      questionEn: "How long does the procedure take?",
      answerEn: "Between 10 and 20 minutes, including anesthesia and bandaging. You leave on your own and carry on with your plans.",
    },
    {
      question: "¿Puedo quitarme el implante antes de que se venza?",
      answer: "Sí. Puedes retirarlo en cualquier momento, ya sea por efectos secundarios, porque quieres embarazarte o porque prefieres otro método.",
      questionEn: "Can I have the implant removed before it expires?",
      answerEn: "Yes. It can be removed at any time, whether because of side effects, because you want to get pregnant or because you prefer another method.",
    },
    {
      question: "¿Me pueden poner un implante nuevo en la misma visita?",
      answer: "Sí. Si quieres seguir protegida, colocamos el implante nuevo en la misma incisión o te ofrecemos otro método anticonceptivo ese mismo día.",
      questionEn: "Can I get a new implant in the same visit?",
      answerEn: "Yes. If you want to stay protected, we place the new implant through the same incision or offer you another birth control method the same day.",
    },
    {
      question: "¿Cuándo puedo quedar embarazada después del retiro?",
      answer: "Tu cuerpo vuelve a poder embarazarse pronto; casi siempre en las primeras semanas. Si no buscas embarazo, usa otro método desde el mismo día.",
      questionEn: "When can I get pregnant after removal?",
      answerEn: "Your ability to get pregnant comes back soon, usually within a few weeks. If you're not trying to conceive, use another method starting the same day.",
    },
    {
      question: "¿Necesito guardar reposo?",
      answer: "No. Solo evita cargar peso con ese brazo el primer día y deja el vendaje 24 horas. Puedes trabajar y hacer tus actividades normales.",
      questionEn: "Do I need to rest afterwards?",
      answerEn: "No. Just avoid lifting heavy things with that arm the first day and keep the bandage on for 24 hours. You can work and do your normal activities.",
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
      answer: "Entre los 55 y los 69 años se decide con el médico, porque tiene beneficios y también posibles daños. Si tu padre o un hermano tuvo cáncer de próstata, la conversación puede empezar antes. Se repite cada 1 a 2 años según el resultado.",
      questionEn: "When should the PSA test come up?",
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
  ],
  "examenes-sangre": [
    {
      question: "¿En cuánto tiempo entregan los resultados?",
      answer: "Depende de las pruebas: te decimos el plazo al tomar la muestra. Cuando el laboratorio entrega los resultados, te llamamos o te los explicamos en español en tu visita de control.",
      questionEn: "How soon are results ready?",
      answerEn: "It depends on the tests: we tell you the timeframe when we draw the sample. When the lab delivers the results, we call you or explain them in Spanish at your follow-up visit.",
    },
    {
      question: "¿Necesito venir en ayunas?",
      answer: "Solo para glucosa, colesterol y triglicéridos: ayuno de 8 a 12 horas, puedes tomar agua. Para biometría, tiroides, vitaminas u hormonas no hace falta.",
      questionEn: "Do I need to fast?",
      answerEn: "Only for glucose, cholesterol and triglycerides: fast 8 to 12 hours, water is fine. For CBC, thyroid, vitamins or hormones no fasting is needed.",
    },
    {
      question: "¿Puedo hacerme exámenes sin orden de otro médico?",
      answer: "Sí. Nuestro médico te evalúa en la misma visita, indica los exámenes que necesitas y luego te explica los resultados.",
      questionEn: "Can I get tests without an order from another doctor?",
      answerEn: "Yes. Our doctor evaluates you in the same visit, orders the tests you need and then explains the results.",
    },
    {
      question: "¿Qué exámenes incluye un chequeo general?",
      answer: "Normalmente biometría hemática, glucosa, perfil de lípidos y función de hígado y riñón. Según tu edad y síntomas se agregan tiroides, vitaminas, PSA u hormonas.",
      questionEn: "Which tests does a general checkup include?",
      answerEn: "Usually CBC, glucose, lipid panel and liver and kidney function. Depending on your age and symptoms we add thyroid, vitamins, PSA or hormones.",
    },
    {
      question: "¿Hacen pruebas de VIH y otras infecciones?",
      answer: "Sí. Con la misma muestra podemos analizar VIH, sífilis, hepatitis y otras infecciones de transmisión sexual, de forma confidencial.",
      questionEn: "Do you test for HIV and other infections?",
      answerEn: "Yes. With the same sample we can test for HIV, syphilis, hepatitis and other sexually transmitted infections, confidentially.",
    },
    {
      question: "¿Qué pasa si un resultado sale alterado?",
      answer: "El médico te explica qué significa y define el tratamiento o seguimiento en la misma visita. Cuando el caso lo pide, te orientamos para ver a un especialista.",
      questionEn: "What if a result comes back abnormal?",
      answerEn: "The doctor explains what it means and sets up treatment or follow-up in the same visit. If a specialist is needed, we give you the referral.",
    },
  ],
  "infecciones-urinarias": [
    {
      question: "¿Me dan tratamiento en la misma visita?",
      answer: "La orina se analiza aquí y, si hay infección, el equipo médico decide el tratamiento en esa consulta.",
      questionEn: "Do I get treatment at the same visit?",
      answerEn: "We run the urine test in-clinic and, if there's an infection, the medical team prescribes your treatment.",
    },
    {
      question: "¿Cómo sé si tengo infección urinaria?",
      answer: "Lo más común es que arda al orinar, que tengas que ir a cada rato, que la orina se vea turbia o huela fuerte y que moleste el bajo vientre. Un examen de orina lo confirma en minutos.",
      questionEn: "What does a urinary tract infection feel like?",
      answerEn: "Most often it burns when you pee, you need to go again and again, the urine looks cloudy or smells strong and your lower belly aches. A urine test confirms it in minutes.",
    },
    {
      question: "¿Necesito ayunar o prepararme para el examen de orina?",
      answer: "No necesitas ayuno. Lo ideal es no haber orinado en la última hora para que la muestra sea adecuada. Te damos las instrucciones en la clínica.",
      questionEn: "Is there anything to do before the urine test?",
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
  ],
  "examen-heces": [
    {
      question: "¿Tengo que dejar algún alimento o medicamento antes?",
      answer: "Depende del estudio. Algunos antidiarreicos, antiácidos o antibióticos pueden alterar el resultado; dinos qué tomas y te indicamos si hace falta suspender algo.",
      questionEn: "Do I need to avoid any food or medication beforehand?",
      answerEn: "It depends on the test. Some antidiarrheals, antacids or antibiotics can affect the result; tell us what you take and we'll let you know if anything needs to be paused.",
    },
    {
      question: "¿Sirve la muestra de un niño?",
      answer: "Sí, el examen se hace a cualquier edad. En bebés y niños pequeños te explicamos cómo recogerla del pañal sin que se contamine.",
      questionEn: "Can the test be done on a child?",
      answerEn: "Yes, the test can be done at any age. For babies and toddlers we explain how to collect it from the diaper without contaminating it.",
    },
    {
      question: "¿Cuándo tengo el resultado?",
      answer: "El plazo depende de los estudios que se pidan; te lo decimos al entregar la muestra y te explicamos el resultado en español cuando llega.",
      questionEn: "When will I get the result?",
      answerEn: "It depends on the tests ordered; we tell you when you drop off the sample and explain the result in Spanish once it arrives.",
    },
  ],
  "prueba-strep": [
    {
      question: "¿La prueba sirve para adultos?",
      answer: "Sí, aunque en adultos el strep es menos frecuente que en niños. El equipo médico decide si hace falta según tus síntomas.",
      questionEn: "Is the test useful for adults?",
      answerEn: "Yes, although strep is less common in adults than in children. The medical team decides whether it's needed based on your symptoms.",
    },
    {
      question: "¿Es contagioso?",
      answer: "Sí, se transmite por gotitas al toser o estornudar y al compartir vasos o cubiertos. Con antibiótico y sin fiebre, se puede volver a la escuela o al trabajo tras al menos 12 horas de tratamiento.",
      questionEn: "Is it contagious?",
      answerEn: "Yes, it spreads through droplets from coughs or sneezes and by sharing cups or utensils. On antibiotics and without fever, you can return to school or work after at least 12 hours of treatment.",
    },
    {
      question: "¿Tengo que tomar el antibiótico completo si ya me siento bien?",
      answer: "Sí. Suspenderlo antes de tiempo puede hacer que la infección regrese o que aparezcan complicaciones.",
      questionEn: "Do I need to finish the antibiotic if I already feel better?",
      answerEn: "Yes. Stopping early can let the infection come back or lead to complications.",
    },
  ],
  "prueba-tuberculosis": [
    {
      question: "Si de niño recibí la BCG, ¿qué prueba me hago?",
      answer: "Normalmente la prueba en sangre (IGRA), porque la BCG puede dar un falso positivo en la prueba cutánea. Confirma antes qué tipo acepta tu trámite.",
      questionEn: "I was given BCG as a kid. Skin test or blood test?",
      answerEn: "In most cases the IGRA blood test, because BCG can make the skin test look positive. First confirm which type your paperwork accepts.",
    },
    {
      question: "¿Y si se me pasa el día de la lectura?",
      answer: "La prueba cutánea solo se puede leer entre las 48 y 72 horas. Si pasas de ese plazo, hay que aplicarla de nuevo.",
      questionEn: "What if I don't come back in time for the reading?",
      answerEn: "The skin test can only be read between 48 and 72 hours. If you miss that window, it has to be placed again.",
    },
    {
      question: "¿Puedo hacerme la prueba si estoy embarazada?",
      answer: "Sí, las pruebas de tuberculosis se consideran seguras durante el embarazo. Avísanos para anotarlo en tu expediente.",
      questionEn: "Can I get tested if I'm pregnant?",
      answerEn: "Yes, tuberculosis tests are considered safe during pregnancy. Let us know so we can note it in your record.",
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
      question: "¿Cuántos días después de la relación conviene hacerme la prueba?",
      answer: "Depende de la infección: clamidia y gonorrea desde 1-2 semanas; VIH y sífilis pueden necesitar algunas semanas más. Te indicamos cuándo hacer o repetir la prueba.",
      questionEn: "How many days after sex should I wait to test?",
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
  ],
  "examen-alcohol-drogas": [
    {
      question: "¿Qué necesito traer?",
      answer: "Una identificación con foto y, si tu empleador te dio un formulario o instrucciones, tráelos. Anota los medicamentos con receta que tomas.",
      questionEn: "What do I need to bring?",
      answerEn: "A photo ID and, if your employer gave you a form or instructions, bring them. Write down any prescription medications you take.",
    },
    {
      question: "¿Necesito ayuno?",
      answer: "No. Llega hidratado con normalidad, sin exceso de líquidos.",
      questionEn: "Do I need to fast?",
      answerEn: "No. Arrive normally hydrated, without excess fluids.",
    },
    {
      question: "¿Cuánto tarda el resultado?",
      answer: "La recolección toma minutos. El tiempo del resultado depende del tipo de prueba; te informamos en la clínica cuándo estará tu constancia.",
      questionEn: "How long do results take?",
      answerEn: "Collection takes minutes. Result turnaround depends on the type of test; we'll tell you at the clinic when your documentation will be ready.",
    },
    {
      question: "¿El resultado es confidencial?",
      answer: "Sí. La constancia se entrega a ti o a quien tú autorices, según el trámite o lo que indique tu empleador.",
      questionEn: "Is the result confidential?",
      answerEn: "Yes. The documentation is given to you or whoever you authorize, depending on the procedure or your employer's instructions.",
    },
    {
      question: "¿Sirve para trabajo de conducción comercial (CDL)?",
      answer: "Hacemos la prueba de drogas y también el examen físico DOT. Confirma con tu empleador el tipo de prueba que requiere.",
      questionEn: "Does it work for commercial driving (CDL) jobs?",
      answerEn: "We perform the drug test and also the DOT physical exam. Confirm with your employer the type of test required.",
    },
    {
      question: "¿Mis medicamentos con receta pueden afectar el resultado?",
      answer: "Algunos pueden aparecer en la prueba. Por eso conviene traerlos o anotarlos para documentarlo correctamente.",
      questionEn: "Can my prescription medications affect the result?",
      answerEn: "Some may show up on the test. That's why it's worth bringing or listing them so it's documented correctly.",
    },
  ],
  "electrocardiograma": [
    {
      question: "¿Cuánto dura el electrocardiograma?",
      answer: "La prueba en sí toma unos minutos. Contando la preparación y la colocación de los electrodos, la mayoría de las personas termina en poco tiempo.",
      questionEn: "How long does the EKG take?",
      answerEn: "The test itself takes a few minutes. Including preparation and placing the electrodes, most people are done in a short time.",
    },
    {
      question: "¿Tengo que ir en ayunas?",
      answer: "No. Puedes comer y tomar tus medicamentos como siempre; lo único es no ponerte crema en el torso antes de venir.",
      questionEn: "Do I need to fast?",
      answerEn: "No. You can eat and take your medications as usual; just skip body lotion on your chest before coming in.",
    },
    {
      question: "¿Me dan el trazo para mi cirujano o mi trabajo?",
      answer: "Sí. Te explicamos el resultado en español y te entregamos el registro para que lo lleves a quien te lo pidió.",
      questionEn: "Can I get the tracing for my surgeon or employer?",
      answerEn: "Yes. We explain the result in Spanish and give you the record to take to whoever requested it.",
    },
  ],
  "ultrasonido": [
    {
      question: "¿El ultrasonido tiene radiación?",
      answer: "No. Sí. Funciona con sonido, no con radiación, así que se usa en el embarazo y se puede repetir sin riesgo.",
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
  ],
  "examen-dot": [
    {
      question: "¿Salgo con el certificado DOT en la mano?",
      answer: "Sí. Si cumples los requisitos, te llevas el certificado impreso ese mismo día, al terminar el examen.",
      questionEn: "Do I leave with my DOT certificate in hand?",
      answerEn: "Yes. If you meet the requirements, you take your printed certificate home that same day, right after the exam.",
    },
    {
      question: "¿Qué debo llevar al examen DOT?",
      answer: "Tu licencia, tus lentes o audífonos si los usas, la lista de tus medicamentos y, si tienes presión alta, diabetes o apnea, tus últimos resultados o reporte del CPAP.",
      questionEn: "What should I bring to the DOT physical?",
      answerEn: "Your driver's license, any glasses or hearing aids you use, a list of your medications and, with hypertension, diabetes or sleep apnea, your recent results or CPAP usage report.",
    },
    {
      question: "¿Cuánto tiempo es válido el certificado DOT?",
      answer: "Normalmente 2 años. Si tienes presión alta, diabetes u otra condición que requiere control, puede ser de 1 año, 6 meses o 3 meses.",
      questionEn: "How long is the DOT certificate valid?",
      answerEn: "Usually 2 years. When a condition such as blood pressure or blood sugar needs watching, the examiner can issue it for less time: 1 year, 6 months or 3 months.",
    },
    {
      question: "¿El examen DOT incluye prueba de drogas?",
      answer: "No. La prueba de drogas es un requisito aparte de tu empleador. También la hacemos en la clínica y puedes hacer ambas en la misma visita.",
      questionEn: "Is a drug screen part of the DOT physical?",
      answerEn: "No. The drug test is a separate employer requirement. We also do it at the clinic and you can do both in the same visit.",
    },
    {
      question: "¿Puedo pasar el examen DOT si tengo presión alta o diabetes?",
      answer: "En la mayoría de los casos sí, siempre que estén controladas. Con insulina se requiere el formulario MCSA-5870 de tu médico. Trae tus documentos y te orientamos.",
      questionEn: "Can I pass the DOT physical with high blood pressure or diabetes?",
      answerEn: "In most cases yes, as long as they're under control. With insulin you need form MCSA-5870 from your doctor. Bring your paperwork and we'll guide you.",
    },
    {
      question: "¿Necesito ayuno para el examen DOT?",
      answer: "No. Come normalmente, toma tus medicamentos como siempre y evita el café o bebidas energéticas justo antes, porque pueden subir la presión.",
      questionEn: "Do I need to fast for the DOT physical?",
      answerEn: "No. Eat normally, take your medications as usual and avoid coffee or energy drinks right before, since they can raise your blood pressure.",
    },
  ],
  "examenes-inmigracion": [
    {
      question: "¿El precio incluye los análisis y las vacunas?",
      answer: "Pregúntanos antes de empezar: te explicamos qué incluye el examen y qué depende de las vacunas o pruebas que te falten, para que no haya sorpresas.",
      questionEn: "Does the price include lab work and vaccines?",
      answerEn: "Ask us before we start: we explain what the exam includes and what depends on the vaccines or tests you're missing, so there are no surprises.",
    },
    {
      question: "¿Sirven mis vacunas de mi país?",
      answer: "Sí, si tienes el comprobante con fechas. El médico las revisa y solo aplica las que falten según los requisitos del CDC.",
      questionEn: "Do vaccines from my home country count?",
      answerEn: "Yes, if you have the record with dates. The doctor reviews them and only gives the ones still missing under CDC requirements.",
    },
    {
      question: "¿Hacen el examen a niños?",
      answer: "Sí, el I-693 se hace a cualquier edad. Las pruebas y vacunas cambian según la edad; te explicamos qué le corresponde a cada miembro de la familia.",
      questionEn: "Do you do the exam for children?",
      answerEn: "Yes, the I-693 is done at any age. Tests and vaccines vary by age; we explain what applies to each family member.",
    },
  ],
  "vacunas": [
    {
      question: "¿Qué vacunas aplican?",
      answer: "Aquí te ponemos la vacuna de la influenza (flu) y la del tétanos (toxoide tetánico). Si necesitas otra vacuna, pregúntanos y te orientamos sobre dónde obtenerla.",
      questionEn: "Which vaccines do you offer?",
      answerEn: "We offer the flu (influenza) vaccine and the tetanus toxoid. If you need another vaccine, ask us and we'll guide you on where to get it.",
    },
    {
      question: "¿En qué mes conviene vacunarse contra la flu?",
      answer: "Idealmente entre septiembre y noviembre, antes de la temporada de gripe, pero sirve en cualquier momento de la temporada. Se aplica una vez al año.",
      questionEn: "Is fall the right time for my flu vaccine?",
      answerEn: "Ideally between September and November, before flu season, but it helps at any point in the season. It's given once a year.",
    },
    {
      question: "¿La vacuna de la flu me puede dar gripe?",
      answer: "No. Contiene virus inactivados y no causa gripe. Es normal sentir el brazo adolorido o un poco de cansancio uno o dos días.",
      questionEn: "Could the flu vaccine make me sick with the flu?",
      answerEn: "No. It contains inactivated virus and can't cause the flu. A sore arm or mild tiredness for a day or two is normal.",
    },
    {
      question: "¿Cada cuánto necesito el refuerzo del tétanos?",
      answer: "Cada 10 años, o antes si tienes una herida sucia o profunda y no recuerdas tu última dosis.",
      questionEn: "How many years does a tetanus shot last?",
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
      answerEn: "Plan on half an hour to an hour, depending on the bag. You can rest comfortably while it runs.",
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
      question: "Si estoy embarazada o tengo alguna enfermedad, ¿me lo pueden poner?",
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
  ],
  "suturas-heridas": [
    {
      question: "¿Me van a doler los puntos?",
      answer: "Antes de coser adormecemos la zona con anestesia local. Sentirás el pinchazo inicial y luego solo presión. Después, un analgésico común suele bastar.",
      questionEn: "Will the stitches hurt?",
      answerEn: "Before stitching we numb the area with local anesthesia. You'll feel the first pinch and then only pressure. Afterward, a common pain reliever is usually enough.",
    },
    {
      question: "¿Quién me quita los puntos?",
      answer: "Puedes volver a la clínica para retirarlos en la fecha que te indicamos; así revisamos también que la herida haya sanado bien.",
      questionEn: "Who takes out my stitches?",
      answerEn: "You can come back to the clinic on the date we give you; that way we also check that the wound healed well.",
    },
    {
      question: "¿Cuándo me puedo bañar?",
      answer: "Protege la herida del agua uno o dos días. Después puedes ducharte con normalidad, sin tallarla ni meterla en tina o alberca hasta retirar los puntos.",
      questionEn: "When can I shower?",
      answerEn: "Keep the wound out of the water for a day or two. After that you can shower normally, without scrubbing it or soaking it in a tub or pool until the stitches are out.",
    },
  ],
  "curacion-heridas": [
    {
      question: "¿Qué tipo de heridas curan?",
      answer: "Heridas postoperatorias, cortes y raspones, quemaduras leves, úlceras en pies o piernas y heridas que tardan en sanar.",
      questionEn: "What kinds of wounds do you treat?",
      answerEn: "Post-surgical wounds, cuts and scrapes, minor burns, foot or leg ulcers and wounds that are slow to heal.",
    },
    {
      question: "¿Cada cuánto debo cambiar el vendaje?",
      answer: "Depende de la herida; en general cada 1 a 3 días. Te indicamos la frecuencia y puedes venir a la clínica para cada cambio.",
      questionEn: "How often should I change the bandage?",
      answerEn: "It depends on the wound; generally every 1 to 3 days. We tell you the frequency and you can come to the clinic for each change.",
    },
    {
      question: "¿Cómo sé si mi herida está infectada?",
      answer: "Si el rojo crece, la zona está caliente o hinchada, sale pus, huele mal o tienes fiebre. Si notas alguno, ven el mismo día.",
      questionEn: "What are the signs a wound is getting infected?",
      answerEn: "Spreading redness, warmth, swelling, pus, foul odor or fever. If you notice any of these, come in the same day.",
    },
    {
      question: "Vivo con diabetes y tengo una herida en el pie, ¿espero?",
      answer: "No esperes. Las heridas en pies de personas con diabetes sanan lento y pueden complicarse; acude a curación cuanto antes y mantén el seguimiento.",
      questionEn: "I have diabetes and a sore on my foot, what should I do?",
      answerEn: "Don't wait. Foot wounds in people with diabetes heal slowly and can get complicated; come in for wound care as soon as possible and keep up with follow-up.",
    },
    {
      question: "¿Necesito vacuna del tétanos?",
      answer: "Si la herida es sucia, profunda o causada por metal oxidado y han pasado más de 5-10 años desde tu última dosis, sí. La aplicamos en la misma visita.",
      questionEn: "Do I need a tetanus shot?",
      answerEn: "If the wound is dirty, deep or caused by rusty metal and it's been more than 5-10 years since your last dose, yes. We give it during the same visit.",
    },
    {
      question: "¿Curan heridas de una cirugía hecha en otro lugar?",
      answer: "Sí. Trae las indicaciones de tu cirujano si las tienes y nos encargamos de las curaciones y el cambio de vendajes.",
      questionEn: "Do you care for wounds from surgery done elsewhere?",
      answerEn: "Yes. Bring your surgeon's instructions if you have them and we'll handle the wound care and bandage changes.",
    },
  ],
  "cirugias-menores": [
    {
      question: "¿Qué cirugías menores hacen?",
      answer: "Extracción de lunares, quistes y lipomas con anestesia local, además de drenaje de abscesos, uñas encarnadas y suturas.",
      questionEn: "What minor surgeries do you perform?",
      answerEn: "Removal of moles, cysts and lipomas under local anesthesia, plus abscess drainage, ingrown toenails and stitches.",
    },
    {
      question: "¿Duele el procedimiento?",
      answer: "Solo sientes el pinchazo de la anestesia local; después puedes notar presión, pero no dolor. Las molestias posteriores se controlan con analgésico común.",
      questionEn: "Does the procedure hurt?",
      answerEn: "You only feel the local anesthesia needle; afterward you may notice pressure, but no pain. Any discomfort afterward is managed with common pain relievers.",
    },
    {
      question: "¿Cuánto tarda y puedo irme solo?",
      answer: "Entre 20 y 45 minutos en la mayoría de los casos. Sales caminando y puedes conducir, salvo que te indiquemos lo contrario.",
      questionEn: "How long does it take and can I leave on my own?",
      answerEn: "Between 20 and 45 minutes in most cases. You walk out and can drive, unless we tell you otherwise.",
    },
    {
      question: "¿Queda cicatriz?",
      answer: "Toda incisión deja una marca, pero con buena técnica y cuidado posterior suele ser fina y poco visible. Te explicamos cómo cuidarla.",
      questionEn: "Will there be a scar?",
      answerEn: "Every incision leaves a mark, but with good technique and aftercare it's usually thin and barely visible. We explain how to care for it.",
    },
    {
      question: "¿Mandan a analizar el lunar o el quiste?",
      answer: "Cuando la lesión lo amerita, se envía a laboratorio (biopsia) para confirmar que es benigna. Te informamos el resultado.",
      questionEn: "Do you send the mole or cyst for analysis?",
      answerEn: "When the lesion warrants it, it's sent to the lab (biopsy) to confirm it's benign. We inform you of the result.",
    },
    {
      question: "¿Lo hacen el mismo día de la evaluación?",
      answer: "En la mayoría de los casos sí. Si la lesión requiere un estudio previo o referencia, te lo indicamos en la primera visita.",
      questionEn: "Is it done the same day as the evaluation?",
      answerEn: "In most cases, yes. If the lesion needs a prior test or a referral, we let you know at the first visit.",
    },
  ],
  "drenaje-abscesos": [
    {
      question: "¿Siempre necesito antibiótico?",
      answer: "No siempre. Si el absceso se drena bien y no hay signos de infección extendida, muchas veces basta con el drenaje y las curaciones. El equipo médico lo decide en cada caso.",
      questionEn: "Do I always need antibiotics?",
      answerEn: "Not always. If the abscess drains well and there are no signs of spreading infection, drainage and dressing changes are often enough. The medical team decides case by case.",
    },
    {
      question: "¿Puede volver a salir?",
      answer: "Sí, sobre todo en axilas, ingles o glúteos. Si se repite, conviene revisar si hay una causa de fondo, como azúcar alta, y hablar de cómo prevenirlo.",
      questionEn: "Can it come back?",
      answerEn: "Yes, especially in the armpits, groin or buttocks. If it keeps returning, it's worth looking for an underlying cause, such as high blood sugar, and talking about prevention.",
    },
    {
      question: "¿Es contagioso?",
      answer: "El pus puede contener bacterias que pasan a otras personas. Mantén la herida cubierta, lava tus manos y no compartas toallas, rastrillos ni ropa hasta que sane.",
      questionEn: "Is it contagious?",
      answerEn: "The pus can carry bacteria that pass to other people. Keep the wound covered, wash your hands and don't share towels, razors or clothes until it heals.",
    },
  ],
  "unas-encarnadas": [
    {
      question: "¿Me quitan toda la uña?",
      answer: "Casi nunca. Normalmente solo se retira la franja lateral que se clava en la piel; el resto de la uña se queda y sigue creciendo.",
      questionEn: "Will you remove the whole nail?",
      answerEn: "Almost never. Usually only the side strip that digs into the skin is removed; the rest of the nail stays and keeps growing.",
    },
    {
      question: "¿Puedo ir a trabajar después?",
      answer: "En la mayoría de los casos sí, con calzado cómodo o abierto. Si trabajas de pie muchas horas, conviene descansar el pie el primer día.",
      questionEn: "Can I go to work afterward?",
      answerEn: "In most cases yes, in comfortable or open shoes. If you're on your feet for long shifts, it's best to rest the foot the first day.",
    },
    {
      question: "Tengo diabetes, ¿debo esperar a ver si mejora?",
      answer: "No. Con diabetes, cualquier herida o infección en los pies merece revisión pronto, porque la cicatrización es más lenta y las complicaciones avanzan rápido.",
      questionEn: "I have diabetes. Should I wait and see if it improves?",
      answerEn: "No. With diabetes, any wound or infection on the feet should be checked early, because healing is slower and complications move fast.",
    },
  ],
};

/** FAQs de un servicio por slug (vacío si no tiene). */
export function getServiceFaqs(slug: string): ServiceFaq[] {
  return SERVICE_FAQS[slug] ?? [];
}
