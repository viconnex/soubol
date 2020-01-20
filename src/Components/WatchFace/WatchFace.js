import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'

const WatchFace = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    setInterval(() => {
      setTime(new Date())
    }, 100)
  }, [])

  return (
    <Text>
      {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
    </Text>
  )
}

export default WatchFace
