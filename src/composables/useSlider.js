export default function useSlider(slider) {

  function nextElement(direction = 1) {
    const ITEM_WIDTH = slider.value.querySelector('li').clientWidth
    slider.value.scrollBy({left: (ITEM_WIDTH * direction), behavior: 'smooth',  })
  }

  return {
    nextElement
  }
}