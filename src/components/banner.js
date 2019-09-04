import React from "react"

import videoUrl from "../video/main.mp4"
import Video from "./video"

const Banner = ({ meta }) => <Video videoSrc={videoUrl} meta={meta} />
export default Banner
