import "./home.css";

import { useState, useEffect } from "react";

const Planets = [
  {planet: "Mars", 
  img: `https://th.bing.com/th/id/R.8455ba40608cba13c13e7a136d451328?rik=6476xl6u7T44iw&riu=http%3a%2f%2fmedia.npr.org%2fassets%2fimg%2f2013%2f05%2f02%2fmars-nasa_custom-745ff15ed1a80d8cbb47a4cb44186c5b6bea41e3.jpg&ehk=4BXPC%2faH3z7YlVD%2fLD2zuKSh9FRf6SqEj6krSEDAU0Y%3d&risl=&pid=ImgRaw&r=0`, 
  description: `Mars is the fourth planet and the furthest terrestrial planet from the Sun. The reddish color of its surface is due to finely grained iron(III) oxide dust in the soil, giving it the nickname "the Red Planet".`},
  {planet: "Earth", 
  img: `https://blogs.nasa.gov/dscovr/wp-content/uploads/sites/244/2015/02/earth-fulldisc.jpg`, 
  description: `Earth is the third planet from the Sun and the only astronomical object known where life developed and found habitability.`},
  {planet: "Jupiter", 
  img: `https://lightsinthedark.files.wordpress.com/2017/04/hubble-jupiter-4-3-17.jpg`, 
  description: `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, and slightly less than one one-thousandth the mass of the Sun.`},
  {planet: "Pluto", 
  img: `https://www.universetoday.com/wp-content/uploads/2015/09/crop_p_color2_enhanced_release_small-2.png`, 
  description: `Pluto (minor planet designation: 134340 Pluto) is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune.`},
  {planet: "Saturn", 
  img: `https://th.bing.com/th/id/R.a5d3e52ca8d98f5e01ecde7ccce94b09?rik=PM4BjnG5MBSXiw&riu=http%3a%2f%2fscitechdaily.com%2fimages%2fSaturns-Appearance-Explained.jpg&ehk=ZwqQg%2bBPPoD9MCMfUSs8JHDpW4noHk67cEZ7SgstdYQ%3d&risl=&pid=ImgRaw&r=0`, 
  description: `Sixth planet from the Sun and the second-largest in the Solar System, after Jupiter.`},
  {planet: "Uranus",
  img: `https://th.bing.com/th/id/R.793e6d024680195f0e792adebb34f85d?rik=7Sh5UKmZKcgTgg&riu=http%3a%2f%2flistverse.com%2fwp-content%2fuploads%2f2007%2f08%2furanus-1.jpg&ehk=Xw5PRyrkUOvdnJEXEbAthyzZebejVja9HGSio5NG7zI%3d&risl=&pid=ImgRaw&r=0`,
  description: `Uranus is the seventh planet from the sun. It has the third-largest radius of all the planets. It has 13 faint rings and 27 small moons. But a characteristic that sets Uranus apart: It spins on its side as it orbits the sun. That trip takes about 84 Earth years.`}
]

const Home = () => {
const [data, setData] = useState([])
const [left, setLeft] = useState(0)
const [right, setRight] = useState(0)
const [count, setCount] = useState(0)

const fetchData = () => {
  fetch(`https://api.nasa.gov/`)
  .then(response => {
    return response.json()
  })
  .then(data => {
    setData(data)
  })
}
useEffect(() => {
  fetchData()
}, [])

console.log(fetchData, data)

const handleLeftClick = (index) => {
  if (left > 0) {
    setLeft(index-1)
  }
}

const handleRightClick = (index) => {
  setRight(index+1)
}

  return (
    <>
    <div className="w-full">
      <div id="window" className="text-[#FFFFFF] items-center justify-center">Welcome to Dashboard</div>
          <div className="text-[#FFFFFF]">
          {Planets.map((planet, index) => (
            <>
            <div key={index}>
              {planet.planet}
            </div>
            <img width={200} height={200} src={planet.img}/>
            <div className="line-clamp-3 text-[1.25rem]">
              {planet.description}
            </div>
            </>
          ))}
          </div>
    </div>
      <div id="dashboard">
        <div id="buttons">
          <button id="back" onClick={handleLeftClick}></button>
          <button id="forward" onClick={handleRightClick}></button>
        </div>
      </div>
    </>
  );
};

export default Home;
