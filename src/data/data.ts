import imageFeature1 from "../assets/illustration-features-tab-1.svg";
import imageFeature2 from "../assets/illustration-features-tab-2.svg";
import imageFeature3 from "../assets/illustration-features-tab-3.svg";

export interface Feature {
  tabTitle: string;
  titleFeature: string;
  image: string;
  description: string;
}

export const FEATURES: Record<string, Feature> = {
  Booking: {
    tabTitle: "Simple Booking",
    titleFeature: "Bookmark in one click",
    image: imageFeature1,
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.",
  },
  Search: {
    tabTitle: "Speedy Searching",
    titleFeature: "Intelligent search",
    image: imageFeature2,
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  Share: {
    tabTitle: "Easy Sharing",
    titleFeature: "Share your bookmarks",
    image: imageFeature3,
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
};

export interface Dropdown {
  question: string;
  answer: string;
}

export const FAQS: Dropdown[] = [
  {
    question: "What is Bookmark?",
    answer:
      "Bookmark Manager is a browser extension that allows you to easily manage and organize your bookmarks. You can save, edit, and share your bookmarks with just a few clicks.",
  },
  {
    question: "How can I request a new browser?",
    answer:
      'To request a new browser, please visit our support page and fill out the request form. We are constantly working to add support for more browsers.',
  },
  {
    question: "Is there a mobile version of Bookmark Manager?",
    answer:
      "Currently, Bookmark Manager is available as a browser extension for desktop browsers. A mobile version is in development and will be released soon.",
  },
  {
    question: "What about other Chromium browsers?",
    answer:
      "Bookmark Manager is designed to work with all major Chromium-based browsers, including Google Chrome, Microsoft Edge, and Brave. If you encounter any issues, please contact our support team.",
  },
  {
    question: "Is Bookmark Manager free?",
    answer:
      "Yes, Bookmark Manager is completely free to use. There are no hidden fees or subscriptions required.",
  },
  
];
