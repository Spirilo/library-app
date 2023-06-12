import { TopList } from "../components/TopList"

export const MainPage = () => {

  return(
    <div className="grid-container">
      <div className="main">
        <h2>Tervetuloa kirjastoon</h2>
        <p>Voit lainata kirjoja kirjat osiosta ja hakea kirjoja nimen perusteella.</p>
        <p>Kirjailijoiden alta löydät kaikki kirjailijat ja heidän kirjansa.</p>
        <p>Omat lainat sivulta näet myös kaikki tällä hetkellä lainassasi olevat kirjat.</p>
      </div>
      <div className="main">
        <TopList />
      </div>
    </div>
  )
}