import React, {useContext} from 'react'
import {Context} from '../../context/langContext'
import FragileFlag from '../../asserts/france.svg'
import UkFlag from '../../asserts/uk.svg'
import SpainFlag from '../../asserts/spain.svg'
import './ToggleLangs.css'

export default function ToggleLangs() {

  const { toggleLang} = useContext(Context)
  return (
    <div className='container-langs'>
            
            <img onClick={() => toggleLang('FR')} src={FragileFlag} alt="Traduction en Français"/>
            <img onClick={() => toggleLang('EN')} src={UkFlag} alt="Traduction en Anglais"/>
            <img onClick={() => toggleLang('SP')} src={SpainFlag} alt="Traduction en Espagnol"/>

        </div>
  )
}
