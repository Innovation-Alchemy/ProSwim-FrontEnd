import {
  Home,
  // AA Start
  Aquababy,
  ActiveStart,
  LearnToTrain,
  TrainToTrain,
  TrainToCompete,
  CompetitiveTeam,
  ProgressMonitoring,
  AboutUs,
  WhyUs,
  OurLogo,
  Ethos,
  // AA End
  Cart,
  Checkout,
  ProductDetails,
  Dashboard,
  Login,
  Signup,
  Feedback,
  LearnSwim,
  PhotoGallery,
  ProSwimmers,
  Shop,
  VerifyAccount,
  VideoGallery,
  Videos,
} from "@/pages";

import { homeCarouselImage, homeCarouselImage2 } from "@/assets";
import path from "path";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/About-Us",
    component: AboutUs,
  },
  {
    path: "/Why-Us",
    component: WhyUs,
  },
  {
    path: "/Our-Logo",
    component: OurLogo,
  },
  {
    path: "/ethos",
    component: Ethos,
  },
  // AA Start
  {
    path: "/progress-monitoring",
    component: ProgressMonitoring,
  },
  {
    path: "/aquababy",
    component: Aquababy,
  }
  , {
    path: "/active-start",
    component: ActiveStart,
  }
  , {
    path: "/learn-to-train",
    component: LearnToTrain,
  },
  {
    path: "/train-to-train",
    component: TrainToTrain,
  },
  {
    path: "/train-to-compete",
    component: TrainToCompete,
  },
  {
    path: "/competitive-team",
    component: CompetitiveTeam,
  },
  // AA End
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/checkout",
    component: Checkout,
  },
  {
    path: "/product-details",
    component: ProductDetails,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/feedback",
    component: Feedback,
  },
  {
    path: "/learn-to-swim",
    component: LearnSwim,
  },
  {
    path: "/photo-gallery",
    component: PhotoGallery,
  },
  {
    path: "/pro-swimmers",
    component: ProSwimmers,
  },
  {
    path: "/shop",
    component: Shop,
  },
  {
    path: "/video-gallery",
    component: VideoGallery,
  },
  {
    path: "/videos",
    component: Videos,
  },
];

export const authRoutes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/verify-account",
    component: VerifyAccount,
  },
];

export const links = [
  {
    path: "/",
    name: "Home"
  },
  {
    name: "Learn to Swim",
    pageChildren: [
      {
        name: "Levels", subChildren: [
          { name: "Aquababy", path: "/aquababy" },
          { name: "Active Start", path: "/active-start" },
          { name: "Learn To Train", path: "/learn-to-train" },
          { name: "Train To Train", path: "/train-to-train" },
          { name: "Train To Compete", path: "/train-to-compete" },
          { name: "Competitive Team", path: "/competitive-team" }]
      },
      { name: "Progress Monitoring", path: "/progress-monitoring" }
    ]
  },
  {
    path: "/shop",
    name: "Shop",
  },
  {
    name: "About",
    pageChildren: [
      { name: "About Us", path: "/about-us" },  // Add paths for sub-pages
      { name: "Why Us?", path: "/why-us" },
      { name: "Our Logo", path: "/our-logo" },
      { name: "Ethos", path: "/ethos" }
    ]
  },
  {
    name: "Classes",
    pageChildren: [
      { name: "Water Safety", path: "/water-safety" },  // Add paths for sub-pages
      { name: "Swimming Benefits", path: "/swimming-benefits" },
      { name: "Learn To Swim", path: "/learn-to-swim" },
      { name: "Aqua Baby", path: "/aqua-baby" },
      { name: "Aqua Mermaid", path: "/aqua-mermaid" },
      { name: "AquaGym", path: "/aquagym" },
      { name: "Special Classes", path: "/special-classes" }
    ]
  },
  {
    // path: "/album", AA GO BACK TO
    name: "Album",
    pageChildren: ["ProSwimmers", "Wall Of Fame", "Press Releases", "Gallery", "Videos"]
  },
  {
    // path: "/contact-us", AA GO BACK TO
    name: "Contact Us",
    pageChildren: ["Locations", "Your Feedback", "FAQ", "Policies", "Rules & procedures"]
  },
];

export const carouselImages = [
  { src: homeCarouselImage, alt: "Image 1", link: "/", hasButton: false },
  { src: homeCarouselImage2, alt: "Image 2", link: "/shop", hasButton: true },
  { src: homeCarouselImage, alt: "Image 3", link: "/", hasButton: false },
  { src: homeCarouselImage2, alt: "Image 4", link: "/shop", hasButton: true },
];

export const socialMediaLinks = [];
