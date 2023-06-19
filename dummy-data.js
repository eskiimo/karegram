const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Programming for everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2021-05-12",
    image: "images/pic1.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Networking for introverts",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: "New Wall Street 5, 98765 New Work",
    date: "2021-05-30",
    image: "images/pic2.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "images/pic3.jpg",
    isFeatured: true,
  },
  {
    id: "e4",
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "images/pic3.jpg",
    isFeatured: true,
  },
  {
    id: "e5",
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "images/pic3.jpg",
    isFeatured: true,
  },
  {
    id: "e6",
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "images/pic3.jpg",
    isFeatured: true,
  },
  {
    id: "e7",
    title: "Programming for everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2021-05-12",
    image: "images/pic1.jpg",
    isFeatured: false,
  },
];
const DUMMY_USERS = [
  {
    id: "u1",
    username: "@__eskiimo",
    name: "kareem kamal",
    bio: "All Day I Dream ",
    avatar: "/images/avi.jpg",
    followings: [
      {
        id: "u2",
        username: "@komey",
        name: "Ahmad khattab",
        bio: " bas ya mohaza2 ",
        avatar: "",
        followings: "300",
        followers: "450",
        posts: [],
      },
      {
        id: "u3",
        username: "@khalil",
        name: "Amr khalil",
        bio: " premium",
        avatar: "",
        followings: "300",
        followers: "450",
        posts: [],
      },
    ],
    followers: [
      {
        id: "u2",
        username: "@komey",
        name: "Ahmad khattab",
        bio: " bas ya mohaza2 ",
        avatar: "",
        followings: "300",
        followers: "450",
        posts: [],
      },
    ],
    posts: [
      {
        id: "e1",
        title: "Programming for everyone",
        description:
          "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
        location: "Somestreet 25, 12345 San Somewhereo",
        date: "2021-05-12",
        image: "images/pic1.jpg",
        isFeatured: false,
      },
      {
        id: "e2",
        title: "Networking for introverts",
        description:
          "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
        location: "New Wall Street 5, 98765 New Work",
        date: "2021-05-30",
        image: "images/pic2.jpg",
        isFeatured: true,
      },
    ],
  },
  {
    id: "u2",
    username: "@komey",
    name: "Ahmad khattab",
    bio: " bas ya mohaza2 ",
    avatar: "",
    followings: "300",
    followers: "450",
    posts: [],
  },
  {
    id: "u3",
    username: "@khalil",
    name: "Amr khalil",
    bio: " premium",
    avatar: "",
    followings: "300",
    followers: "450",
    posts: [],
  },
];

export function getAllUsers() {
  return DUMMY_USERS;
}
export function getFollowings() {
  return DUMMY_USERS[0].followings;
}
export function getFollowers() {
  return DUMMY_USERS[0].followers;
}
export function getFilteredUsers(dateFilter) {
  console.log(dateFilter);
  const filteredUsers = DUMMY_USERS.filter(
    (user) => user.username === dateFilter
  );
  return filteredUsers;
}
export function getUserById(uid) {
  const identifiedUser = DUMMY_USERS.filter((user) => user.id == uid);
  // console.log(identifiedUser);
  return identifiedUser;
}

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
