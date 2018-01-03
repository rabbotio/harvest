import * as React from 'react'

interface LinkPropTypes extends withActiveStatePropTypes, React.HTMLProps<any> {

}
const Link = ({ active, children, onClick }: LinkPropTypes) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    // eslint-disable-next-line
    (
      <a
        href='#'
        onClick={e => {
          e.preventDefault()
          if (onClick) {
            onClick(e)
          }
        }}
      >
        {children}
      </a>
    )
  )
}

export default Link
