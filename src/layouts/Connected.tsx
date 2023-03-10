import { ReactNode, useRef } from "react"
import classNames from "classnames"
import { truncate } from "../libs/text"
import { useAddress, useNetwork } from "../hooks"
import { useWallet } from "@terra-money/wallet-provider"
import styles from "./Connected.module.scss"
import Icon from "../components/Icon"

interface Props {
  className: string
  icon: ReactNode
}

const Connected = ({ className, icon }: Props) => {
  const ref = useRef(null)
  const { name } = useNetwork()

  const { disconnect } = useWallet()
  const address = useAddress()
  const convertName = name[0].toUpperCase() + name.slice(1, name.length)

  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        className={classNames(styles.connected, className)}
        onClick={() => disconnect()}
      >
        {icon}
        <span className={styles.address}>
          {truncate(address)} | {convertName}
        </span>
        <Icon name="close" size={20} />
      </button>
    </div>
  )
}

export default Connected
