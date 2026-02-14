// import Addtwonum from "./components/Addtwonum";
// import ChildTwo from "./components/ChildTwo";
// import { AppProvider } from "./components/Appcontext";
// import UsestateUseEffectDemo from "./components/UsestateUseEffectDemo";
// import ScrollPage from "./components/ScrollPage";
// import WelcomeUser from "./components/WelcomeUser";
// import Classdemo from "./components/Classdemo";
// import BlogPage from "./blog/page";

// export default function Page() {
//   return (
//     <main className="min-h-screen flex items-center justify-center bg-black-200">
//       {/* <AppProvider>
//         <ChildTwo />
//       </AppProvider>
//       <WelcomeUser name="Sowmya" city="Nellore" />
//       <Classdemo fname="Sowmya" lname="Sri" /> */}
//       <BlogPage/>
//     </main>
//   );
// }


//products
import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/products");
}
//products

