import { Header } from "./components/Header";
import ButtonSet from "./components/ButtonSet";
import MapHome from "./components/MapHome";

export default function Home() {
  return (
    <div className="w-full bg-white flex flex-col items-center">
      <Header />
      <ButtonSet />
      <MapHome />
    </div>
  );
}
