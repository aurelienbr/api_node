import { Request, Response } from "express";

const response = {
  en: {
    "header.home": "home",
    "header.about": "about me",
    "header.education": "education",
    "header.contact": "contact",
    "home.name": "Aurelien Brachet",
    "home.fonction": "Javascript Developper",
    "about.title": "About me",
    "about.main": `Hi and welcome on my resume. I am called Aurelien. I am currently in fourth year in an engineering school located in France.
      I have acquired knowledges in computer sciences since the beginning of my studies. During the past 2 years I have gained interest towards web and mobile technologies.
      Indeed, I have learnt how to develop web and mobile application from basic HTML CSS applications to complex applications in ReactJS or React Native.
      I passed a two years technical degree 2 years ago (2014) dedicated in computer sciences, during those years I gained all the basic knowledges in computer sciences in many areas to continue my studies in an engineering school.
      I have the chance to have to do one internship every year in my actual school, this allowed me to gain a lot of experiences. I did one in Bordeaux, France, where I gained my first React Native skills.
      I chose to go abroad for my second internship, in the beautiful city of Prague in Czech Republic, where I improved a lot my english while being a Javascript developer there.
      As I just came back from a semester abroad in Scotland, I am free for any kind of work in JavaScript during this summer`,

    "error.nameNotProvided": "A name must be provided",
    "error.emailNotMatch": "A valid e-mail must be provided",
    "error.emailNotProvided": "An e-mail must be provided",
    "error.textareaNotProvided": "A message must be provided",
    "error.nameTooLong": "Your name must be no longer 16 characters",
    "error.textareaMax": "Your message must be no longer than 360 characters",

    "buttonContact.submit": "Submit",
    "formContact.contactMe": "Contact me",

    "formContact.spanName": "Name",
    "formContact.placeholderName": "Enter your name :",

    "formContact.spanEmail": "Email",
    "formContact.placeholderEmail": "Enter your email :",

    "formContact.spanTextarea": "Message",
    "formContact.placeholderTextarea": "Enter your message :",

    "education.education": "Education",
    "education.internship": "Internship",

    "internship.daltoner": "Trainee as a technician network",
    "daltoner.duree": "May 2015 - July 2015",
    "daltoner.lieu": "Avranches, France",
    "daltoner.description":
      "As a trainee, I was with a network technician. I went with him in companies and particulars to repear networks problems.",

    "internship.alizarine": "React Native trainee",
    "alizarine.duree": "January 2017 - April 2017",
    "alizarine.lieu": "Bordeaux",
    "alizarine.description": `Internship in mobile development, I had to learn from scratch how to use React Native and firebase.
      What I learnt during this internship :
      how to manage my time and to make productive work,
      how to speak with people without any knowledge in development,
      React Native, JS, ES6, Firebase.`,

    "internship.actum": "Full Stack javascript trainee",
    "actum.duree": "September 2017 - December 2017",
    "actum.lieu": "Prague, Czech Republic",
    "actum.description": `It was my first internship Abroad, as a React Native developer.\n I was working on an application called Regiojet in an international team. Regiojet is one of the leader in the transport market in Czech Republic. As they already had an old mobile application in React Native, they wanted to improve their design and functionalities to suits more the "modern needs" of an application.

During those 4 months I learnt a lot about myself. Indeed, I was alone in Prague and I had to do mostly everything on my own (finding an apartment and getting used to a foreign country), which was very challenging at first.

During the job, I was mostly programming in React Native. I learnt how to handle multi languages application, building complex search logic through a list and how to be accurate and write nice code with nice component in React Native with Redux.

I learnt advance notion in React like HOC and Functional programming and how to get familiar with a team with people from different country.`,

    "saintlo.ecole": "Institut Saint lô",
    "saintlo.duree": "September 2011 - June 2014",
    "saintlo.lieu": "Saint-Lô, France",
    "saintlo.description": "Baccalaureat, Scientifique with IT specialization",

    "lemonnier.ecole": "Institut Lemonnier",
    "lemonnier.duree": "September 2014 - June 2016",
    "lemonnier.lieu": "Caen, France",
    "lemonnier.description":
      "Two years technical degrees dedicated to computer sciences",

    "erasmus.ecole": "University West of Scotland",
    "erasmus.duree": "January 2018 - April 2018",
    "erasmus.lieu": "Paisley, United Kingdom",
    "erasmus.description":
      "One semester in erasmus in Paisley University with spec. Mobile development",

    "exia.ecole": "Exia Cesi",
    "exia.duree": "September 2016 - January 2019",
    "exia.lieu": "Bordeaux, France",
    "exia.description": "Computer Sciences Engineering School Spec. Development"
  },
  fr: {
    "header.home": "accueil",
    "header.about": "a propos",
    "header.education": "parcours",
    "header.contact": "contact",
    "home.name": "Aurelien Brachet",
    "home.fonction": "Développeur Javascript",
    "about.title": "A propos",

    "about.main": `Bonjour et bienvenue sur mon CV. Je m'appelle Aurélien, je suis en fin de 4ème année en école d'ingénieur en informatique, l’Exia Cesi à Bordeaux.
    J'ai acquis des compétences générales allant du développement d’application bureau au réseaux informatiques depuis le début de mes études. Mais c'est spécialement durant les deux dernières années que j’ai porté de l’intérêt pour les technologies du web et du mobile.
    En effet, j'ai appris comment développer une application classique avec la paire HTML/CSS jusqu'à des applications plus complexes en ReactJS ou React Native.
    J'ai passé un BTS en informatique il y a deux ans. Pendant ces deux années j'ai acquis toutes les compétences de base en informatique et dans d'autres domaines tel que les mathématiques pour pouvoir continuer mes études en école d'ingénieur.
    Nous devons faire un stage chaque année, ce qui m’a permis de développer des compétences professionnelles rapidement. J'ai fait mon premier stage à Bordeaux où j'ai appris à développer ma première application en React Native.
    Au cours de mon deuxième stage, je suis partit à Prague en République Tchèque pendant 4 mois chez ACTUM digital. Là-bas, j'étais stagiaire développeur Full Stack en React Native. Ce stage m’a apporté beaucoup de compétences en React Native, ainsi qu’une ouverture sociale et linguistique.
    Je viens tout juste de finir un semestre en Erasmus en écosse, spécialisé en développement mobile, je suis donc actuellement disponible pour pouvoir travailler cet été.`,

    "error.nameNotProvided": "Vous devez rentrer votre nom",
    "error.emailNotMatch": "Vous devez rentrer une adresse email valide",
    "error.emailNotProvided": "Vous devez rentrer une adresse email",
    "error.textareaNotProvided": "Vous devez rentrer un message",
    "error.nameTooLong": "Votre nom ne doit pas dépasser 16 charactères",
    "error.textareaMax": "Votre message ne doit pas dépasser 360 characters",

    "buttonContact.submit": "Envoyer",
    "formContact.contactMe": "Contactez moi",

    "formContact.spanName": "Nom",
    "formContact.placeholderName": "Entrez votre nom et prénom :",

    "formContact.spanEmail": "Email",
    "formContact.placeholderEmail": "Entrez votre email :",

    "formContact.spanTextarea": "Message",
    "formContact.placeholderTextarea": "Entrez votre message :",

    "education.education": "Scolarite",
    "education.internship": "Stages",

    "internship.actum": "Stagiaire Full Stack javascript developpeur",
    "actum.duree": "Septembre 2017 - Decembre 2017",
    "actum.lieu": "Prague, Tchéquie",
    "actum.description": `Ce stage a été mon premier stage à l'étranger, pendant ces 4 mois j'ai continué à améliorer mes compétences en React Native et ReactJS.
      Ce stage a été aussi un énorme challenge pour moi même, étant dans un environnement complétement étranger à la France, j'ai du considéramment améliorer mon anglais.`,

    "internship.alizarine": "Stagiaire React Native",
    "alizarine.duree": "Janvier 2017 - Avril 2017",
    "alizarine.lieu": "Bordeaux, France",
    "alizarine.description": `Pendant ces 4 mois j'ai travaillé comme stagiaire React Native, où j'ai pu commencer à développer en utilisant cette technologie.
      Ce stage a été un vrai challenge pour moi, j'ai du apprendre en un temps très court à apprendre une nouvelle technologie tout en développant une application.
      Néanmoins, l'application n'a pas été terminé. J'ai aussi du apprendre à créer un back-end avec Firebase.`,

    "internship.daltoner": "Stagiaire technicien réseau",
    "daltoner.duree": "Mai 2015 - Juillet 2015",
    "daltoner.lieu": "Avranches, France",
    "daltoner.description":
      "J'ai travaillé comme technicien réseau pendant ces deux mois",

    "saintlo.ecole": "Institut Saint lô",
    "saintlo.duree": "Septembre 2011 - Juin 2014",
    "saintlo.lieu": "Agneau, France",
    "saintlo.description":
      "Baccalaureat, Scientifique spécialisation Informatique",

    "lemonnier.ecole": "Institut Lemonnier",
    "lemonnier.duree": "Septembre 2014 - Juin 2016",
    "lemonnier.lieu": "Caen, France",
    "lemonnier.description": "BTS Sciences du numérique Informatique et réseau",

    "erasmus.ecole": "University West of Scotland",
    "erasmus.duree": "Janvier 2018 - Avril 2018",
    "erasmus.lieu": "Paisley, Royaume Unis",
    "erasmus.description":
      "Un semestre en Erasmus avec spécialisation développement mobile",

    "exia.ecole": "Exia Cesi",
    "exia.duree": "Septembre 2016 - Janvier 2019",
    "exia.lieu": "Bordeaux, France",
    "exia.description":
      "Ecole d'ingénieur en informatique spécialisation développement"
  },
  ru: {
    "header.home": "Главная страница",
    "header.about": "Обо мне",
    "header.education": "Образование",
    "header.contact": "Контакт",
    "home.name": "Орельен Браше",
    "home.fonction": "Программист JavaScript",
    "about.title": "Обо мне",

    "about.main": `Приветствую и добро пожаловать на мою страницу. Меня зовут Орельен. В настоящее время я на четвертом году обучения в инженерной школе во Франции.
      Я получал знания в области компьютерных наук с самого налача своего обучения. За последние два года я приобрел интерес к мобильным и веб-технологиям.
      В самом деле, я научился разрабатывать мобильные и веб-приложения из простого HTML CSS приложения в сложное ReactJS или React Native.
      Два года назад я окончил двухгодичную техническую степень, в течение этих лет я получил основные знания в сфере компьютерных наук и других областях, для продолжения своего обучения в инженерной школе.
    У меня есть возможность проходить стажировку каждый год от моей нженерной школы, что позволило мне приобрести больше опыта. Одна из них была в Бордо,  где я впервые получил опыт с React Nate.
      Вторая практика прошла заграницей, для этого я выбрал прекрасный город Прагу в Чешской республике, где я улучшил свой английский язык, работая разработчиком JavaScript.
      Мне действительно приносит удовольствие находиться в других странах и изучать иx культуру, и в данный момент я учусь в Шотландском университете, как студент Erasmus. Мое любопытство заставляет меня каждый день узнавать больше вещей о  React , для развития моих навыков.
      Сейчас я ищу стажировку в России на лето, где я смог бы развить также свои знания русского языка и навыки разработчика, создавая интересные приложения.`,
    "error.nameNotProvided": "Имя должно быть указано",
    "error.emailNotMatch":
      "Действительный электронный адрес должен быть указан",
    "error.emailNotProvided": "Электронный адрес должен быть указан",
    "error.textareaNotProvided": "Сообщение должно быть указано",
    "error.nameTooLong": "Должно быть меньше 16 символов",
    "error.textareaMax": "Ваше сообщение должно быть не больше 360 символов",

    "buttonContact.submit": "Отправить",
    "formContact.contactMe": "Свяжитесь со мной",

    "formContact.spanName": "Имя",
    "formContact.placeholderName": "Введите ваше имя :",

    "formContact.spanEmail": "Электронный адрес",
    "formContact.placeholderEmail": "Введите ваш електронный адрес :",

    "formContact.spanTextarea": "Сообщение",
    "formContact.placeholderTextarea": "Введите ваш текст :",

    "education.education": "Oбразование",
    "education.internship": "Опыт работы",

    "internship.daltoner": "Стажер в области технических сетей",
    "daltoner.duree": "Мая 2015 - Июль 2015",
    "daltoner.lieu": "Avranches (Авранш), Франция",
    "daltoner.description":
      "В течение этих двух месяцев я работал сетевым специалистом",

    "internship.alizarine": "Интерн-програмист React Native",
    "alizarine.duree": "Июнь 2017 - апрель 2017",
    "alizarine.lieu": "Bordeaux (Бордо), Франция",
    "alizarine.description":
      "Стажировка в мобильной разработке. Мне пришлось учиться с нуля как применять React Native и firebase. Я изучал как пользоваться этим фреймворком самостоятельно. Приложение,котрое я разработал, еще недоступно в магазинах. Но это состоит из социальной сети в которой пользователи могут регистрироваться и делиться потрясающими прогулочными маршрутами с Google картами и фотографиями.И конечно же, они могут общаться друг с другом в чате, а также получать уведомления когда кто-то посылает сообщение пользователю, или если кто-то оставил комментарий обо одном из маршрутов.",
    "internship.actum": "Интерн- программист Full stack JavaScript",
    "actum.duree": "Сентябрь 2017 - декабрь 2017",
    "actum.lieu": "Прага, Чешская Республика",
    "actum.description": "Интерн-программист Full stack JavaScript",

    "saintlo.ecole": "Institut Saint lô",
    "saintlo.duree": "2011 - 2014",
    "saintlo.lieu": "Agneau(Аньо), Франция",
    "saintlo.description": "научный бакалавриат",

    "lemonnier.ecole": "Institut Lemonnier",
    "lemonnier.duree": "2014 - 2016",
    "lemonnier.lieu": "Caen(Кан), Франция",
    "lemonnier.description":
      "двухгодичный технический диплом по специальности «Информатика»",

    "erasmus.ecole": "Université West of Scotland",
    "erasmus.duree": "Январь 2018 г.-апрель 2018",
    "erasmus.lieu": "Paisley, Великобритания",
    "erasmus.description": "Erasmus по специальности «Мобильная разработка»",

    "exia.ecole": "Exia Cesi",
    "exia.duree": "Сентябрь 2016 г.-по настоящее время",
    "exia.lieu": "Bordeaux (Бордо), Франция",
    "exia.description":
      "Инженерная школа по специальности «Разработка Software»"
  }
};

const translations = (req: Request, res: Response) => {
  res.json(response);
};

export default translations;
