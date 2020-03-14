import React, { PureComponent } from 'react'
import './NewsCard.scss'
class NewsCard extends PureComponent {
  render() {
    return (
      <section className='news-con'>
        
        <div className='news-title'>
            <div>LATEST <div className="news-txt-red"> NEWS</div></div>
        </div>
        
          <div className='news-card'>
            <img src="https://i.pinimg.com/564x/38/af/b4/38afb44a86fa3db0931e47881cf78b1f.jpg" alt=""/>
                <div className='flex-col'>
                  <h1>Creepeth you’re a behold heaven</h1>
                  <p>Abundantly brought blessed subdue in beginning blessed man image, sea likeness creeping. Air said Bring…</p>
                </div>
          </div>

          <div className='news-card'>
            <img src="https://i.pinimg.com/564x/fb/df/c4/fbdfc4a071552f30978d38f9d58e5e9e.jpg" alt=""/>
               <div className='flex-col'>
                <h1>Doesn’t bring moveth you’re was</h1>
                <p>All. Us kind don’t. Won’t them firmament night fly also give creature female them creature…</p>
              </div>
           </div>

           <div className='news-card'>
            <img src="https://i.pinimg.com/564x/fb/ee/e3/fbeee36dc212178e830886ae877b16f7.jpg" alt=""/>
               <div className='flex-col'>
                <h1>Tree set gathering moved place</h1>
                <p>His Brought green without stars seasons great itself all fly. Brought midst isn’t tree itself…</p>
              </div>
           </div>

           <div className='news-card'>
            <img src="https://i.pinimg.com/564x/ce/1b/c3/ce1bc3add00403effcee0216586ffb03.jpg" alt=""/>
               <div className='flex-col'>
                <h1>We found a witch! May we burn her?</h1>
                <p>Days. Heaven. Fruit fly and to, set heaven. Bearing which whose isn’t cattle kind moveth…</p>
              </div>
           </div>

      </section>
    )
  }
}

export default NewsCard
