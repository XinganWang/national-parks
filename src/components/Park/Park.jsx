import React from 'react'
import './Park.css'

export default function Park({ parks }) {
    return (
        <section className='park-container'>
            {
                parks.map((park) => {
                    return(
                        <div className='park-item' key={park.id}>
                            <img src={park.img} alt={park.title} className='park-photo'></img>
                            <div className='park-info'>
                                <header>
                                    <h4>{park.title}</h4>
                                </header>
                                <p className='park-desc'>{park.desc}</p>
                            </div>

                        </div>
                    )

                })
            }

        </section>
    )
}
