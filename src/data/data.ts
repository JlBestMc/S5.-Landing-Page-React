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
