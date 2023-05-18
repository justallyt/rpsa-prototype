import React from 'react'
import robby from "../assets/robby.jpg"
import cindy from '../assets/cindy.jpg'
import omuga from '../assets/omuga.jpg'
import { NavLink } from 'react-router-dom'
const Team = () => {
    const members = [
        {
            id: 0,
            image: robby,
            name: 'Robinson Manguro',
            position: 'Director'
        },
        {
            id: 1,
            image: cindy,
            name: 'Rapudo Nyakisumo',
            position: 'Senior Associate'
        },
        {
            id: 2,
            image: omuga,
            name: 'Muga Johnson',
            position: 'Architect Technician'
        }
    ]
  return (
    <div id='team'>
           <div className="inner-row">
                  <div className="bg-lines">
                         <div className="bg-lines-outside black">
                                 <div className="bg-lines-inside black"></div>
                         </div>
                    </div>
                    <div className="team-content">
                             <div className="team-intro">
                                    <h1>Meet Our Team</h1>
                                    <p>Our strength is in collaboration. We believe that great ideas come from respect and openness, an outlook that sustains us creatively and that allows each of us to grow and to learn.</p>
                             </div>
                             <div className="team-row">
                                     { members.map(mtu => 
                                         <NavLink className="member-moja" key={mtu.id}>
                                                   <div className="profile-image">
                                                            <img src={mtu.image} alt="" />
                                                   </div>
                                                   <h3>{mtu.name}</h3>
                                                   <p>{mtu.position}</p>
                                         </NavLink>    
                                    )}
                             </div>
                    </div>
           </div>
    </div>
  )
}

export default Team