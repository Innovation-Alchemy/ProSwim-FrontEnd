import {
  Home,
  About,
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

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
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
  { path: "/", name: "Home" },
  { path: "/learn-to-swim", name: "Learn to Swim" },
  { path: "/shop", name: "Shop" },
  { path: "/about", name: "About" },
  { path: "/classes", name: "Classes" },
  { path: "/album", name: "Album" },
  { path: "/contact-us", name: "Contact Us" },
];

export const carouselImages = [
  { src: homeCarouselImage, alt: "Image 1", link: "/", hasButton: false },
  { src: homeCarouselImage2, alt: "Image 2", link: "/shop", hasButton: true },
  { src: homeCarouselImage, alt: "Image 3", link: "/", hasButton: false },
  { src: homeCarouselImage2, alt: "Image 4", link: "/shop", hasButton: true },
];

export const socialMediaLinks = [];
