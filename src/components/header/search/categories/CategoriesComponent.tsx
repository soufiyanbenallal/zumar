import React from 'react'
import { useState } from 'react'
import { Listbox } from '@headlessui/react'

const people = [
  { id: 1, name: 'All', unavailable: true },
  { id: 2, name: 'Category 1', unavailable: true },
  { id: 3, name: 'Category 2', unavailable: true },
  { id: 4, name: 'Category 3', unavailable: true },
  { id: 5, name: 'Category 4', unavailable: true },
]

export default function CategoriesComponent() {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <Listbox.Button>{selectedPerson.name}</Listbox.Button>
      <Listbox.Options>
        {people.map((person) => (
          <Listbox.Option key={person.id} value={person} disabled={person.unavailable}>
            {person.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}
