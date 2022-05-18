import { Back } from ".";
import { NavMenuLink } from "./NavMenuLink";

export const Home = () => <>
  <h1>Home</h1>
  <NavMenuLink to='discription' >discription</NavMenuLink>
  <Back />
</>;

export const News = () => <>
  <h1>News</h1>
  <NavMenuLink to='1' >News list</NavMenuLink>
  <Back />
</>;

export const About = () => <>
  <h1>About</h1>
  <NavMenuLink to='discription' >discription</NavMenuLink>
  <Back />
</>;

export const HomeDiscription = () => <>
  <h1>Home Discription</h1>
  <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, repellendus quae fuga placeat iure sequi? Vero dolores pariatur adipisci omnis cum doloremque ducimus dolorem eos voluptates nemo sequi, iste culpa.</h2>
</>;

export const AboutDiscription = () => <>
  <h1>About Discription</h1>
  <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo corrupti et vero, distinctio nostrum provident tenetur quas quam iusto deleniti qui exercitationem corporis alias ratione nihil, minus, reprehenderit numquam blanditiis.</h2>
</>;
