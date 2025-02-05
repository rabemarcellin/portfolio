import React, { useEffect, useState } from 'react'
import { useTranslation } from "../../node_modules/react-i18next"
import languagesType from '../store/datas/language/type'
import { defaultLanguageCode } from '../store/language/i18n'

export default function SwitchLanguageDropdown({ axe = 'bottom', center }) {
    const { i18n } = useTranslation()
    const [isShowDropdown, setIsShowDropdown] = useState(false)
    const [currentLanguageCode, setCurrentLanguageCode] = useState(languagesType.find(lang => lang.code === defaultLanguageCode))    
    
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
          <div className='bg-white dark:bg-slate-600 flex text-sm py-2 px-8 gap-4 border divide-y dark:border-slate-800 rounded-xl shadow-sm'
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
        <div className="absolute bottom-0 left-0 border divide-y dark:border-slate-800 rounded-xl overflow-hidden shadow-sm dark:shadow-black/50"
          style={{transform: axe === 'top' ? 'translateY(-40%)': 'translateY(100%)'}}
        >
          {languagesType.map(lang => (
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
