import React, { PureComponent } from 'react'
import './LeaderBoardsCards.scss'

class LeaderBoardsCard extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <section className='leader-boards-con'>

               <div className='leader-title'>
                    <div>LEADER <div className="leader-txt-red"> BOARDS</div> </div>
               </div>

                <div className='system-card'>
                <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" fill="currentColor" viewBox="0 0 62 62" className="system-icon"><path d="M34.5957 24.2353C33.5957 23.2353 37.865 16.7353 39.0957 17.2353C40.3264 17.7353 35.5957 25.2353 34.5957 24.2353Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M41.0957 11.2353C41.0957 11.2353 40.1361 13.816 39.0957 15.7353C37.0957 14.7353 31.5957 23.7353 33.0957 25.2353C32.2006 27.1383 30.5957 29.7353 31.0957 30.2353C31.5957 30.7353 33.5957 27.7353 34.5957 26.2353C36.5957 27.2353 42.0957 17.7353 40.0957 16.2353C41.2672 14.2827 42.5957 12.2353 42.5957 12.2353C43.5957 10.7353 52.0187 16.7353 51.0957 20.7353C48.2894 32.8956 42.3894 35.9729 42.0957 37.7353C40.5957 46.7353 33.5957 53.2353 23.5957 53.2353C16.0957 53.2353 9.09567 45.2353 10.0957 37.7353C11.429 27.7353 21.6466 24.9808 22.5957 20.2353C23.0957 17.7353 25.4339 12.0647 29.5957 8.73528C32.0957 6.73528 42.0957 9.23528 41.0957 11.2353ZM17.5957 32.2353C16.6567 33.1742 14.5957 31.7353 15.0957 30.7353C15.5957 29.7353 17.5957 27.7353 21.0957 25.2353C20.0957 28.7353 18.5346 31.2963 17.5957 32.2353ZM20.5957 40.7353C20.5957 38.384 21.7485 36.8734 24.0957 36.7353C26.5767 36.5893 28.0957 38.25 28.0957 40.7353C28.0957 43.2206 26.5767 44.8812 24.0957 44.7353C21.7485 44.5972 20.5957 43.0866 20.5957 40.7353ZM32.5957 45.2353C32.1804 46.2733 33.5957 47.7353 34.5957 47.2353C36.4396 46.3133 39.5957 41.7353 40.0957 38.2353C39.4062 38.9247 38.4196 39.6736 37.3818 40.4614C35.409 41.9589 33.2509 43.5971 32.5957 45.2353Z" fill="currentColor"></path><path d="M22.0957 40.7353C22.0957 39.485 22.853 38.3734 24.0957 38.2353C25.4679 38.0828 26.5957 39.3546 26.5957 40.7353C26.5957 42.116 25.4679 43.3878 24.0957 43.2353C22.853 43.0972 22.0957 41.9856 22.0957 40.7353Z" fill="currentColor"></path></svg>
                    <div>
                         <h1>PC</h1>
                        <p>View Leader Board</p>
                    </div>
                </div>

                <div className='system-card'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" fill="currentColor" viewBox="0 0 62 62" className="system-icon"><path d="M27.0396 21.5V13.5C27.0396 13 27.5396 12.5 28.0396 12.5H35.0395C35.5396 12.5 36.0396 13 36.0396 13.5V21.5C36.0396 22 35.5396 22.5 35.0395 22.5H28.0396C27.5396 22.5 27.0396 22 27.0396 21.5Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20.0396 25C20.5132 24.7159 20.7926 24.494 21.0396 24C21.3889 23.3014 21.3889 22.6986 21.0396 22C20.7926 21.506 20.5132 21.2841 20.0396 21C19.566 20.7159 16.2993 21.649 16.0396 22C15.9937 22.0621 15.9483 22.1199 15.9048 22.1753C15.7024 22.4332 15.5396 22.6406 15.5396 23C15.5396 23.3594 15.7024 23.5668 15.9048 23.8247C15.9483 23.8801 15.9937 23.9379 16.0396 24C16.2993 24.351 19.566 25.2841 20.0396 25ZM8.0396 25C7.56602 24.7159 7.28659 24.494 7.0396 24C6.6903 23.3014 6.6903 22.6986 7.0396 22C7.28659 21.506 7.56602 21.2841 8.0396 21C8.51318 20.7159 11.7799 21.649 12.0396 22C12.0855 22.0621 12.1309 22.1199 12.1744 22.1753C12.3768 22.4332 12.5396 22.6406 12.5396 23C12.5396 23.3594 12.3768 23.5668 12.1744 23.8247C12.1309 23.8801 12.0855 23.9379 12.0396 24C11.7799 24.351 8.51318 25.2841 8.0396 25ZM14.0396 21.5C14.4072 21.5 14.6181 21.3326 14.8832 21.1222C14.933 21.0827 14.9846 21.0417 15.0396 21C15.3875 20.7361 16.3078 17.9828 16.0396 17.5C15.7714 17.0172 15.5336 16.747 15.0396 16.5C14.341 16.1507 13.7382 16.1507 13.0396 16.5C12.5456 16.747 12.3078 17.0172 12.0396 17.5C11.7714 17.9828 12.6918 20.7361 13.0396 21C13.0946 21.0417 13.1462 21.0827 13.196 21.1222C13.4611 21.3326 13.672 21.5 14.0396 21.5ZM14.0396 24.5C14.4072 24.5 14.6181 24.6674 14.8832 24.8778C14.933 24.9173 14.9846 24.9583 15.0396 25C15.3875 25.2639 16.3078 28.0172 16.0396 28.5C15.7714 28.9828 15.5336 29.253 15.0396 29.5C14.341 29.8493 13.7382 29.8493 13.0396 29.5C12.5456 29.253 12.3078 28.9828 12.0396 28.5C11.7714 28.0172 12.6918 25.2639 13.0396 25C13.0946 24.9583 13.1462 24.9173 13.196 24.8778C13.4611 24.6674 13.672 24.5 14.0396 24.5ZM42.0396 23C42.0396 21.8954 42.935 21 44.0396 21C45.1442 21 46.0396 21.8954 46.0396 23C46.0396 24.1046 45.1442 25 44.0396 25C42.935 25 42.0396 24.1046 42.0396 23ZM47.0396 18.5C47.0396 17.3954 47.935 16.5 49.0396 16.5C50.1441 16.5 51.0396 17.3954 51.0396 18.5C51.0396 19.6046 50.1441 20.5 49.0396 20.5C47.935 20.5 47.0396 19.6046 47.0396 18.5ZM52.0396 23C52.0396 21.8954 52.935 21 54.0396 21C55.1442 21 56.0396 21.8954 56.0396 23C56.0396 24.1046 55.1442 25 54.0396 25C52.935 25 52.0396 24.1046 52.0396 23ZM47.0396 27.5C47.0396 26.3954 47.935 25.5 49.0396 25.5C50.1441 25.5 51.0396 26.3954 51.0396 27.5C51.0396 28.6046 50.1441 29.5 49.0396 29.5C47.935 29.5 47.0396 28.6046 47.0396 27.5Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3.03959 30C-0.460403 43.5 0.0395975 50 8.53959 50.5C13.6278 50.7993 15.7243 45.3994 17.3271 41.2711C18.0868 39.3143 18.7356 37.6431 19.5396 37C21.0396 41 27.0396 41 28.5396 37H31.5396L34.5396 37C36.0395 41 42.0395 41 43.5396 37C44.3435 37.6431 44.9923 39.3143 45.752 41.2711C47.3548 45.3994 49.4513 50.7993 54.5395 50.5C63.0395 50 63.5395 43.5 60.0395 30C59.7735 28.974 59.4231 28.0809 59.0899 27.232C58.5412 25.8339 58.0395 24.5555 58.0395 23C58.0395 17 53.0395 12 49.0396 12C46.0395 12 45.0396 12.5 44.0396 13.5H37.0396V22C37.0396 23 36.5396 23.5 35.5396 23.5H27.5396C26.5396 23.5 26.0396 23 26.0396 22V13.5H19.0396C18.0396 12.5 17.0396 12 14.0396 12C10.0396 12 5.0396 17 5.0396 23C5.0396 24.5555 4.5379 25.8339 3.98922 27.232C3.65607 28.0809 3.3056 28.974 3.03959 30ZM24.0396 30.5C21.8305 30.5 20.0396 32.2909 20.0396 34.5C20.0396 36.7091 21.8305 38.5 24.0396 38.5C26.2487 38.5 28.0396 36.7091 28.0396 34.5C28.0396 32.2909 26.2487 30.5 24.0396 30.5ZM6.03959 23C6.03959 18.7176 9.75714 15.5 14.0396 15.5C18.322 15.5 22.0396 18.7176 22.0396 23C22.0396 27.2824 18.322 30.5 14.0396 30.5C9.75714 30.5 6.03959 27.2824 6.03959 23ZM25.0396 16C25.0396 16 25.0396 15 24.0396 15C23.0396 15 23.0396 16 23.0396 16V19C23.0396 19 23.0396 20 24.0396 20C25.0396 20 25.0396 19 25.0396 19V16ZM39.0395 30.5C41.2487 30.5 43.0395 32.2909 43.0395 34.5C43.0395 36.7091 41.2487 38.5 39.0395 38.5C36.8304 38.5 35.0395 36.7091 35.0395 34.5C35.0395 32.2909 36.8304 30.5 39.0395 30.5ZM57.0395 23C57.0395 18.7176 53.322 15.5 49.0396 15.5C44.7571 15.5 41.0395 18.7176 41.0395 23C41.0395 27.2824 44.7571 30.5 49.0396 30.5C53.322 30.5 57.0395 27.2824 57.0395 23ZM38.0395 16C38.0395 16 38.0395 15 39.0395 15C40.0395 15 40.0395 16 40.0395 16V19C40.0395 19 40.0395 20 39.0395 20C38.0395 20 38.0395 19 38.0395 19V16Z" fill="currentColor"></path></svg>
                    <div>
                         <h1>PS4</h1>
                        <p>View Leader Board</p>
                    </div>
                </div>

                <div className='system-card'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" fill="currentColor" viewBox="0 0 62 62" className="system-icon"><path d="M28.7886 14V11.5L32.7886 11.5V14C32.7886 15 32.2886 15.5 31.2886 15.5L30.2886 15.5C29.2886 15.5 28.7886 15 28.7886 14Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.28856 51.5C1.2886 51.5 0.0803568 39 5.28861 26.5C5.96626 24.8736 6.71556 23.2921 7.40515 21.8366C8.70256 19.0982 9.78862 16.8059 9.78862 15.5C9.78861 12.2152 18.2885 10 19.7886 10C21.2886 10 22.7886 10.5 23.2886 11.5H26.7886V14C26.7886 16.5 28.7885 17.5 30.7886 17.5C32.7886 17.5 34.7886 16.5 34.7886 14V11.5H38.2885C38.7885 10.5 40.2885 10 41.7886 10C43.2886 10 51.7885 12.2152 51.7885 15.5C51.7885 16.8059 52.8746 19.0982 54.172 21.8366C54.8616 23.2921 55.6109 24.8736 56.2885 26.5C61.4968 39 60.2885 51.5 54.2886 51.5C52.7485 51.5 48.54 47.6457 44.8595 44.2749C43.7604 43.2683 42.7084 42.3048 41.7886 41.5L30.7886 41.5H19.7886C18.8688 42.3048 17.8168 43.2683 16.7177 44.2749C13.0372 47.6457 8.82868 51.5 7.28856 51.5ZM20.7886 21.5C20.7886 24.2614 18.55 26.5 15.7886 26.5C13.0272 26.5 10.7886 24.2614 10.7886 21.5C10.7886 18.7386 13.0272 16.5 15.7886 16.5C18.55 16.5 20.7886 18.7386 20.7886 21.5ZM15.7886 24.5C14.1318 24.5 12.7886 23.1569 12.7886 21.5C12.7886 19.8431 14.1318 18.5 15.7886 18.5C17.4455 18.5 18.7886 19.8431 18.7886 21.5C18.7886 23.1569 17.4455 24.5 15.7886 24.5ZM17.2886 30C17.2886 29.5 17.7886 29 18.2886 29H21.2886V26C21.2886 25.5 21.7886 25 22.2886 25H25.2886C25.7886 25 26.2886 25.5 26.2886 26V29H29.2886C29.7886 29 30.2886 29.5 30.2886 30V33C30.2886 33.5 29.7886 34 29.2886 34H26.2886V37C26.2886 37.5 25.7886 38 25.2886 38H22.2886C21.7886 38 21.2886 37.5 21.2886 37V34H18.2886C17.7886 34 17.2886 33.5 17.2886 33V30ZM18.7886 31C18.7886 30.5 19.2887 30.5 19.2887 30.5H22.7886V27C22.7886 27 22.7886 26.5 23.2886 26.5H24.2886C24.7886 26.5 24.7886 27 24.7886 27V30.5H28.2886C28.2886 30.5 28.7886 30.5 28.7886 31V32C28.7886 32.5 28.2886 32.5 28.2886 32.5H24.7886V36C24.7886 36 24.7886 36.5 24.2886 36.5H23.2886C22.7886 36.5 22.7886 36 22.7886 36V32.5H19.2887C19.2887 32.5 18.7886 32.5 18.7886 32V31ZM43.2885 31.5C43.2885 34.2614 41.0499 36.5 38.2885 36.5C35.5271 36.5 33.2885 34.2614 33.2885 31.5C33.2885 28.7386 35.5271 26.5 38.2885 26.5C41.0499 26.5 43.2885 28.7386 43.2885 31.5ZM38.2885 34.5C36.6317 34.5 35.2885 33.1569 35.2885 31.5C35.2885 29.8431 36.6317 28.5 38.2885 28.5C39.9454 28.5 41.2885 29.8431 41.2885 31.5C41.2885 33.1569 39.9454 34.5 38.2885 34.5ZM38.7886 21.5C38.7886 20.3954 39.6841 19.5 40.7886 19.5C41.8932 19.5 42.7886 20.3954 42.7886 21.5C42.7886 22.6046 41.8932 23.5 40.7886 23.5C39.6841 23.5 38.7886 22.6046 38.7886 21.5ZM44.7886 15.5C43.6841 15.5 42.7886 16.3954 42.7886 17.5C42.7886 18.6046 43.6841 19.5 44.7886 19.5C45.8932 19.5 46.7886 18.6046 46.7886 17.5C46.7886 16.3954 45.8932 15.5 44.7886 15.5ZM46.7886 21.5C46.7886 20.3954 47.6841 19.5 48.7886 19.5C49.8932 19.5 50.7886 20.3954 50.7886 21.5C50.7886 22.6046 49.8932 23.5 48.7886 23.5C47.6841 23.5 46.7886 22.6046 46.7886 21.5ZM44.7886 23.5C43.6841 23.5 42.7886 24.3954 42.7886 25.5C42.7886 26.6046 43.6841 27.5 44.7886 27.5C45.8932 27.5 46.7886 26.6046 46.7886 25.5C46.7886 24.3954 45.8932 23.5 44.7886 23.5Z" fill="currentColor"></path></svg>
                    <div>
                         <h1>Xbox</h1>
                        <p>View Leader Board</p>
                    </div>
                </div>

            </section>
        )
    }
}

export default LeaderBoardsCard