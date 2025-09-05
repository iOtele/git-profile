import mortin from "/images/mortin.png";
import gym from "/images/gym.png";
import yoni from "/images/yoni.png";

export const letters = [
  { char: "H", img: "images/person-img-1.jpg", rotate: "-rotate-15" },
  { char: "e", img: "images/person-img-2.jpg", rotate: "rotate-15" },
  { char: "l", img: "images/person-img-3.jpg", rotate: "-rotate-15" },
  { char: "l", img: "images/person-img-4.jpg", rotate: "rotate-15" },
  { char: "o", img: "images/person-img-5.jpg", rotate: "-rotate-15" },
];

export const professionTexts = [
  "a Front-End Developer",
  "a Web Developer ",
  "a Project Manager",
];

export const socialIcons = [
  { icon: "bx bxl-github", href: `https://www.github.com` },
  {
    icon: "bx bxl-linkedin",
    href: `https://www.linkedin.com/in/otele-olalekan/`,
  },
  { icon: "bx bxl-instagram-alt", href: `https://www.instagram.com` },
  { icon: "bx bxl-twitter", href: `https://www.x.com` },
];

export const aboutText = `I’m Olalekan Otele, a Front-End Developer who loves turning ideas into sleek, high-performance web apps. With a background in IT Support, I bring a problem-solving mindset to every project, blending technical precision with creativity to build seamless, user-friendly experiences.

I work with HTML, CSS, JavaScript, React, Tailwind CSS, and Next.js, and I’m diving into MongoDB to make apps even more dynamic. I focus on UI/UX-driven applications, landing pages, and business websites that are responsive, intuitive, and visually engaging.

I treat development like a mix of engineer and detective: optimizing performance, ensuring cross-device compatibility, and making every interaction smooth. My IT experience also helps me troubleshoot fast, manage workflows, and collaborate effectively.

Beyond coding, I’m a lifelong learner, exploring emerging tech, contributing to open-source projects, and mentoring aspiring developers. I also volunteer with the Lagos Food Bank Initiative and my church media team, sharpening leadership and teamwork skills along the way.

For me, web development isn’t just code — it’s solving real problems, building meaningful solutions, and creating digital experiences that leave a mark… with a little fun sprinkled in.`;

export const skillCards = [
  {
    icon: "bx bxs-file-doc",
    title: "Front-End Dev",
    description:
      "Front-end development is about bringing designs to life through clean and efficient code. I specialize in HTML, CSS, and JavaScript, along with frameworks like React to build dynamic and interactive web applications. My focus is on performance, accessibility, and responsiveness, ensuring that every website functions flawlessly across all devices and screen sizes.",
    projectCount: 4,
    hoverPosition: {
      large: "bottom",
      small: "bottom",
    },
  },

  {
    icon: "bx bxs-devices",
    title: "RWD",
    description:
      "In today's digital world, ensuring a seamless user experience across all devices is crucial. I implement responsive design techniques using modern CSS frameworks like Tailwind CSS and Bootstrap. By employing fluid grids, flexible layouts, and media queries, I create web pages that look great and function perfectly on desktops, tablets, and smartphones.",
    projectCount: 3,
    hoverPosition: {
      large: "bottom",
      small: "bottom",
    },
  },
  {
    icon: "bx bxl-github",
    title: "Git Version Control",
    description:
      "Version control is essential for modern web development, and Git is my go-to tool for managing code efficiently. I use GitHub for collaboration, handling pull requests, merging branches, and tracking project changes. Whether working solo or in a team, I ensure code is well-documented, structured, and easily maintainable through proper versioning practices. ",
    projectCount: 3,
    hoverPosition: {
      large: "bottom",
      small: "bottom",
    },
  },
  {
    icon: "bx bx-video",
    title: "Videography",
    description:
      "I create engaging video content that brings stories to life. From filming to editing, I focus on strong visuals, sound, and pacing to produce compelling videos that capture attention and enhance brand storytelling. Whether it's promotional videos, tutorials, or social media content, I ensure each project is polished and professional.",
    projectCount: 2,
    hoverPosition: {
      large: "top",
      small: "bottom",
    },
  },

  ,
  {
    icon: "bx bx-data",
    title: "Project Management",
    description:
      "I manage projects by aligning tasks, timelines, and teams to deliver results efficiently. With a focus on clear communication, organization, and problem-solving, I help ideas move smoothly from planning to execution. I use tools like Trello and Asana to keep everything on track, ensuring deadlines are met and goals are achieved.",
    projectCount: 3,
    hoverPosition: {
      large: "top",
      small: "bottom",
    },
  },
  {
    icon: "bx bx-film",
    title: "Video Editing ",
    description:
      "I edit videos that tell stories with clarity and creativity. Using Canva and CapCut, I craft clean cuts, smooth transitions, and engaging visuals tailored for social media and digital platforms. ",
    projectCount: 3,
    hoverPosition: {
      large: "top",
      small: "bottom",
    },
  },
];

export const projectCard = [
  {
    image: mortin,
    title: "Morgage Company ",
    description:
      "A mortgage loan website built with React and Tailwind CSS, using useContext for state management and API integration for loan applications, document uploads, and user data.",
    terminologies: ["React", "Tailwind css", "Github", "API"],
  },
  {
    image: gym,
    title: "Fitness Gym Website",
    description:
      "A fitness booking website built with React, CSS, and contact forms, featuring a responsive design for class scheduling, user interaction, and seamless bookings. ",
    terminologies: ["React", "CSS", "Github", "EmailJS"],
  },
  {
    image: yoni,
    title: "Hotel Booking Website",
    description:
      "A hotel booking website built with HTML, CSS, JavaScript, and Bootstrap, featuring a responsive interface with interactive booking forms and dynamic user experience ",
    terminologies: ["HMTL", "CSS", "Javascript", "Bootstrap"],
  },
];
