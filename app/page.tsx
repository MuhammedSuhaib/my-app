import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import Team from "@/components/Team";
import Layout from "@/components/Layout";
import Blog from   "@/components/Blog";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Logo />
      <Team />
      <Layout />
      <Blog />
    </div>
  );
}
