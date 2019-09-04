/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const menu = [
    { name: "About", link: "about" },
    { name: "Mission", link: "mission" },
    { name: "Products", link: "products" },
    { name: "Events", link: "events" },
    { name: "Contacts", link: "contacts" },
  ]
  menu.forEach(item => {
    const node = {
      name: item.name,
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
      age: 24,
      degree: "Bachelor in Finance, Master in PM and E-Commerce",
      position: "Frontline marketing manager",
    },
    {
      name: "Gulbanu Matayeva",
      age: 23,
      degree: "Bachelor in Software Engineering, Master in PM and E-Commerce",
      position: "Frontline quality manager",
    },
    {
      name: "Taofik Mouatasim",
      age: 24,
      degree: "Bachelor in Finance, Master in PM and E-Commerce",
      position: "Functional communication manager",
    },
  ]
  authors.forEach(author => {
    const node = {
      name: author.name,
      age: author.age,
      degree: author.degree,
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
      date: "2019-09-01T10:17:54.425Z",
      place: "Almaty",
      about: "lorem12 ",
    },
    {
      id: 1,
      name: "Meetups",
      date: "2019-09-25T10:17:54.425Z",
      place: "Nur-Sultan",
      about: "jkasfagah;gahsfdjsahlighdalfh asdhlauhfajkfsdlvjks ",
    },
    {
      id: 2,
      name: "Offline Masterclasses",
      date: "2019-08-20T10:17:54.425Z",
      place: "Almaty",
      about:
        "asfofgjsod vjisd;ijvs;ofijsd ;fijsdofhs dliufhaiufl siufhas fuhasluifha liuhg ",
    },
  ]
  events.forEach(event => {
    const node = {
      name: event.name,
      age: event.age,
      date: event.date,
      place: event.place,
      about: event.about,
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
    phone: "+77777777777",
    workingTime: "8:00am - 6:00pm",
    workingDays: "Monday - Friday",
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
    phone: contacts.phone,
    workingTime: contacts.workingTime,
    workingDays: contacts.workingDays,
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
