import './index.css'
import { Header } from './layout/header'
import data from './data/data'
import { Banner } from './components/banner/banner'
import { Card } from './components/card/card'
// import { Tab } from './components/tab/Tab'
import { Footer } from './layout/footer/footer'
import Links from './layout/footer/links'
function App() {

  return (
    <>
   <Header data={data.header} />
   <Banner/>
   <Card data={data.cards}/>
   {/* <Tab data={data.tabs}/> */}
   <Footer/>
   <Links/>
    </>
  )
}

export default App
