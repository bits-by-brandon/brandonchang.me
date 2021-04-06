import {useEffect} from "react";

export default function Background () {
  useEffect(() => {
    console.log("hello world")
    import("@/components/background/scenes/asciiEco").then(m => m.default())
  }, [])
  return <></>
}
