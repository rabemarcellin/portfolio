import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next"
import languages from '../lang/lang.type'
import { defaultLanguageCode } from '../lang/i18n'

export default function SwitchLanguageDropdown({ axe = 'bottom', center }) {
    const { i18n } = useTranslation()
    const [isShowDropdown, setIsShowDropdown] = useState(false)
    const [currentLanguageCode, setCurrentLanguageCode] = useState(languages.find(lang => lang.code === defaultLanguageCode))    
    
    useEffect(() => {
      i18n.changeLanguage(currentLanguageCode.code)
      localStorage.setItem('lang', currentLanguageCode.code)
      setIsShowDropdown(false)
    }, [currentLanguageCode])

    return (
    <div className='relative'>
      <div className='my-2' onClick={() => {
        setIsShowDropdown(!isShowDropdown)
      }}>
          <div className='bg-white dark:bg-slate-600 flex text-sm py-2 px-8 gap-4 border divide-y dark:border-slate-800 rounded-xl shadow'
          style={{justifyContent: center ? 'center' : 'flex-start'}}
          >
            <div className='font-bold'>
              {currentLanguageCode.code}
            </div>
            <div className='font-normal'>
              {currentLanguageCode.label}
            </div>
          </div>
      </div>
      {isShowDropdown && (
        <div className="absolute bottom-0 left-0 border divide-y dark:border-slate-800 rounded-xl overflow-hidden shadow dark:shadow-black/50"
          style={{transform: axe === 'top' ? 'translateY(-40%)': 'translateY(100%)'}}
        >
          {languages.map(lang => (
            <div key={`switch-language-item-${lang.code}--${lang.label}`} onClick={() => {
              setCurrentLanguageCode(lang)
            }} className='flex text-sm py-2 px-8 gap-4   bg-white dark:bg-slate-600 dark:border-slate-800 dark:shadow-black/50'>
              <div className='font-bold'>
                {lang.code}
              </div>
              <div className='font-normal'>
                {lang.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
