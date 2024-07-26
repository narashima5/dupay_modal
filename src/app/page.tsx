import Image from "next/image";
import Header from "./header/header";
import InfoCard from "./infocard/infocard";
import Features from "./features/featureCards";
import PayCard from "./dupayCard/dupayCard";
import PrivacyInfo from "./privacy/privacyInfo";
import MoreDetails from "./extraDetails/extraDetails";
import Footer from "./footer/footer";

export default function Home() {
  return (
    <>
     <Header></Header>
     <InfoCard></InfoCard>
     <Features></Features>
     <PayCard></PayCard>
     <PrivacyInfo></PrivacyInfo>
     <MoreDetails></MoreDetails>
     <Footer></Footer>
    </>
  );
}
