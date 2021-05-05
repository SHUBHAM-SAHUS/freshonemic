// import Home from "components/HomepageLayout/Home";
import NewHome from "components/NewHomePage/NewHome";
import { PostDetails } from "components/PostDetailsLayout/PostDetails";
import { Section } from "components/Section/Section";
import { TopicDetails } from "components/TopicDetailsLayout/TopicDetails";
import { SectionDownvoted } from "components/SectionDownvoted/SectionDownvoted"
import { LandingPageLayout } from "components/LandingpageLayout/LandingPageLayout";
import { UserSignupPage } from "components/Signuppage/UserSignupPage";
import { VerifyPage } from "components/VerifyPage/VerifyPage";
import { Recommendations } from "componenttwo/RecomendationLayout/recommendationmainpage/Recommendations";
import { VisitorStation } from "components/VisitorStation/VisitorStation";
import { SignUp } from "components/SignUp/SignUp";
import { LoginPage } from "components/LoginPage/LoginPage";

<UserSignupPage/>

//private routes

export const publicRoutes = [
  // {
  //   key: "home",
  //   path: "/",
  //   component: Home,
  //   exact: true,
  // },
  {
    key: "newhome",
    path: "/home",
    component: NewHome,
    exact: true,
  },

  {
    key: "postdetailskey",
    path: "/post-details",
    component: PostDetails,
    exact: true,
  },
  {
    key: "topicdetailskey",
    path: "/topic-details",
    component: TopicDetails,
    exact: true,
  },
  {
    key: "section",
    path: "/section",
    component: Section,
    exact: true,
  },
  {
    key: "sectiondownvotedkey",
    path: "/section-downvoted",
    component: SectionDownvoted,
    exact: true,
  },

  {
    key: "landding",
    path: "/",
    component: LandingPageLayout ,
    exact: true,
  },

  {
    key: "signuppage",
    path: "/signup",
    component: SignUp,
    exact: true,
  },
  {
    key: "signinpage",
    path: "/signin",
    component: LoginPage,
    exact: true,
  },
  {
    key: "verifypage",
    path: "/verify",
    component: VerifyPage,
    exact: true,
  },
  {
    key: "recommended",
    path: "/recommendations",
    component: Recommendations,
    exact: true,
  },
  {
    key: "visitorstation",
    path: "/visitor-station",
    component: VisitorStation,
    exact: true,
  },
  




];

export const privateRoutes = [];
