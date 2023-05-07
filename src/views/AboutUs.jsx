import React from "react";
import gfc from "../images/GFC.jpg";
import ourvision from '../images/ourvision.jpg'
import "../styles/aboutus.css";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="container">
      <title>GFC | About Us</title>
      <h1 className="heading">ABOUT US</h1>
      <div className="section">
        <p>
          E themeluar në vitin 2007, në Denver, CO, Smashburger i parë u hap me
          një ide të vetme në mendje; për të shërbyer një burger më të mirë dhe,
          në këtë proces, ndihmoi në krijimin e një kategorie të re. Çdo
          kafshatë një përvojë më e mirë e burgerit është e njohur për teknikën
          e tyre të thumbimit të një hamburgerie – duke thyer një top mishi të
          freskët, asnjëherë të ngrirë, 100% të certifikuar Angus Beef të
          paketuar me dorë në një skarë me erëza të nxehtë – duke ofruar një
          përvojë të lartë hamburgeri, ku bëhet çdo kafshatë. për të shijuar.
          <br></br>
          Me një mesatare prej 20 dyqanesh të reja që hapen çdo vit, Smashburger
          jep një shije të guximshme, të paharrueshme dhe të ngjashme përmes
          obsesionit tonë me procesin e kuzhinës së krijimit të burgerëve.
          Menuja jonë përmban 100% Burgera Angus të Certifikuar të Mishit të
          pjekur në skarë në një kuzhinë të hapur lehtësisht të shikueshme nga
          klientët, duke ofruar opsione të veçanta si Classic Smash, Double
          Bacon Smash, Smoked Bacon Brisket Burger, në linjë së bashku me
          sanduiçe pule të pjekura në skarë dhe krokante, gjeldeti<br></br>
        </p>
        <img src={gfc}></img>
      </div>
      <h1 className="heading">OUR VISION</h1>
      <div className="section">
        <img src={ourvision}></img>
        <p >
          Ne duam të jemi restoranti më i mirë i burgerëve për gjeneratën e
          ardhshme të adhuruesve të hamburgerëve. Për ta bërë këtë, kërkohet
          gjithçka që marka Smashburger përfaqëson: përbërësit e cilësisë më të
          lartë; një teknikë e jashtëzakonshme e kuzhinës "shpërthyese"; receta
          të kuruara moderne, të frymëzuara; dhe shumëllojshmëri menuje që kënaq
          pothuajse të gjitha rastet dhe situatat.
          <br />
          Nga Angus Beef® i freskët, asnjëherë i ngrirë 100% i certifikuar, i
          copëtuar, i kalitur dhe i pjekur në skarë deri te simitet tona
          artizanale të pjekura me gjalpë dhe djathrat, mbushjet dhe salcat tona
          cilësore, shija e shijshme e një Smashburger përcakton se çfarë duhet
          të ketë një burger i shkëlqyer. bëhu… dhe je një kafshatë larg
          besimit!
          <br />
          Shtoni shumëllojshmërinë tonë të ushqimeve të pulës, gjelit të detit
          ose fasuleve të zeza, sallatave, palave të veçanta, shakes të bëra me
          dorë me akullore Häagen-Dazs® dhe shërbimin tonë të përshtatshëm dhe
          prezantimet me cilësi të restorantit, ne jemi të bindur se Smashburger
          do të jetë restoranti i hamburgerëve të së ardhmes.
        </p>
      </div>
      <h1 className="heading ">OUR SERVICE</h1>
      <div className="section">
        <p>
          Çfarë mund të shtoni në menunë e shkëlqyer të shijimit të Smashburger?
          Lehtë! Një nivel i lartë shërbimi dhe një mjedis i qetë që ju lejon ta
          shijoni atë.
          <br />
          Bëjeni Smashburger-in tuaj të preferuar për një sërë rastesh, një
          drekë të shpejtë, një mbrëmje takimi, darkë familjare, madje edhe
          ngjarje ekipore pas lojës. Shërbimi ynë fillon në sportelin tonë
          miqësor ku bëni porosinë tuaj. Pas kësaj, gjithçka varet nga ne.
          Merrni një tavolinë dhe ne do t'jua dërgojmë ushqimin tuaj. Ne i
          shërbejmë të gjitha ushqimet tona në stilin e restorantit.
          Milkshake-ët tanë të spërkatur me dorë të bëra me akullore
          Häagen-Dazs® shërbehen në gota parfe të ngrira me kallaj anash. Edhe
          birrat tona shërbehen në gota birre të ngrira.
          <br />
          Dizajni më i ri i Smashburger është përkthyer në një përvojë të re, më
          të menduar dhe të ngritur për mysafirët tanë. Ne hapëm pamjet në
          kuzhinë (ku ndodh goditja!) dhe vendosëm fjalë për fjalë zbardhuesit
          në mënyrë që ata të rinj në përvojën Smash të mund të shohin se si
          është bërë. Shijoni një burger të shijshëm në përvojën tonë të
          rehatshme të ngrënies që është plotësuesi i përsosur i ushqimit tonë
          të mrekullueshëm.
        </p>
        <img src={gfc}></img>
      </div>

      <h1 className="contactus">CONTACT US</h1>
      <p className="paragraph">Keni pyetje, sugjerime apo shqetësime? Ne jemi këtu për ju.</p>
      <Link to='/contactus'>
        <button className="btn btn1 btn-outline-warning">Contact us</button>
      </Link>
    </div>
  );
}
