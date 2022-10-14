import React, { ReactElement } from 'react'
import styles from './Pieces.module.scss'
import { IPieces } from '@/modules/product/interfaces'

export default function PiecesComponent({ pieces }: { pieces: IPieces[] }): ReactElement {
  return (
    <ul className={styles.pieces}>
      {pieces.map(
        (piece: IPieces, key: number): ReactElement => (
          <li key={key}>
            <span className={styles.subtext}>{piece.range} Pieces</span>
            <p className={styles.text}>{piece.currency + piece.price.toFixed(2)}</p>
          </li>
        ),
      )}
    </ul>
  )
}
