import { Outlet } from "react-router";

export const Home = () => <>
  <h1>Home</h1>
  <Outlet />
</>;

export const News = () => <>
  <h1>News</h1>
  <Outlet />
</>;

export const About = () => <>
  <h1>About</h1>
  <Outlet />
</>;

export const HomeDiscription = () => <>
  <h1>HomeDiscription</h1>
  <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, repellendus quae fuga placeat iure sequi? Vero dolores pariatur adipisci omnis cum doloremque ducimus dolorem eos voluptates nemo sequi, iste culpa.</h2>
</>;

export const AboutDiscription = () => <>
  <h1>AboutDiscription</h1>
  <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo corrupti et vero, distinctio nostrum provident tenetur quas quam iusto deleniti qui exercitationem corporis alias ratione nihil, minus, reprehenderit numquam blanditiis.</h2>
</>;
