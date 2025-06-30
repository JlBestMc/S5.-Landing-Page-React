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

export const FAQS: Dropdown[] = [
  {
    question: "What is Bookmark Manager?",
    answer:
      "Bookmark Manager is a browser extension that allows you to easily manage and organize your bookmarks. You can save, edit, and share your bookmarks with just a few clicks.",
  },
  {
    question: "How do I install Bookmark Manager?",
    answer:
      'You can install Bookmark Manager from the Chrome Web Store, Firefox Add-ons, or Opera Add-ons. Simply search for "Bookmark Manager" and click "Add to Browser".',
  },
  {
    question: "Is Bookmark Manager free?",
    answer:
      "Yes, Bookmark Manager is completely free to use. There are no hidden fees or subscriptions required.",
  },
  {
    question: "Can I sync my bookmarks across devices?",
    answer:
      "Yes, Bookmark Manager allows you to sync your bookmarks across all your devices. Just log in with your account and your bookmarks will be available everywhere.",
  },
  {
    question: "Is there a mobile version of Bookmark Manager?",
    answer:
      "Currently, Bookmark Manager is available as a browser extension for desktop browsers. A mobile version is in development and will be released soon.",
  },
];
