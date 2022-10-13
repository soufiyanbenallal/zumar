import React from 'react'
import styles from './Details.module.scss'
export default function DetailsComponent({
    className,
}: {
    className?: string
}) {
    return <article className={className}>DetailsComponent</article>
}
