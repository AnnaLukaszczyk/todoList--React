import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { Paragraph } from "./styled";

const Author = () => (
  <Container>
			<Header title="O autorze" />
			<Section 
      title="Anna Łukaszczyk" 
      body={<><Paragraph>Podobno nigdy nie jest za późno na zmiany... </Paragraph><Paragraph>Czy praca, która nie daje zupełnie żadnej satysfakcji, a tylko wysysa z człowieka wszelkie pokłady energii ma sens? Takiej pracy poświęciłam ponad 16 lat mojego życia i w końcu postanowiłam powiedzieć <strong>"DOŚĆ!"</strong> </Paragraph><Paragraph>Odkąd pamiętam lubiłam pracę przed komputerem. Fascynuje mnie Excel, który jest potężnym narzędziem np. do analizy danych. Hobbistycznie zaczęłam poznawać dodatek Power Query, który bardzo mi się spodobał i wtedy pomyślałam, że bardzo bym chciała zacząć czerpać radość z pracy, robić coś, co w końcu będzie powodowało uśmiech na mojej twarzy. Pomyślałam sobie, że jest mnóstwo ludzi, którzy lubią swoją pracę. Dlaczego miałabym nie być jedną z nich? To był ten moment kiedy postanowiłam dokonać poważnych zmian w moim życiu. Zupełnym przypadkiem trafiłam na darmowy krótki kurs HTML i CSS. Z racji tego, że lubię wyzwania postanowiłam wziąć w nim udział i potraktowałam to jako rozrywkę po ciężkim dniu w znienawidzonej przeze mnie pracy. Nie mogłam trafić lepiej! Ten mini kurs uświadomił mi, że chciałabym nauczyć się więcej niż tylko podstaw HTML i CSS. Chciałabym poznać język Java Script i zagłębić się w programowanie. I tak właśnie zaczęła się moja przygoda wielkich zmian. </Paragraph><Paragraph>Ostatnie kilka miesięcy poświęciłam na naukę. Z każdym dniem utwierdzam się w przekonaniu, że decyzja o zmianach była bardzo dobra. Jest tylko jedna rzecz, której żałuję: że nie zdecydowałam się na tą decyzję wcześniej 😉 Teraz wiem już na pewno co dawałoby mi ogrom radości, satysfakcji i spełnienia. Co byłoby połączeniem przyjemności z pożyteczną pracą. Tak, zdecydowanie zrobię wszystko aby udało mi się rozpocząć pracę jako <strong>programista!</strong></Paragraph></>} />
		</Container>
)

export default Author;