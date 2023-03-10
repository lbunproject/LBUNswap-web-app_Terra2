interface TxInfos {
  TxInfos: TxInfo[]
}

interface TxInfo {
  TxHash: string

  Tx: {
    Fee: { Amount: FeeAmount }
    Memo: string
  }

  Logs: TxLog[]
}

interface FeeAmount {
  Amount: string
  Denom: string
}

interface TxLog {
  Events: TxEvent[]
}

interface TxEvent {
  Attributes: Attribute[]
  Type: string
}

interface Attribute {
  Key: string
  Value: string
}