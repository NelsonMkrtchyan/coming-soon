const currentYear = new Date().getFullYear();
const data = {
    sitename: "CardioLab",
    sitetagline: "The Art of Heart Care",
    siteurl: "https://cardiolab.am",
    sitelogo: "",
    title: "Coming Soon!",
    // description: "We&apos;re currently working 👨‍💻 hard to bring you something great, and we can&apos;t wait to share it with you 📅. Our team is putting the finishing touches on a new project 🚀 that we think you&apos;ll love 😍.",
    description: "We&apos;re currently working 👨‍💻 hard to bring you something great. Our team is putting the finishing touches on a new project 🚀",
    newsletterheading: "Email",
    copyrightText: `Copyright © ${currentYear}`,
    socialIconsHeading: "Follow Us 📣",
    hideSubscribeForm: false, // make true to disable subscription form
    socialIcons: [
        {
            icon: "facebook",
            link: "https://www.facebook.com/profile.php?id=61566450466884",
        },
        {
            icon: "Instagram",
            link: "https://www.instagram.com/cardiolab.armenia/",
        },
    ],
    hide :{
        subscribeForm: false, // make true to disable subscription form
        header: false,
        content: false,
        footer: false,
    }
}

export default data;
