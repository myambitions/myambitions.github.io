import React from "react"

import videoUrl from "../video/main.mp4"
import Video from "./video"

const Banner = ({ meta, lang }) => (
  <Video videoSrc={videoUrl} meta={meta} lang={lang} />
)
export default Banner
