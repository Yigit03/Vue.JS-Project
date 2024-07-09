<template>
    <div class="slider">
      <div class="slider-top">
        <label class="maybe">Maybe You May Know</label>
        <label class="seeall"><a href="#">SEE ALL</a></label>
      </div>
      <div class="slides">
        <div class="slide">
            <div class="friend-cart">
                    <div class="friend-top">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                    </div>
                    <div class="friend-bottom">
                        <div class="premium">
                            <div class="beyaz">
                                <img class="post-img" src="./icons/images.jpg" alt="">
                            </div>
                        </div>
                        <div>	
                        <br><p class="name">Ahmet Yılmaz</p>
                        <p class="job">Medical Doctor</p><br>
                        <p class="city">İzmir</p><br>
                        </div>
                        <button type="submit" name="submit" class="follow">Follow</button>  
                    </div>    
        </div> 
        </div>
        <div class="slide">
            <div class="friend-cart">
                    <div class="friend-top">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                    </div>
                    <div class="friend-bottom">
                        <div class="renkli">
                            <div class="beyaz">
                                <img class="post-img" src="./icons/images.jpg" alt="">
                            </div>
                        </div>
                        <div>	
                        <br><p class="name">Melike Kadıoğlu</p>
                        <p class="job">‎</p><br> 
                        <p class="city">İstanbul</p><br>
                        </div>
                        <button type="submit" name="submit" class="follow">Follow</button>  
                    </div>    
        </div>
        </div>
        <div class="slide">
            <div class="friend-cart">
                    <div class="friend-top">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                    </div>
                    <div class="friend-bottom">
                        <div class="renkli">
                            <div class="beyaz">
                                <img class="post-img" src="./icons/images.jpg" alt="">
                            </div>
                        </div>
                        <div>	
                        <br><p class="name">Ayşe Yıldırım</p>
                        <p class="job"> ‎ </p><br>
                        <p class="city">İzmir</p><br>
                        </div>
                        <button type="submit" name="submit" class="follow">Follow</button>  
                    </div>    
        </div>
        </div>
      </div>
      <button @click="geri"><svg class="prev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></button>
      <button @click="ileri"><svg class="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg></button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const currentIndex = ref(0);
  const visibleSlides = 3;
  let totalSlides = 0;
  
  const showSlide = () => {
    const slides = document.querySelectorAll('.slide');
    totalSlides = slides.length;
  
    slides.forEach((slide, idx) => {
      if (idx >= currentIndex.value && idx < currentIndex.value + visibleSlides) {
        slide.style.opacity = 1;
        slide.style.transform = 'translateX(0)';
      } else {
        slide.style.opacity = 0;
        slide.style.transform = `translateX(${100}%)`;
      }
    });
  
    const offset = -currentIndex.value * (100 / visibleSlides);
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
  };
  
  const ileri = () => {
    if (currentIndex.value < totalSlides - visibleSlides) {
      currentIndex.value++;
      showSlide();
    }
  };
  
  const geri = () => {
    if (currentIndex.value > 0) {
      currentIndex.value--;
      showSlide();
    }
  };
  
  onMounted(() => {
    showSlide();
  });
  
  </script>
  

  <style scoped>
  .slider {
    position: relative;
    max-width: 85%;
    margin: auto;
    border: 1px solid #ddd;
    background-color: #e8eaf4;
    border-radius: 15px;
    
  }
  
  .slider-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  
  .maybe {
    width: 85%;
    text-align: center;
    color: gray;
    font-weight: bold;
    margin-left: 50px;
  }
  
  .seeall {
    width: 15%;
    text-align: right;
    font-size: smaller;
  }
  
  .seeall a {
    text-decoration: none;
    color: gray;
  }
  
  .slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
    background-color: #e8eaf4;
    overflow: hidden; /* Yatay taşma durumunda içeriği kes */
  }
  
  .slide {
    flex:33.33%; /* Her slaytın eşit genişliği */
    box-sizing: border-box;
    padding: 10px;
    height: 250px; /* Slayt yüksekliği */
    background-color: #e8eaf4;
    border-radius: 15px;
    opacity: 0;
    transform: translateX(100%);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }
  
  .prev,
  .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
  }
  
  .prev {
    left: -20px;
  }
  
  .next {
    right: -20px;
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
  .friend-cart{
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 15px;
  
  }
  .friend-top{
    display: flex;
    justify-content:end;
    margin-right: 5px;
  }
  .friend-bottom{
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .job{
    color: gold;
  }
  .follow{
    width: 80px;
    height: 25px;
    border: none;
    background-color: gold;
    border-radius: 20px;
  }
  </style>
  