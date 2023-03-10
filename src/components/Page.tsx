import { FC, PropsWithChildren, ReactNode } from "react"
import Container from "./Container"
import styles from "./Page.module.scss"

interface Props {
  title?: ReactNode
  description?: ReactNode
  action?: ReactNode
  sm?: boolean
  noBreak?: boolean
}

const Page: FC<PropsWithChildren<Props>> = ({
  title,
  description,
  children,
  ...props
}) => {
  const { action, sm, noBreak } = props

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        {action && <section className={styles.action}>{action}</section>}
      </header>

      {description && (
        <section className={styles.description}>{description}</section>
      )}

      {!noBreak && <hr />}

      {sm ? <Container sm>{children}</Container> : children}
    </article>
  )
}

export default Page
