import React, { useEffect } from 'react'

export default function UseHook() {

  useEffect(
    () => {
      console.log("I am use Effect");

      return () => {
        console.log("component is unmounting");
      }
    },[]
  )

  return (
    <div>
      <p>componentWillUnmount</p>
    </div>
  )
}
