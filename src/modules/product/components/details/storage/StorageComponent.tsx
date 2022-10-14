import { RadioGroup } from '@headlessui/react'
import { IStorage } from '@modules/product/interfaces'
import classNames from 'classnames'
import styles from './Storage.module.scss'
import React, { Fragment, ReactElement, useState } from 'react'

export default function StorageComponent({ storages }: { storages: IStorage[] }): ReactElement {
  const [storage, setStorage] = useState(storages[0])

  return (
    <div className={styles.wrapper}>
      <h5 className={styles.title}>Storage capacity</h5>
      <RadioGroup
        value={storage}
        onChange={setStorage}
        className={styles.list}
        as='ul'
        id='storages'
      >
        {storages.map(
          (item: IStorage, key: number): ReactElement => (
            <RadioGroup.Option key={key} value={item} as={Fragment}>
              {({ checked }) => (
                <li className={classNames(styles.item, checked && styles.active)}>
                  <p className={styles.value}>
                    {item.value} <small className={styles.unit}>{item.unit}</small>
                  </p>
                </li>
              )}
            </RadioGroup.Option>
          ),
        )}
      </RadioGroup>
    </div>
  )
}
