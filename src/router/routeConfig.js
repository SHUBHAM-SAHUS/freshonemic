// import Home from "components/HomepageLayout/Home";
import NewHome from "components/NewHomePage/NewHome";
import { PostDetails } from "components/PostDetailsLayout/PostDetails";
import { Section } from "components/Section/Section";
import { TopicDetails } from "components/TopicDetailsLayout/TopicDetails";
import { SectionDownvoted } from "components/SectionDownvoted/SectionDownvoted"
import { LandingPageLayout } from "components/LandingpageLayout/LandingPageLayout";
import { UserSignupPage } from "components/Signuppage/UserSignupPage";

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
    path: "/",
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
    path: "/landing",
    component: LandingPageLayout ,
    exact: true,
  },

  {
    key: "signuppage",
    path: "/signup",
    component: UserSignupPage,
    exact: true,
  }



];

export const privateRoutes = [];
