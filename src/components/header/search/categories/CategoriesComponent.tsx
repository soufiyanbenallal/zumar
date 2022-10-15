import React, { ReactElement, useState } from 'react'
import { Listbox } from '@headlessui/react'
import { ReactComponent as ArrowDown } from '@assets/icons/ArrowDown.svg'
import styles from './Categories.module.scss'
import classNames from 'classnames'
import { IBaseProps } from '@/interfaces'
const people = [
  { id: 1, name: 'All', unavailable: false },
  { id: 2, name: 'Category 1', unavailable: false },
  { id: 3, name: 'Category 2', unavailable: false },
  { id: 4, name: 'Category 3', unavailable: false },
  { id: 5, name: 'Category 4', unavailable: false },
]

export default function CategoriesComponent({ className }: IBaseProps): ReactElement {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <div className={classNames(styles.wrapper, className)}>
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <Listbox.Button className={styles.button}>
          <span>{selectedPerson.name}</span>
          <ArrowDown />
        </Listbox.Button>
        <Listbox.Options className={styles.list}>
          {people.map((person) => (
            <Listbox.Option
              key={person.id}
              value={person}
              disabled={person.unavailable}
              className={classNames(styles.item, selectedPerson.id === person.id && styles.active)}
            >
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}
