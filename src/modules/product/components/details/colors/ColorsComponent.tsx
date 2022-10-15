import React, { useState, Fragment, ReactElement } from 'react'
import { RadioGroup } from '@headlessui/react'
import styles from './Colors.module.scss'
import classNames from 'classnames'
import { COLOR_IMAGE } from './Colors.const'

export default function ColorsComponent({ colors }: { colors: string[] }): ReactElement {
  const [color, setColor] = useState(colors[0])

  /**
   * render Image and get right image according to color name
   *
   * @param {string} name - color name
   */
  const imageColor = (name: string): ReactElement => {
    const src = COLOR_IMAGE[name]
    return <img src={src} alt={name} className={styles.imageColor} />
  }
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Availble color</h4>
      <RadioGroup value={color} onChange={setColor} className={styles.colors} as='ul' id='colors'>
        {colors.map(
          (name: string): ReactElement => (
            <RadioGroup.Option key={name} value={name} as={Fragment}>
              {({ checked }) => (
                <li className={classNames(styles.item, checked && styles.active)}>
                  {imageColor(name.toLowerCase())}
                  {name}
                </li>
              )}
            </RadioGroup.Option>
          ),
        )}
      </RadioGroup>
    </div>
  )
}
