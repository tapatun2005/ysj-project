import {
    $selector,
    $selectors
  } from 'Functions'
  
  
  const Video = (el, toggle) => {
      
    const videoSelector = $selectors(el)
    for (let i = 0; i < videoSelector.length; i++) {
      const video = $selector(videoSelector[i], 'video')
      const videoToggle = $selector(videoSelector[i], toggle)
      console.log(video, videoToggle)
  
      videoToggle.addEventListener('click', () => {
        videoSelector[i].classList.add('is-playing')
        video.play()
      })
  
    }
  }
  
  export default Video