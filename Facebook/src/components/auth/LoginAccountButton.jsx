import React from 'react'
import Button from '../ui/Button'
export default function LoginAccountButton() {
  return (
    Button({children: "Se connecter", variant:"primary", type:"submit"})
  )
}
