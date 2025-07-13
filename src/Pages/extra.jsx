// yeh meri App.jsx ki file hay 

// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'
// import Navbar from './Components/Navbar/Navbar'
// import Home from "./Pages/Home/Home"
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Hotels from './Pages/Hotels/Hotels';
// import Search from './Pages/Search/Search';
// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <>
//     {/* <Navbar/>
//     <Home/> */}
//     <Router>
//       <Navbar/>
//       <Routes>
//         <Route path='/' component={<Home/>}/>
//         <Route path='/hotels' component={<Hotels/>}/>
//         <Route path='/search' component={<Search/>}/>
//       </Routes>
//     </Router>
//     </>
//   )
// }

// export default App



// or yh meri navbar ki file hay 


// import React from 'react'
// import './Navbar'
// import { Link, Links } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div className='nav-main'>
//       <h1>Nav page is this</h1>
//       <li><Link to='/'>Home</Link></li>
//       <li><Link to='/hotels'>Hotels</Link></li>
//       <li><Link to='/search'>Search</Link></li>
//     </div>
//   )
// }

// export default Navbar

// lekin masla yh hya k jab mn link pr clik krtaa hu to pages ki files nahi aati samnay uper local host mn uska path show hotaa hay lekin file mn jo kuch hotaa hay vo shpw nahi hotaa 









// yeh mera card hay jisay mn ne props k zriye maping krwaani hay 

// import React from 'react'
// import './ThirdCard.css'

// const ThirdCard = (props) => {
//   return (
//     <div className='third-card-main'>
//       <img src={props.image} alt="" />
//       <p id="cities-name">{props.city}</p>
//       <p id="from-name">From</p>
//       <p id="price-tag">{props.price}</p>
//     </div>
//   )
// }

// export default ThirdCard

// or yh meri main file hay ji mn maping huyi khrhi hay 


// import React from 'react'
// import './Destinations.css'
// import ThirdCard from '../ThirdCard/ThirdCard'


// const Destinations = () => {

//   const citiesCards = [
//   {
//     id : 1,
//     image : '/src/assets/Images/cities/ParisImage.png',
//     city : 'Paris',
//     price : '$699'
//   },
//   {
//     id : 2,
//     image : '/src/assets/Images/cities/GreeceImage.png',
//     city : 'Greece',
//     price : '$699'
//   },
//   {
//     id : 3,
//     image : '/src/assets/Images/cities/NorwayImage.png',
//     city : 'Norway',
//     price : '$699'
//   },
//   {
//     id : 4,
//     image : '/src/assets/Images/cities/TuscanyImage.png',
//     city : 'Tuscany',
//     price : '$699'
//   }
//   ]
//   return (
//     <div className='destinations-main'>
//       <div className="destinations-container">
//         <div className="destinations-container-one">
//             <div className="destinations-container-one-top"></div>
//             <div className="destinations-container-one-bot">
//                 {citiesCards.map((item)=>(
//                   <ThirdCard
//                   key = {item.id}
//                   image = {item.image}
//                   city = {item.city}
//                   price = {item.price}
//                   />
//                 ))}
//             </div>
//         </div>
//         <div className="destinations-container-two"></div>
//         <div className="destinations-container-three"></div>
//       </div>
//     </div>
//   )
// }

// export default Destinations



// lekin es mn ne bohy brha fault aa rahaa hay esaa Q hay ? es mn koi ghalti hay yaa css kay code mn koi ghalti ho skti hay agr es mn koi ghalti hay to vo ghalti btaa k solve out kr dein nahi to css mn kiyaa seting krni haynn vo btaa dein 

// yh do files pr kaam k raa thaa mn 

// in mn say aik yh hay 

// import React from 'react'
// import './FourCard.css'

// const FourCard = (props) => {
//   return (
//     <div className='FourCard-main'>
//       <div className="FourCard-main-top">
//         <img src={props.fourImage} alt="" />
//       </div>
//       <div className="FourCard-main-bot">
//         <div className="FourCard-main-bot-side">
//             <p id='site'>{props.fourSite}</p>
//             <p id='code'>{props.fourCode}</p>
//         </div>
//         <p id="price">{props.fourPrice}</p>
//       </div>
//     </div>
//   )
// }


// dusri yh hy 


// import React from 'react'
// import './Destinations.css'
// import ThirdCard from '../ThirdCard/ThirdCard'
// import FourCard from '../FourCard/FourCard'


// const Destinations = () => {

//   const FourCard = [
//     {
//       id : 1,
//       fourImage : '/src/assets/Images/sites/unsplash_5MV818tzxeo.png',
//       fourSite : 'Bali',
//       fourCode : '4D3N',
//       fourPrice : '$899'
//     },
//     {
//       id : 2,
//       fourImage : '/src/assets/Images/sites/SwitzerlandImage.png',
//       fourSite : 'Bali',
//       fourCode : '6D5N',
//       fourPrice : '$799'
//     },
//     {
//       id : 3,
//       fourImage : '/src/assets/Images/sites/BoracayImage.png',
//       fourSite : 'Boracay',
//       fourCode : '5D4N',
//       fourPrice : '$1399'
//     },
//     {
//       id : 4,
//       fourImage : '/src/assets/Images/sites/PalawanImage.png',
//       fourSite : 'Palawan',
//       fourCode : '7D5N',
//       fourPrice : '$1899'
//     },
//   ] 

//   const citiesCards = [
//   {
//     id : 1,
//     image : '/src/assets/Images/cities/ParisImage.png',
//     city : 'Paris',
//     price : '$699'
//   },
//   {
//     id : 2,
//     image : '/src/assets/Images/cities/GreeceImage.png',
//     city : 'Greece',
//     price : '$1079'
//   },
//   {
//     id : 3,
//     image : '/src/assets/Images/cities/NorwayImage.png',
//     city : 'Norway',
//     price : '$895'
//   },
//   {
//     id : 4,
//     image : '/src/assets/Images/cities/TuscanyImage.png',
//     city : 'Tuscany',
//     price : '$1245'
//   }
//   ]
//   return (
//     <div className='destinations-main'>
//       <div className="destinations-container">
//         <div className="destinations-container-one">
//             <div className="destinations-container-one-top"></div>
//             <div className="destinations-container-one-bot">
//                 {citiesCards.map((item)=>(
//                   <ThirdCard
//                   key = {item.id}
//                   image = {item.image}
//                   city = {item.city}
//                   price = {item.price}
//                   />
//                 ))}
//             </div>
//         </div>
//         <div className="destinations-container-two">
//           <div className="destinations-container-two-top">
//             <p id='recomended'>Recomended</p>
//             <p id='view'>View</p>
//           </div>
//           <div className="destinations-container-two-bot">
//             {/* fourth card props file put here */}
//             {/* <FourCard/> */}
//             {FourCard.map((item)=>(
//               <FourCard
//               key={item.id}
//               fourImage = {item.fourImage}
//               fourSite = {item.fourSite}
//               fourCode = {item.fourCode}
//               fourPrice = {item.fourPrice}
//               />
//             ))}
//           </div>
//         </div>
//         <div className="destinations-container-three"></div>
//       </div>
//     </div>
//   )
// }

// export default Destinations
