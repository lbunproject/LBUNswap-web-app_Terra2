import { PropsWithChildren } from "react"
import classNames from "classnames/bind"
import Loading from "./Loading"
import styles from "./Button.module.scss"

const cx = classNames.bind(styles)

const Button: React.FC<PropsWithChildren<Button>> = (props) => {
  const { loading, children } = props
  return (
    <div className={styles.middle}>
      <button {...getAttrs(props)}>
        {loading && <Loading className={styles.progress} />}
        {children}
      </button>
    </div>
  )
}

export default Button

/* styles */
export const getAttrs = <T extends ButtonProps>(props: T) => {
  const { size = "md", color = "blue", outline, block, ...rest } = props
  const { loading, submit, ...attrs } = rest
  const status = { outline, block, loading, disabled: attrs.disabled, submit }
  const className = cx(styles.button, size, color, status, attrs.className)
  return { ...attrs, className }
}
