import React from 'react'

const RoundedCorners = () => {
    return (
    <svg
        className='invisble absolute size-0'
        xmlns = "http://www.w3.org/2000/svg"
    >
        <defs>
            <filter id='flt_tag'/>
                <feGaussianBlur
                in='sourceGraphic'
                stdDeviation='8'
                result='blur'
                />
                <feColorMatrix
                in='blur'
                mode= 'matrix'
                values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
                result='fit_tag'
                />
                <feComposite
                in='SourceGraphic'
                in2='flt_tag'
                operator='atop'
                />
        </defs>
        </svg >
  )
}

export default RoundedCorners