import React, { PureComponent } from 'react'
import './NewsCard.scss'
class NewsCard extends PureComponent {

  state = {
    cards: [
        {
            name: 'card1',
            src: 'https://i.pinimg.com/564x/38/af/b4/38afb44a86fa3db0931e47881cf78b1f.jpg',
            title: 'Creepeth you’re a behold heaven',
            description: 'Abundantly brought blessed subdue in beginning blessed man image, sea likeness creeping. Air said Bring…',
        },
        {
          name: 'card2',
          src: 'https://i.pinimg.com/564x/fb/df/c4/fbdfc4a071552f30978d38f9d58e5e9e.jpg',
          title: 'Doesn’t bring moveth you’re was',
          description: 'All. Us kind don’t. Won’t them firmament night fly also give creature female them creature…',
      },
      {
        name: 'card3',
        src: 'https://i.pinimg.com/564x/fb/ee/e3/fbeee36dc212178e830886ae877b16f7.jpg',
        title: 'Tree set gathering moved place',
        description: 'His Brought green without stars seasons great itself all fly. Brought midst isn’t tree itself…',
    },
    {
      name: 'card4',
      src: 'https://i.pinimg.com/564x/ce/1b/c3/ce1bc3add00403effcee0216586ffb03.jpg',
      title: 'We found a witch! May we burn her?',
      description: 'Days. Heaven. Fruit fly and to, set heaven. Bearing which whose isn’t cattle kind moveth…',
  },        
    ]
}

  render() {

      let cards = this.state.cards.map(card => {
        return (
          <div className='news-card' key="card.src">
              <img src={ card.src } alt=""/>
                  <div className='flex-col'>
                    <h1>{ card.title }</h1>
                    <p>{ card.description }</p>
                  </div>
            </div>
          )
      })

    return (
      <section className='news-con'>
        <div className='news-title'>
            <div>LATEST <div className="news-txt-red"> NEWS</div></div>
        </div>
        <div>{ cards }</div>
        

      </section>
    )
  }
}

export default NewsCard
