/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const menu = [
    { name: "About", name_alt: "О нас", link: "about" },
    { name: "Mission", name_alt: "Миссия", link: "mission" },
    { name: "Products", name_alt: "Продукты", link: "products" },
    { name: "Events", name_alt: "События", link: "events" },
    { name: "Contacts", name_alt: "Контакты", link: "contacts" },
  ]
  menu.forEach(item => {
    const node = {
      name: item.name,
      name_alt: item.name_alt,
      link: item.link,
      id: createNodeId(`Menu-${item.name}`),
      internal: {
        type: "Menu",
        contentDigest: createContentDigest(menu),
      },
    }
    actions.createNode(node)
  })

  const authors = [
    {
      name: "Aisha Orazalimova",
      name_alt: "Айша Оразалимова",
      age: 24,
      degree: "Bachelor in Finance, Master in PM and E-Commerce",
      position: "Frontline marketing manager",
      position_alt: "Маркетинг менеджер",
    },
    {
      name: "Gulbanu Matayeva",
      name_alt: "Гульбану Матаева",
      age: 23,
      degree: "Bachelor in Software Engineering, Master in PM and E-Commerce",
      position: "Frontline quality manager",
      position_alt: "Менеджер по качеству",
    },
    {
      name: "Taoufik Mouatasim",
      name_alt: "Тауфик Мутасим",
      age: 24,
      degree: "Bachelor in Finance, Master in PM and E-Commerce",
      position: "Functional communication manager",
      position_alt: "Менеджер по связи",
    },
  ]
  authors.forEach(author => {
    const node = {
      name: author.name,
      name_alt: author.name_alt,
      age: author.age,
      degree: author.degree,
      position: author.position,
      position_alt: author.position_alt,
      id: createNodeId(`Author-${author.name}`),
      internal: {
        type: "Author",
        contentDigest: createContentDigest(authors),
      },
    }
    actions.createNode(node)
  })

  const events = [
    {
      id: 0,
      name: "Networking",
      name_alt: "Нетворкинг",
      date: "2019-09-01T10:17:54.425Z",
      place: "Almaty",
      about:
        "We provide new opportunities for our participants to connect with each other for sharing ideas. This is perfect method to build empowerment of women",
      about_alt:
        "Мы предоставляем новые возможности для наших участников, чтобы общаться друг с другом для обмена идеями. Это идеальный метод для расширения возможностей женщин",
    },
    {
      id: 1,
      name: "Meetups",
      name_alt: "Встречи",
      date: "2019-09-25T10:17:54.425Z",
      place: "Nur-Sultan",
      about:
        "Presents small meetings in comfortable and free atmosphere. We will discuss on one topic which will be organized in light laid-back ambience.",
      about_alt:
        "Представляет небольшие встречи в уютной и свободной атмосфере. Мы обсудим одну тему, которая будет организована в легкой непринужденной обстановке.",
    },
    {
      id: 2,
      name: "Offline Masterclasses",
      name_alt: "Оффлайн Мастерклассы",
      date: "2019-08-20T10:17:54.425Z",
      place: "Almaty",
      about:
        "Professional sessions where people with compitents in narrow field of activity will introduce and explain concepts. Participants can ask any questions and get feedback which shows active way of interaction between participants and speakers.",
      about_alt:
        "Профессиональные занятия, на которых люди с ограничениями в узкой сфере деятельности представят и объяснят концепции. Участники могут задать любые вопросы и получить обратную связь, которая показывает активный способ взаимодействия между участниками и докладчиками.",
    },
  ]
  events.forEach(event => {
    const node = {
      name: event.name,
      name_alt: event.name_alt,
      age: event.age,
      date: event.date,
      place: event.place,
      about: event.about,
      about_alt: event.about_alt,
      id: createNodeId(`Event-${event.name}`),
      internal: {
        type: "Event",
        contentDigest: createContentDigest(events),
      },
    }
    actions.createNode(node)
  })

  const contacts = {
    town: "Almaty",
    town_alt: "Алматы",
    phone: "+77777777777",
    workingTime: "8:00am - 6:00pm",
    workingDays: "Monday - Friday",
    workingDays_alt: "Понедельник - Пятница",
    email: "info@wonderwomen.kz",
    social: [
      { name: "instagram", link: "https://instagram.com" },
      { name: "facebook", link: "https://facebook.com" },
      { name: "youtube", link: "https://youtube.com" },
      { name: "twitter", link: "https://twitter.com" },
    ],
  }
  const node = {
    town: contacts.town,
    town_alt: contacts.town_alt,
    phone: contacts.phone,
    workingTime: contacts.workingTime,
    workingDays: contacts.workingDays,
    workingDays_alt: contacts.workingDays_alt,
    email: contacts.email,
    social: contacts.social,
    id: createNodeId(`Contacts-${contacts.name}`),
    internal: {
      type: "Contacts",
      contentDigest: createContentDigest(contacts),
    },
  }
  actions.createNode(node)
}
