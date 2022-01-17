import React from 'react'
import './Provinces.css'

export default function Provinces({ provinces, filter }) {
    return (
        <div className='province-container'>
            {
                provinces.map((province, index) => {
                    return (
                        <button className='filter-btn' key={index} onClick={() => filter(province)}>
                            {province}
                        </button>
                    )

                })
            }
        </div>
    )
}
