import {
  Home,
  // AA Start -----------
  // levels:
  Aquababy_levels,
  ActiveStart,
  LearnToTrain_levels,
  TrainToTrain,
  TrainToCompete,
  CompetitiveTeam,
  ProgressMonitoring,
  // AboutUs:
  AboutUs,
  WhyUs,
  OurLogo,
  Ethos,
  // Classes:
  WaterSafety,
  SwimmingBenefits,
  LearnToSwim,
  Aquababy_classes,
  AquaMermaid,
  AquaGym,
  SpecialClasses,
  PrivateClasses,
  GroupClasses,
  Adults,
  LadiesOnly,

  // AA End -----------
  Cart,
  Checkout,
  ProductDetails,
  Dashboard,
  Login,
  Signup,
  Feedback,
  PhotoGallery,
  ProSwimmers,
  Shop,
  VerifyAccount,
  VideoGallery,
  Videos,
} from "@/pages";

import { homeCarouselImage, homeCarouselImage2 } from "@/assets";
import path from "path";
// import AquaBaby from "@/pages/Aquababy";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about-us",
    component: AboutUs,
  },
  {
    path: "/about-us/Why-Us",
    component: WhyUs,
  },
  {
    path: "/about-us/Our-Logo",
    component: OurLogo,
  },
  {
    path: "/about-us/ethos",
    component: Ethos,
  },
  // AA Start
  {
    path: "/learn-to-swim/progress-monitoring",
    component: ProgressMonitoring,
  },
  {
    path: "/learn-to-swim/levels/aquababy",
    component: Aquababy_levels, // AA CHANGE cuz diff comp GO BACK TO
  }
  , {
    path: "/learn-to-swim/levels/active-start",
    component: ActiveStart,
  }
  , {
    path: "/learn-to-swim/levels/learn-to-train",
    component: LearnToTrain_levels,
  },
  {
    path: "/learn-to-swim/levels/train-to-train",
    component: TrainToTrain,
  },
  {
    path: "/learn-to-swim/levels/train-to-compete",
    component: TrainToCompete,
  },
  {
    path: "/learn-to-swim/levels/competitive-team",
    component: CompetitiveTeam,
  },
  // Classes:
  {
    path: "/classes/water-safety",
    component: WaterSafety,
  },
  {
    path: "/classes/swimming-benefits",
    component: SwimmingBenefits,
  },
  {
    path: "/classes/learn-to-swim",
    component: LearnToSwim,
  },
  {
    path: "/classes/aquababy",
    component: Aquababy_classes,
  },

  {
    path: "/classes/aqua-mermaid",
    component: AquaMermaid,
  },
  {
    path: "/classes/aquagym",
    component: AquaGym,
  },
  {
    path: "/classes/special-classes",
    component: SpecialClasses,
  },
  {
    path: "/classes/private-classes",
    component: PrivateClasses,
  },
  {
    path: "/classes/group-classes",
    component: GroupClasses,
  },
  {
    path: "/classes/adults",
    component: Adults,
  },
  {
    path: "/classes/ladies-only",
    component: LadiesOnly,
  },
  // AA End
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/shop/checkout",
    component: Checkout,
  },
  {
    path: "/shop/product-details",
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
    component: LearnToSwim,
  },
  {
    path: "/photo-gallery",
    component: PhotoGallery,
  },
  {
    path: "/album/pro-swimmers",
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
          { name: "Aquababy", path: "/learn-to-swim/levels/aquababy" },
          { name: "Active Start", path: "/learn-to-swim/levels/active-start" },
          { name: "Learn To Train", path: "/learn-to-swim/levels/learn-to-train" },
          { name: "Train To Train", path: "/learn-to-swim/levels/train-to-train" },
          { name: "Train To Compete", path: "/learn-to-swim/levels/train-to-compete" },
          { name: "Competitive Team", path: "/learn-to-swim/levels/competitive-team" }]
      },
      { name: "Progress Monitoring", path: "/learn-to-swim/progress-monitoring" }
    ]
  },
  {
    path: "/shop",
    name: "Shop",
  },
  {
    name: "About Us",
    pageChildren: [
      { name: "About Us", path: "/about-us" },  // Add paths for sub-pages
      { name: "Why Us?", path: "/about-us/why-us" },
      { name: "Our Logo", path: "/about-us/our-logo" },
      { name: "Ethos", path: "/about-us/ethos" }
    ]
  },
  {
    name: "Classes",
    pageChildren: [
      { name: "Water Safety", path: "/classes/water-safety" },
      { name: "Swimming Benefits", path: "/classes/swimming-benefits" },
      { name: "Private Classes", path: "/classes/private-classes" },
      { name: "Group Classes", path: "/classes/group-classes" },
      { name: "Learn To Swim", path: "/classes/learn-to-swim" },
      { name: "Aqua Baby", path: "/classes/aquababy" },
      { name: "Aqua Mermaid", path: "/classes/aqua-mermaid" },
      { name: "Aqua Gym", path: "/classes/aquagym" }, // AA GO BACK TO should have children
      { name: "Special Classes", path: "/classes/special-classes" }, // AA GO BACK TO should have children
      { name: "Adults", path: "/classes/adults" },
      { name: "Ladies Only", path: "/classes/ladies-only" },
    ]
  },
  {
    name: "Album",
    pageChildren: [
      { name: "ProSwimmers", path: "/album/pro-swimmers" },
      { name: "Wall Of Fame", path: "/album/wall-of-fame" },
      { name: "Press Releases", path: "/album/press-releases" },
      { name: "Aqua Baby", path: "/album/aqua-baby" },
      { name: "Gallery", path: "/lbum/gallery" },
      { name: "Videos", path: "/album/videos" }
    ]
  },
  {
    name: "Contact Us",
    pageChildren: [
      { name: "Locations", path: "/Contact-Us/Locations" },
      { name: "Your Feedback", path: "/Contact-Us/Your-Feedback" },
      { name: "FAQ", path: "/Contact-Us/FAQ" },
      { name: "Policies", path: "/Contact-Us/Policies" },
      { name: "Rules & procedures", path: "/Contact-Us/Rules-&-procedures" },
    ]
  },
];

export const carouselImages = [
  { src: homeCarouselImage, alt: "Image 1", link: "/", hasButton: false },
  { src: homeCarouselImage2, alt: "Image 2", link: "/shop", hasButton: true },
  { src: homeCarouselImage, alt: "Image 3", link: "/", hasButton: false },
  { src: homeCarouselImage2, alt: "Image 4", link: "/shop", hasButton: true },
];

export const socialMediaLinks = [];
